
"use client"

import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const FooterSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here
  };

  return (
    <footer id="contact" className="mt-auto p-12 w-full flex flex-col md:flex-row justify-between items-end gap-12">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Input 
              required
              name="name"
              placeholder="Name" 
              className="bg-transparent border-white/20 text-white focus:border-accent focus:ring-0 rounded-none border-t-0 border-l-0 border-r-0 border-b px-0 h-10 transition-colors"
            />
            <Input 
              required
              type="email"
              name="email"
              placeholder="Email" 
              className="bg-transparent border-white/20 text-white focus:border-accent focus:ring-0 rounded-none border-t-0 border-l-0 border-r-0 border-b px-0 h-10 transition-colors"
            />
          </div>
          <Textarea 
            required
            name="message"
            placeholder="Message" 
            className="bg-transparent border-white/20 text-white focus:border-accent focus:ring-0 rounded-none border-t-0 border-l-0 border-r-0 border-b px-0 min-h-[60px] resize-none transition-colors"
          />
          <Button type="submit" variant="link" className="self-start px-0 text-accent hover:text-white transition-colors">
            Send Message
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
            className="w-12 h-12 flex items-center justify-center rounded-full glass-pill hover:bg-accent hover:text-forest transition-all hover:scale-110 shadow-lg group"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};
