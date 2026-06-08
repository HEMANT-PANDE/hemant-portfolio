import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero({ data }) {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-12 px-6 sm:px-8">
      {/* Background Soft Gradients (Light Theme Orbs) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="glowing-orb -top-40 -left-20 h-[35rem] w-[35rem] bg-violet-200/35"
          animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="glowing-orb bottom-10 -right-20 h-[40rem] w-[40rem] bg-indigo-200/30"
          animate={{ x: [0, -30, 0], y: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,244,245,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,244,245,0.7)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />
      </div>

      <div className="relative max-w-4xl mx-auto w-full z-10 text-center flex flex-col items-center">
        {/* Dynamic Premium Typography Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]"
        >
          Hey, I'm <br />
          <span className="font-serif-display font-normal italic text-violet-600 block mt-2">
            {data.name}
          </span>
        </motion.h1>

        {/* Short Summary Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-zinc-500 font-light text-base sm:text-lg leading-relaxed"
        >
          {data.summary}
        </motion.p>

        {/* Actions buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-xl px-7 py-6 text-sm font-semibold shadow-md cursor-pointer hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Projects
          </Button>
          <a
            href="./Updated - Hemant Pande - Resume.pdf"
            target="_blank"
            download
          >
            <Button
              variant="outline"
              className="rounded-xl px-7 py-6 text-sm font-semibold cursor-pointer border-zinc-200 text-zinc-700 hover:-translate-y-0.5 transition-all duration-300 gap-2"
            >
              <Download className="h-4 w-4" />
              Get Resume
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Down Chevron indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 cursor-pointer p-2 rounded-full border border-zinc-100 bg-white shadow-sm hover:shadow-md transition-all"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown size={16} className="text-zinc-400" />
      </motion.div>
    </section>
  );
}
