
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-neutral-200/50 shadow-sm' : 'bg-gradient-to-b from-white via-white/80 to-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="text-2xl md:text-3xl font-serif tracking-widest font-black leading-none text-black">AURY ARDILA</div>
          <div className="text-[8px] tracking-[0.6em] uppercase font-bold text-neutral-500 mt-1 transition-all group-hover:text-black group-hover:tracking-[0.7em]">Editorial & Brand Model</div>
        </div>
        
        <div className="hidden lg:flex gap-12 text-[10px] tracking-[0.3em] uppercase font-bold text-neutral-900">
          <a href="#modeling" className="hover:opacity-50 transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-full">Portafolio</a>
          <a href="#impacto" className="hover:opacity-50 transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-full">Impacto Social</a>
          <a href="#ugc" className="hover:opacity-50 transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-full">Contenido</a>
          <a href="#contact" className="hover:opacity-50 transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-full">Contacto</a>
        </div>

        <a href="#contact" className="bg-black text-white px-8 py-3 text-[9px] tracking-widest uppercase hover:bg-neutral-800 transition-all duration-300 font-bold shadow-xl">
          Bookings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
