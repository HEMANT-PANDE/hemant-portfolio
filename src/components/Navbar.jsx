import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#research', label: 'Research' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#leadership', label: 'Leadership' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-2xl transition-all duration-300 ${
      scrolled 
        ? 'glass-panel bg-white/85 border-zinc-250 py-3 shadow-md' 
        : 'bg-transparent py-5 border-transparent'
    }`}>
      <div className="px-6 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo - Solid visible colors */}
          <a href="#" className="flex items-center gap-1.5 font-bold text-2xl group select-none">
            <span className="text-zinc-900 group-hover:text-violet-600 transition-colors">
              Hemant
            </span>
            <span className="text-zinc-400 group-hover:text-zinc-500 transition-colors font-medium">.pande</span>
          </a>

          {/* Desktop Navigation - Larger Font & Clearer Weight */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium tracking-wide rounded-xl transition-all relative ${
                  activeSection === link.href 
                    ? 'text-violet-600 font-bold' 
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-violet-50/60 border border-violet-100/50 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-zinc-200 text-zinc-700 hover:text-zinc-900 text-xs font-semibold gap-1 hover:border-violet-500/30 hover:bg-zinc-50 transition-all rounded-xl shadow-sm"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-zinc-600 hover:text-zinc-900 p-1.5 hover:bg-zinc-100 border border-transparent hover:border-zinc-200 rounded-xl transition-all cursor-pointer"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-zinc-155"
            >
              <div className="flex flex-col gap-2 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 text-sm font-semibold rounded-xl transition-all ${
                      activeSection === link.href 
                        ? 'text-violet-600 bg-violet-50 border border-violet-100' 
                        : 'text-zinc-605 hover:text-zinc-900 hover:bg-zinc-50 border border-transparent'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-zinc-100 mt-2">
                  <Button 
                    className="w-full text-xs gap-1.5 cursor-pointer font-semibold"
                    size="sm"
                    onClick={() => {
                      setIsOpen(false);
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact Me
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
