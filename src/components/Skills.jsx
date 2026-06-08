import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      list: ["C", "C++", "Python", "JavaScript", "React.js"]
    },
    {
      title: "Technologies & Tools",
      list: ["Git/GitHub", "Postman", "SQL", "MongoDB", "NumPy", "Pandas"]
    },
    {
      title: "Soft Skills",
      list: ["Leadership", "Teamwork", "Communication", "Presentation"]
    }
  ];

  return (
    <section id="skills" className="py-14 relative overflow-hidden bg-white border-t border-zinc-100">
      {/* Background Soft Orbs */}
      <div className="absolute right-0 bottom-1/4 w-80 h-80 glowing-orb bg-indigo-50/5" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Skills & <span className="font-serif-display font-normal italic text-gradient-primary">Expertise</span>
          </h2>
          <div className="h-1.5 w-12 rounded-full bg-violet-600 mt-3" />
        </div>

        {/* Simplified Large Typography Grid */}
        <div className="space-y-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="border-zinc-200/60 bg-zinc-50/25 hover:border-zinc-300 transition-colors duration-300">
                <CardContent className="p-8">
                  {/* Category Title (No icons) */}
                  <div className="border-b border-zinc-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skills List in Large Font */}
                  <div className="flex flex-wrap items-center gap-y-4 gap-x-8">
                    {group.list.map((skill, index) => (
                      <div key={skill} className="flex items-center gap-2">
                        {index > 0 && (
                          <span className="h-2 w-2 rounded-full bg-violet-600/30 mr-6 shrink-0" />
                        )}
                        <span className="text-xl sm:text-2xl font-semibold text-zinc-850 hover:text-violet-600 transition-colors duration-200">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
