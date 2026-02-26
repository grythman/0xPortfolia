
"use client"

import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '@/app/page';

interface NavigationProps {
  currentLang: Language;
  onLanguageSwitch: () => void;
}

export const Navigation = ({ currentLang, onLanguageSwitch }: NavigationProps) => {
  const navItems = {
    EN: ['Home', 'Work', 'About', 'Contact'],
    MN: ['Нүүр', 'Бүтээл', 'Тухай', 'Холбоо']
  };

  const labels = navItems[currentLang];

  return (
    <div className="sticky top-0 left-0 right-0 flex justify-between items-center px-12 py-8 z-50 pointer-events-none">
      <div className="flex-1" />
      
      <nav className="glass-pill px-8 py-3 flex gap-8 items-center pointer-events-auto">
        {navItems.EN.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            {labels[index]}
          </a>
        ))}
      </nav>

      <div className="flex-1 flex justify-end pointer-events-auto">
        <button 
          onClick={onLanguageSwitch}
          className="flex items-center gap-2 glass-pill px-4 py-2 text-xs font-semibold hover:bg-white/20 transition-all active:scale-95"
        >
          <Globe className="w-4 h-4" />
          <span>{currentLang === 'EN' ? 'EN / MN' : 'MN / EN'}</span>
        </button>
      </div>
    </div>
  );
};
