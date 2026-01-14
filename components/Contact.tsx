
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Tu camino a una infraestructura sin fallas ha comenzado! Un especialista senior te contactará en breve.');
  };

  return (
    <section id="contacto" className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <div className="w-20 h-1.5 bg-neon mb-12"></div>
            <h2 className="text-petrol font-black uppercase tracking-[0.5em] text-xs mb-6">Próximo Paso Estratégico</h2>
            <h3 className="text-4xl md:text-6xl font-black text-petrol mb-10 leading-[1.05]">Elimina la incertidumbre técnica hoy mismo.</h3>
            <p className="text-petrol/60 text-lg md:text-xl mb-14 font-medium leading-relaxed max-w-xl">
              Describe tu desafío operativo. No solo te daremos un presupuesto; trazaremos la <span className="text-petrol font-black underline decoration-neon decoration-[4px] underline-offset-[8px]">hoja de ruta tecnológica</span> que tu empresa merece.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
              <div className="group">
                <h4 className="font-black text-petrol uppercase text-xs tracking-[0.3em] mb-4 text-petrol/40">Contacto Directo</h4>
                <p className="text-petrol font-bold text-sm md:text-base border-b-2 border-neon/30 inline-block pb-1 group-hover:border-neon transition-all duration-500 underline-offset-4">Astroinnovatechca2023@gmail.com</p>
                <p className="text-petrol font-black text-xs md:text-sm mt-2 opacity-60">+58 424-607-3831</p>
                <div className="flex flex-col gap-3 mt-4">
                  <a
                    href="https://wa.me/584246073831"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-petrol font-bold text-sm hover:text-neon transition-colors group/link"
                  >
                    <span className="bg-neon/10 p-2 rounded-lg group-hover/link:bg-neon/20 transition-colors">
                      <svg className="w-4 h-4 text-neon" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 7.454c-1.679 0-3.325-.449-4.753-1.299l-.341-.202-3.535.927.944-3.441-.221-.352c-.933-1.484-1.423-3.21-1.423-4.973 0-5.449 4.432-9.882 9.882-9.882 2.64 0 5.122 1.028 6.987 2.893a9.825 9.825 0 0 1 2.893 6.987c0 5.449-4.433 9.882-9.882 9.882m9.882-21.264C20.141 3.25 17.382 2 14.444 2 8.133 2 3 7.133 3 13.444c0 2.016.524 3.984 1.519 5.722L3 25l5.99-1.571a11.33 11.33 0 0 0 5.454 1.391c6.31 0 11.444-5.133 11.444-11.444 0-3.058-1.191-5.932-3.355-8.096" /></svg>
                    </span>
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/astroinnovatech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-petrol font-bold text-sm hover:text-neon transition-colors group/link"
                  >
                    <span className="bg-neon/10 p-2 rounded-lg group-hover/link:bg-neon/20 transition-colors">
                      <svg className="w-4 h-4 text-neon" fill="currentColor" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-1.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
                    </span>
                    Telegram
                  </a>
                </div>
              </div>
              <div className="group">
                <h4 className="font-black text-petrol uppercase text-xs tracking-[0.3em] mb-4 text-petrol/40">Sede Principal</h4>
                <p className="text-petrol font-bold text-sm md:text-base group-hover:text-neon transition-colors duration-500 leading-relaxed whitespace-nowrap">
                  Palacio de Eventos, Local M25-A.<br />
                  Maracaibo, Venezuela.<br />
                  <span className="text-[10px] text-petrol/40">RIF J-00400567</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cream/40 p-10 md:p-14 rounded-[3.5rem] border border-petrol/5 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-petrol uppercase tracking-[0.2em] ml-2 block">Nombre del Representante</label>
                <input
                  type="text"
                  required
                  className="w-full px-7 py-5 rounded-2xl bg-white border border-petrol/10 text-petrol placeholder-petrol/30 focus:ring-4 focus:ring-neon/20 focus:border-neon outline-none transition-all shadow-sm text-sm font-semibold"
                  placeholder="Ej: Ing. Carlos Pérez"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-petrol uppercase tracking-[0.2em] ml-2 block">Correo Corporativo</label>
                  <input
                    type="email"
                    required
                    className="w-full px-7 py-5 rounded-2xl bg-white border border-petrol/10 text-petrol placeholder-petrol/30 focus:ring-4 focus:ring-neon/20 focus:border-neon outline-none transition-all shadow-sm text-sm font-semibold"
                    placeholder="carlos@empresa.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-petrol uppercase tracking-[0.2em] ml-2 block">Organización</label>
                  <input
                    type="text"
                    className="w-full px-7 py-5 rounded-2xl bg-white border border-petrol/10 text-petrol placeholder-petrol/30 focus:ring-4 focus:ring-neon/20 focus:border-neon outline-none transition-all shadow-sm text-sm font-semibold"
                    placeholder="AstroInnovaTech CA"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-petrol uppercase tracking-[0.2em] ml-2 block">Diagnóstico de Infraestructura Crítica</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-7 py-5 rounded-2xl bg-white border border-petrol/10 text-petrol placeholder-petrol/30 focus:ring-4 focus:ring-neon/20 focus:border-neon outline-none transition-all shadow-sm resize-none text-sm font-semibold leading-relaxed"
                  placeholder="Cuéntanos: ¿Se cae tu red frecuentemente? ¿Tienes 'zonas muertas' sin señal? ¿Necesitas organizar tu rack de servidores?..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-tech w-full font-black py-6 rounded-2xl uppercase tracking-[0.3em] text-xs shadow-xl transform hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                Asegurar mi Infraestructura
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
