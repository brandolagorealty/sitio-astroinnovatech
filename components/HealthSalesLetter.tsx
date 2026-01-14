import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const HealthSalesLetter: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-cream min-h-screen font-sans selection:bg-neon selection:text-petrol">
            <Navbar />

            <article className="max-w-4xl mx-auto px-6 pt-32 pb-24">
                <header className="mb-20 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest text-neon uppercase bg-petrol rounded-full reveal">
                        Sector Salud & Clínicas
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-petrol leading-[1.1] tracking-tighter reveal delay-100">
                        En una emergencia, un <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol to-neon">segundo</span> de espera es una eternidad.
                    </h1>
                </header>

                <section className="space-y-12 text-lg md:text-xl text-petrol/80 leading-relaxed font-medium">
                    <p className="reveal delay-200">
                        La medicina moderna no solo depende de los médicos. Depende de los <span className="text-petrol font-bold uppercase tracking-tighter">datos</span> fluyendo a la velocidad de la vida.
                    </p>

                    <div className="bg-petrol p-10 md:p-16 rounded-[3rem] text-cream reveal delay-300 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                        <h2 className="text-2xl md:text-3xl font-black mb-8 text-neon">La historia de la Dra. Sofía y el quirófano desconectado</h2>
                        <div className="space-y-6 text-cream/80">
                            <p>
                                La Dra. Sofía estaba en mitad de una cirugía de emergencia. Necesitaba ver el último resultado de laboratorio para tomar una decisión crítica. Pero el WiFi del quirófano falló.
                            </p>
                            <p>
                                El personal tuvo que bajar corriendo 3 pisos porque la red "estaba inestable". Fueron 5 minutos de angustia innecesaria. En una clínica, 5 minutos no es "tiempo perdido", es riesgo vital.
                            </p>
                            <p>
                                Ese día, la clínica de Sofía entendió que el Internet no es una comodidad, es una herramienta de soporte vital.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-3xl font-black text-petrol mt-16 reveal">Infraestructura Crítica: El Pulso de tu Clínica</h3>
                    <p className="reveal">
                        Las clínicas en Maracaibo a menudo operan con redes domésticas estiradas al límite. El resultado: Historias médicas que no cargan, puntos de venta lentos en recepción y médicos frustrados.
                    </p>
                    <p className="reveal">
                        En <span className="text-petrol font-bold">AstroInnovaTech</span>, diseñamos sistemas que no parpadean. Redes que soportan telemedicina, envío masivo de imágenes diagnósticas y seguridad de datos bajo grado militar.
                    </p>

                    <div className="border-l-4 border-neon pl-8 py-4 reveal">
                        <p className="text-2xl font-black text-petrol">
                            "Si tu hospital nunca se queda a oscuras gracias a la planta eléctrica, ¿por qué permites que tu red digital se apague?"
                        </p>
                    </div>

                    <div className="reveal space-y-8">
                        <h3 className="text-3xl font-black text-petrol">Garantía de Estabilidad Médica:</h3>
                        <ul className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'Prioridad Hospitalaria', text: 'Datos críticos siempre por encima del tráfico de invitados.' },
                                { title: 'Respaldo Energético TI', text: 'Sistemas que siguen activos incluso en apagones prolongados.' },
                                { title: 'Telemedicina sin Lag', text: 'Video de alta fidelidad para diagnósticos remotos precisos.' },
                                { title: 'Cumplimiento de Privacidad', text: 'Segurización de expedientes contra filtraciones.' },
                            ].map((item, i) => (
                                <li key={i} className="bg-white p-6 rounded-2xl border border-petrol/5 shadow-sm">
                                    <span className="block text-neon font-black mb-1">✚ {item.title}</span>
                                    <span className="text-sm opacity-70">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="reveal pt-12 text-center">
                        <p className="text-sm uppercase tracking-widest font-black text-petrol/40 mb-8">Diseña un Centro Médico de Élite</p>
                        <a
                            href="https://wa.me/584246073831?text=Hola,%20necesito%20blindar%20la%20red%20de%20mi%20centro%20médico.%20Vengo%20de%20la%20web."
                            className="btn-tech inline-block px-12 py-6 rounded-3xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-transform"
                        >
                            Consultar con Ingeniería Senior
                        </a>
                    </div>
                </section>
            </article>

            <Footer />
        </div>
    );
};

export default HealthSalesLetter;
