
"use client"

import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Language } from '@/app/page';

export const FooterSection = ({ lang }: { lang: Language }) => {
  const content = {
    EN: {
      title: "Let's Collaborate",
      subtitle: "Have a project in mind? Reach out and let's build something exceptional.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      rights: "All rights reserved."
    },
    MN: {
      title: "Хамтран ажиллацгаая",
      subtitle: "Танд төсөл байгаа юу? Надтай холбогдож, онцгой зүйлийг хамтдаа бүтээцгээе.",
      name: "Нэр",
      email: "Имэйл",
      message: "Зурвас",
      send: "Зурвас илгээх",
      rights: "Бүх эрх хуулиар хамгаалагдсан."
    }
  };

  const t = content[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 flex flex-col gap-12">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold">{t.title}</h2>
        <p className="mt-4 text-white/60">{t.subtitle}</p>
        <div className="h-1 w-12 bg-accent mt-4 rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Input 
                required
                name="name"
                placeholder={t.name} 
                className="bg-transparent border-white/10 text-white focus:border-accent focus:ring-0 rounded-none border-t-0 border-l-0 border-r-0 border-b px-0 h-10 transition-colors"
              />
              <Input 
                required
                type="email"
                name="email"
                placeholder={t.email} 
                className="bg-transparent border-white/10 text-white focus:border-accent focus:ring-0 rounded-none border-t-0 border-l-0 border-r-0 border-b px-0 h-10 transition-colors"
              />
            </div>
            <Textarea 
              required
              name="message"
              placeholder={t.message} 
              className="bg-transparent border-white/10 text-white focus:border-accent focus:ring-0 rounded-none border-t-0 border-l-0 border-r-0 border-b px-0 min-h-[60px] resize-none transition-colors"
            />
            <Button type="submit" className="bg-accent text-forest hover:bg-white transition-all rounded-full px-8 py-6 w-fit">
              {t.send}
            </Button>
          </form>
        </div>

        <div className="flex gap-6 items-center">
          {[
            { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
            { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: <ExternalLink className="w-5 h-5" />, href: "https://behance.net", label: "Behance" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-14 h-14 flex items-center justify-center rounded-full glass-pill hover:bg-accent hover:text-forest transition-all hover:scale-110 shadow-lg group"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/30 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Alex Rivers Portfolio. {t.rights}
      </div>
    </div>
  );
};
