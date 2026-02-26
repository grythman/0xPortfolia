import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const WorkSection = () => {
  return (
    <section className="mt-8 px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {PlaceHolderImages.slice(0, 2).map((project, idx) => (
          <div key={project.id} className="glass-card p-6 flex flex-col gap-4">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#0d4a3e] to-[#2EA07D]">
              <Image
                src={project.imageUrl}
                alt={project.description}
                fill
                className="object-cover mix-blend-overlay opacity-80"
                data-ai-hint={project.imageHint}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent/80 font-bold">
                DIPLOMA THESIS
              </span>
              <h3 className="text-xl font-semibold">UI/UX Research</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
