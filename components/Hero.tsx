import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="mt-[120px] md:mt-[197px] w-full bg-white">
      {/* 
        Flex container with gap-1 to create the whitespace. 
        bg-white ensures the gap creates a clean separation line.
      */}
      <div className="flex flex-col lg:flex-row min-h-[600px] lg:h-[calc(100vh-176px)] max-h-[900px] gap-1 bg-white">
        
        {/* LEFT SIDE: Hero Image & Text Area */}
        <div className="relative w-full lg:flex-1 bg-gray-900 overflow-hidden group h-[500px] lg:h-auto">
          {/* Background Image */}
          <img 
            alt="Industrial facility inauguration" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC61PXpZxOKywjlGmchQoyvj5kxgg74AzQNjsM6IlELg8WD9q08FA7iHgfgxPrbktiBFAYaAPpf4vj0SJSRdHT31rrDtKVgL7eI18czoXfNIzjCyUCgO9cDnjvEK4tI5nqXvzEzHpqdE0ljEyvtKhEa3a74QbVMgDkYuIRPaE-XbjlpGJ8mNwKNg8DayJN3fdXT9R-MQlt4xj5UGenHE1ZjK_nIm9ILPWm_f3pI6Wazz4P_5xt2LTjKqGly9KeXo5xQ91z7R087khNz" 
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8 drop-shadow-2xl max-w-4xl">
              METALLO Electronics <br/>
              Proudly Inaugurated Its 7th <br/>
              Manufacturing Facility
            </h1>
            
            <button className="w-fit group flex items-center gap-4 text-white text-sm font-bold uppercase tracking-wider hover:text-metallo-lime transition-colors">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-metallo-lime text-metallo-navy group-hover:bg-white group-hover:text-metallo-navy transition-all shadow-[0_0_20px_rgba(214,230,0,0.4)]">
                <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
              </span>
              <span className="border-b-2 border-transparent group-hover:border-metallo-lime pb-1 transition-all">Watch Film</span>
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-6 sm:left-12 lg:left-16 xl:left-24 flex gap-2">
               <div className="w-2 h-2 bg-metallo-lime rounded-full"></div>
               <div className="w-2 h-2 bg-white/50 rounded-full"></div>
               <div className="w-2 h-2 bg-white/50 rounded-full"></div>
               <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Quick RFQ Panel (Solid Background) */}
        {/* Fixed width on desktop to maintain distinct sidebar look */}
        <div className="relative w-full lg:w-[400px] xl:w-[450px] shrink-0 bg-metallo-navy text-white flex flex-col justify-center p-8 lg:px-8 lg:py-12">
          
          <div className="max-w-md mx-auto w-full">
             <div className="mb-8 border-l-4 border-metallo-lime pl-4">
                <h4 className="text-metallo-lime text-xs font-bold uppercase tracking-widest mb-2 font-oswald">Sourcing Made Simple</h4>
                <h2 className="text-3xl font-oswald font-bold text-white mb-2 leading-none">
                 Get a Quote <br/> in 24 Hours.
                </h2>
             </div>
             
             <p className="text-gray-400 text-sm mb-8 font-medium">
               Upload your BOQ/BOM or tell us your requirement directly.
             </p>

             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               
               {/* Category Dropdown */}
               <div className="relative group">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">Industry Vertical</label>
                 <div className="relative">
                   <select className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-sm focus:ring-1 focus:ring-metallo-lime focus:border-metallo-lime block p-3.5 appearance-none font-medium outline-none transition-all cursor-pointer hover:bg-white/10">
                     <option value="" className="bg-metallo-navy text-gray-400">Select Category</option>
                     <option value="steel" className="bg-metallo-navy">Steel</option>
                     <option value="wire" className="bg-metallo-navy">Wire & Cable</option>
                     <option value="tools" className="bg-metallo-navy">Tools</option>
                     <option value="welding" className="bg-metallo-navy">Welding</option>
                     <option value="casting" className="bg-metallo-navy">Die Casting</option>
                   </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-metallo-lime">
                     <span className="material-symbols-outlined">expand_more</span>
                   </div>
                 </div>
               </div>

               {/* Email Input */}
               <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">Contact Details</label>
                  <input 
                   type="email" 
                   placeholder="Corporate Email ID" 
                   className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-sm focus:ring-1 focus:ring-metallo-lime focus:border-metallo-lime block p-3.5 outline-none transition-all placeholder-gray-500"
                  />
               </div>

               {/* File Upload Button */}
               <div className="pt-2">
                 <button type="button" className="w-full flex items-center justify-between bg-white/5 border border-dashed border-gray-600 rounded-sm p-4 text-gray-400 hover:border-metallo-lime hover:text-metallo-lime hover:bg-white/10 transition-all text-sm font-bold group/upload">
                     <span>Upload Requirement File</span>
                     <span className="material-symbols-outlined text-xl group-hover/upload:rotate-12 transition-transform">attach_file</span>
                 </button>
               </div>

               {/* Main CTA */}
               <button type="submit" className="w-full bg-metallo-lime hover:bg-white hover:text-metallo-navy text-metallo-navy font-bold py-4 px-4 rounded-sm transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-between group shadow-lg mt-6">
                 <span>Request Pricing</span>
                 <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
               </button>

               {/* Micro-copy */}
               <div className="flex items-center gap-2 pt-4">
                 <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">100% ISO Compliant Manufacturing</span>
               </div>
             </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;