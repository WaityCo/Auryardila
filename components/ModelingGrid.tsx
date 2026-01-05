
import React from 'react';
import { MODELING_SHOTS } from '../constants';

const ModelingGrid: React.FC = () => {
  return (
    <section id="modeling" className="py-32 bg-[#F1F0EC]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold mb-4">Galería Profesional</span>
          <h2 className="text-5xl md:text-8xl font-serif mb-6 leading-none">Trabajos Editoriales</h2>
          <p className="font-script text-3xl md:text-4xl text-neutral-500">Representando la elegancia en cada toma</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {MODELING_SHOTS.map((shot, idx) => (
            <div 
              key={shot.id} 
              className={`group flex flex-col space-y-8 ${idx % 2 === 1 ? 'md:mt-40' : ''}`}
            >
              <div className="aspect-[3/4] overflow-hidden relative bg-neutral-200">
                <img 
                  src={shot.imageUrl} 
                  alt={shot.client} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 z-20">
                   <span className="bg-white/90 backdrop-blur-sm px-4 py-2 text-[10px] font-bold tracking-widest uppercase shadow-sm">
                     Ver Campaña
                   </span>
                </div>
              </div>
              <div className="space-y-4 border-l border-neutral-300 pl-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif tracking-tight">{shot.client}</h3>
                  <span className="text-[10px] text-neutral-400 font-bold">© 2024</span>
                </div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest leading-relaxed max-w-sm font-medium">
                  {shot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-48 flex flex-col items-center text-center">
           <div className="w-px h-32 bg-neutral-400 mb-12"></div>
           <p className="max-w-2xl text-sm md:text-base text-neutral-600 leading-relaxed uppercase tracking-[0.25em] font-bold italic">
             "La moda no es solo lo que vistes, es la forma en que proyectas tu esencia al mundo."
           </p>
           <p className="mt-8 text-[10px] uppercase tracking-widest font-black text-neutral-400">— Miss Universe Candidate & Content Strategist</p>
        </div>
      </div>
    </section>
  );
};

export default ModelingGrid;
