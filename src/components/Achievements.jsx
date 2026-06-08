import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, Flame, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { achievements, certifications } from '../data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="py-14 relative overflow-hidden bg-white border-t border-zinc-100">
      {/* Background glowing orb */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 glowing-orb bg-indigo-50/5" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Honors & <span className="font-serif-display font-normal italic text-gradient-primary">Certifications</span>
          </h2>
          <p className="text-xs text-zinc-500 font-light mt-2 max-w-md">
            Hackathon wins, research paper awards, and industry credentials.
          </p>
          <div className="h-1.5 w-12 rounded-full bg-violet-600 mt-3" />
        </div>

        {/* Stacked Vertical Layout utilizing full width */}
        <div className="space-y-12">
          {/* Achievements Block (Full width) */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-zinc-900 flex items-center gap-2.5 pb-2 border-b border-zinc-100">
              <Trophy className="h-6 w-6 text-violet-600" />
              Major Accomplishments
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((item, idx) => {
                const isWinner = item.title.includes('Winner');
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className={`overflow-hidden border-zinc-200 bg-white transition-all duration-300 relative group h-full ${
                      isWinner ? 'border-violet-500/30 shadow-md shadow-violet-500/5' : ''
                    }`}>
                      {/* Left colored border */}
                      <div className={`absolute top-0 left-0 w-1.5 h-full bg-zinc-200 transition-colors duration-300 group-hover:bg-violet-600 ${
                        isWinner ? 'bg-violet-600' : ''
                      }`} />
                      
                      <CardContent className="p-6 pl-8">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl border shrink-0 ${
                            isWinner 
                              ? 'bg-violet-50 border-violet-100 text-violet-600' 
                              : 'bg-zinc-50 border-zinc-200 text-zinc-500'
                          }`}>
                            {isWinner ? <Flame className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                          </div>
                          <div>
                            {/* Playfair Display Title */}
                            <h4 className="text-xl sm:text-2xl font-bold font-serif-display text-zinc-900 group-hover:text-violet-600 transition-colors duration-300 leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-sm sm:text-base text-zinc-500 font-medium mt-1.5">
                              {item.organization}
                            </p>
                            <p className="text-sm sm:text-base md:text-[16px] text-zinc-650 font-normal mt-3 leading-relaxed">
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

          {/* Certifications Block (Full width grid) */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-zinc-900 flex items-center gap-2.5 pb-2 border-b border-zinc-100">
              <ShieldCheck className="h-6 w-6 text-violet-600" />
              Professional Certifications
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between p-6 shadow-sm relative group">
                    <div className="space-y-2 flex-grow">
                      {/* Playfair Display Title */}
                      <h4 className="text-xl sm:text-2xl font-bold font-serif-display text-zinc-900 leading-snug group-hover:text-violet-600 transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-sm sm:text-base text-zinc-500 font-medium mt-1.5">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-100">
                      <span className="inline-block text-xs sm:text-sm font-semibold bg-violet-50 text-violet-700 border border-violet-100/80 rounded-lg px-3 py-1 break-all max-w-[calc(100%-2.5rem)]">
                        {cert.credentialId}
                      </span>

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
                            className="h-8 w-8 rounded-lg p-0 border-zinc-200 text-zinc-500 hover:text-zinc-900 cursor-pointer hover:border-violet-500/30 hover:bg-zinc-50 shadow-sm"
                            title="Verify Credential"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Button>
                        </a>
                      )}
                    </div>
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
