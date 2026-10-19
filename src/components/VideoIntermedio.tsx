import { useEffect, useRef, useState } from "react";

function VideoIntermedio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActivo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center px-6 py-24 md:px-12"
    >
      <div className="w-full max-w-5xl">
        {activo ? (
          <iframe
            src="https://drive.google.com/file/d/1SF0MYICr4KkgL4NT9cQa8LD0vR0jNbA2/preview?autoplay=1"
            className="aspect-video w-full bg-black"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Video intermedio"
          />
        ) : (
          <div className="aspect-video w-full bg-black" />
        )}
      </div>
    </section>
  );
}

export default VideoIntermedio;