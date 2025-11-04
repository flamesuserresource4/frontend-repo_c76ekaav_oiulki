import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette } from 'lucide-react';

const skills = [
  { name: 'HTML', level: 95, color: 'from-orange-400 to-rose-400' },
  { name: 'CSS', level: 92, color: 'from-sky-400 to-indigo-400' },
  { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-amber-400' },
  { name: 'React', level: 88, color: 'from-cyan-400 to-blue-400' },
  { name: 'Affinity Designer', level: 82, color: 'from-fuchsia-400 to-pink-400' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full scroll-mt-20 bg-neutral-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-8 w-1 rounded bg-gradient-to-b from-fuchsia-400 to-cyan-400" />
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Skills</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="font-semibold">{s.name}</p>
                <span className="text-sm text-slate-300">{s.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 flex items-center gap-2 font-semibold"><Code2 className="h-5 w-5 text-cyan-300"/> Front‑End</div>
            <p className="text-sm text-slate-300">React, Tailwind, Framer Motion, Vite, Accessibility, Performance</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 flex items-center gap-2 font-semibold"><Palette className="h-5 w-5 text-fuchsia-300"/> Design</div>
            <p className="text-sm text-slate-300">Visual Design, Motion, Prototyping, Affinity Suite, Branding, Micro‑interactions</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 flex items-center gap-2 font-semibold"><Code2 className="h-5 w-5 text-cyan-300"/> Tools</div>
            <p className="text-sm text-slate-300">Git, Figma, Notion, Linear, Vercel, Netlify, Cloudflare</p>
          </div>
        </div>
      </div>
    </section>
  );
}
