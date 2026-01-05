
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import BrandMarquee from './components/BrandMarquee';
import UGCSection from './components/UGCSection';
import ModelingGrid from './components/ModelingGrid';
import SocialImpact from './components/SocialImpact';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F7F4] selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <div className="reveal"><Achievements /></div>
      <div className="reveal"><BrandMarquee /></div>
      <div className="reveal"><UGCSection /></div>
      <div className="reveal"><ModelingGrid /></div>
      <div className="reveal"><SocialImpact /></div>
      <div className="reveal"><Contact /></div>
      
      {/* Indicador de Desplazamiento Vertical */}
      <div className="fixed left-8 bottom-12 hidden xl:flex flex-col items-center gap-6 z-40 animate-pulse">
        <div className="w-[1px] h-20 bg-neutral-300"></div>
        <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-bold rotate-180 [writing-mode:vertical-lr]">Scroll Down</span>
      </div>

      {/* Marca de Agua Lateral */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden lg:block pointer-events-none z-40">
        <span className="text-[10px] uppercase tracking-[1em] text-neutral-300 font-black whitespace-nowrap opacity-40 select-none">
          AFRO CARIBBEAN MODEL &middot; 2025
        </span>
      </div>
    </div>
  );
}

export default App;
