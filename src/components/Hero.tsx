import React from 'react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-24 pb-12 text-center">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg max-w-4xl mx-auto">
        Hello, I'm <span className="text-accent">Alex Rivers</span> –<br /> Designer & Web Developer
      </h1>
      <div className="mt-10">
        <Button 
          className="bg-white text-forest hover:bg-white/90 font-bold px-10 py-6 rounded-full text-lg shadow-xl transition-transform hover:scale-105 active:scale-95"
        >
          View My Work
        </Button>
      </div>
    </section>
  );
};
