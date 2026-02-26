import { ThreeBackground } from '@/components/ThreeBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { WorkSection } from '@/components/WorkSection';
import { AboutSection } from '@/components/AboutSection';
import { FooterSection } from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="relative w-screen h-screen flex items-center justify-center p-4 md:p-0">
      <ThreeBackground />
      
      <div className="glass-container w-[90vw] h-[90vh] relative">
        <Navigation />
        
        <div className="flex-1 h-full">
          <section id="home" className="section-snap">
            <Hero />
          </section>
          
          <section id="work" className="section-snap">
            <WorkSection />
          </section>

          <section id="about" className="section-snap">
            <AboutSection />
          </section>
          
          <section id="contact" className="section-snap">
            <FooterSection />
          </section>
        </div>
      </div>
    </main>
  );
}
