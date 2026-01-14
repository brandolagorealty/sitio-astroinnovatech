
import React from 'react';
import ServiceCard from './ServiceCard';
import { ServicePlan } from '../types';

const plans: ServicePlan[] = [
  {
    id: 'home-office',
    name: 'Home Office Elite',
    targetAudience: 'Directivos y Profesionales',
    stations: 'Tu Oficina en Casa, sin caídas',
    price: 'Desde $676',
    technicalHighlights: 'WiFi 6 Ultra-Latencia + Mesh DECO',
    benefits: [
      'Videollamadas 4K sin interrupciones',
      'Priorización de señal para trabajo',
      'Seguridad contra intrusos externos',
      'Señal impecable en cada rincón del hogar'
    ],
    isPopular: false
  },
  {
    id: 'red-basic',
    name: 'Business Core Architecture',
    targetAudience: 'Empresas en Consolidación',
    stations: 'Estabilidad total para tu sede física',
    price: '$2,233',
    technicalHighlights: 'Rack Estructurado + UPS Respaldo',
    benefits: [
      'Garantía de Cero Desconexiones',
      'Velocidad de red local optimizada',
      'Orden total del cableado (Certificado)',
      'Protocolo de mantenimiento preventivo'
    ],
    isPopular: false
  },
  {
    id: 'business-basic',
    name: 'Growth Engine Network',
    targetAudience: 'Empresas con Alta Demanda',
    stations: 'Potencia corporativa para el escalado',
    price: '$4,749',
    technicalHighlights: 'Balanceador de Carga + PoE Pro',
    benefits: [
      'Red Robusta (Canales redundantes)',
      'Infraestructura para Vigilancia y VoIP',
      'Segmentación de red por departamentos',
      'WiFi de alto rendimiento para invitados'
    ],
    isPopular: true
  },
  {
    id: 'business-standard',
    name: 'Enterprise Dominion',
    targetAudience: 'Corporaciones y Sedes Masivas',
    stations: 'Rendimiento Inquebrantable de Grado Militar',
    price: '$8,913',
    technicalHighlights: 'Dual Core Switching + Fiber Optic Ready',
    benefits: [
      'Arquitectura de fibra para alta demanda',
      'Cobertura WiFi total en edificios complejos',
      'Soporte crítico para +200 dispositivos',
      'Auditorización y Certificación IT Senior'
    ],
    isPopular: false
  }
];

const Pricing: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="planes" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="reveal max-w-2xl">
            <h2 className="text-petrol font-black uppercase tracking-[0.4em] text-[10px] mb-4">Portafolio Estratégico</h2>
            <h3 className="text-5xl font-black text-petrol leading-tight">El hardware se deprecia;<br />la fluidez se factura.</h3>
          </div>
          <p className="reveal delay-200 max-w-xs text-petrol/50 text-sm font-medium leading-relaxed italic">
            "Transforma un gasto operativo inevitable en una ventaja estratégica de alto rendimiento."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div key={plan.id} className={`reveal delay-${(i + 1) * 100}`}>
              <ServiceCard plan={plan} />
            </div>
          ))}
        </div>

        <div className="reveal delay-200 mt-20 bg-petrol rounded-[3rem] p-12 text-cream relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full -mr-32 -mt-32 filter blur-3xl group-hover:scale-125 transition-all duration-1000"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h4 className="text-3xl font-black mb-4 tracking-tight">¿Necesitas una Solución 100% Custom?</h4>
              <p className="text-cream/60 text-lg font-medium leading-relaxed">Si tu proyecto requiere arquitectura de fibra óptica, desarrollo de software a medida o mantenimiento a nivel nacional, nuestros ingenieros senior están listos para el reto.</p>
            </div>
            <a
              href="#contacto"
              onClick={scrollToContact}
              className="bg-white text-petrol px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-neon transition-all hover:-translate-y-1 shadow-2xl"
            >
              Consultoría VIP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
