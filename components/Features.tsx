
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Tu Equipo Siempre Conectado',
      description: 'Diseñamos sistemas que eliminan las caídas de red inesperadas. Si tu red no se detiene, tu facturación tampoco.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Crecimiento sin Miedos',
      description: 'Nuestras redes crecen con tu oficina. Olvídate de volver a cablear todo cuando contrates a más personal.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      )
    },
    {
      title: 'Seguridad y Respaldo Real',
      description: 'Blindamos tu conexión contra fallas eléctricas y accesos no autorizados. Tu información, siempre disponible y segura.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-petrol text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative z-10">
            <div className="reveal w-16 h-1 bg-neon mb-8"></div>
            <h2 className="reveal text-neon text-xs font-black uppercase tracking-[0.5em] mb-6">Redes & Tecnología en el Zulia</h2>
            <h3 className="reveal delay-100 text-4xl md:text-5xl lg:text-6xl font-black mb-10 leading-[1.1]">Expertos en Cableado Estructurado y Soporte Senior</h3>
            <p className="reveal delay-200 text-cream/60 text-lg md:text-xl mb-16 leading-relaxed italic border-l-4 border-neon/30 pl-6">
              "Un solo minuto de desconexión no es solo tiempo perdido; es una oportunidad de negocio que tu competencia acaba de capturar."
            </p>
            <div className="grid gap-10">
              {features.map((f, i) => (
                <div key={i} className={`reveal-left delay-${(i + 3) * 100} flex gap-6 group`}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl border border-neon/20 flex items-center justify-center text-neon group-hover:bg-neon group-hover:text-petrol transition-all duration-500 shadow-sm group-hover:shadow-neon/40">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2 tracking-tight group-hover:text-neon transition-colors">{f.title}</h4>
                    <p className="text-cream/50 text-base leading-relaxed max-w-md">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de Imagen: corregida para evitar solapamiento en móviles */}
          <div className="reveal-right delay-200 relative mt-12 lg:mt-0">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://scdztnzkzrvjgyefunkw.supabase.co/storage/v1/object/sign/videos/ezgif.com-video-to-webp-converter.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZjIyOTkzMi1kODQ2LTQ1ZTctOGQ5Mi00MGI3NmY4M2RiNmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZXpnaWYuY29tLXZpZGVvLXRvLXdlYnAtY29udmVydGVyLndlYnAiLCJpYXQiOjE3NjgzOTgyOTYsImV4cCI6MTc5OTkzNDI5Nn0.BRCfZvugIdBxcDtWziRXgtc9vrpgG5ah3FOB6Avf2bU"
                alt="AstroInnovaTech Innovación Animada"
                className="w-full h-auto min-h-[400px] lg:min-h-[600px] object-cover hover:scale-105 transition-all duration-1000 brightness-90 hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petrol/90 via-transparent to-transparent"></div>

              {/* Card de cita: Se ha ajustado el padding y posición para que sea legible y no tape texto principal en móviles */}
              <div className="absolute bottom-6 left-6 right-6 bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border-b-8 border-neon">
                <p className="text-petrol font-black text-base md:text-xl mb-4 leading-tight">
                  Transformamos racks caóticos en el motor de alta fidelidad de tu empresa.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-6 md:w-8 bg-neon"></div>
                  <p className="text-petrol/50 text-xs font-black uppercase tracking-[0.2em]">Depto. Ingeniería de Campo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
