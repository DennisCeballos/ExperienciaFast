import { type ReactNode } from 'react';

interface SecondLayoutProps {
  children: ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function SecondLayout({
  children,
  onNavigate,
}: SecondLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-6 flex gap-6">
        <button onClick={() => onNavigate('/')}>
          Presentación
        </button>
      </nav>

      <main className="grow">
        {children}
      </main>
    </div>
  );
}