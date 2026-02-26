
"use client"

import React, { useState } from 'react';
import { ThreeBackground } from '@/components/ThreeBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { WorkSection } from '@/components/WorkSection';
import { AboutSection } from '@/components/AboutSection';
import { FooterSection } from '@/components/FooterSection';

export type Language = 'EN' | 'MN';

export default function Home() {
  const [lang, setLang] = useState<Language>('EN');

  return (
    <main className="relative w-screen h-screen flex items-center justify-center p-4 md:p-0">
      <ThreeBackground />
      
      <div className="glass-container w-[90vw] h-[90vh] relative">
        <Navigation currentLang={lang} onLanguageSwitch={() => setLang(prev => prev === 'EN' ? 'MN' : 'EN')} />
        
        <div className="flex-1 h-full">
          <section id="home" className="section-snap">
            <Hero lang={lang} />
          </section>
          
          <section id="work" className="section-snap">
            <WorkSection lang={lang} />
          </section>

          <section id="about" className="section-snap">
            <AboutSection lang={lang} />
          </section>
          
          <section id="contact" className="section-snap">
            <FooterSection lang={lang} />
          </section>
        </div>
      </div>
    </main>
  );
}
