import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function About({ data }) {
  return (
    <section id="about" className="py-14 relative overflow-hidden bg-white border-t border-zinc-100">
      {/* Decorative ambient background orb */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 glowing-orb bg-indigo-500/5" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            About <span className="font-serif-display font-normal italic text-gradient-primary">Me</span>
          </h2>
          <div className="h-1.5 w-12 rounded-full bg-violet-600 mt-3" />
        </div>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          {/* Left Column - Photo & Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-zinc-200/60 bg-zinc-50/50 shadow-sm relative">
              <CardContent className="p-6 flex flex-col items-center">
                {/* Photo container */}
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm mb-6">
                  <img
                    src="./avatar.jpeg"
                    alt={data.name}
                    className="w-full h-full object-cover transition-transform duration-500 scale-100 hover:scale-105"
                  />
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-zinc-900">{data.name}</h3>
                  <p className="text-xs text-violet-600 font-mono mt-1">{data.title}</p>
                </div>

                {/* Contact Items */}
                <div className="w-full space-y-3 border-t border-zinc-100 pt-5 text-sm text-zinc-600">
                  <div className="flex items-center gap-3 hover:text-zinc-900 transition-colors">
                    <Mail className="h-4 w-4 text-violet-600 shrink-0" />
                    <a href={`mailto:${data.email}`} className="truncate font-light text-xs">{data.email}</a>
                  </div>
                  <div className="flex items-center gap-3 hover:text-zinc-900 transition-colors">
                    <Phone className="h-4 w-4 text-violet-600 shrink-0" />
                    <span className="font-light text-xs">{data.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 hover:text-zinc-900 transition-colors">
                    <MapPin className="h-4 w-4 text-violet-600 shrink-0" />
                    <span className="font-light text-xs">{data.location}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2.5 border-t border-zinc-100 w-full mt-5 pt-5 justify-center">
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-all active:scale-95 shadow-sm"
                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-all active:scale-95 shadow-sm"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Single Profile Overview */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-violet-600 fill-violet-600/10" />
                Profile Overview
              </h3>
              <p className="text-zinc-650 font-light text-base leading-relaxed text-justify">
                {data.summary}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
