import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import VideoIntermedio from '../components/VideoIntermedio';



type MemoryImageProps = {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  floating?: boolean;
  floatDuration?: number;
};

function MemoryImage({
  src,
  alt,
  className = '',
  delay = 0,
  floating = false,
  floatDuration = 12,
}: MemoryImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.48, 0.78, 1],
    [0, 0.65, 0.8, 0.35, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [32, 0, -38]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.97]
  );

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={
        reduceMotion
          ? { opacity: 0.8 }
          : { opacity, y, scale }
      }
    >
      {/* Halo tenue: separa visualmente la imagen del vacío */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[8%] -z-10 rounded-full bg-obra-light/[0.09] blur-3xl"
      />

      {/* Movimiento independiente del desplazamiento por scroll */}
      <motion.div
        className="relative w-full"
        animate={
          floating && !reduceMotion
            ? {
              y: [0, -9, -3, 7, 0],
              x: [0, 2, -2, 1, 0],
              rotate: [0, 0.35, -0.2, 0.25, 0],
            }
            : undefined
        }
        transition={
          floating && !reduceMotion
            ? {
              duration: floatDuration,
              delay,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }
            : undefined
        }
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          className="block h-auto w-full object-cover"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 8%, black 88%, transparent)',
            maskImage:
              'linear-gradient(to bottom, transparent, black 8%, black 88%, transparent)',
            filter: 'saturate(0.78) contrast(1.05)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}


export default function Experiencia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // La luz permanece apagada al principio.
  // Después entra por la izquierda y se expande hacia el centro.
  const lightOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.45, 0.75, 1],
    [0, 0.08, 0.45, 0.85, 1, 1]
  );

  const lightX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.7, 1],
    ['-48vw', '-38vw', '-25vw', '-8vw', '0vw']
  );

  const lightScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.75, 1],
    [0.55, 0.8, 1.1, 1.5, 1.8]
  );

  // La profundidad del vacío se reduce cuando entra la luz.
  const voidOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [1, 1, 0.75, 0.42]
  );

  // Pequeña viñeta para conservar los bordes oscuros.
  const vignetteOpacity = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [0.95, 0.78, 0.48]
  );

  const reveal = {
    initial: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  const revealTransition = {
    duration: reduceMotion ? 0 : 1.5,
    ease: 'easeOut' as const,
  };

  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [0.55, 0]
  );

  return (
    <main
      ref={containerRef}
      className="experience relative min-h-screen overflow-clip bg-obra-dark font-serif text-obra-gray"
    >
      {/* CAPAS ATMOSFÉRICAS FIJAS */}

      {/* Luz cálida que entra desde un lateral */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        style={{
          background: `
    radial-gradient(
      circle at 50% 50%,
      rgba(255, 220, 185, 0.24) 0%,
      rgba(190, 125, 85, 0.16) 12%,
      rgba(161, 102, 72, 0.10) 25%,
      rgba(161, 102, 72, 0.035) 43%,
      transparent 65%
    )
  `,
          opacity: lightOpacity,
          transform: `translateX(${lightX}%) scale(${lightScale})`,
        }}
      >
        <motion.div
          className="absolute left-0 top-1/2 h-[65vw] w-[65vw] min-h-[420px] min-w-[420px] max-h-[1150px] max-w-[1150px] -translate-y-1/2 rounded-full"
          style={{
            x: lightX,
            scale: lightScale,
            background:
              'radial-gradient(circle, rgba(161,102,72,0.58) 0%, rgba(161,102,72,0.34) 28%, rgba(161,102,72,0.15) 52%, transparent 74%)',
            filter: 'blur(55px)',
          }}
        />
      </motion.div>

      {/* Vacío: centro profundo, borde difuso y ligera atmósfera */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{ opacity: voidOpacity }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 35% 40% at 50% 45%,
                #000 0%,
                rgba(0,0,0,0.96) 25%,
                rgba(0,0,0,0.72) 48%,
                rgba(5,5,5,0.18) 75%,
                transparent 100%
              ),
              radial-gradient(
                ellipse at center,
                transparent 25%,
                rgba(0,0,0,0.55) 100%
              )
            `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 55%, transparent 0%, rgba(5,5,5,0.16) 40%, #050505 100%)',
          }}
        />
      </motion.div>

      {/* Viñeta cinematográfica */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          opacity: vignetteOpacity,
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.36), transparent 24%, transparent 76%, rgba(0,0,0,0.36))',
        }}
      />

      {/* CONTENIDO */}

      <div className="relative z-10">

        {/* ACTO I — LA AUSENCIA */}

        <section className="relative flex min-h-[110svh] flex-col items-center justify-start px-0 pb-24 pt-10 md:pt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2 }}
            className="relative mb-10 w-full"
          >
            <div
              className="absolute inset-0 scale-110 blur-3xl"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(187,130,101,0.08), transparent 70%)',
              }}
            />
            <img
              src="/mirada.jpeg"
              alt="Mirada cansada de la protagonista"
              fetchPriority="high"
              className="relative block h-[32vh] min-h-[220px] max-h-[420px] w-full object-cover object-center md:h-[38vh]"
              style={{
                WebkitMaskImage:
                  'radial-gradient(ellipse, black 30%, rgba(0,0,0,0.8) 53%, transparent 77%)',
                maskImage:
                  'radial-gradient(ellipse, black 30%, rgba(0,0,0,0.8) 53%, transparent 77%)',
              }}
            />
          </motion.div>

          <motion.div
            variants={reveal}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={revealTransition}
            className="relative max-w-2xl text-center"
          >
            <span className="mb-7 block font-sans text-[10px] uppercase tracking-[0.45em] text-[#c5a18c] md:text-xs">
              SOBRE LOBOS
            </span>

            <p className="text-lg leading-[1.9] text-[#e5dfd9] md:text-2xl md:leading-[1.85]">
              Decidimos que el escenario no fuera solo un
              espacio físico, sino una representación directa
              de la mente del personaje.
            </p>
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute bottom-12 flex flex-col items-center gap-3"
            style={{ opacity: scrollHintOpacity }}
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-white/50">
              Continúa
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-[#c5a18c]/70 to-transparent" />
          </motion.div>
        </section>

        <VideoIntermedio />

        {/* ACTO II — LOS FRAGMENTOS */}

        <section className="relative mx-auto min-h-[155svh] max-w-6xl px-6 py-20 md:px-12 md:py-28">
          <div className="relative min-h-[130svh]">

            {/* FRAGMENTO 1 — ROSTROS */}

            <MemoryImage
              src="/escenario_solo_calle.jpeg"
              alt="Rostros proyectados sobre el escenario"
              floating
              floatDuration={13}
              className="absolute left-0 top-[2%] w-[49%] max-w-[390px] md:left-[2%] md:w-[34%]"
            />

            <motion.p
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={reveal}
              transition={revealTransition}
              className="absolute right-0 top-[12%] w-[49%] text-sm leading-[1.9] text-[#ded5ce] md:right-[7%] md:w-[38%] md:text-xl md:leading-loose"
            >
              Imágenes urbanas, miradas cansadas, la figura
              lejana tras la ventana...
            </motion.p>


            {/* ATMÓSFERA CENTRAL */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[25%] top-[35%] h-40 w-40 rounded-full bg-obra-light/[0.05] blur-3xl md:left-[32%] md:top-[37%] md:h-72 md:w-72"
            />



            {/* FRAGMENTO 2 — TEXTO A LA IZQUIERDA, IMAGEN A LA DERECHA */}

            <div className="absolute left-0 top-[43%] flex w-full items-center gap-6 md:top-[42%] md:gap-12">

              <motion.p
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={reveal}
                transition={revealTransition}
                className="relative z-10 w-1/2 shrink-0 text-sm leading-[1.9] text-[#ded5ce] md:w-[38%] md:text-xl md:leading-loose"
              >
                Esa animación sencilla en líneas blancas evoca
                la infancia y la inocencia perdida.
              </motion.p>

              <MemoryImage
                src="/escenario_completo.jpeg"
                alt="Vista completa de la calle proyectada sobre el escenario"
                floating
                floatDuration={16}
                delay={0.8}
                className="relative z-0 w-1/2 min-w-0 md:w-[42%]"
              />

            </div>

          </div>
        </section>



        {/* ACTO III — LA VOZ */}

        <section className="relative flex min-h-[105svh] flex-col items-center justify-center overflow-hidden px-7 py-32">

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(187,130,101,0.045), transparent 68%)',
              filter: 'blur(35px)',
            }}
          />

          <motion.div
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={reveal}
            transition={{ duration: 2.2 }}
            className="relative max-w-3xl text-center"
          >
            <span className="mb-10 block font-sans text-[10px] uppercase tracking-[0.4em] text-[#b99b88]">
              La presencia invisible
            </span>

            <p className="text-xl leading-[1.9] text-[#eee5de] md:text-3xl md:leading-[1.8]">
              La voz en off llena el vacío de la sala en
              penumbras mientras el espectador procesa cada
              imagen.
            </p>

            <div
              aria-hidden="true"
              className="mx-auto mt-16 h-px w-20 bg-gradient-to-r from-transparent via-[#bb8265]/60 to-transparent"
            />
          </motion.div>
        </section>

        {/* ACTO IV — LA OBRA */}

        <section className="relative flex min-h-screen flex-col items-center justify-center px-5 py-24 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.8 }}
            className="w-full max-w-5xl"
          >
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#c5a18c]">
                Performance
              </span>
            </div>

            <iframe
              src="https://drive.google.com/file/d/1cCNt4nxm2X2WDSuYPRV5CwZ4KFSE87et/preview"
              className="block aspect-video w-full bg-black"
              allow="autoplay"
              allowFullScreen
              title="Video del escenario"
            />
          </motion.div>
        </section>

        {/* ACTO V — LA PRESENCIA */}
        <section className="relative flex min-h-screen flex-col items-center px-6 pb-24 pt-20 md:pb-32 md:pt-28">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 2 }}
            className="w-full max-w-5xl"
          >
            {/* La fotografía no tiene marco ni máscara circular */}
            <div className="relative mx-auto w-full max-w-4xl">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 scale-75 blur-[90px]"
                style={{
                  background:
                    'radial-gradient(ellipse, rgba(220,166,125,0.16), transparent 70%)',
                }}
              />

              <img
                src="/actriz_sola_luz.jpeg"
                alt="La protagonista iluminada por una luz lejana"
                loading="lazy"
                className="block h-auto max-h-[82svh] w-full object-contain object-center"
                style={{
                  filter: 'contrast(1.04) saturate(0.82)',
                }}
              />
            </div>

            <div className="mx-auto max-w-xl text-center md:mt-24">

              <p className="font-sans text-xs uppercase leading-[2.2] tracking-[0.24em] text-[#d7c7ba] md:text-sm">
                Una confesión directa sobre el agotamiento,
                las decisiones difíciles, el abandono y las
                fracturas.
              </p>

              <div
                aria-hidden="true"
                className="mx-auto my-14 h-px w-12 bg-[#bb8265]/60"
              />

              <div className="space-y-5 font-sans text-[10px] uppercase tracking-[0.2em] text-[#c4bbb4] md:text-xs">
                
                <p className="font-sans text-xs uppercase leading-[2.2] tracking-[0.24em] text-[#e3b99d] md:text-sm">
                  Equipo Creativo:
                </p>
                <p>
                  Donatella Cobeña
                </p>
                <p>
                  Ximena Espinoza
                </p>
                <p>
                  Estefano Portillo
                </p>
                <p>
                  Flavia Mauicio
                </p>
                <p className="pt-5 font-sans text-xs uppercase leading-[2.2] tracking-[0.24em] text-[#e3b99d] md:text-sm">
                  PERFORMER:
                </p>
                <p>
                  Ximena Espinoza
                </p>
                
                <p className="pt-5 font-sans text-xs uppercase leading-[2.2] tracking-[0.24em] text-[#e3b99d] md:text-sm">
                  REGISTRO AUDIOVISUAL:
                </p>
                <p>
                  Munaytica Cusihuallpa
                </p>
                <p>
                  Yadhira Meza
                </p>
                <p>
                  Cecilia Lazo
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  document.getElementById('detalles-obra')?.scrollIntoView({
                    behavior: reduceMotion ? 'auto' : 'smooth',
                    block: 'start',
                  });
                }}
                className="mt-16 border border-white/20 px-7 py-3.5 font-sans text-[10px] uppercase tracking-[0.25em] text-[#e5d9cf] transition-colors duration-500 hover:border-[#bb8265]/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bb8265]"
              >
                Ver detalles de la obra
              </button>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}