'use client';

import React, { useState, useEffect, useRef } from 'react';

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1565515267426-9050a631ada0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Industrial facility inauguration"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Advanced manufacturing line"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1997&q=80",
    alt: "Steel production sparks"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    alt: "Precision engineering"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // -- Form State --
  const [formData, setFormData] = useState({ industry: '', email: '' });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  
  // -- Security State --
  const [honeypot, setHoneypot] = useState(''); // Hidden field for bots
  const formLoadTime = useRef(Date.now()); // Time-based bot detection

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (selected.size > 10 * 1024 * 1024) {
        setErrorMsg('File too large (max 10MB)');
        return;
      }
      setFile(selected);
      setErrorMsg('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit clicked"); // Debug
    
    // 1. Honeypot Check (Bots fill hidden fields)
    if (honeypot) {
      console.log("Bot detected: Honeypot filled");
      return; 
    }

    // 2. Time-based Bot Check (Too fast = bot)
    if (Date.now() - formLoadTime.current < 2000) {
      console.log("Bot detected: Too fast");
      return; 
    }

    // 3. Validation
    if (!formData.industry) {
      setErrorMsg('Please select an industry');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrorMsg('Valid corporate email required');
      return;
    }

    setErrorMsg('');
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ industry: '', email: '' });
      setFile(null);
      // Reset success message after 5s
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="mt-[92px] md:mt-[175px] w-full bg-white">
      {/* 
        Flex container with gap-1 to create the whitespace. 
        bg-white ensures the gap creates a clean separation line.
      */}
      <div className="flex flex-col lg:flex-row min-h-[600px] lg:h-[calc(100vh-176px)] max-h-[900px] gap-1 bg-white">
        
        {/* LEFT SIDE: Hero Image & Text Area */}
        <div className="relative w-full lg:flex-1 bg-gray-900 overflow-hidden group h-[650px] sm:h-[550px] lg:h-auto">
          {/* Background Images - Crossfade Carousel */}
          {SLIDES.map((slide, index) => (
            <img 
              key={slide.id}
              alt={slide.alt} 
              className={`absolute inset-0 z-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              src={slide.image} 
            />
          ))}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8 drop-shadow-2xl max-w-4xl">
              METALLO Electronics <br/>
              Proudly Inaugurated Its 7th <br/>
              Manufacturing Facility
            </h1>
            
            <button className="w-fit group flex items-center gap-4 text-white text-sm font-bold uppercase tracking-wider hover:text-metallo-gold transition-colors">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-metallo-navy group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all shadow-md">
                <span className="material-symbols-outlined text-3xl ml-1 text-metallo-gold group-hover:text-white">play_arrow</span>
              </span>
              <span className="border-b-2 border-transparent group-hover:border-metallo-gold pb-1 transition-all">Watch Film</span>
            </button>

            {/* Carousel Indicators - Right on mobile/tablet, Left on desktop */}
            <div className="absolute bottom-8 right-6 lg:right-auto lg:left-16 xl:left-24 flex gap-2 z-30">
               {SLIDES.map((slide, index) => (
                 <button
                   key={slide.id}
                   onClick={() => setCurrentSlide(index)}
                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
                     currentSlide === index ? 'bg-metallo-gold w-6' : 'bg-white/50 hover:bg-white'
                   }`}
                   aria-label={`Go to slide ${index + 1}`}
                 />
               ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Quick RFQ Panel (Solid Background) */}
        {/* Fixed width on desktop to maintain distinct sidebar look */}
        <div className="relative w-full lg:w-[400px] xl:w-[450px] shrink-0 bg-metallo-navy text-white flex flex-col justify-center p-8 lg:px-8 lg:py-12">
          
          <div className="max-w-md mx-auto w-full">
             <div className="mb-8 border-l-4 border-metallo-gold pl-4">
                <h4 className="text-metallo-gold text-xs font-bold uppercase tracking-widest mb-2 font-heading">Sourcing Made Simple</h4>
                <h2 className="text-3xl font-heading font-bold text-white mb-2 leading-none">
                 Get a Quote <br/> in 24 Hours.
                </h2>
             </div>
             
             <p className="text-gray-400 text-sm mb-8 font-medium">
               Upload your BOQ/BOM or tell us your requirement directly.
             </p>

             {status === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 text-center animate-fade-in">
                  <span className="material-symbols-outlined text-green-500 text-5xl mb-4">check_circle</span>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">Quote Requested!</h3>
                  <p className="text-gray-400 text-sm">We'll contact <span className="text-white">{formData.email}</span> shortly.</p>
                </div>
             ) : (
             <form className="space-y-4" onSubmit={handleSubmit} noValidate>
               
               {/* Hidden Honeypot Field */}
               <input 
                 type="text" 
                 name="website_url" 
                 style={{ display: 'none' }} 
                 tabIndex={-1} 
                 autoComplete="off"
                 value={honeypot}
                 onChange={(e) => setHoneypot(e.target.value)}
               />

               {/* Category Dropdown */}
               <div className="relative group">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">Industry Vertical *</label>
                 <div className="relative">
                   <select 
                     value={formData.industry}
                     onChange={(e) => {
                       setFormData({ ...formData, industry: e.target.value });
                       setErrorMsg('');
                     }}
                     className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-sm focus:ring-1 focus:ring-metallo-gold focus:border-metallo-gold block p-3.5 appearance-none font-medium outline-none transition-all cursor-pointer hover:bg-white/10"
                   >
                     <option value="" className="bg-metallo-navy text-gray-400">Select Category</option>
                     <option value="steel" className="bg-metallo-navy">Steel</option>
                     <option value="wire" className="bg-metallo-navy">Wire & Cable</option>
                     <option value="tools" className="bg-metallo-navy">Tools</option>
                     <option value="welding" className="bg-metallo-navy">Welding</option>
                     <option value="casting" className="bg-metallo-navy">Die Casting</option>
                   </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-metallo-gold">
                     <span className="material-symbols-outlined">expand_more</span>
                   </div>
                 </div>
               </div>

               {/* Email Input */}
               <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">Contact Details *</label>
                  <input 
                   type="email" 
                   value={formData.email}
                   onChange={(e) => {
                     setFormData({ ...formData, email: e.target.value });
                     setErrorMsg('');
                   }}
                   placeholder="Corporate Email ID" 
                   className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-sm focus:ring-1 focus:ring-metallo-gold focus:border-metallo-gold block p-3.5 outline-none transition-all placeholder-gray-500"
                  />
               </div>

               {/* File Upload Button */}
               <div className="pt-2">
                 <div className="relative">
                   <input 
                     type="file" 
                     id="hero-file-upload"
                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                     onChange={(e) => handleFileChange(e)}
                     accept=".pdf,.doc,.docx,.xls,.xlsx"
                   />
                   <button type="button" className={`w-full flex items-center justify-between bg-white/5 border border-dashed ${file ? 'border-metallo-gold text-metallo-gold' : 'border-gray-600 text-gray-400'} rounded-sm p-4 hover:border-metallo-gold hover:text-metallo-gold hover:bg-white/10 transition-all text-sm font-bold group/upload`}>
                       <span className="truncate pr-2">{file ? file.name : 'Upload Requirement File'}</span>
                       <span className={`material-symbols-outlined text-xl transition-transform ${file ? 'text-metallo-gold' : 'group-hover/upload:rotate-12'}`}>
                         {file ? 'check' : 'attach_file'}
                       </span>
                   </button>
                 </div>
                 {/* Error Message Display */}
                 {errorMsg && (
                   <div className="text-red-400 text-xs mt-2 flex items-center gap-1 animate-pulse">
                     <span className="material-symbols-outlined text-sm">error</span>
                     {errorMsg}
                   </div>
                 )}
               </div>

               {/* Main CTA */}
               <button 
                 type="submit" 
                 disabled={status === 'submitting'}
                 className="w-full bg-metallo-gold hover:bg-white hover:text-metallo-navy text-metallo-navy font-bold py-4 px-4 rounded-sm transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-between group shadow-lg mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
               >
                 {status === 'submitting' ? (
                   <span className="flex items-center gap-2">
                     <span className="material-symbols-outlined animate-spin">progress_activity</span>
                     Processing...
                   </span>
                 ) : (
                   <>
                     <span>Request Pricing</span>
                     <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                   </>
                 )}
               </button>

               {/* Micro-copy */}
               <div className="flex items-center gap-2 pt-4">
                 <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">100% ISO Compliant Manufacturing</span>
               </div>
             </form>
             )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;