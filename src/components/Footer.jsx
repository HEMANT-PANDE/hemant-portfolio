import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200/60 py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Name and subtitle */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-zinc-900 tracking-wide">
            {data.name}
          </p>
          <p className="text-xs text-zinc-500 font-light mt-1">
            {data.subtitle}
          </p>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-350 hover:bg-zinc-50 transition-all shadow-sm"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-350 hover:bg-zinc-50 transition-all shadow-sm"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-350 hover:bg-zinc-50 transition-all shadow-sm"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="h-8 w-8 p-0 border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 rounded-lg hover:border-zinc-300 cursor-pointer shadow-sm"
            title="Scroll to Top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Copyright line */}
      <div className="max-w-6xl mx-auto border-t border-zinc-200/40 mt-8 pt-8 text-center text-[11px] font-mono text-zinc-400">
        <p>&copy; {currentYear} {data.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
