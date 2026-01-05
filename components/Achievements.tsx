
import React from 'react';

const Achievements: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-neutral-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Contador de Marcas Destacado */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/3">
             <div className="relative inline-block mb-4">
                <span className="text-[140px] font-serif leading-none italic text-black/5 select-none absolute -top-16 -left-8">Brands</span>
                <span className="text-8xl font-serif text-black relative z-10">+10</span>
             </div>
             <p className="text-[11px] font-black uppercase tracking-[0.5em] text-neutral-400 max-w-[200px] text-center lg:text-left leading-relaxed">
               Marcas de alto nivel que respaldan mi trayectoria profesional.
             </p>
          </div>

          {/* Hitos Principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:w-2/3">
            <div className="group relative pt-12 border-t border-neutral-100 hover:border-black transition-colors duration-500">
              <span className="absolute top-4 left-0 text-[10px] font-black tracking-widest text-neutral-200 group-hover:text-black transition-colors italic font-serif">I</span>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-3 text-neutral-800 group-hover:translate-x-2 transition-transform">Candidata Favorita</h3>
              <p className="text-[11px] font-serif text-neutral-500 leading-relaxed italic">Miss Universe Córdoba 2025</p>
            </div>
            
            <div className="group relative pt-12 border-t border-neutral-100 hover:border-black transition-colors duration-500">
              <span className="absolute top-4 left-0 text-[10px] font-black tracking-widest text-neutral-200 group-hover:text-black transition-colors italic font-serif">II</span>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-3 text-neutral-800 group-hover:translate-x-2 transition-transform">Embajadora de Marca</h3>
              <p className="text-[11px] font-serif text-neutral-500 leading-relaxed italic">Joyería Lumbra</p>
            </div>

            <div className="group relative pt-12 border-t border-neutral-100 hover:border-black transition-colors duration-500">
              <span className="absolute top-4 left-0 text-[10px] font-black tracking-widest text-neutral-200 group-hover:text-black transition-colors italic font-serif">III</span>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-3 text-neutral-800 group-hover:translate-x-2 transition-transform">Humanizadora Oficial</h3>
              <p className="text-[11px] font-serif text-neutral-500 leading-relaxed italic">La Plata Joyas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
