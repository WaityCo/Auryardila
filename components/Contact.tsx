
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-[#111] text-white p-8 md:p-24 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
          {/* Fondo tipográfico decorativo */}
          <div className="absolute -top-10 -right-20 p-10 opacity-[0.03] pointer-events-none select-none">
            <div className="text-[25rem] font-serif leading-none italic">Aury</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 relative z-10">
            <div className="space-y-10 md:space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-7xl font-serif leading-none italic">Construyamos<br/>tu Visión</h2>
                <p className="text-[10px] md:text-[11px] text-neutral-500 leading-relaxed uppercase tracking-[0.3em] font-black max-w-sm">
                  Disponible para campañas internacionales, editoriales de moda y alianzas estratégicas de contenido digital.
                </p>
              </div>
              
              <div className="flex flex-col gap-8 md:gap-10 pt-8 md:pt-10 border-t border-white/5">
                <div className="flex flex-col group cursor-pointer">
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-neutral-600 font-black mb-2 md:mb-3 group-hover:text-white transition-colors">Booking Directo</span>
                  <a href="mailto:contact@auryardila.com" className="text-base md:text-xl hover:opacity-50 transition-all font-serif italic tracking-wider">contact@auryardila.com</a>
                </div>
                <div className="flex flex-col group cursor-pointer">
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-neutral-600 font-black mb-2 md:mb-3 group-hover:text-white transition-colors">Social Media</span>
                  <a href="https://instagram.com/auryardila" target="_blank" className="text-base md:text-xl hover:opacity-50 transition-all font-serif italic tracking-wider">@auryardila</a>
                </div>
              </div>
            </div>

            <form className="space-y-8 md:space-y-10 bg-[#1a1a1a]/50 p-6 md:p-10 backdrop-blur-sm border border-white/5 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
               <div className="space-y-3">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black text-neutral-500">Nombre o Empresa</label>
                  <input type="text" className="w-full bg-transparent border-b border-neutral-800 py-2 md:py-3 focus:border-white outline-none transition-all text-xs md:text-sm font-medium" placeholder="Su respuesta..." />
               </div>
               <div className="space-y-3">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black text-neutral-500">Asunto de Colaboración</label>
                  <select className="w-full bg-transparent border-b border-neutral-800 py-2 md:py-3 focus:border-white outline-none transition-all text-xs md:text-sm font-medium appearance-none">
                    <option className="bg-[#111]">Campañas de Modelaje</option>
                    <option className="bg-[#111]">Creación de Contenido (UGC)</option>
                    <option className="bg-[#111]">Representación de Marca</option>
                    <option className="bg-[#111]">Otros Proyectos</option>
                  </select>
               </div>
               <div className="space-y-3">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black text-neutral-500">Mensaje Detallado</label>
                  <textarea rows={2} className="w-full bg-transparent border-b border-neutral-800 py-2 md:py-3 focus:border-white outline-none transition-all resize-none text-xs md:text-sm font-medium" placeholder="Escriba aquí..."></textarea>
               </div>
               <button className="w-full bg-white text-black py-4 md:py-6 text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] hover:bg-neutral-200 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
                  Enviar Propuesta
               </button>
            </form>
          </div>
        </div>

        {/* Footer Minimalista de Lujo Optimizado */}
        <footer className="mt-20 md:mt-40 pt-12 md:pt-24 border-t border-neutral-100 flex flex-col gap-10 md:gap-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            <div className="col-span-1 md:col-span-2 space-y-6 md:space-y-8">
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-serif font-black tracking-widest">AURY ARDILA</div>
                <div className="text-[8px] md:text-[9px] tracking-[0.6em] uppercase font-bold text-neutral-400 mt-2">Editorial & Digital Strategy</div>
              </div>
              <p className="text-[9px] md:text-[10px] text-neutral-400 uppercase tracking-[0.3em] leading-loose font-bold max-w-sm">
                Redefiniendo el estándar visual a través de la autenticidad Afro Caribeña y el compromiso con el impacto social en Córdoba.
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-neutral-300 font-black">Navegación</span>
              <ul className="space-y-2 md:space-y-4 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                <li><a href="#modeling" className="hover:text-neutral-500 transition-colors">Portafolio</a></li>
                <li><a href="#ugc" className="hover:text-neutral-500 transition-colors">Contenido Digital</a></li>
                <li><a href="#impacto" className="hover:text-neutral-500 transition-colors">Impacto Social</a></li>
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6">
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-neutral-300 font-black">Ubicación</span>
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                Córdoba, Colombia<br/>
                <span className="text-neutral-400">Available Worldwide</span>
              </p>
              <div className="flex gap-4 md:gap-6 pt-2 md:pt-4">
                 <a href="#" className="text-neutral-400 hover:text-black transition-colors font-black text-[9px]">IG</a>
                 <a href="#" className="text-neutral-400 hover:text-black transition-colors font-black text-[9px]">TK</a>
                 <a href="#" className="text-neutral-400 hover:text-black transition-colors font-black text-[9px]">IN</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-8 border-t border-neutral-50 text-[7px] md:text-[8px] text-neutral-300 font-black uppercase tracking-[0.6em] text-center md:text-left">
            <span>© 2025 Aury Ardila · All Rights Reserved</span>
            <span className="mt-2 md:mt-0 italic font-serif lowercase tracking-normal text-[10px] md:text-[12px] opacity-40">Designed for excellence</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
