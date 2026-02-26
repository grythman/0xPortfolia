"use client"

import React from 'react';
import { Globe } from 'lucide-react';

export const Navigation = () => {
  return (
    <div className="absolute top-8 left-0 right-0 flex justify-between items-center px-12 z-50">
      <div className="flex-1" />
      
      <nav className="glass-pill px-8 py-3 flex gap-8 items-center">
        {['Home', 'Work', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex-1 flex justify-end">
        <button className="flex items-center gap-2 glass-pill px-4 py-2 text-xs font-semibold hover:bg-white/20 transition-all">
          <Globe className="w-4 h-4" />
          <span>EN / MN</span>
        </button>
      </div>
    </div>
  );
};
