import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full scroll-mt-20 bg-neutral-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-8 w-1 rounded bg-gradient-to-b from-fuchsia-400 to-cyan-400" />
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About Me</h2>
        </div>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <p className="text-balance text-slate-300 md:text-lg">
              I’m a multidisciplinary creator blending design, code, and motion. With a focus on
              delightful user experiences, I translate complex ideas into elegant interactive
              products. My toolkit spans React, Tailwind, Framer Motion, and a keen eye for
              typography and color.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-300 md:text-base">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Experience</p>
                <p>4+ years</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Focus</p>
                <p>Web Design, Motion, Front‑End</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Location</p>
                <p>Remote / Worldwide</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Availability</p>
                <p>Open for select projects</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 p-1 md:h-56 md:w-56"
          >
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-neutral-900/80">
              <User className="h-16 w-16 text-cyan-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
