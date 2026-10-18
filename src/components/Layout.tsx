// src/components/Layout.tsx
import { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Layout({ children, currentPath, onNavigate }: LayoutProps) {
  const navItems = [
    { name: 'Presentacion', path: '/' },
    { name: 'OtraVersion', path: '/otraVersion' },
    { name: 'Creditos', path: '/creditos' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col md:flex-row justify-between items-center py-10 px-6 md:px-12 lg:px-24 border-b border-gray-100">
        <div 
          className="mb-8 md:mb-0 text-center md:text-left cursor-pointer"
          onClick={() => onNavigate('/')}
        >
          <h1 className="text-3xl lg:text-4xl font-serif tracking-widest uppercase text-brand-black">
            Nombre principal
          </h1>
          <p className="text-xs text-brand-gray uppercase tracking-[0.2em] mt-2">
            Subtitulo
          </p>
        </div>
        
        <nav>
          <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 max-w-lg text-xs uppercase tracking-widest text-brand-gray">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => onNavigate(item.path)}
                  className={`hover:text-brand-black transition-colors duration-300 ${
                    currentPath === item.path ? 'text-brand-black font-semibold' : ''
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="grow">
        {children}
      </main>

      <footer className="py-16 text-center text-xs text-brand-gray uppercase tracking-widest mt-20 border-t border-gray-100">
        <p>© Ni me han dicho el nombre de esto - 2026</p>
        <button
          onClick={() => onNavigate('/vistaFinal')}
          className={'hover:text-brand-black transition-colors duration-300'}
        >
          OJITO
        </button>
      </footer>
    </div>
  );
}