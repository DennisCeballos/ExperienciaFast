// src/components/FloatingImage.tsx
import { motion } from 'framer-motion';

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export default function FloatingImage({ src, alt, className = '', delay = 0 }: FloatingImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 5.5, delay }}
      className={`relative ${className}`}
    >
      {/* Animación de "Temblor/Vacío" nativa con Framer Motion */}
      <motion.div 
        animate={{
          y: [0, -1, 2, -1, 0],
          x: [0, 1, -1, -2, 0],
          rotate: [0, 0.5, -0.5, 0, 0]
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        }}
        className="w-full h-full"
      >
        <img 
          src={src} 
          alt={alt} 
          // Estilo en línea para la máscara de bordes difuminados
          style={{
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
          }}
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>
    </motion.div>
  );
}