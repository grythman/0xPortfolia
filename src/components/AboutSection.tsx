
import React from 'react';
import { User, Code, Brain, Laptop } from 'lucide-react';
import { Language } from '@/app/page';
import { Badge } from '@/components/ui/badge';

export const AboutSection = ({ lang }: { lang: Language }) => {
  const content = {
    EN: {
      title: "About Me",
      summary: "I am a Software Engineer based in Mongolia, currently pursuing a Computer Science degree at the National University of Mongolia. I leverage AI-based prompt engineering to optimize development workflows across JavaScript, Python, and Java.",
      skillsTitle: "Core Competencies",
      items: [
        {
          title: "Full-Stack Dev",
          desc: "Building robust architectures using JS, Python, and Java.",
          icon: <Code className="w-8 h-8 text-accent" />
        },
        {
          title: "AI Integration",
          desc: "Optimizing code and debugging with advanced prompt engineering.",
          icon: <Brain className="w-8 h-8 text-accent" />
        },
        {
          title: "UX Focused",
          desc: "Designing intuitive interfaces that prioritize the user journey.",
          icon: <Laptop className="w-8 h-8 text-accent" />
        }
      ],
      skills: ["JavaScript", "Python", "Java", "Prompt Engineering", "Project Management", "UX Design"]
    },
    MN: {
      title: "Миний тухай",
      summary: "Би Монгол улсад байрладаг Програм хангамжийн инженер бөгөөд одоо МУИС-д Компьютерийн ухааны чиглэлээр суралцаж байна. Би JavaScript, Python, Java хөгжүүлэлтийг AI-д суурилсан промпт инженерчлэлээр оновчтой болгодог.",
      skillsTitle: "Үндсэн ур чадварууд",
      items: [
        {
          title: "Фулл-Стек",
          desc: "JS, Python, Java ашиглан хүчирхэг архитектур бүтээдэг.",
          icon: <Code className="w-8 h-8 text-accent" />
        },
        {
          title: "AI Интеграц",
          desc: "Промпт инженерчлэлээр код болон дебаг хийх процессыг хурдасгадаг.",
          icon: <Brain className="w-8 h-8 text-accent" />
        },
        {
          title: "UX Төвлөрөл",
          desc: "Хэрэглэгчийн замналыг чухалчилсан интуитив дизайн гаргадаг.",
          icon: <Laptop className="w-8 h-8 text-accent" />
        }
      ],
      skills: ["JavaScript", "Python", "Java", "Промпт инженерчлэл", "Төслийн удирдлага", "UX Дизайн"]
    }
  };

  const t = content[lang];

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl font-bold">{t.title}</h2>
        <div className="h-1 w-12 bg-accent mt-2 rounded-full" />
        <p className="mt-6 text-white/70 max-w-3xl mx-auto leading-relaxed">
          {t.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {t.items.map((item, i) => (
          <div key={i} className="glass-card p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full glass-pill flex items-center justify-center mb-2">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-6">{t.skillsTitle}</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {t.skills.map((skill, i) => (
            <Badge key={i} variant="secondary" className="glass-pill px-4 py-1 text-accent border-none">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
