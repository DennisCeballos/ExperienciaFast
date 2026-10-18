
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Experiencia from './pages/Experiencia';
import Layout from './components/layout';
import FilmScoring from './pages/FilmScoring';

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname
  );

  // Navegar y actualizar la URL
  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

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
    return (
      <Layout
        currentPath={currentPath}
        onNavigate={handleNavigate}
      >
        {content}
      </Layout>
    );
  }

  return (content);
}
