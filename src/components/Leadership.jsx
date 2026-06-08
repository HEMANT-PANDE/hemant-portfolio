import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { leadership, volunteering } from '../data/portfolio';

export default function Leadership() {
  return (
    <section id="leadership" className="py-14 relative overflow-hidden bg-white border-t border-zinc-100">
      {/* Background glowing orb */}
      <div className="absolute right-0 top-1/4 w-80 h-80 glowing-orb bg-violet-500/5" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Leadership & <span className="font-serif-display font-normal italic text-gradient-primary">Volunteering</span>
          </h2>
          <p className="text-xs text-zinc-500 font-light mt-2 max-w-md">
            Student branch coordination, community service, and technical events.
          </p>
          <div className="h-1.5 w-12 rounded-full bg-violet-600 mt-3" />
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          {/* Leadership Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 mb-2">
              Leadership Positions
            </h3>

            <div className="space-y-4">
              {leadership.map((item, idx) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="border-zinc-200 bg-white hover:border-zinc-300 transition-all duration-300 relative group">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-violet-600 transition-colors duration-300">
                            {item.role}
                          </h4>
                          <p className="text-xs text-zinc-500 font-light font-mono mt-0.5">{item.organization}</p>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400">{item.period}</span>
                      </div>
                      
                      <ul className="space-y-1.5 pl-1">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="text-xs text-zinc-650 font-light flex items-start gap-2 leading-relaxed">
                            <span className="h-1 w-1 rounded-full bg-violet-600/60 mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Volunteering Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 mb-2">
              Community & Event Volunteering
            </h3>

            <div className="space-y-4">
              {volunteering.map((item, idx) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="border-zinc-200 bg-white hover:border-zinc-300 transition-colors duration-300">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                        <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-violet-650 px-2 py-0.5 rounded bg-violet-50 border border-violet-100">
                          {item.role}
                        </span>
                        <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[10px]">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 leading-snug">
                        {item.event}
                      </h4>
                      <p className="text-xs text-zinc-650 font-light mt-2 leading-relaxed">
                        {item.details}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
