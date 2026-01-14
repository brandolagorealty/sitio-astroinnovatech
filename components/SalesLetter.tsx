import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const SalesLetter: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-cream min-h-screen font-sans selection:bg-neon selection:text-petrol">
            <Navbar />

            <article className="max-w-4xl mx-auto px-6 pt-32 pb-24">
                <header className="mb-20 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest text-neon uppercase bg-petrol rounded-full reveal">
                        Exclusivo para Dueños de Negocios
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-petrol leading-[1.1] tracking-tighter reveal delay-100">
                        El costo invisible de estar <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol to-neon">ciego</span> en tu propio negocio.
                    </h1>
                </header>

                <section className="space-y-12 text-lg md:text-xl text-petrol/80 leading-relaxed font-medium">
                    <p className="reveal delay-200">
                        Dicen que <span className="text-petrol font-bold">"el ojo del amo engorda al caballo"</span>... Pero en el Maracaibo de hoy, el ojo del amo no puede estar en diez lugares al mismo tiempo.
                    </p>

                    <div className="bg-petrol p-10 md:p-16 rounded-[3rem] text-cream reveal delay-300 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                        <h2 className="text-2xl md:text-3xl font-black mb-8 text-neon">La historia de Don Ricardo y el almacén que se desvanecía</h2>
                        <div className="space-y-6 text-cream/80">
                            <p>
                                Don Ricardo fundó su distribuidora con puro sudor. El negocio crecía, tenía 15 empleados, pero había un problema: <span className="text-neon font-bold">Las cuentas nunca cuadraban.</span>
                            </p>
                            <p>
                                Cada fin de mes faltaban cajas. El inventario parecía tener piernas. Don Ricardo instaló cámaras baratas, pero la señal se caía cada vez que había un bajón de luz. Al final, las grabaciones eran manchas grises justo en el momento del robo.
                            </p>
                            <p>
                                Sentía esa impotencia de saber que algo andaba mal, pero no tenía las pruebas. Su empresa no era un motor de éxito, era un colador de dinero.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-3xl font-black text-petrol mt-16 reveal">El giro: Un sistema que no permite excusas</h3>
                    <p className="reveal">
                        Don Ricardo no necesitaba "más cámaras". Necesitaba <span className="text-petrol font-bold italic">Certidumbre Técnica</span>.
                    </p>
                    <p className="reveal">
                        Nosotros llegamos y eliminamos el caos. Instalamos una red de grado profesional, organizamos su rack de servidores y pusimos un respaldo de energía indestructible. Dejamos que la tecnología se encargara de vigilar mientras él se encargaba de vender.
                    </p>

                    <div className="border-l-4 border-neon pl-8 py-4 reveal">
                        <p className="text-2xl font-black text-petrol">
                            "Hoy, Don Ricardo supervisa su negocio desde su casa. Su infraestructura es su gerente general más confiable."
                        </p>
                    </div>

                    <div className="reveal space-y-8">
                        <h3 className="text-3xl font-black text-petrol">¿Qué te garantiza una Red de Élite?</h3>
                        <ul className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'Supervisión 4K Real', text: 'Sin parpadeos ni caídas de señal.' },
                                { title: 'Cero Sabotaje', text: 'Equipos protegidos y blindados físicamente.' },
                                { title: 'Productividad Forzada', text: 'Sin internet lento, no hay excusas para no trabajar.' },
                                { title: 'Paz Mental', text: 'Toma el control total desde tu móvil.' },
                            ].map((item, i) => (
                                <li key={i} className="bg-white p-6 rounded-2xl border border-petrol/5 shadow-sm">
                                    <span className="block text-neon font-black mb-1">✓ {item.title}</span>
                                    <span className="text-sm opacity-70">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="reveal pt-12 text-center">
                        <p className="text-sm uppercase tracking-widest font-black text-petrol/40 mb-8">¿Estás listo para tomar el mando?</p>
                        <a
                            href="https://wa.me/584246073831?text=Hola,%20leí%20la%20historia%20de%20Don%20Ricardo.%20Necesito%20blindar%20mi%20negocio%20en%20Maracaibo."
                            className="btn-tech inline-block px-12 py-6 rounded-3xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-transform"
                        >
                            Diseñar mi Sistema de Control
                        </a>
                    </div>
                </section>
            </article>

            <Footer />
        </div>
    );
};

export default SalesLetter;
