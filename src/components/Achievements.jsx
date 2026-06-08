import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ExternalLink, ShieldCheck, Flame } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { achievements, certifications } from '../data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="py-14 relative overflow-hidden bg-white border-t border-zinc-100">
      {/* Background glowing orb */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 glowing-orb bg-indigo-500/5" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Honors & <span className="font-serif-display font-normal italic text-gradient-primary">Certifications</span>
          </h2>
          <p className="text-xs text-zinc-500 font-light mt-2 max-w-md">
            Hackathon wins, research paper awards, and industry credentials.
          </p>
          <div className="h-1.5 w-12 rounded-full bg-violet-600 mt-3" />
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          {/* Achievements Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2 mb-2">
              <Trophy className="h-5 w-5 text-violet-600" />
              Major Accomplishments
            </h3>
            
            <div className="space-y-4">
              {achievements.map((item, idx) => {
                const isWinner = item.title.includes('Winner');
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className={`overflow-hidden border-zinc-200 bg-white transition-all duration-300 relative group ${
                      isWinner ? 'border-violet-500/30 shadow-md shadow-violet-500/5' : ''
                    }`}>
                      {/* Left colored border */}
                      <div className={`absolute top-0 left-0 w-1 h-full bg-zinc-200 transition-colors duration-300 group-hover:bg-violet-600 ${
                        isWinner ? 'bg-violet-600' : ''
                      }`} />
                      
                      <CardContent className="p-5 pl-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-2.5 rounded-xl border shrink-0 ${
                            isWinner 
                              ? 'bg-violet-50 border-violet-100 text-violet-600' 
                              : 'bg-zinc-50 border-zinc-200 text-zinc-550'
                          }`}>
                            {isWinner ? <Flame className="h-4 w-4" /> : <Award className="h-4 w-4" />}
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-violet-600 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-[10px] text-zinc-450 font-mono mt-0.5">{item.organization}</p>
                            <p className="text-xs text-zinc-600 font-light mt-2.5 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2 mb-2">
              <ShieldCheck className="h-5 w-5 text-violet-600" />
              Professional Certifications
            </h3>

            <div className="space-y-3.5">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-4 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-300 flex justify-between items-center gap-4 shadow-sm"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-zinc-900">{cert.name}</h4>
                    <p className="text-xs text-zinc-550 font-light">{cert.issuer}</p>
                    <span className="inline-block text-[9px] font-mono font-semibold bg-zinc-50 text-zinc-500 border border-zinc-200 rounded px-1.5 py-0.5 mt-1.5">
                      {cert.credentialId}
                    </span>
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 rounded-lg p-0 border-zinc-200 text-zinc-500 hover:text-zinc-900 cursor-pointer hover:border-violet-500/30 hover:bg-zinc-50"
                        title="Verify Credential"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
