import React, { useState, useRef, useCallback, useEffect } from 'react';

// Simple math CAPTCHA for form security
const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b} = ?`, answer: a + b };
};

// Honeypot + rate limiting + CAPTCHA security
const RATE_LIMIT_MS = 30000; // 30 seconds between submissions

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    lookingFor: '',
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    projectLocation: '',
    message: '',
  });
  const [bomFile, setBomFile] = useState<File | null>(null);
  const [honeypot, setHoneypot] = useState(''); // hidden field for bots
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const lastSubmitRef = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Timestamp tracking for bot detection (bots fill forms instantly)
  const formLoadTime = useRef(Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowed = ['application/pdf', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      if (!allowed.includes(file.type)) {
        setErrorMsg('Only .pdf and .xls/.xlsx files are accepted.');
        setBomFile(null);
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('File size must be under 10MB.');
        setBomFile(null);
        return;
      }
      setErrorMsg('');
      setBomFile(file);
    }
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[+]?[\d\s\-()]{7,15}$/.test(phone);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Honeypot check — bots fill hidden fields
    if (honeypot) {
      setSubmitStatus('success'); // fake success for bots
      return;
    }

    // Time-based bot detection (form filled in under 3 seconds)
    if (Date.now() - formLoadTime.current < 3000) {
      setSubmitStatus('success');
      return;
    }

    // Rate limiting
    if (Date.now() - lastSubmitRef.current < RATE_LIMIT_MS) {
      setErrorMsg('Please wait before submitting again.');
      return;
    }

    // CAPTCHA validation
    if (parseInt(captchaInput) !== captcha.answer) {
      setErrorMsg('Incorrect security answer. Please try again.');
      setCaptcha(generateCaptcha());
      setCaptchaInput('');
      return;
    }

    // Field validation
    if (!formData.lookingFor) { setErrorMsg('Please select what you are looking for.'); return; }
    if (!formData.fullName.trim()) { setErrorMsg('Full name is required.'); return; }
    if (!formData.companyName.trim()) { setErrorMsg('Company name is required.'); return; }
    if (!validateEmail(formData.workEmail)) { setErrorMsg('Please enter a valid work email.'); return; }
    if (!validatePhone(formData.phone)) { setErrorMsg('Please enter a valid phone number.'); return; }

    setSubmitStatus('submitting');
    lastSubmitRef.current = Date.now();

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ lookingFor: '', fullName: '', companyName: '', workEmail: '', phone: '', projectLocation: '', message: '' });
      setBomFile(null);
      setCaptchaInput('');
      setCaptcha(generateCaptcha());
    }, 1500);
  }, [formData, honeypot, captcha, captchaInput]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqs = [
    {
      q: 'Do you supply to small residential projects?',
      a: 'No, Metallo is a strictly B2B industrial partner. We specialize in bulk supplies for Infrastructure, EPC, and Manufacturing projects.',
    },
    {
      q: 'What is your Minimum Order Quantity (MOQ)?',
      a: 'MOQs vary by vertical. For Cables, it is typically 100m. For Steel, it is by tonnage. Please submit an enquiry for specific details.',
    },
    {
      q: 'Do you provide Mill Test Certificates (MTC)?',
      a: 'Yes. Every dispatch of Steel, Cable, or Welding material is accompanied by a manufacturer\'s Test Certificate confirming IS/ISO compliance.',
    },
  ];

  return (
    <div className="mt-[92px] md:mt-[197px] w-full bg-white overflow-x-hidden">

      {/* SECTION 1: HERO BANNER */}
      <section className="relative bg-metallo-navy py-20 md:py-28 overflow-hidden">
        {/* Blueprint pattern background */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-10 right-10 w-64 h-64 border border-white/10 rounded-full hidden lg:block"></div>
        <div className="absolute top-20 right-20 w-40 h-40 border border-dashed border-metallo-lime/20 rounded-full hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-oswald font-bold text-white mb-6 leading-tight">
            Let's Build Together.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-serif italic">
            Have a project in mind? Our engineering team is ready to assist with your Bill of Materials (BOM).
          </p>
        </div>
      </section>

      {/* SECTION 2: ROUTING GRID */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-metallo-navy mb-3">How can we help you today?</h2>
            <div className="w-16 h-1 bg-metallo-lime mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: RFQ */}
            <div
              onClick={scrollToForm}
              className="group bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-xl hover:border-metallo-lime transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-metallo-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="w-14 h-14 bg-metallo-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-lime transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-metallo-navy">description</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">For Customers</p>
              <h3 className="text-xl font-bold font-oswald text-metallo-navy mb-3">Request a Quote</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Looking for Steel, Cables, or Tools for your project? Get a factory-direct proposal.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-metallo-navy group-hover:text-metallo-lime-hover transition-colors">
                Fill Enquiry Form
                <span className="material-symbols-outlined text-lg ml-1 group-hover:translate-y-1 transition-transform">arrow_downward</span>
              </span>
            </div>

            {/* Card 2: Vendors */}
            <a
              href="mailto:procurement@metallo.com"
              className="group bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-xl hover:border-metallo-lime transition-all duration-300 cursor-pointer relative overflow-hidden block"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-metallo-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="w-14 h-14 bg-metallo-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-lime transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-metallo-navy">handshake</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">For Vendors</p>
              <h3 className="text-xl font-bold font-oswald text-metallo-navy mb-3">Become a Partner</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Supply raw materials or logistics services to the Metallo ecosystem.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-metallo-navy group-hover:text-metallo-lime-hover transition-colors">
                procurement@metallo.com
                <span className="material-symbols-outlined text-lg ml-1">arrow_outward</span>
              </span>
            </a>

            {/* Card 3: Careers */}
            <a
              href="mailto:hr@metallo.com"
              className="group bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-xl hover:border-metallo-lime transition-all duration-300 cursor-pointer relative overflow-hidden block"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-metallo-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="w-14 h-14 bg-metallo-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-lime transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-metallo-navy">work</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">For Careers</p>
              <h3 className="text-xl font-bold font-oswald text-metallo-navy mb-3">Join the Team</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Build your career in India's fastest-growing manufacturing platform.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-metallo-navy group-hover:text-metallo-lime-hover transition-colors">
                hr@metallo.com
                <span className="material-symbols-outlined text-lg ml-1">arrow_outward</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: INQUIRY FORM */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-oswald font-bold text-metallo-navy mb-4">Start Your Project Enquiry</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Fill the details below and our technical sales team will contact you within <strong className="text-metallo-navy">24 hours</strong>.
              </p>
              <div className="w-16 h-1 bg-metallo-lime mb-10"></div>

              {/* Trust Signals */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-metallo-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-metallo-navy">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-metallo-navy text-sm">100% Confidential</h4>
                    <p className="text-xs text-gray-400">Your data is encrypted and never shared with third parties.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-metallo-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-metallo-navy">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-metallo-navy text-sm">24-Hour Response</h4>
                    <p className="text-xs text-gray-400">Our technical team reviews every enquiry personally.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-metallo-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-metallo-navy">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-metallo-navy text-sm">IS/ISO Certified Products</h4>
                    <p className="text-xs text-gray-400">Every quote comes with complete certification details.</p>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Or reach us directly</p>
                <div className="space-y-3">
                  <a href="tel:+911234567890" className="flex items-center gap-3 text-sm text-gray-600 hover:text-metallo-navy transition-colors">
                    <span className="material-symbols-outlined text-lg">call</span>
                    +91-XXXXXXXXXX
                  </a>
                  <a href="mailto:sales@metallo.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-metallo-navy transition-colors">
                    <span className="material-symbols-outlined text-lg">mail</span>
                    sales@metallo.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-12 text-center">
                  <span className="material-symbols-outlined text-6xl text-green-500 mb-4 block">check_circle</span>
                  <h3 className="text-2xl font-bold font-oswald text-metallo-navy mb-2">Enquiry Submitted!</h3>
                  <p className="text-gray-500 mb-6">Our technical sales team will review your requirements and contact you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitStatus('idle'); formLoadTime.current = Date.now(); }}
                    className="text-sm font-bold text-metallo-navy hover:text-metallo-lime-hover transition-colors"
                  >
                    Submit Another Enquiry →
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="bg-gray-50 border border-gray-100 rounded-lg p-8 md:p-10 space-y-6"
                  noValidate
                >
                  {/* Honeypot — hidden from humans, bots will fill it */}
                  <div className="absolute" style={{ left: '-9999px', position: 'absolute' }} aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Looking For */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">I am looking for *</label>
                    <select
                      name="lookingFor"
                      value={formData.lookingFor}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-sm text-metallo-navy focus:outline-none focus:ring-2 focus:ring-metallo-lime focus:border-transparent transition-all cursor-pointer"
                      required
                    >
                      <option value="">Select a category...</option>
                      <option value="structural-steel">Structural Steel / TMT</option>
                      <option value="wire-cable">Wire & Cable (Industrial)</option>
                      <option value="welding">Welding Consumables</option>
                      <option value="power-tools">Power Tools</option>
                      <option value="die-casting">Die Casting Services</option>
                      <option value="tech-automation">Tech / Automation</option>
                      <option value="complete-project">Complete Project Supply (Multiple)</option>
                    </select>
                  </div>

                  {/* Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-metallo-lime focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-metallo-lime focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Work Email *</label>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-metallo-lime focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91-XXXXXXXXXX"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-metallo-lime focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Project Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Project Location</label>
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder='e.g., "Gujarat Solar Park"'
                      className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-metallo-lime focus:border-transparent transition-all"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Upload BOM / BOQ (Optional)</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.xls,.xlsx"
                        onChange={handleFileChange}
                        className="w-full px-4 py-3 border border-dashed border-gray-300 rounded-md bg-white text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-wider file:bg-metallo-navy file:text-white file:cursor-pointer hover:file:bg-metallo-navy/80 cursor-pointer"
                      />
                      {bomFile && (
                        <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">attach_file</span>
                          {bomFile.name}
                        </p>
                      )}
                      <p className="text-[10px] text-gray-400 mt-1">Accepts .pdf, .xls, .xlsx — Max 10MB</p>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project requirements, quantities, and timeline..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-metallo-lime focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Security: Math CAPTCHA */}
                  <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center gap-4">
                    <span className="material-symbols-outlined text-metallo-navy">shield</span>
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Security Check</p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-metallo-navy whitespace-nowrap">{captcha.question}</span>
                        <input
                          type="text"
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          placeholder="Answer"
                          className="w-20 px-3 py-2 border border-gray-200 rounded-md text-sm text-center focus:outline-none focus:ring-2 focus:ring-metallo-lime focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => { setCaptcha(generateCaptcha()); setCaptchaInput(''); }}
                      className="text-gray-400 hover:text-metallo-navy transition-colors"
                      title="Refresh CAPTCHA"
                    >
                      <span className="material-symbols-outlined">refresh</span>
                    </button>
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-md flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">error</span>
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full py-4 bg-metallo-navy text-white font-bold font-oswald uppercase tracking-widest text-lg hover:bg-metallo-lime hover:text-metallo-navy transition-all duration-300 rounded-md shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitStatus === 'submitting' ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-lg">send</span>
                        Request Pricing
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-gray-400 text-center">
                    By submitting, you agree to Metallo's Privacy Policy. We will never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MANUFACTURING HUBS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-metallo-navy mb-3">Visit Our Facilities.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Strategic manufacturing hubs positioned to serve India's core industrial corridors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location 1: Noida */}
            <div className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Map placeholder */}
              <div className="h-48 bg-metallo-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-5xl text-metallo-lime mb-2 block">location_on</span>
                    <span className="text-white font-oswald font-bold text-xl">NOIDA</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start gap-2 mb-1">
                  <span className="material-symbols-outlined text-metallo-lime text-lg shrink-0 mt-0.5">factory</span>
                  <h3 className="text-lg font-bold font-oswald text-metallo-navy">Corporate & Manufacturing Hub</h3>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 ml-7">Wire & Cable, Tech Products</p>

                <div className="space-y-3 ml-7">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-gray-400 text-lg shrink-0">location_on</span>
                    <p className="text-sm text-gray-600">[Insert Full Noida Address Here]</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400 text-lg shrink-0">call</span>
                    <a href="tel:+911234567890" className="text-sm text-gray-600 hover:text-metallo-navy transition-colors">+91-XXXXXXXXXX</a>
                  </div>
                </div>

                <div className="mt-6 ml-7">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-metallo-navy hover:text-metallo-lime-hover transition-colors border border-gray-200 px-4 py-2 rounded-md hover:border-metallo-navy"
                  >
                    View on Google Maps
                    <span className="material-symbols-outlined text-sm ml-1">arrow_outward</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location 2: Gurgaon */}
            <div className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-metallo-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-5xl text-metallo-lime mb-2 block">location_on</span>
                    <span className="text-white font-oswald font-bold text-xl">GURGAON</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start gap-2 mb-1">
                  <span className="material-symbols-outlined text-metallo-lime text-lg shrink-0 mt-0.5">precision_manufacturing</span>
                  <h3 className="text-lg font-bold font-oswald text-metallo-navy">Heavy Engineering Unit</h3>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 ml-7">Structural Steel, Die Casting</p>

                <div className="space-y-3 ml-7">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-gray-400 text-lg shrink-0">location_on</span>
                    <p className="text-sm text-gray-600">[Insert Full Gurgaon Address Here]</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400 text-lg shrink-0">call</span>
                    <a href="tel:+911234567891" className="text-sm text-gray-600 hover:text-metallo-navy transition-colors">+91-XXXXXXXXXX</a>
                  </div>
                </div>

                <div className="mt-6 ml-7">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-metallo-navy hover:text-metallo-lime-hover transition-colors border border-gray-200 px-4 py-2 rounded-md hover:border-metallo-navy"
                  >
                    View on Google Maps
                    <span className="material-symbols-outlined text-sm ml-1">arrow_outward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-metallo-navy mb-3">Common Questions</h2>
            <p className="text-gray-500">Quick answers about working with Metallo.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm md:text-base font-bold text-metallo-navy pr-4">{faq.q}</span>
                  <span
                    className="material-symbols-outlined text-gray-400 shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? '200px' : '0px', opacity: openFaq === i ? 1 : 0 }}
                >
                  <p className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
