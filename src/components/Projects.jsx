import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Star, Tag } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-14 relative overflow-hidden bg-white border-t border-zinc-100">
      {/* Background ambient orbs */}
      <div className="absolute right-0 top-1/4 w-80 h-80 glowing-orb bg-indigo-500/5" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 glowing-orb bg-violet-600/5" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Featured <span className="font-serif-display font-normal italic text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xs text-zinc-500 font-light mt-2 max-w-md">
            A selection of hackathon entries, ML models, and full-stack solutions.
          </p>
          <div className="h-1.5 w-12 rounded-full bg-violet-600 mt-3" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col glass-panel-hover border-zinc-200 bg-white relative overflow-hidden group">
                <CardHeader className="p-6 pb-4">
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-700 shadow-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-50/20 hover:text-violet-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-600 shrink-0" />
                      {project.event}
                    </span>
                    <span className="text-xs text-zinc-400 mt-1 font-medium">{project.period}</span>
                  </div>
                  {/* Playfair Display Title */}
                  <CardTitle className="text-xl sm:text-2xl font-bold font-serif-display text-zinc-900 mt-3 group-hover:text-violet-600 transition-colors duration-300 leading-snug">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-zinc-500 mt-1.5 font-medium">
                    {project.role}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0 pb-4 flex-grow">
                  {/* Larger Description */}
                  <p className="text-zinc-650 font-normal text-sm sm:text-base leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Previews - Beautiful Premium Badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-block text-xs font-mono font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-lg px-2.5 py-1 hover:border-violet-500/30 hover:bg-violet-50/30 hover:text-violet-700 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-4 mt-auto border-t border-zinc-100 flex items-center justify-between gap-3 bg-zinc-50/30">
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-955 hover:border-zinc-305 hover:bg-zinc-50 transition-all shadow-sm"
                        title="View GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-955 hover:border-zinc-305 hover:bg-zinc-50 transition-all shadow-sm"
                        title="View Live Site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-zinc-505 hover:text-zinc-950 hover:bg-zinc-100 gap-1 rounded-xl cursor-pointer group/btn font-semibold"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold w-fit px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-700 shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-violet-600 shrink-0" />
                          {project.event}
                        </span>
                        <h3 className="text-2xl font-bold font-serif-display mt-3 text-zinc-900 leading-snug">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-xs text-zinc-500 mt-2 pb-2 border-b border-zinc-100 font-medium">
                          <span>Role: {project.role}</span>
                          <span>Timeline: {project.period}</span>
                        </div>
                      </DialogHeader>

                      <div className="space-y-5 my-2 text-sm text-zinc-700">
                        <div>
                          <p className="font-normal text-zinc-650 text-sm sm:text-base leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Highlights / Features List */}
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-1.5">
                            <Star className="h-3.5 w-3.5 text-violet-600 fill-violet-600/5" />
                            Key Contributions & Outcomes
                          </h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="text-sm text-zinc-650 font-normal flex items-start gap-2.5 leading-relaxed">
                                <span className="h-1.5 w-1.5 rounded-full bg-violet-600/60 mt-2 shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack List */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-1.5">
                            <Tag className="h-3.5 w-3.5 text-violet-600" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech} 
                                className="inline-block text-xs font-mono font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-lg px-2.5 py-1"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-4 pt-4 border-t border-zinc-100 justify-end">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" className="text-xs gap-1.5 rounded-xl font-semibold">
                              <Github className="h-3.5 w-3.5" />
                              GitHub Code
                            </Button>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="text-xs gap-1.5 rounded-xl font-semibold">
                              <ExternalLink className="h-3.5 w-3.5" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
