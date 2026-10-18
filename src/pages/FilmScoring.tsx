// src/pages/FilmScoring.tsx

// Data estática extraída del sitio para mantener el componente limpio
const FILM_WORKS = [
  { title: "Canción sin Nombre", director: "Melina León", year: "2019", type: "Full-length film" },
  { title: "Allá en el Cielo", director: "Roddy Dextre", year: "2026", type: "Short Film" },
  { title: "Runa Simi", director: "Augusto Zegarra", year: "2025", type: "Full-length film documentary" },
  { title: "Love 1: Dog", director: "Florin Serban", year: "2018", type: "Full-length film" },
  { title: "Perro guardián", director: "Bacha Caravedo & Daniel Higashiona", year: "2014", type: "Full-length film" },
  { title: "Pacificum: El retorno al océano", director: "Mariana Tschudi", year: "2019", type: "Full-length documentary" },
];

export default function FilmScoring() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-16 tracking-wide">
        FILM SCORING
      </h1>
      
      {/* Bio / Statement */}
      <section className="max-w-4xl mx-auto font-serif text-lg leading-relaxed text-gray-800 mb-24">
        <p className="mb-8 text-justify">
          An active film scorer, "Pauchi Sasaki's effective scores" [Variety 2015] are featured in more than 50 feature-length and short films. She is the recipient of four international "Best Original Score" awards...
        </p>
        <blockquote className="border-l-2 border-brand-black pl-8 my-12 italic text-gray-700">
          “Composing for film demands the development of tools in order to achieve and assure specific effects in a diversity of parameters such as mood, narration, emotions, symbolism, directionality and aesthetic unity. Working with narrative artwork makes composition a highly conscious, strategic and delicate process...”
        </blockquote>
      </section>

      {/* Galería de Trabajos */}
      <h2 className="text-sm font-sans uppercase tracking-[0.2em] text-center mb-16 text-brand-gray">
        Selected Film Work
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {FILM_WORKS.map((film, index) => (
          <article key={index} className="flex flex-col group cursor-pointer">
            <div className="bg-brand-light aspect-2/3 w-full mb-6 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-gray-300 font-sans tracking-widest text-xs uppercase">Poster</span>
            </div>
            <h3 className="text-xl font-serif text-brand-black mb-2 group-hover:text-brand-gray transition-colors">
              {film.title}
            </h3>
            <p className="text-xs text-brand-gray uppercase tracking-widest mb-2">
              {film.year}
            </p>
            <p className="text-sm text-gray-800 mb-1">
              Dir: {film.director}
            </p>
            <p className="text-xs text-brand-gray italic">
              {film.type}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}