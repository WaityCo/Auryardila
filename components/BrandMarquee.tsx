
import React from 'react';
import { BRANDS } from '../constants';

const BrandMarquee: React.FC = () => {
  return (
    <div className="bg-[#E9E7E1] py-16 md:py-24 border-y border-neutral-200 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-neutral-400"></div>
            <h2 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.6em] text-neutral-500">Colaboraciones Premium</h2>
            <div className="w-8 h-[1px] bg-neutral-400"></div>
          </div>
          <p className="text-2xl md:text-4xl font-serif text-neutral-900 text-center italic">Marcas que confían en mi imagen</p>
        </div>
      </div>
      
      <div className="relative">
        {/* Gradientes laterales para suavizar el fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#E9E7E1] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#E9E7E1] to-transparent z-10"></div>
        
        <div className="animate-scroll py-4 hover:[animation-play-state:paused] cursor-default">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} className="flex items-center px-12 md:px-20 group">
              <span className="text-xl md:text-5xl font-serif tracking-[0.1em] uppercase text-neutral-400 group-hover:text-black transition-all duration-700 whitespace-nowrap opacity-50 group-hover:opacity-100">
                {brand.name}
              </span>
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-neutral-300 ml-12 md:ml-20 group-hover:bg-black transition-colors"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
