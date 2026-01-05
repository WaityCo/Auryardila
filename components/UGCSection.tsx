
import React, { useRef, useState, useEffect } from 'react';
import { UGC_PROJECTS } from '../constants';

const UGCSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll();
    }
    return () => {
      slider?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 450;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="ugc" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-extrabold mb-3 md:mb-5 block">Estrategia Digital</span>
            <h2 className="text-5xl md:text-8xl font-serif mb-6 leading-[0.9] tracking-tight">Contenido<br/>Digital</h2>
            <p className="text-neutral-500 text-[10px] md:text-xs leading-loose uppercase tracking-[0.2em] font-bold max-w-lg italic border-l-2 border-neutral-100 pl-6">
              "Humanizo tu marca a través de formatos dinámicos y una estética impecable que conecta con la audiencia actual."
            </p>
          </div>
          
          <div className="bg-[#F8F7F4] p-8 md:p-10 border border-neutral-100 flex flex-col items-center lg:items-start gap-4 shadow-sm">
             <p className="text-[9px] uppercase tracking-[0.3em] font-black text-neutral-400">¿Quieres potenciar tu marca?</p>
             <a href="#contact" className="w-full lg:w-auto text-center px-10 py-4 bg-black text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-neutral-800 transition-all duration-500 shadow-xl transform hover:-translate-y-1">
               Solicitar Tarifario
             </a>
          </div>
        </div>

        {/* Carrusel Horizontal con Controles */}
        <div className="relative group/slider">
          {/* Botones de Navegación (Desktop) */}
          <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-4 bg-white shadow-2xl rounded-full pointer-events-auto transition-all ${!canScrollLeft ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          </div>
          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-4 bg-white shadow-2xl rounded-full pointer-events-auto transition-all ${!canScrollRight ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 md:gap-12 pb-12 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {UGC_PROJECTS.map((project) => (
              <div key={project.id} className="min-w-[80vw] md:min-w-[340px] snap-center space-y-6 flex flex-col">
                <div className="flex justify-between items-center border-b border-neutral-100 pb-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase font-extrabold text-neutral-400">{project.brand}</p>
                  <div className="flex gap-1">
                    {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-neutral-200"></div>)}
                  </div>
                </div>
                
                <div className="iphone-frame group/card cursor-pointer transition-transform duration-700 hover:scale-[1.02]">
                  <img 
                    src={project.imageUrl} 
                    alt={`${project.brand} ${project.product}`} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover/card:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                     <a 
                       href={`https://instagram.com/auryardila`} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="bg-white text-black px-8 py-3 text-[10px] font-black tracking-widest uppercase shadow-2xl transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500"
                     >
                       Ver Video
                     </a>
                  </div>
                </div>

                <div className="text-center px-4">
                  <p className="text-[11px] tracking-[0.2em] uppercase font-black text-neutral-800">{project.product}</p>
                  {project.socialProof && (
                    <p className="text-[9px] tracking-[0.3em] uppercase font-serif italic text-black mt-2 bg-neutral-50 py-1 inline-block px-4 border-x border-neutral-200">
                      {project.socialProof}
                    </p>
                  )}
                  <p className="text-[8px] tracking-[0.4em] uppercase text-neutral-400 mt-2 font-bold flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Engagement: High
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Barra de Progreso Visual */}
        <div className="w-full h-[1px] bg-neutral-100 relative mt-4">
           <div 
             className="absolute top-0 left-0 h-full bg-black transition-all duration-300" 
             style={{ 
               width: scrollRef.current ? `${((scrollRef.current.scrollLeft + scrollRef.current.clientWidth) / scrollRef.current.scrollWidth) * 100}%` : '20%' 
             }}
           ></div>
        </div>
      </div>
    </section>
  );
};

export default UGCSection;