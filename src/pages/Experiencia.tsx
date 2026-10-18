// src/pages/Experiencia.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingImage from '../components/FloatingImage';

export default function Experiencia() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lightOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0, 0.8, 1]);
  const lightScale = useTransform(scrollYProgress, [0, 0.6, 0.8, 1], [0, 0.2, 0.6, 1]);

  return (
    // Colores inyectados directamente: Fondo negro (#050505) y texto gris (#a3a3a3)
    <div className="bg-obra-dark text-obra-gray font-serif min-h-screen overflow-x-hidden">
      <div ref={containerRef} className="relative w-full">

        {/* FONDO GLOBAL: La Luz Cálida (#fef0d8) */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center"
          style={{ opacity: lightOpacity }}
        >
          <motion.div
            className="w-75 h-75 md:w-75 md:h-75 rounded-full bg-obra-light mix-blend-screen blur-[100px]"
            style={{ scale: lightScale }}
          />
        </motion.div>

        {/* CONTENIDO SCROLLABLE */}
        <div className="relative z-10">

          {/* ACTO 1 */}
          <section className="min-h-[120vh] flex flex-col items-center justify-center px-6 pt-20">
            {/* PON ESTO EN SU LUGAR: */}
            <img 
              src="/mirada.jpeg" 
              alt="Mirada cansada" 
              className="w-full max-w-lg aspect-video object-cover mb-12 opacity-80"
              style={{
                // Mantenemos esto para que los bordes sigan difuminados y se fundan con el fondo negro,
                // pero la imagen estará 100% estática.
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
              }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2 }}
              className="text-center text-lg md:text-2xl leading-relaxed max-w-2xl text-white/90"
            >
              Decidimos que el escenario no fuera solo un espacio físico, sino una representación directa de la mente del personaje.
            </motion.p>
          </section>

          {/* ACTO 2 */}
          <section className="min-h-[150vh] px-6 py-24 relative max-w-5xl mx-auto flex flex-col md:block">
            <div className="md:absolute top-10 left-0 w-full md:w-1/2 mb-16 md:mb-0">
              <FloatingImage src="/escenario_actriz.jpeg" alt="Proyecciones rostros" />
            </div>

            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
              className="md:absolute top-1/4 right-10 w-full md:w-1/3 text-base md:text-xl text-obra-gray leading-loose mb-16 md:mb-0"
            >
              Imágenes urbanas, miradas cansadas, la figura lejana tras la ventana...
            </motion.p>

            <div className="md:absolute top-1/3 right-0 w-full md:w-5/12 mb-16 md:mb-0 mt-8 md:mt-0">
              <FloatingImage src="/escenario_completo.jpeg" alt="Calle proyectada" delay={0.1} />
            </div>

            <div className="md:absolute top-[60%] left-10 w-full md:w-1/3 mb-16 md:mb-0">
              <FloatingImage src="/escenario_solo_calle.jpeg" alt="Niño con carro" delay={0.1} />
            </div>

            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
              className="md:absolute top-[75%] right-1/4 w-full md:w-1/3 text-center md:text-left text-base md:text-xl text-obra-gray leading-loose"
            >
              Esa animación sencilla en líneas blancas... evoca la infancia y la inocencia perdida.
            </motion.p>
          </section>

          {/* ACTO 3 */}
          <section className="h-screen flex flex-col items-center justify-center px-6">
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}
              className="text-center text-xl md:text-3xl text-obra-light/80 max-w-3xl leading-relaxed"
            >
              La voz en off llena el vacío de la sala en penumbras mientras el espectador procesa cada imagen...
            </motion.p>
          </section>

          {/* ACTO 4: Video */}
          <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl shadow-obra-light/20 border border-white/10"
            >
              <video
                controls
                className="w-full h-full object-cover"
                poster="/escenario_actriz.jpeg"
              >
                <source src="/video-convertido.webm" type="video/webm" />
                Tu navegador no soporta el formato de video.
              </video>
            </motion.div>
          </section>

          {/* ACTO 5 */}
          <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-obra-dark/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}
              className="max-w-md w-full text-center"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-10 overflow-hidden rounded-full shadow-[0_0_50px_rgba(254,240,216,0.3)] border border-obra-light/20">
                <img
                  src="/actriz_sola_luz.jpeg"
                  alt="Mujer iluminada"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-sans text-sm tracking-[0.2em] uppercase text-obra-gray mb-12">
                Una confesión directa sobre el agotamiento, las decisiones difíciles, el abandono y las fracturas.
              </p>

              {/* Bloque de Créditos */}
              <div className="font-sans text-xs md:text-sm text-white/70 space-y-4 tracking-widest uppercase">
                <p><span className="text-obra-light/80">Dirección & Concepto:</span> Nombre Apellido</p>
                <p><span className="text-obra-light/80">Actuación:</span> Nombre Apellido</p>
                <p><span className="text-obra-light/80">Visuales & Proyección:</span> Nombre Apellido</p>
                <p><span className="text-obra-light/80">Sonido & Iluminación:</span> Nombre Apellido</p>
              </div>

              <button className="mt-16 px-8 py-3 border border-obra-gray/30 text-obra-gray font-sans text-xs uppercase tracking-widest hover:text-white hover:border-white transition-all duration-300">
                Ver detalles de la obra
              </button>
            </motion.div>
          </section>

        </div>
      </div>
    </div>
  );
}