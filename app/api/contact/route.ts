import { NextRequest, NextResponse } from 'next/server';
import { sendEnquiryEmails, EnquiryPayload } from '@/lib/email';

export const runtime = 'nodejs';

const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const validatePhone = (p: string) => /^[+]?[\d\s\-()]{7,15}$/.test(p);

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    if (form.get('website')) {
      return NextResponse.json({ ok: true });
    }

    const lookingFor = String(form.get('lookingFor') || '').trim();
    const fullName = String(form.get('fullName') || '').trim();
    const companyName = String(form.get('companyName') || '').trim();
    const workEmail = String(form.get('workEmail') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const projectLocation = String(form.get('projectLocation') || '').trim();
    const message = String(form.get('message') || '').trim();

    if (!lookingFor) return NextResponse.json({ error: 'Please select what you are looking for.' }, { status: 400 });
    if (!fullName) return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
    if (!companyName) return NextResponse.json({ error: 'Company name is required.' }, { status: 400 });
    if (!validateEmail(workEmail)) return NextResponse.json({ error: 'Please enter a valid work email.' }, { status: 400 });
    if (!validatePhone(phone)) return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 });

    const payload: EnquiryPayload = { lookingFor, fullName, companyName, workEmail, phone, projectLocation, message };

    const file = form.get('bomFile');
    if (file instanceof File && file.size > 0) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        return NextResponse.json({ error: 'Only .pdf and .xls/.xlsx files are accepted.' }, { status: 400 });
      }
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: 'File size must be under 10MB.' }, { status: 400 });
      }
      const arrayBuffer = await file.arrayBuffer();
      payload.attachment = {
        filename: file.name,
        content: Buffer.from(arrayBuffer),
        contentType: file.type,
      };
    }

    await sendEnquiryEmails(payload);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed:', err);
    return NextResponse.json({ error: 'Failed to send enquiry. Please try again later.' }, { status: 500 });
  }
}
