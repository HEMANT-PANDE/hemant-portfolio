import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Cpu, Briefcase } from 'lucide-react';
import { Badge } from './ui/badge';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-14 relative bg-white border-t border-zinc-100">
      {/* Background Soft Orb */}
      <div className="absolute left-0 top-1/3 w-80 h-80 glowing-orb bg-violet-500/5" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Work <span className="font-serif-display font-normal italic text-gradient-primary">Experience</span>
          </h2>
          <div className="h-1.5 w-12 rounded-full bg-violet-600 mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-200 ml-4 md:ml-6 pl-6 md:pl-8 space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.organization}-${exp.role}`}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative timeline-item"
            >
              {/* Card wrapper */}
              <div className="p-6 rounded-2xl border border-zinc-200/80 bg-zinc-50/25 hover:border-zinc-300 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  {/* Title & Company */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-zinc-900 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-violet-600 shrink-0" />
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-violet-600 mt-1.5">
                      {exp.organization} <span className="text-zinc-400 font-medium text-xs sm:text-sm">| {exp.type}</span>
                    </p>
                    {exp.project && (
                      <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-1.5 flex items-center gap-1.5">
                        <Cpu className="h-4 w-4 text-violet-500" />
                        Project: {exp.project}
                      </p>
                    )}
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-1.5 text-zinc-500 font-medium text-xs sm:text-sm md:text-right shrink-0">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets (Highlighted / Larger) */}
                <ul className="space-y-2.5 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-zinc-650 font-normal flex items-start gap-2.5 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-600 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-zinc-100">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
