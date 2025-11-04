import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Instagram, Linkedin, Dribbble, Quote, Mail } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    image: 'https://images.unsplash.com/photo-1626684468293-ac18117177a9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjIyMzk4OTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    demo: '#',
    code: '#',
  },
  {
    title: 'Gradient Studio',
    image: 'https://images.unsplash.com/photo-1761623134341-b746e26f4325?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmFkaWVudCUyMFN0dWRpb3xlbnwwfDB8fHwxNzYyMjM5ODk5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    demo: '#',
    code: '#',
  },
  {
    title: 'Motion Portfolio',
    image: 'https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb3Rpb24lMjBQb3J0Zm9saW98ZW58MHwwfHx8MTc2MjIzOTkwMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    demo: '#',
    code: '#',
  },
  {
    title: '3D Landing',
    image: 'https://images.unsplash.com/photo-1682201067795-5f37bb41638a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwzRCUyMExhbmRpbmd8ZW58MHwwfHx8MTc2MjIzOTkwMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    demo: '#',
    code: '#',
  },
];

const testimonials = [
  {
    name: 'Sofia Mendes',
    role: 'Product Lead, Wave',
    quote:
      'Alex delivered beyond expectations. The interface feels alive yet remains intuitive. A joy to ship.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Ethan Park',
    role: 'Founder, Lumio',
    quote:
      'Rare blend of design taste and engineering rigor. Our engagement metrics skyrocketed after launch.',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Mina Cho',
    role: 'Creative Director, Haze',
    quote:
      'Smooth process, stunning results. Motion details made the brand feel premium and human.',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Showcase() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full bg-neutral-950 text-white">
      {/* Portfolio */}
      <section id="portfolio" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-center gap-3">
            <div className="h-8 w-1 rounded bg-gradient-to-b from-fuchsia-400 to-cyan-400" />
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <img src={p.image} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <div className="mt-3 flex items-center gap-3 text-sm">
                    <a href={p.demo} className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"><ExternalLink className="h-4 w-4"/> Demo</a>
                    <a href={p.code} className="inline-flex items-center gap-1 text-slate-300 hover:text-white"><Github className="h-4 w-4"/> Code</a>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Quote className="h-4 w-4 text-fuchsia-300" />
            <span className="text-sm text-slate-300">What clients say</span>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-3xl"
              >
                <img src={testimonials[idx].avatar} alt={testimonials[idx].name} className="mx-auto h-20 w-20 rounded-full object-cover" />
                <p className="mt-6 text-balance text-lg text-slate-200">“{testimonials[idx].quote}”</p>
                <p className="mt-4 text-sm text-slate-400">{testimonials[idx].name} • {testimonials[idx].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 w-8 rounded-full transition-colors ${i === idx ? 'bg-cyan-400' : 'bg-white/15 hover:bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 pb-12 pt-4 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-center gap-3">
            <div className="h-8 w-1 rounded bg-gradient-to-b from-fuchsia-400 to-cyan-400" />
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Let’s Connect</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-1 gap-4">
                <input className="rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm outline-none ring-cyan-500/40 placeholder:text-slate-400 focus:ring-2" placeholder="Your name" required />
                <input type="email" className="rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm outline-none ring-cyan-500/40 placeholder:text-slate-400 focus:ring-2" placeholder="Your email" required />
                <textarea rows={5} className="rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm outline-none ring-cyan-500/40 placeholder:text-slate-400 focus:ring-2" placeholder="Your message" required />
              </div>
              <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-slate-300">I’m active on social — reach out for collaborations, freelance work, or just to say hi.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a aria-label="Instagram" href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"><Instagram className="h-4 w-4"/> Instagram</a>
                  <a aria-label="Dribbble" href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"><Dribbble className="h-4 w-4"/> Dribbble</a>
                  <a aria-label="LinkedIn" href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"><Linkedin className="h-4 w-4"/> LinkedIn</a>
                  <a aria-label="GitHub" href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"><Github className="h-4 w-4"/> GitHub</a>
                  <a aria-label="Email" href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"><Mail className="h-4 w-4"/> Email</a>
                </div>
              </div>
              <footer className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-slate-400">
                <p>© {new Date().getFullYear()} Alex Rivera</p>
                <p className="animate-pulse bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text font-medium text-transparent">Made with passion</p>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
