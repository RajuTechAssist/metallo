import nodemailer from "nodemailer";

export interface EnquiryPayload {
  lookingFor: string;
  fullName: string;
  companyName: string;
  workEmail: string;
  phone: string;
  projectLocation?: string;
  message?: string;
  attachment?: {
    filename: string;
    content: Buffer;
    contentType: string;
  };
}

const LOOKING_FOR_LABELS: Record<string, string> = {
  "structural-steel": "Structural Steel / TMT",
  "wire-cable": "Wire & Cable (Industrial)",
  welding: "Welding Consumables",
  "power-tools": "Power Tools",
  "die-casting": "Die Casting Services",
  "tech-automation": "Tech / Automation",
  "complete-project": "Complete Project Supply (Multiple)",
};

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );

const getTransporter = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } =
    process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Missing SMTP_HOST, SMTP_PORT, SMTP_USER or SMTP_PASS environment variables.",
    );
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

const ownerEmailHtml = (p: EnquiryPayload) => {
  const category = LOOKING_FOR_LABELS[p.lookingFor] || p.lookingFor;
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;background:#F8FAFC;font-weight:600;color:#0F172A;width:180px;border-bottom:1px solid #e5e7eb;">${label}</td><td style="padding:8px 12px;color:#334155;border-bottom:1px solid #e5e7eb;">${escapeHtml(value || "—")}</td></tr>`;

  return `
  <div style="font-family:Inter,Arial,sans-serif;background:#F8FAFC;padding:32px;">
    <div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <div style="background:#0F172A;padding:24px 32px;">
        <h1 style="margin:0;color:#fff;font-size:20px;">New Project Enquiry</h1>
        <p style="margin:4px 0 0;color:#EAB308;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Metallo Industrial</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${row("Looking For", category)}
        ${row("Full Name", p.fullName)}
        ${row("Company", p.companyName)}
        ${row("Work Email", p.workEmail)}
        ${row("Phone", p.phone)}
        ${row("Project Location", p.projectLocation || "")}
      </table>
      ${p.message ? `<div style="padding:16px 32px;border-top:1px solid #e5e7eb;"><p style="margin:0 0 8px;font-weight:600;color:#0F172A;">Message</p><p style="margin:0;color:#334155;white-space:pre-wrap;">${escapeHtml(p.message)}</p></div>` : ""}
      ${p.attachment ? `<div style="padding:12px 32px;border-top:1px solid #e5e7eb;color:#475569;font-size:13px;">📎 Attachment: ${escapeHtml(p.attachment.filename)}</div>` : ""}
    </div>
  </div>`;
};
const supportEmail = process.env.SUPPORT_EMAIL ?? process.env.SMTP_USER;
const userEmailHtml = (p: EnquiryPayload) => `
  <div style="font-family:Inter,Arial,sans-serif;background:#F8FAFC;padding:32px;">
    <div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <div style="background:#0F172A;padding:32px;">
        <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">Thank you, ${escapeHtml(p.fullName.split(" ")[0])}.</h1>
        <p style="margin:8px 0 0;color:#EAB308;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">Enquiry Received</p>
      </div>
      <div style="padding:32px;color:#334155;font-size:15px;line-height:1.6;">
        <p style="margin:0 0 16px;">We have received your enquiry and our technical sales team is reviewing your requirements.</p>
        <p style="margin:0 0 16px;">A member of our team will reach out to you within <strong style="color:#0F172A;">24 hours</strong> with a tailored proposal and next steps.</p>
        <div style="background:#F8FAFC;border-left:3px solid #EAB308;padding:16px 20px;margin:24px 0;border-radius:4px;">
          <p style="margin:0;font-size:13px;color:#64748b;">In the meantime, if your enquiry is urgent, you can reach us directly at <a href="mailto:${supportEmail}" style="color:#0F172A;font-weight:600;">${supportEmail}</a>.</p>
        </div>
        <p style="margin:0;color:#64748b;font-size:14px;">Best regards,<br/><strong style="color:#0F172A;">The Metallo Team</strong></p>
      </div>
      <div style="background:#F8FAFC;padding:16px 32px;border-top:1px solid #e5e7eb;text-align:center;">
        <p style="margin:0;font-size:11px;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;">Metallo Industrial · IS/ISO Certified</p>
      </div>
    </div>
  </div>`;

const transporter = getTransporter();
transporter
  .verify()
  .then(() => {
    console.log("SMTP server is ready");
  })
  .catch((err) => {
    console.error("SMTP configuration error:", err);
  });
export async function sendEnquiryEmails(payload: EnquiryPayload) {
  const fromAddress = `Metallo Industrial <${process.env.SMTP_USER}>`;
  const ownerTo = process.env.OWNER_EMAIL || process.env.SMTP_USER!;
  const attachments = payload.attachment
    ? [
        {
          filename: payload.attachment.filename,
          content: payload.attachment.content,
          contentType: payload.attachment.contentType,
        },
      ]
    : undefined;

  await transporter.sendMail({
    from: fromAddress,
    to: ownerTo,
    replyTo: payload.workEmail,
    subject: `New Enquiry: ${payload.companyName} — ${LOOKING_FOR_LABELS[payload.lookingFor] || payload.lookingFor}`,
    html: ownerEmailHtml(payload),
    attachments,
  });

  await transporter.sendMail({
    from: fromAddress,
    to: payload.workEmail,
    subject: "We received your enquiry — Metallo Industrial",
    html: userEmailHtml(payload),
  });
}
