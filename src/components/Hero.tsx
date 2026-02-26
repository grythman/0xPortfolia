import React from 'react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg max-w-4xl mx-auto">
        Hello, I'm <span className="text-accent">Alex Rivers</span> –<br /> Designer & Web Developer
      </h1>
      <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto">
        Crafting digital experiences that merge artistic vision with technical precision.
      </p>
      <div className="mt-10">
        <a href="#work">
          <Button 
            className="bg-white text-forest hover:bg-white/90 font-bold px-10 py-6 rounded-full text-lg shadow-xl transition-transform hover:scale-105 active:scale-95"
          >
            View My Work
          </Button>
        </a>
      </div>
    </div>
  );
};
