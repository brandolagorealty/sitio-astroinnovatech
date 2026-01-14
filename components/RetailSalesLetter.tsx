import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const RetailSalesLetter: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-cream min-h-screen font-sans selection:bg-neon selection:text-petrol">
            <Navbar />

            <article className="max-w-4xl mx-auto px-6 pt-32 pb-24">
                <header className="mb-20 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest text-neon uppercase bg-petrol rounded-full reveal">
                        Retail & Gastronomía Premium
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-petrol leading-[1.1] tracking-tighter reveal delay-100">
                        ¿Cuántas veces has perdido una venta porque <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol to-neon">"no hay sistema"</span>?
                    </h1>
                </header>

                <section className="space-y-12 text-lg md:text-xl text-petrol/80 leading-relaxed font-medium">
                    <p className="reveal delay-200">
                        En un negocio de alto tráfico, cada segundo de demora en la caja es un cliente que se <span className="text-petrol font-bold italic">frustra</span> y una oportunidad de facturación que se evapora.
                    </p>

                    <div className="bg-petrol p-10 md:p-16 rounded-[3rem] text-cream reveal delay-300 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                        <h2 className="text-2xl md:text-3xl font-black mb-8 text-neon">La historia de Carlos y el restaurante que se frenó</h2>
                        <div className="space-y-6 text-cream/80">
                            <p>
                                Carlos es dueño de un restaurante de moda en la 72. Tenía el local lleno, los platos estaban saliendo perfectos, pero la gente se estaba yendo molesta.
                            </p>
                            <p>
                                ¿El motivo? El punto de venta no pasaba porque los comensales estaban saturando el WiFi de cortesía con TikTok y streaming. Carlos estaba perdiendo cuentas de $100 simplemente por un router doméstico saturado.
                            </p>
                            <p>
                                Su red estaba trabajando <span className="text-neon font-bold uppercase">en su contra</span>.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-3xl font-black text-petrol mt-16 reveal">Redes Inteligentes para Facturación Masiva</h3>
                    <p className="reveal">
                        Muchos bodegones y restaurantes en Maracaibo cometen el error de mezclar la red de sus cajas con el WiFi de sus clientes. No permitas que un video viral detenga tu capacidad de cobrar.
                    </p>
                    <p className="reveal">
                        En <span className="text-petrol font-bold">AstroInnovaTech</span>, creamos autopistas digitales exclusivas para tus puntos de venta y sistemas administrativos. Separamos el tráfico para que tu negocio nunca se detenga, sin importar cuántos clientes estén conectados.
                    </p>

                    <div className="border-l-4 border-neon pl-8 py-4 reveal">
                        <p className="text-2xl font-black text-petrol">
                            "Tu tecnología debe estar al servicio de tu facturación, no ser el cuello de botella que la asfixia."
                        </p>
                    </div>

                    <div className="reveal space-y-8">
                        <h3 className="text-3xl font-black text-petrol">Ingeniería para el Flujo Comercial:</h3>
                        <ul className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'Prioridad de Pago', text: 'Tus puntos de venta siempre tienen el carril rápido y seguro.' },
                                { title: 'WiFi Invitado Profesional', text: 'Ofrece Internet a tus clientes sin comprometer tu seguridad local.' },
                                { title: 'Soporte para Delivery', text: 'Señal impecable en cada rincón para tus apps de despacho.' },
                                { title: 'Escalabilidad Retail', text: 'Añade cajas o inventario digital sin configurar todo de nuevo.' },
                            ].map((item, i) => (
                                <li key={i} className="bg-white p-6 rounded-2xl border border-petrol/5 shadow-sm">
                                    <span className="block text-neon font-black mb-1">🛒 {item.title}</span>
                                    <span className="text-sm opacity-70">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="reveal pt-12 text-center">
                        <p className="text-sm uppercase tracking-widest font-black text-petrol/40 mb-8">Haz que tu flujo de caja sea imparable</p>
                        <a
                            href="https://wa.me/584246073831?text=Hola,%20necesito%20optimizar%20la%20red%20de%20mi%20restaurante/tienda.%20Vengo%20de%20la%20web."
                            className="btn-tech inline-block px-12 py-6 rounded-3xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-transform"
                        >
                            Consultar Diagnóstico de Facturación
                        </a>
                    </div>
                </section>
            </article>

            <Footer />
        </div>
    );
};

export default RetailSalesLetter;
