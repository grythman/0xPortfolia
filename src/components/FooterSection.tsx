import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const FooterSection = () => {
  return (
    <footer className="mt-auto p-12 w-full flex flex-col md:flex-row justify-between items-end gap-12">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="flex gap-4">
          <Input 
            placeholder="Name" 
            className="bg-transparent border-white/20 text-white focus:border-accent focus:ring-0 rounded-none border-t-0 border-l-0 border-r-0 border-b px-0 h-10 transition-colors"
          />
          <Input 
            placeholder="Email" 
            className="bg-transparent border-white/20 text-white focus:border-accent focus:ring-0 rounded-none border-t-0 border-l-0 border-r-0 border-b px-0 h-10 transition-colors"
          />
        </div>
        <Textarea 
          placeholder="Message" 
          className="bg-transparent border-white/20 text-white focus:border-accent focus:ring-0 rounded-none border-t-0 border-l-0 border-r-0 border-b px-0 min-h-[60px] resize-none transition-colors"
        />
      </div>

      <div className="flex gap-6 items-center">
        {[
          { icon: <Github className="w-5 h-5" />, href: "#" },
          { icon: <Linkedin className="w-5 h-5" />, href: "#" },
          { icon: <ExternalLink className="w-5 h-5" />, href: "#" }, // Representing Behance
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="w-12 h-12 flex items-center justify-center rounded-full glass-pill hover:bg-accent hover:text-forest transition-all hover:scale-110 shadow-lg group"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};
