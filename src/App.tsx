
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Experiencia from './pages/Experiencia';
import FilmScoring from './pages/FilmScoring';

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname
  );

  // Permitir que funcionen los botones atrás y adelante
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const standardLayoutPaths = ['/', '/otraVersion', '/creditos'];

  const content = (() => {
    switch (currentPath) {
      case '/':
        return <Home />;

      case '/otraVersion':
        return <FilmScoring />;

      case '/creditos':
        return <Home />;

      case '/vistaFinal':
        return <Experiencia />;

      default:
        return <Home />;
    }
  })();

  if (standardLayoutPaths.includes(currentPath)) {
    return (content);
  }

  return (content);
}
