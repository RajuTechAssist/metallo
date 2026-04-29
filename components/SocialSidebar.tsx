"use client";

import React from 'react';
import { FaLinkedin, FaXTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa6';

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-1 bg-white shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.1)] rounded-l-lg overflow-hidden border border-r-0 border-gray-200">
      {/* LinkedIn */}
      <a
        href="#"
        className="group relative p-3 bg-white text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors duration-300 flex items-center justify-center border-b border-gray-100 last:border-0"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-xl transition-colors duration-300" />
      </a>

      {/* X / Twitter */}
      <a
        href="#"
        className="group relative p-3 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center border-b border-gray-100 last:border-0"
        aria-label="X (Twitter)"
      >
        <FaXTwitter className="text-xl transition-colors duration-300" />
      </a>

      {/* Facebook */}
      <a
        href="#"
        className="group relative p-3 bg-white text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors duration-300 flex items-center justify-center border-b border-gray-100 last:border-0"
        aria-label="Facebook"
      >
        <FaFacebook className="text-xl transition-colors duration-300" />
      </a>

      {/* WhatsApp */}
      <a
        href="#"
        className="group relative p-3 bg-white text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-300 flex items-center justify-center border-b border-gray-100 last:border-0"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-xl transition-colors duration-300" />
      </a>
    </div>
  );
};

export default SocialSidebar;
