
import React from 'react';
import { Button } from '@/components/ui/button';
import { Language } from '@/app/page';

export const Hero = ({ lang }: { lang: Language }) => {
  const content = {
    EN: {
      greeting: "Hello, I'm",
      name: "Tuguldur Baatarsuren",
      role: "AI-Augmented Full-Stack Developer",
      desc: "Software Engineer specializing in user-centric digital solutions and high-performance applications. I bridge the gap between robust backend systems and intuitive UX.",
      cta: "View Experience"
    },
    MN: {
      greeting: "Сайн байна уу, намайг",
      name: "Түгүүлдэр Баатарсүрэн",
      role: "AI-Ашигласан Фулл-Стек Хөгжүүлэгч",
      desc: "Хэрэглэгчид төвлөрсөн дижитал шийдэл, өндөр гүйцэтгэлтэй аппликейшн хөгжүүлэлтийн мэргэжилтэн. Би арын систем болон хэрэглэгчийн туршлагыг холбодог.",
      cta: "Туршлага үзэх"
    }
  };

  const t = content[lang];

  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg max-w-4xl mx-auto">
        {t.greeting} <span className="text-accent">{t.name}</span> –<br /> {t.role}
      </h1>
      <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto">
        {t.desc}
      </p>
      <div className="mt-10">
        <a href="#work">
          <Button 
            className="bg-white text-forest hover:bg-white/90 font-bold px-10 py-6 rounded-full text-lg shadow-xl transition-transform hover:scale-105 active:scale-95"
          >
            {t.cta}
          </Button>
        </a>
      </div>
    </div>
  );
};
