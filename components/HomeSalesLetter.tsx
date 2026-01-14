import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const HomeSalesLetter: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-cream min-h-screen font-sans selection:bg-neon selection:text-petrol">
            <Navbar />

            <article className="max-w-4xl mx-auto px-6 pt-32 pb-24">
                <header className="mb-20 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest text-neon uppercase bg-petrol rounded-full reveal">
                        Residencias Inteligentes & VIP
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-petrol leading-[1.1] tracking-tighter reveal delay-100">
                        Tu hogar es tu fortaleza, pero ¿puedes <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol to-neon">entrar</span> en ella cuando no estás?
                    </h1>
                </header>

                <section className="space-y-12 text-lg md:text-xl text-petrol/80 leading-relaxed font-medium">
                    <p className="reveal delay-200">
                        La verdadera libertad de un líder no es solo el éxito, es la <span className="text-petrol font-bold uppercase tracking-tight">paz mental</span> de saber que su familia y su casa están siempre bajo control.
                    </p>

                    <div className="bg-petrol p-10 md:p-16 rounded-[3rem] text-cream reveal delay-300 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                        <h2 className="text-2xl md:text-3xl font-black mb-8 text-neon">La historia de Javier y la noche sin sueño en Madrid</h2>
                        <div className="space-y-6 text-cream/80">
                            <p>
                                Javier estaba en una cena de negocios en Madrid. De pronto, recibió una alerta de seguridad de su residencia en Maracaibo. Quiso ver la cámara del patio para estar tranquilo, pero la app no cargaba.
                            </p>
                            <p>
                                Su router doméstico se había colgado. Esa noche, Javier no durmió. Estaba a miles de kilómetros sufriendo por la duda: ¿Fue un falso positivo o alguien había entrado?
                            </p>
                            <p>
                                La tecnología que debía darle tranquilidad, le dio <span className="text-neon font-bold">incertidumbre</span>.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-3xl font-black text-petrol mt-16 reveal">Ingeniería para el Hogar que no Admite Fallos</h3>
                    <p className="reveal">
                        Una residencia de lujo en Maracaibo no puede depender de equipos comprados en una tienda común. Necesitas una infraestructura que soporte muros gruesos, múltiples niveles y, sobre todo, que sobreviva a la inestabilidad eléctrica del Zulia.
                    </p>
                    <p className="reveal">
                        En <span className="text-petrol font-bold">AstroInnovaTech</span>, instalamos redes de grado industrial en hogares VIP. Sistemas Mesh invisibles, control de cámaras blindado y gestión remota inteligente.
                    </p>

                    <div className="border-l-4 border-neon pl-8 py-4 reveal">
                        <p className="text-2xl font-black text-petrol">
                            "Toma el control total de tu santuario, desde luces y clima hasta la vigilancia más avanzada, todo desde la palma de tu mano."
                        </p>
                    </div>

                    <div className="reveal space-y-8">
                        <h3 className="text-3xl font-black text-petrol">Conectividad de Clase Mundial para tu Familia:</h3>
                        <ul className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'Control Remoto Real', text: 'Acceso garantizado a tus cámaras y seguridad desde el extranjero.' },
                                { title: 'WiFi Sin Zonas Muertas', text: 'Señal impecable desde la cocina hasta el fondo de la piscina.' },
                                { title: 'Entertainment Ready', text: 'Streaming en 4K y gaming sin lag en cada habitación.' },
                                { title: 'Instalación Invisible', text: 'Ingeniería estética que no compromete el diseño de tu hogar.' },
                            ].map((item, i) => (
                                <li key={i} className="bg-white p-6 rounded-2xl border border-petrol/5 shadow-sm">
                                    <span className="block text-neon font-black mb-1">🏠 {item.title}</span>
                                    <span className="text-sm opacity-70">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="reveal pt-12 text-center">
                        <p className="text-sm uppercase tracking-widest font-black text-petrol/40 mb-8">Protege lo que más importa con tecnología de élite</p>
                        <a
                            href="https://wa.me/584246073831?text=Hola,%20necesito%20mejorar%20la%20red%20y%20control%20de%20mi%20residencia.%20Vengo%20de%20la%20web."
                            className="btn-tech inline-block px-12 py-6 rounded-3xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-transform"
                        >
                            Consultar Diseño Residencial VIP
                        </a>
                    </div>
                </section>
            </article>

            <Footer />
        </div>
    );
};

export default HomeSalesLetter;
