import React, { useEffect, useState } from 'react';
import { ArrowUp, Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-smooth bg-neutral-950 font-sans text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-lg font-semibold text-transparent">AR</a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm text-slate-300 hover:text-white">About</a>
            <a href="#skills" className="text-sm text-slate-300 hover:text-white">Skills</a>
            <a href="#portfolio" className="text-sm text-slate-300 hover:text-white">Work</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className="rounded-lg border border-white/15 bg-white/5 p-2 hover:bg-white/10">
              {theme === 'dark' ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
            </button>
            <a href="#contact" className="hidden rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-cyan-500/20 md:inline-block">Hire Me</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Showcase />
      </main>

      {/* Back to top */}
      {showTop && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 p-3 text-white shadow-lg backdrop-blur transition hover:scale-105"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
