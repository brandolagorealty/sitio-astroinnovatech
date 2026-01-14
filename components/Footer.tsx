
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-petrol py-12 border-t border-neon/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img
                src="/assets/logo.png"
                alt="AstroInnovaTech Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-cream/40 text-xs font-bold uppercase tracking-widest mt-2">© 2024 AstroInnovaTech CA. Excelencia técnica certificada.</p>
          </div>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/astroinnovatech" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-neon font-black text-[10px] uppercase tracking-widest transition-colors tracking-[0.2em]">Instagram</a>
            <a href="#" className="text-cream/50 hover:text-neon font-black text-[10px] uppercase tracking-widest transition-colors tracking-[0.2em]">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
