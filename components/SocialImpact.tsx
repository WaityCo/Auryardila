
import React from 'react';

const SocialImpact: React.FC = () => {
  return (
    <section id="impacto" className="py-20 md:py-40 bg-[#121212] text-white relative overflow-hidden">
      {/* Visual background layers */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#1A1A1A] -skew-x-12 translate-x-40 z-0 opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative group">
              <div className="aspect-[4/5] bg-neutral-900 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-[1.5s] border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1550565118-3d1428df4a78?auto=format&fit=crop&q=80&w=800" 
                  alt="Aury Ardila - Labor Social" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white text-black p-12 max-w-sm shadow-[50px_50px_100px_rgba(0,0,0,0.5)] hidden xl:block">
                 <p className="text-[11px] font-black uppercase tracking-[0.4em] mb-6 border-b border-neutral-100 pb-4">Misión & Valores</p>
                 <p className="text-lg font-serif italic leading-relaxed">
                   "Mi voz es la de aquellos que no pueden ser escuchados. Transformamos el departamento de Córdoba desde la inclusión."
                 </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8 md:space-y-12">
            <div className="space-y-3 md:space-y-4">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-neutral-500 font-black">Impacto en la Región</span>
              <h2 className="text-4xl md:text-8xl font-serif leading-none tracking-tighter">Belleza con<br/>Corazón Social</h2>
            </div>
            
            <div className="space-y-8 md:space-y-10 max-w-xl">
              <div className="group border-l-4 border-white/10 pl-6 md:pl-10 py-2 md:py-4 hover:border-white transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-white group-hover:translate-x-2 transition-transform">Fundación Casa Sorda</h3>
                <p className="text-[10px] md:text-sm text-neutral-400 leading-relaxed tracking-widest uppercase font-medium">
                  Lidero activamente la inclusión de personas con discapacidad auditiva. Mi mayor impacto se centra en el departamento de Córdoba, gestionando recursos y visibilidad para esta comunidad.
                </p>
              </div>
              
              <div className="group border-l-4 border-white/10 pl-6 md:pl-10 py-2 md:py-4 hover:border-white transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-white group-hover:translate-x-2 transition-transform">Embajadora de la Inclusión</h3>
                <p className="text-[10px] md:text-sm text-neutral-400 leading-relaxed tracking-widest uppercase font-medium">
                  Utilizo mi plataforma como candidata al Miss Universe para romper barreras de comunicación, promoviendo la lengua de señas y la integración real en la sociedad cordobesa.
                </p>
              </div>
            </div>

            <div className="pt-4 md:pt-8 flex items-center gap-6 md:gap-10">
               <div className="h-[1px] w-12 md:w-20 bg-neutral-700"></div>
               <div className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-black text-neutral-500">Compromiso Córdoba 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;
