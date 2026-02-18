import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show at the very top (buffer of 50px)
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else {
        // Scrolling up -> show
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Top bar links
  const topLinks = [
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Why Metallo', path: '/why-metallo' },
  ];

  // Primary Navigation for Drawer (Left Column)
  const primaryLinks = [
    { name: 'About', path: '/about' },
    { name: 'Why Metallo', path: '/why-metallo' }, 
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Industries (Right Column)
  const verticals = [
    { name: 'Steel', path: '/products/steel' },
    { name: 'Wire & Cables', path: '/products/wire-cables' },
    { name: 'Welding', path: '/products/welding' },
    { name: 'Tools', path: '/products/tools' },
    { name: 'Die Casting', path: '/products/die-casting' },
    { name: 'Tech Products', path: '/products/tech-products' },
  ];

  return (
    <>
    <header 
      className={`fixed w-full top-0 z-50 bg-white font-sans text-metallo-navy shadow-sm transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Row 1: Top Bar - Hidden on mobile */}
      <div className="border-b border-gray-100 hidden md:block">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-xs font-medium tracking-wide">
            <div className="flex space-x-6 text-gray-600">
              {topLinks.map((link) => (
                <Link key={link.name} to={link.path} className="hover:text-metallo-navy uppercase transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-metallo-navy">
              <span className="material-symbols-outlined text-lg">language</span>
              <span>Global</span>
              <span className="material-symbols-outlined text-sm">arrow_drop_down</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Logo & CTA */}
      <div className="py-2 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img src="/logo.svg" alt="Metallo" className="w-auto" style={{width: '15rem'}} />
            </Link>

            {/* CTA Button */}
            <Link 
              to="/contact"
              className="hidden md:inline-flex items-center px-6 py-3 bg-metallo-lime hover:bg-metallo-lime-hover text-metallo-navy font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Get a Quote Now
              <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-metallo-navy p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Row 3: Verticals Navigation */}
      <div className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <nav className="flex space-x-8">
              {verticals.map((v) => (
                <Link 
                  key={v.name} 
                  to={v.path} 
                  className="text-xs font-bold uppercase tracking-wider text-metallo-navy hover:text-metallo-lime-hover hover:underline decoration-2 underline-offset-4 transition-all"
                >
                  {v.name}
                </Link>
              ))}
            </nav>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-gray-50 rounded-full transition-colors flex items-center gap-2 group"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-metallo-navy opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">Menu</span>
              <span className="material-symbols-outlined text-metallo-navy">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* BACKDROP */}
    <div 
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={() => setIsMenuOpen(false)}
    />

    {/* SIDE DRAWER MENU */}
    <div className={`
        fixed inset-y-0 z-[100] bg-metallo-navy text-white 
        w-[85vw] md:w-1/2 lg:w-1/2
        shadow-2xl overflow-hidden
        transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
        left-0 md:left-auto md:right-0
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-full'}
      `}>
        
        <div className="flex flex-col h-full">
            {/* Close Button Header - Removed 'Menu' text */}
            <div className="flex justify-end items-center p-6 md:p-8">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="group p-2"
              >
                 <span className="material-symbols-outlined text-3xl md:text-4xl text-white group-hover:text-metallo-lime transition-all duration-300">close</span>
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 px-8 md:px-16 overflow-y-auto">
                <div className="flex flex-col md:flex-row h-full">
                   
                   {/* Left Column: Primary Navigation */}
                   <div className="flex-1 flex flex-col space-y-8 pt-4 pb-8 md:pb-0">
                      {primaryLinks.map(link => (
                         <Link 
                           key={link.name} 
                           to={link.path} 
                           onClick={() => setIsMenuOpen(false)}
                           className="text-xl md:text-2xl font-bold font-oswald text-white hover:text-metallo-lime transition-colors uppercase tracking-wide w-fit"
                         >
                           {link.name}
                         </Link>
                      ))}
                   </div>

                   {/* Right Column: Industries (Bordered left on desktop) */}
                   <div className="flex-1 md:border-l md:border-white/10 md:pl-16 pt-4 pb-8">
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-8 font-oswald">Industries</h3>
                      <div className="flex flex-col space-y-4">
                         {verticals.map(v => (
                            <Link 
                               key={v.name} 
                               to={v.path} 
                               onClick={() => setIsMenuOpen(false)}
                               className="text-base text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 w-fit block font-sans"
                            >
                               {v.name}
                            </Link>
                         ))}
                      </div>
                   </div>

                </div>
            </div>

            {/* Footer Area inside Drawer */}
            <div className="p-8 md:px-16 border-t border-white/10 mt-auto bg-metallo-navy z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                   <div className="flex gap-6">
                      <Link to="/csr" onClick={() => setIsMenuOpen(false)} className="text-xs font-bold text-white hover:text-metallo-lime uppercase tracking-wider transition-colors">CSR Policy</Link>
                      <Link to="/disclosure" onClick={() => setIsMenuOpen(false)} className="text-xs font-bold text-white hover:text-metallo-lime uppercase tracking-wider transition-colors">Disclosure</Link>
                   </div>
                   
                   {/* Social Icons (Copied from Footer) */}
                   <div className="flex gap-4 items-center">
                      {/* X (Twitter) */}
                      <a href="#" className="text-white hover:text-metallo-lime transition-colors">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                      </a>
                      {/* Facebook */}
                      <a href="#" className="text-white hover:text-metallo-lime transition-colors">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                      </a>
                      {/* Instagram */}
                      <a href="#" className="text-white hover:text-metallo-lime transition-colors">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                      </a>
                      {/* LinkedIn */}
                      <a href="#" className="text-white hover:text-metallo-lime transition-colors">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                      </a>
                      {/* YouTube */}
                      <a href="#" className="text-white hover:text-metallo-lime transition-colors">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                      </a>
                   </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Header;