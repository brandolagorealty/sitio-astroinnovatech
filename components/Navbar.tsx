
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="AstroInnovaTech Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="hidden md:flex space-x-10 items-center">
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, 'inicio')}
              className="text-petrol/70 hover:text-petrol text-xs font-black uppercase tracking-widest transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              onClick={(e) => scrollToSection(e, 'servicios')}
              className="text-petrol/70 hover:text-petrol text-xs font-black uppercase tracking-widest transition-colors"
            >
              Servicios
            </a>
            <a
              href="#planes"
              onClick={(e) => scrollToSection(e, 'planes')}
              className="text-petrol/70 hover:text-petrol text-xs font-black uppercase tracking-widest transition-colors"
            >
              Planes
            </a>
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, 'contacto')}
              className="btn-tech px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
