
"use client"

import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Language } from '@/app/page';

export const FooterSection = ({ lang }: { lang: Language }) => {
  const content = {
    EN: {
      title: "Get In Touch",
      subtitle: "Interested in collaboration? Reach out for freelance inquiries or technical discussions.",
      name: "Your Name",
      email: "Your Email",
      message: "Message",
      send: "Send Message",
      rights: "All rights reserved.",
      location: "Mongolia"
    },
    MN: {
      title: "Холбоо барих",
      subtitle: "Хамтран ажиллах сонирхолтой байна уу? Чөлөөт төсөл болон техникийн хэлэлцүүлэгт нээлттэй.",
      name: "Таны нэр",
      email: "Имэйл хаяг",
      message: "Зурвас",
      send: "Зурвас илгээх",
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
      location: "Монгол улс"
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

      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
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

        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-accent font-semibold uppercase tracking-widest text-xs">Direct Contact</h3>
            <div className="flex items-center gap-3 text-white/70">
              <Mail className="w-4 h-4" />
              <span>btuguldur397@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Phone className="w-4 h-4" />
              <span>+976 94281825</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-accent font-semibold uppercase tracking-widest text-xs">Social Presence</h3>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/tuguldur", label: "LinkedIn" },
                { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full glass-pill hover:bg-accent hover:text-forest transition-all hover:scale-110 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/30 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} {lang === 'EN' ? 'Tuguldur Baatarsuren' : 'Түгүүлдэр Баатарсүрэн'}. {t.rights}
      </div>
    </div>
  );
};
