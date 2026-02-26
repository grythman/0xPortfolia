
import React from 'react';
import Image from 'next/image';
import { Projects } from '@/lib/placeholder-images';

export const WorkSection = () => {
  return (
    <section id="work" className="mt-8 px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Projects.map((project) => (
          <article 
            key={project.id} 
            className="glass-card p-6 flex flex-col gap-4 group cursor-pointer"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#0d4a3e] to-[#2EA07D]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover mix-blend-overlay opacity-80 transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={project.imageHint}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent/80 font-bold">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-white/60 line-clamp-1">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
