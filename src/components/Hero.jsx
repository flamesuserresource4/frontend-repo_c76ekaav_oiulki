import React, { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Rocket, Download, Sparkles } from 'lucide-react';

const words = [
  'Creative Designer',
  'Web Developer',
  'UI/UX Enthusiast',
  'Animator',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  // mouse reactive glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1], [-8, 8]);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const gradientId = useMemo(() => `grad-${Math.random().toString(36).slice(2)}`,[ ]);

  return (
    <section id="home" className="relative min-h-[100dvh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* grainy gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.25),transparent_50%),radial-gradient(ellipse_at_bottom,_rgba(56,189,248,0.2),transparent_55%)] mix-blend-screen"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.3),rgba(2,6,23,0.9))]" />
      </div>

      {/* Content */}
      <div onMouseMove={handleMouseMove} className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-32 pb-24 md:pt-40">
        <motion.div
          style={{ rotateX, rotateY }}
          className="w-full max-w-3xl text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-fuchsia-400" />
            <span className="text-xs font-medium tracking-wide text-fuchsia-200">Futuristic • Interactive • Bold</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display bg-gradient-to-b from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl"
          >
            Hi, I’m Alex Rivera
          </motion.h1>

          <div className="mt-4 h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="text-lg text-cyan-200/90 md:text-xl"
              >
                {words[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-sm text-slate-300 md:text-base"
          >
            I craft immersive, high-performance interfaces that merge aesthetics with technology.
            Let’s build something remarkable together.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02] focus:outline-none">
              <Rocket className="h-4 w-4" /> Hire Me
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10">
              <ArrowUpRight className="h-4 w-4" /> View Projects
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Decorative SVG aura following mouse */}
        <svg className="pointer-events-none absolute -z-0" style={{ left: `${mouseX.get() * 100}%`, top: `${mouseY.get() * 100}%`, transform: 'translate(-50%,-50%)' }} width="400" height="400" viewBox="0 0 400 400" fill="none" aria-hidden>
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#A78BFA" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="180" fill={`url(#${gradientId})`} />
        </svg>
      </div>
    </section>
  );
}
