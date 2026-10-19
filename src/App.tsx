import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Experiencia from './pages/Experiencia';

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
        return <Experiencia />;

      case '/antiguo':
        return <Home />;

      default:
        return <Experiencia />;
    }
  })();

  if (standardLayoutPaths.includes(currentPath)) {
    return (content);
  }

  return (content);
}
