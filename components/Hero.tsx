
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-cream">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-neon/5 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] bg-petrol/5 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal inline-flex items-center gap-3 px-5 py-2 mb-10 text-xs font-black tracking-[0.2em] text-petrol uppercase border border-petrol/10 rounded-full bg-white/60 backdrop-blur-md shadow-sm">
          <span className="flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-neon opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon"></span>
          </span>
          Ingeniería de Red para el Próximo Nivel
        </div>

        <h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-black text-petrol mb-10 tracking-tighter leading-[1.05] md:leading-[0.95]">
          Instalación de Redes e Infraestructura de Élite en <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol via-petrol to-neon">Maracaibo</span>.
        </h1>

        <p className="reveal delay-200 max-w-3xl mx-auto text-lg md:text-xl text-petrol/70 mb-14 leading-relaxed font-medium px-4">
          Instalamos la infraestructura que permite que tu empresa trabaje sin interrupciones. Llevamos la señal a donde otros no llegan y transformamos el caos de cables en una red invisible, potente y profesional.
        </p>

        {/* Botones con margen corregido para evitar solapamiento en móviles */}
        <div className="reveal delay-300 flex flex-col sm:flex-row justify-center items-center gap-5 px-4">
          <a
            href="#planes"
            onClick={(e) => scrollToSection(e, 'planes')}
            className="btn-tech w-full sm:w-auto px-10 py-5 font-black rounded-2xl text-xs uppercase tracking-[0.2em] shadow-xl"
          >
            Explorar Soluciones
          </a>
          <a
            href="#contacto"
            onClick={(e) => scrollToSection(e, 'contacto')}
            className="btn-neon-outline w-full sm:w-auto px-10 py-5 font-black rounded-2xl text-xs uppercase tracking-[0.2em]"
          >
            Diagnóstico Senior
          </a>
        </div>

        <div className="mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-petrol/5 pt-16">
          {[
            { label: 'Ingeniería de Élite', value: '100%' },
            { label: 'Uptime de Operación', value: '99.9%' },
            { label: 'Respuesta Técnica', value: '< 2h' },
            { label: 'Soporte Senior', value: '24/7' },
          ].map((stat, i) => (
            <div key={i} className={`reveal delay-${(i + 4) * 100}`}>
              <div className="text-3xl md:text-4xl font-black text-petrol mb-2 font-tech hover:text-neon transition-colors duration-500">{stat.value}</div>
              <div className="text-xs text-petrol/50 font-black uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
