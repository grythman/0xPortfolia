
import React from 'react';
import Image from 'next/image';
import { Projects } from '@/lib/placeholder-images';
import { Language } from '@/app/page';

export const WorkSection = ({ lang }: { lang: Language }) => {
  const content = {
    EN: { title: "Selected Works" },
    MN: { title: "Шилдэг бүтээлүүд" }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold">{content[lang].title}</h2>
        <div className="h-1 w-12 bg-accent mt-2 rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Projects.map((project) => (
          <article 
            key={project.id} 
            className="glass-card p-6 flex flex-col gap-4 group cursor-pointer hover:-translate-y-3 hover:bg-white/10 hover:shadow-2xl active:scale-[0.98]"
          >
            <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0d4a3e] to-[#2EA07D]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover mix-blend-overlay opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                data-ai-hint={project.imageHint}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-sm text-white/60 line-clamp-2">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
