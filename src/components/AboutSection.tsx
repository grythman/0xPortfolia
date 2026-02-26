
import React from 'react';
import { User, Code, Palette } from 'lucide-react';
import { Language } from '@/app/page';

export const AboutSection = ({ lang }: { lang: Language }) => {
  const content = {
    EN: {
      title: "The Creative Behind the Screen",
      items: [
        {
          title: "Design Focus",
          desc: "Specializing in minimalist, high-impact visual identities and UI/UX systems."
        },
        {
          title: "Clean Code",
          desc: "Building performant applications using modern frameworks and standard practices."
        },
        {
          title: "Strategy",
          desc: "Merging business goals with user needs to create intentional digital products."
        }
      ]
    },
    MN: {
      title: "Дэлгэцийн цаадах бүтээлч",
      items: [
        {
          title: "Дизайн фокус",
          desc: "Минималист, өндөр нөлөө бүхий визуал танигч болон UI/UX системийг мэргэшүүлдэг."
        },
        {
          title: "Цэвэр код",
          desc: "Орчин үеийн фреймворк болон стандартыг ашиглан өндөр гүйцэтгэлтэй апп бүтээдэг."
        },
        {
          title: "Стратеги",
          desc: "Зорилтот дижитал бүтээгдэхүүн бүтээхийн тулд бизнесийн зорилго болон хэрэглэгчийн хэрэгцээг нэгтгэдэг."
        }
      ]
    }
  };

  const t = content[lang];
  const icons = [<Palette className="w-8 h-8 text-accent" />, <Code className="w-8 h-8 text-accent" />, <User className="w-8 h-8 text-accent" />];

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl font-bold">{t.title}</h2>
        <div className="h-1 w-12 bg-accent mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.items.map((item, i) => (
          <div key={i} className="glass-card p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full glass-pill flex items-center justify-center mb-2">
              {icons[i]}
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
