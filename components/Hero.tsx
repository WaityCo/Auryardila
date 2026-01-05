
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#F8F7F4]">
      {/* Información y Profile Card */}
      <div className="flex-[0.8] flex flex-col justify-center px-6 md:px-20 pt-32 pb-16 lg:py-0 relative z-20">
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <span className="w-8 h-[1px] bg-neutral-400"></span>
            <span className="text-[9px] tracking-[0.5em] uppercase font-extrabold text-neutral-500">Elite Model Division</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] text-neutral-900 tracking-tighter">
            Aury<br/>
            <span className="font-script text-5xl md:text-7xl lg:text-8xl text-neutral-400 block -mt-4 ml-6 md:ml-16">Ardila</span>
          </h1>
        </div>

        {/* Profile Card Minimalista */}
        <div className="max-w-xs bg-white/50 backdrop-blur-xl p-8 border border-white/80 shadow-[20px_20px_60px_rgba(0,0,0,0.02)] transition-all hover:shadow-2xl">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-neutral-800 border-b border-neutral-100 pb-3">Profile Details</h3>
          <div className="space-y-5">
            {[
              { label: 'Estatura', value: '1.75 m' },
              { label: 'Cabello', value: 'Afro Natural' },
              { label: 'Contextura', value: 'Delgada / Skinny' },
              { label: 'Calzado', value: '38 EU' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center group/item">
                <span className="text-[8px] uppercase tracking-widest text-neutral-400 font-extrabold group-hover/item:text-black transition-colors">{item.label}</span>
                <span className="text-sm font-serif italic text-neutral-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 hidden lg:block opacity-30">
           <p className="text-[9px] uppercase tracking-[0.8em] text-neutral-400 font-black">Professional Editorial & UGC Content</p>
        </div>
      </div>

      {/* Fotografía Principal Full-Height */}
      <div className="flex-1 min-h-[60vh] lg:h-screen relative group overflow-hidden">
        {/* Fix: use camelCase fetchPriority instead of fetchpriority */}
        <img 
          src="https://images.unsplash.com/photo-1767636678533-a2276b5536ca?q=80&w=1200&auto=format&fit=crop" 
          alt="Aury Ardila - Afro Caribbean Editorial Close-up" 
          className="w-full h-full object-cover transition-transform duration-[8s] scale-110 group-hover:scale-100"
          fetchPriority="high"
        />
        
        {/* Floating Accent (Desktop) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-20 hidden xl:block pointer-events-none">
           <div className="bg-black text-white px-10 py-5 rotate-[270deg] shadow-2xl">
              <span className="text-[10px] font-black tracking-[1em] uppercase whitespace-nowrap">Afro Caribbean Pride</span>
           </div>
        </div>

        {/* Marca de agua suave */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 pointer-events-none">
           <div className="flex flex-col items-end">
              <span className="text-white/20 text-7xl md:text-9xl font-serif select-none italic tracking-tighter">Aury</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
