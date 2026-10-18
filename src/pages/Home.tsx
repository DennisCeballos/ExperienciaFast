// src/pages/Home.tsx

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      {/* Hero Section */}
      <section className="mb-24">
        {/* Placeholder para la imagen principal (Ej. Intervention at Proyecto AMIL) */}
        <div className="w-full h-[60vh] bg-brand-light flex items-center justify-center mb-6">
          <img
            src="/mirada.jpeg"
            alt="Intervention at Proyecto AMIL art gallery"
            className="w-full h-[60vh] object-cover mb-6"
          />
        </div>
        <p className="text-xs text-brand-gray text-center uppercase tracking-widest">
          Texto de la mirada. Photo by la foto.
        </p>
      </section>

      {/* Grid de Instrumentos y Obras */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div>
           <div className="w-full aspect-square bg-brand-light mb-6 flex items-center justify-center">
            <img
              src="/escenario_actriz.jpeg"
              alt="Extended Violin, instrumento diseñado por la artista"
              className="w-full aspect-square object-cover mb-6"
            />
           </div>
           <p className="text-xs text-brand-gray text-center uppercase tracking-widest">
             Escenario del escenario - texto
           </p>
        </div>
        <div>
           <div className="w-full aspect-square bg-brand-light mb-6 flex items-center justify-center">
            <img
              src="/escenario_completo.jpeg"
              alt="The Speaker Dress, escultura sonora vestible"
              className="w-full aspect-square object-cover mb-6"
            />
           </div>
           <p className="text-xs text-brand-gray text-center uppercase tracking-widest">
             The Speaker Dress - Wearable Sound Sculpture
           </p>
        </div>
      </section>

      {/* Biografía */}
      <section className="max-w-3xl mx-auto font-serif text-lg leading-relaxed text-gray-800 space-y-6 text-justify">
        <h2 className="text-center font-sans uppercase tracking-[0.2em] text-sm text-brand-gray mb-10">
          Concepto
        </h2>
        <p>
          Para esta propuesta nos planteamos explorar la culpa, el dolor y la memoria desde un lugar muy íntimo y honesto, alejándonos de lo convencional. Entre las cuatro personas que creamos esta obra, decidimos que el escenario no fuera solo un espacio físico, sino una representación directa de la mente del personaje. Por eso, al principio preferimos ocultar el cuerpo de la actriz y dejar que el espacio hablara a través de recursos audiovisuales: proyecciones de rostros en primer plano que reflejan miradas cansadas, imágenes urbanas, la figura lejana tras la ventana y esa animación sencilla en líneas blancas de un niño jugando con un auto, que evoca la infancia y la inocencia perdida.
        </p>
        <p>
          Buscamos que la tecnología y la iluminación no fueran un simple adorno, sino herramientas clave para construir la historia y transmitir la distancia emocional del personaje. La voz en off llena el vacío de la sala en penumbras mientras el espectador procesa cada imagen, hasta que finalmente dejamos que una luz cálida ilumine a la actriz al caminar hacia el centro del escenario. Con este contraste entre lo virtual y la presencia física, quisimos que el público sintiera de forma cruda y cercana el peso del monólogo: una confesión directa sobre el agotamiento, las decisiones difíciles, el abandono y las fracturas en las relaciones familiares.
        </p>
      </section>

            {/* Video */}
      <section className="mt-24">
        <video
          controls
          playsInline
          preload="metadata"
          className="w-full max-h-[80vh] object-contain bg-black"
        >
          <source src="/video-convertido.webm" type="video/webm" />
          Tu navegador no soporta la reproducción de video.
        </video>
        <p className="text-xs text-brand-gray text-center uppercase tracking-widest mt-4">
          Video performance
        </p>
      </section>
    </div>
  );
}