
import React from 'react';
import { ServicePlan } from '../types';

interface ServiceCardProps { plan: ServicePlan; }

const ServiceCard: React.FC<ServiceCardProps> = ({ plan }) => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`group flex flex-col h-full bg-white rounded-[3rem] transition-all duration-500 hover:shadow-2xl border ${plan.isPopular ? 'border-petrol border-t-0 relative shadow-lg' : 'border-petrol/5 shadow-sm hover:border-petrol/20 overflow-hidden'}`}>
      
      {/* Barra de acento superior para la tarjeta popular - más elegante */}
      {plan.isPopular && (
        <div className="absolute top-0 left-0 right-0 h-4 bg-neon rounded-t-[3rem]"></div>
      )}

      {/* Etiqueta de Recomendado: posicionada correctamente sin ser cortada */}
      {plan.isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-petrol text-neon text-[10px] md:text-xs font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl z-20 border border-neon/20">
          Recomendado Pro
        </div>
      )}
      
      <div className={`p-10 pt-16 ${!plan.isPopular ? 'overflow-hidden' : ''}`}>
        <h3 className="text-2xl font-black text-petrol mb-2 leading-tight tracking-tighter">{plan.name}</h3>
        <p className="text-xs text-petrol/40 font-black uppercase tracking-[0.2em] mb-10">{plan.targetAudience}</p>
        
        <div className="flex items-baseline mb-8 border-b border-petrol/5 pb-10">
          <span className="text-4xl md:text-5xl font-black text-petrol tracking-tighter">{plan.price}</span>
          <span className="text-petrol/40 ml-3 text-xs font-bold uppercase tracking-tight">Punto de Partida</span>
        </div>

        <div className="space-y-8 mb-10">
          <div className="flex items-center gap-4 text-petrol font-bold text-base">
            <div className="w-3 h-3 rounded-full bg-neon shadow-[0_0_10px_#16FF1F]"></div>
            {plan.stations}
          </div>
          
          <div className="p-5 rounded-3xl bg-cream/60 border-l-4 border-petrol group-hover:bg-white transition-colors duration-500 shadow-sm">
            <span className="text-xs font-black text-petrol/40 block mb-2 uppercase tracking-widest">Tecnología Base:</span>
            <span className="text-sm font-bold text-petrol leading-snug block">{plan.technicalHighlights}</span>
          </div>

          <div className="pt-2">
            <ul className="space-y-4">
              {plan.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-petrol/70 leading-relaxed">
                  <div className="mt-1 bg-neon/10 p-1 rounded-full text-neon">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-auto p-10 pt-0">
        <a 
          href="#contacto" 
          onClick={scrollToContact}
          className={`block w-full text-center py-5 rounded-2xl font-black transition-all text-xs tracking-[0.2em] uppercase ${plan.isPopular ? 'btn-tech' : 'bg-cream text-petrol hover:bg-petrol hover:text-white border border-petrol/10'}`}
        >
          Solicitar Presupuesto
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
