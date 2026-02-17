import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const convergingItems = [
  { deg: 0, icon: 'foundation', label: 'Steel' },
  { deg: 60, icon: 'electrical_services', label: 'Cables' },
  { deg: 120, icon: 'whatshot', label: 'Welding' },
  { deg: 180, icon: 'construction', label: 'Tools' },
  { deg: 240, icon: 'precision_manufacturing', label: 'Precision' },
  { deg: 300, icon: 'smart_toy', label: 'Automation' },
];

const spectrumVerticals = [
  {
    id: 'steel',
    name: 'Metallo Steel',
    cert: 'IS:2062 Certified',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZmT_s2B9dm9-HBV823d6vMwXy9qsBMMQ3nGKJIKyS5fwDMVAFQfixx0y-sygCvmnG896hpbtiT4P0lI2r8wkCf2rvSOk6ngn7p0c0saTngyDwhMAJzTZ-oEfN69XK8hppDwDyF7vllPZmXYfvr1eo7o9qkdYxatryE1B-qzerwAsDc1GC0HLRmt55olsDJKVaIX-cEz-tNZCRpo8bR3tbk6Pq2kql-1SxTkbOZSj2TmdmFqPcWsv5yo3-v2lBhvJGy391-zatHuy8'
  },
  {
    id: 'cable',
    name: 'Metallo Power',
    cert: '99.9% Pure Copper',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDZjVbwQlrHRd6tRUogRI_cXM6vV-f54c71VgTeceUIEGedcTl_LKDQV4qw1XdT_Fxvt4M_BE3bKJ53rI3IT3bYIZvEWUdLBMuiGCmNWg5JRcHUSrwUPwx4yPdCESaoIM-Pq05ife-3USdw9u4cZVo_Y2hN00koG3kCxK7jMvgzYjstw7QcHz_Ygzdz5nM46pQlvW6L-PzIxgsfTwf9DkQ3C98THO019yg5QRv9VVh433yNPzhRril8pV0_BG9dlP4bgvfYyGYXSYw'
  },
  {
    id: 'welding',
    name: 'Metallo Join',
    cert: 'AWS Standard Alloys',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTKZDAZ60J7WpIg7ouo1Jps0Oz0Z5zjXbRSoOqY_dxldAvPOLnuIUxrDX5Fvtqqniw2pTiHM96nzYOy-r3pOyo1SG_bOt73KZFtrtYOt9Slreqz4wWZwqgFRd9pyq0dPWIb7fWhnh6N7vCiGR1GSv7tRoRojZXrnDF3BfAKEhiZsLELM-MBsNpyeU1nETZOpedd5Wabsgw3aPWytCDpfy0mpocjz0e2gtvGrGOWLB-oMLv7ADKp5sobK1tYD-cMdvEENRr22ZwSSJ-'
  },
  {
    id: 'tools',
    name: 'Metallo Tools',
    cert: 'Heavy Duty Precision',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Bz4tUWnHbL1aZBaCZsnkfKCLZdFuqi4f8jGamOr53cDK4Qc2_T5RGGPBpJamlx4NFiBwQVVCuLrYT4XsLB8LJmBo0peB4I0P0pkFe3r9RNiq8to5H4wMzD-jvpey1495Rk7q6tivph2aPiZre2fF6ytxuWSwy8f6n15hAbaGXke_mmjPx6YaM1ORY8hRQvnYb7ey-z9RyEtL-9qO9p2P4r8GzP-bhloXjkYnK8gINFDmRZ9j2kiPcawcl_nyDVYgJPjjk_wpzChU'
  },
  {
    id: 'die-casting',
    name: 'Metallo Cast',
    cert: 'High-Pressure Molding',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtBtj4Jf7u_tz6kK5SdwAJWl9rKn31fEry9IW7eoAA4QwOwaLOYxwhoBwCB-c7oEy5nAp9sFCJzggt6AsvurszNzL44FAv3HZirh-pQp8_FxH8ffcOt2nlyOnaMxeebdk_V2Tll0IFOHpAsZ4dAJKDTswFf5QfxtixK4o_SgyfsWTwEa-ti5tiVxBnUzXiaoyVTv47YLnnYjxjQtrmiwDHdeloHfhbDsqhqAUS7B9wgSpVg9jrn_NoAoIHaT9g6YKCc67jwJCU9jH_'
  },
  {
    id: 'tech',
    name: 'Metallo Tech',
    cert: 'Industry 4.0 Ready',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKs8siiRfxuZGeiEFtUE_A5slo4Zb--Ajw56FSrLeWu0wPS0jO7N_lxWhfBV3l_TolzB4tdvCqejo8lIP_8e1ftTiEoVfcipEdiStFi3PV2oxt5LqkcCQBsLGA6R7TjsBdyDnBEQGYQFctOBCWnHkVh_1h0GsK9sYpDT4jGUFUbgPaUtNsQPsNQ9RMDMg4OJk6nUH436NqG2SkVUFWy74kmIQ8gTKezMor_vxRLgXBsu-DbzVwm6Saf4uRNOhtyNSpPIlhNsxcd1UK'
  },
];

const ConvergingNode: React.FC<{ deg: number; icon: string; label: string }> = ({ deg, icon, label }) => {
  const [hovered, setHovered] = useState(false);

  // Calculate the final position of each node on the circle
  const radius = 50; // percentage from center
  const rad = (deg * Math.PI) / 180;
  const x = 50 + radius * Math.cos(rad - Math.PI); // left side origin
  const y = 50 + radius * Math.sin(rad - Math.PI);

  return (
    <>
      {/* Line from center to node */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `rotate(${deg}deg)` }}
      >
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-300/40 to-metallo-navy/60 absolute" style={{ width: '50%', right: '50%', transformOrigin: 'right center' }}></div>
      </div>

      {/* Icon node - positioned absolutely, not rotated so tooltip stays upright */}
      <div
        className="absolute z-30"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="p-2.5 rounded-full shadow-md border transition-all duration-300"
          style={{
            backgroundColor: hovered ? '#071331' : '#ffffff',
            borderColor: hovered ? '#071331' : '#e5e7eb',
            cursor: 'pointer',
          }}
        >
          <span
            className="material-symbols-outlined text-xl block transition-colors duration-300"
            style={{ color: hovered ? '#ffffff' : '#071331', cursor: 'pointer' }}
          >
            {icon}
          </span>
        </div>
        {/* Tooltip */}
        <div
          className="absolute left-1/2 mt-2 transition-all duration-300 pointer-events-none"
          style={{
            transform: 'translateX(-50%)',
            opacity: hovered ? 1 : 0,
          }}
        >
          <span className="bg-metallo-navy text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded whitespace-nowrap shadow-lg">
            {label}
          </span>
        </div>
      </div>
    </>
  );
};

const WhyMetallo: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-[120px] md:mt-[197px] w-full bg-white overflow-x-hidden">
      
      {/* SECTION 0: THE SPECTRUM HERO */}
      <section className="relative w-full h-[80vh] min-h-[500px] bg-gray-900 overflow-hidden flex flex-col md:flex-row">
        {/* Background Grid of Images */}
        <div className="absolute inset-0 w-full h-full flex flex-wrap md:flex-nowrap">
           {spectrumVerticals.map((item, index) => (
             <div 
               key={item.id}
               className="relative w-1/2 h-1/3 md:w-1/6 md:h-full border-r border-b border-gray-800/50 group"
               onMouseEnter={() => setHoveredIndex(index)}
               onMouseLeave={() => setHoveredIndex(null)}
             >
                {/* Image */}
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${hoveredIndex === index ? 'scale-110 opacity-100 grayscale-0' : 'scale-100 opacity-60 grayscale'}`}
                />
                
                {/* Gradient Overlay per tile */}
                <div className={`absolute inset-0 bg-metallo-navy/40 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}></div>

                {/* Mobile Label (Hidden on Desktop as we have central overlay) */}
                <div className="absolute bottom-2 left-2 md:hidden">
                   <p className="text-[10px] font-bold text-white uppercase tracking-wider bg-black/50 px-1">{item.name}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Central Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-20 mix-blend-plus-lighter">
           <div className="transition-all duration-300 transform">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold text-white mb-2 tracking-tight drop-shadow-2xl">
                 {hoveredIndex !== null ? spectrumVerticals[hoveredIndex].name.toUpperCase() : "MAXIMIZE EFFICIENCY."}
              </h1>
              <h2 className="text-xl md:text-3xl font-oswald font-medium text-metallo-lime tracking-widest mb-6 uppercase drop-shadow-lg">
                 {hoveredIndex !== null ? spectrumVerticals[hoveredIndex].cert : "One Platform. Six Verticals. Zero Friction."}
              </h2>
              <div className={`max-w-2xl mx-auto transition-opacity duration-300 ${hoveredIndex !== null ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
                  <p className="text-lg md:text-xl text-gray-200 font-medium">
                    Eliminate the chaos of multi-vendor procurement. Get Steel, Power, and Tools delivered in perfect sync.
                  </p>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 1: HERO STATEMENT */}
      <section className="bg-white text-metallo-navy py-20 md:py-28 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 transform -skew-x-12 translate-x-1/4 z-0 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <div>
              <span className="text-metallo-navy font-bold uppercase tracking-[0.2em] mb-4 block text-sm font-oswald">The Integrated Advantage</span>
              <h1 className="text-4xl md:text-6xl font-oswald font-bold mb-6 leading-tight">
                Don't Just Buy Materials. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-metallo-navy to-gray-500">Upgrade Your Supply Chain.</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-serif text-gray-500 mb-8 italic">
                The traditional way of sourcing is broken. We fixed it.
              </h2>
              <div className="text-gray-600 text-lg space-y-4 font-sans leading-relaxed">
                <p>
                  In the industrial world, procurement is often a bottleneck. You chase steel from one vendor, cables from another, and tools from a third. Inconsistent quality, delayed shipments, and opaque pricing slow you down.
                </p>
                <p className="font-bold text-metallo-navy">Metallo offers a better way.</p>
                <p>
                  We are India’s first Integrated Manufacturing Platform that unifies the critical pillars of infrastructure—Steel, Power, and Joining—into a single, seamless workflow. We don't just sell products; we sell <span className="text-metallo-navy font-semibold">Velocity, Visibility, and Value</span>.
                </p>
              </div>
            </div>

            {/* Right Graphic - Arrows Converging */}
            <div className="relative h-[400px] flex items-center justify-center">
               <div className="relative w-full max-w-md aspect-square">
                  {/* Central Hub */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                     <div className="w-32 h-32 bg-metallo-lime rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(214,230,0,0.3)] animate-pulse p-5">
                        <img src="/logo-icon.svg" alt="Metallo" className="w-full h-full object-contain animate-spin-slow" />
                     </div>
                  </div>

                  {/* Converging Arrows */}
                  {convergingItems.map((item, i) => (
                    <ConvergingNode key={i} deg={item.deg} icon={item.icon} label={item.label} />
                  ))}
                  
                  {/* Orbit Rings */}
                  <div className="absolute inset-0 border border-dashed border-gray-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-10 border border-gray-100 rounded-full"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OLD WAY VS METALLO WAY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-oswald font-bold text-metallo-navy mb-4">Old Way vs. Metallo Way</h2>
            <p className="text-gray-600">See the difference integration makes to your project timeline.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center z-10 font-black text-xl text-gray-300 shadow-xl hidden lg:flex">
              VS
            </div>

            {/* Old Way Card */}
            <div className="bg-white p-8 md:p-12 rounded-lg border-l-4 border-red-500 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <span className="material-symbols-outlined text-9xl text-red-900">warning</span>
               </div>
               <h3 className="text-2xl font-bold font-oswald text-gray-800 mb-8 border-b border-gray-100 pb-4">The Traditional Supply Chain</h3>
               <ul className="space-y-8">
                 <li className="flex gap-4">
                   <span className="material-symbols-outlined text-red-500 shrink-0">close</span>
                   <div>
                     <strong className="block text-gray-800 font-bold mb-1">Fragmented Sourcing</strong>
                     <p className="text-sm text-gray-500">You manage 10+ POs, 10+ invoices, and 10+ logistics partners for one project.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <span className="material-symbols-outlined text-red-500 shrink-0">close</span>
                   <div>
                     <strong className="block text-gray-800 font-bold mb-1">Trader Margins</strong>
                     <p className="text-sm text-gray-500">You pay multiple layers of middlemen commissions.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <span className="material-symbols-outlined text-red-500 shrink-0">close</span>
                   <div>
                     <strong className="block text-gray-800 font-bold mb-1">Opaque Quality</strong>
                     <p className="text-sm text-gray-500">"Equivalent" brands often mean compromised specs.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <span className="material-symbols-outlined text-red-500 shrink-0">close</span>
                   <div>
                     <strong className="block text-gray-800 font-bold mb-1">Reactive Logistics</strong>
                     <p className="text-sm text-gray-500">"Material is on the way" (but it hasn't left the warehouse).</p>
                   </div>
                 </li>
               </ul>
            </div>

            {/* Metallo Way Card */}
            <div className="bg-metallo-navy p-8 md:p-12 rounded-lg border-l-4 border-metallo-lime shadow-2xl relative overflow-hidden transform lg:-translate-y-4">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <span className="material-symbols-outlined text-9xl text-metallo-lime">check_circle</span>
               </div>
               <h3 className="text-2xl font-bold font-oswald text-white mb-8 border-b border-white/10 pb-4">The Metallo Ecosystem</h3>
               <ul className="space-y-8">
                 <li className="flex gap-4">
                   <span className="material-symbols-outlined text-metallo-lime shrink-0">check</span>
                   <div>
                     <strong className="block text-white font-bold mb-1">Unified Procurement</strong>
                     <p className="text-sm text-gray-300">One Purchase Order covers your Steel, Cables, Welding, and Tools. Simplification.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <span className="material-symbols-outlined text-metallo-lime shrink-0">check</span>
                   <div>
                     <strong className="block text-white font-bold mb-1">Factory-Direct Economics</strong>
                     <p className="text-sm text-gray-300">You buy directly from the manufacturer. Cost Efficiency.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <span className="material-symbols-outlined text-metallo-lime shrink-0">check</span>
                   <div>
                     <strong className="block text-white font-bold mb-1">Certified Assurance</strong>
                     <p className="text-sm text-gray-300">Every product is IS/ISO certified with 100% traceability. Reliability.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <span className="material-symbols-outlined text-metallo-lime shrink-0">check</span>
                   <div>
                     <strong className="block text-white font-bold mb-1">Proactive Delivery</strong>
                     <p className="text-sm text-gray-300">Strategic hubs in Noida/Gurgaon ensure Just-in-Time arrival. Velocity.</p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGIC PILLARS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Pillar 1 */}
              <div className="group">
                 <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-lime transition-colors">
                    <span className="material-symbols-outlined text-3xl text-metallo-navy">hub</span>
                 </div>
                 <h3 className="text-xl font-bold font-oswald text-metallo-navy mb-2">The "Power of One"</h3>
                 <p className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">Complete BOM Coverage</p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Why fragment your buying power? Whether you need High-Voltage HT Cables or SS 304 Sheets, Metallo delivers it all. We synchronize delivery so your site team has exactly what they need.
                 </p>
              </div>

              {/* Pillar 2 */}
              <div className="group">
                 <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-lime transition-colors">
                    <span className="material-symbols-outlined text-3xl text-metallo-navy">engineering</span>
                 </div>
                 <h3 className="text-xl font-bold font-oswald text-metallo-navy mb-2">"Mission Critical"</h3>
                 <p className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">Built for Heavy Infra</p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Our leadership stems from Oil & Gas sectors where failure is not an option. Our Fire Survival Cables and High-Tensile Steel are engineered to exceed standard safety margins.
                 </p>
              </div>

              {/* Pillar 3 */}
              <div className="group">
                 <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-lime transition-colors">
                    <span className="material-symbols-outlined text-3xl text-metallo-navy">verified_user</span>
                 </div>
                 <h3 className="text-xl font-bold font-oswald text-metallo-navy mb-2">The Quality Shield</h3>
                 <p className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">100% IS/ISO Compliant</p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   We don't deal in 'unbranded' quality. Steel: IS: 2062. Cables: IS: 7098. Welding: AWS Standards. Every shipment is accompanied by a Mill Test Certificate (MTC).
                 </p>
              </div>

              {/* Pillar 4 */}
              <div className="group">
                 <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-lime transition-colors">
                    <span className="material-symbols-outlined text-3xl text-metallo-navy">visibility</span>
                 </div>
                 <h3 className="text-xl font-bold font-oswald text-metallo-navy mb-2">Digital Transparency</h3>
                 <p className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">Visibility at Every Step</p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Metallo brings tech-enabled transparency. Track your order status, access digital test certificates, and manage your inventory through our platform. No more guessing games.
                 </p>
              </div>

           </div>
        </div>
      </section>

      {/* SECTION 4: ECONOMIC ADVANTAGE */}
      <section className="bg-metallo-navy text-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="w-full md:w-1/3 text-center md:text-left">
               <h2 className="text-4xl font-oswald font-bold mb-6">Direct Impact on Your Bottom Line.</h2>
               <p className="text-gray-300 mb-8">
                 Integration isn't just convenient; it's profitable. See how the Metallo model improves your project ROI.
               </p>
               <div className="w-20 h-1 bg-metallo-lime mx-auto md:mx-0"></div>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
               {/* Card 1 */}
               <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-4xl font-bold font-oswald text-metallo-lime mb-2">$$$</div>
                  <h3 className="text-lg font-bold uppercase mb-3">Reduce Costs</h3>
                  <p className="text-sm text-gray-400">By consolidating volume with Metallo, you unlock bulk pricing across verticals.</p>
               </div>
               {/* Card 2 */}
               <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-4xl font-bold font-oswald text-metallo-lime mb-2">-60%</div>
                  <h3 className="text-lg font-bold uppercase mb-3">Slash Overheads</h3>
                  <p className="text-sm text-gray-400">Reduce man-hours spent chasing vendors and processing invoices by 60%.</p>
               </div>
               {/* Card 3 */}
               <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-4xl font-bold font-oswald text-metallo-lime mb-2">0%</div>
                  <h3 className="text-lg font-bold uppercase mb-3">Zero Downtime</h3>
                  <p className="text-sm text-gray-400">Our Just-in-Time logistics prevent site stoppages caused by material shortage.</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-4xl md:text-5xl font-bold font-oswald text-metallo-navy mb-6">The Smart Choice for Smart Industry.</h2>
           <p className="text-xl text-gray-600 mb-10">50+ EPC Contractors have already upgraded to the Metallo Ecosystem. Are you next?</p>
           <Link 
             to="/contact" 
             className="inline-block px-10 py-4 bg-metallo-lime text-metallo-navy font-bold font-oswald uppercase tracking-widest text-lg hover:bg-metallo-lime-hover hover:scale-105 transition-all shadow-xl rounded-sm"
           >
             Start Your Pilot Order
           </Link>
        </div>
      </section>

    </div>
  );
};

export default WhyMetallo;