import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { research } from '../data/portfolio';

export default function Research() {
  return (
    <section id="research" className="py-14 relative overflow-hidden bg-white border-t border-zinc-100">
      {/* Background ambient orb */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 glowing-orb bg-indigo-500/5" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Research <span className="font-serif-display font-normal italic text-gradient-primary">Publications</span>
          </h2>
          <p className="text-xs text-zinc-500 font-light mt-2 max-w-md">
            Academic papers, book chapters, and research presentations.
          </p>
          <div className="h-1.5 w-12 rounded-full bg-violet-600 mt-3" />
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {research.map((paper, idx) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card className="border-zinc-200 bg-white hover:border-zinc-300 transition-all duration-300 overflow-hidden relative group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-zinc-200 group-hover:bg-violet-600 transition-colors duration-300" />
                <CardHeader className="p-6 pb-2">
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <span className="text-[10px] font-mono font-medium text-violet-600 px-2 py-0.5 rounded bg-violet-50 border border-violet-100">
                      {paper.publisher}
                    </span>
                    <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-xs">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{paper.period}</span>
                    </div>
                  </div>

                  <CardTitle className="text-base sm:text-lg font-bold text-zinc-900 mt-3 leading-snug group-hover:text-violet-600 transition-colors duration-300">
                    {paper.title}
                  </CardTitle>

                  <CardDescription className="text-xs text-zinc-500 font-medium mt-1 font-mono">
                    {paper.conference}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-2 pb-6">
                  {/* Status Badge */}
                  <div className="mb-4">
                    <Badge variant={paper.status.includes('Published') ? 'success' : 'default'} className="text-[10px] uppercase font-bold tracking-wider">
                      {paper.status}
                    </Badge>
                  </div>

                  {/* Highlights of research findings */}
                  <ul className="space-y-2 mb-5">
                    {paper.bullets.map((bullet, i) => (
                      <li key={i} className="text-xs sm:text-sm text-zinc-600 font-light flex items-start gap-2 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-600/60 mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  {paper.url && (
                    <div className="flex justify-end pt-3 border-t border-zinc-100">
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs gap-1 border-zinc-200 text-zinc-700 hover:text-zinc-900 rounded-xl hover:border-violet-500/30 transition-all cursor-pointer"
                        >
                          View Paper
                          <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                        </Button>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
