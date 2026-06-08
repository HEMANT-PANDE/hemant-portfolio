import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export default function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    { title: 'Email', value: data.email, link: `mailto:${data.email}`, icon: Mail },
    { title: 'Phone', value: data.phone, link: `tel:${data.phone}`, icon: Phone },
    { title: 'Location', value: data.location, link: null, icon: MapPin },
  ];

  return (
    <section id="contact" className="py-14 relative overflow-hidden bg-white border-t border-zinc-100">
      {/* Background glowing orb */}
      <div className="absolute left-1/4 bottom-0 w-96 h-96 glowing-orb bg-violet-500/5" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Get In <span className="font-serif-display font-normal italic text-gradient-primary">Touch</span>
          </h2>
          <p className="text-xs text-zinc-500 font-light mt-2 max-w-md">
            Feel free to reach out for research collaborations, project inquiries, or networking opportunities.
          </p>
          <div className="h-1.5 w-12 rounded-full bg-violet-600 mt-3" />
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-stretch">
          {/* Quick info list */}
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors duration-300 flex items-center gap-4 shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-violet-50 border border-violet-100 text-violet-600">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm font-semibold text-zinc-850 hover:text-violet-600 mt-1 block transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-zinc-850 mt-1">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Short motivational callout */}
            <div className="hidden md:block p-6 rounded-3xl border border-zinc-200 bg-zinc-50/50">
              <h4 className="text-sm font-bold text-zinc-700">Let's create something together</h4>
              <p className="text-xs text-zinc-500 font-light mt-2.5 leading-relaxed">
                Whether you need a full-stack engineer or an AI researcher to analyze deep neural network models, I'm always open to discussing new initiatives.
              </p>
            </div>
          </div>

          {/* Form wrapper */}
          <Card className="border-zinc-200 bg-white relative shadow-sm">
            <CardContent className="p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="p-3 rounded-full bg-emerald-50 text-emerald-600 mb-4 border border-emerald-100">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">Message Sent!</h3>
                  <p className="text-xs text-zinc-500 mt-2 max-w-xs leading-relaxed">
                    Thank you for reaching out. I'll review your message and respond to your email as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/40 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/40 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Your Message</label>
                    <textarea
                      name="message"
                      placeholder="Write your message details..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/40 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full py-6 mt-2 cursor-pointer gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
