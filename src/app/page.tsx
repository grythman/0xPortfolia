import { ThreeBackground } from '@/components/ThreeBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { WorkSection } from '@/components/WorkSection';
import { FooterSection } from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="relative w-screen h-screen flex items-center justify-center p-4 md:p-0">
      <ThreeBackground />
      
      <div className="glass-container w-[90vw] h-[90vh] flex flex-col relative overflow-hidden overflow-y-auto custom-scrollbar">
        <Navigation />
        
        <div className="flex-1 flex flex-col">
          <Hero />
          <WorkSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
