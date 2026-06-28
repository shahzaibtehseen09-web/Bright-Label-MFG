import { useEffect, useState, useRef } from 'react';
import { HERO_STATS } from '../data';

export default function Hero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normal offset (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setParallax({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-height-screen min-h-[100vh] w-full bg-brand-black flex items-center overflow-hidden px-6 md:px-16 lg:px-24 py-32"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
      <div className="hero-grid absolute inset-0 z-0 opacity-100" />
      
      {/* Top Left Golden Ambient Glow */}
      <div className="glow glow-gold absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full opacity-[0.14] pointer-events-none blur-[120px]" />
      
      {/* Interactive Main Content Layout */}
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left column */}
        <div 
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-[0.68rem] md:text-xs font-bold tracking-[0.28em] text-gold uppercase mb-8 select-none">
            <span className="w-8 h-[1px] bg-gold block" />
            Pakistan · Global Manufacturing
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[5.4rem] font-light leading-[1.05] tracking-tight text-white mb-6 select-none">
            Your Brand.<br />
            <span className="italic text-gold font-normal">Our Expertise.</span><br />
            <span className="font-bold">Complete Confidentiality.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base font-light text-neutral-400 leading-relaxed max-w-[540px] mb-10 select-none">
            Premium apparel sourcing and manufacturing from Pakistan — built for US startups and emerging global brands who demand quality without compromise.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-8 py-4 bg-gold text-brand-black font-extrabold text-[0.78rem] tracking-[0.18em] uppercase rounded-sm hover:bg-[#d4b07a] hover:shadow-[0_8px_40px_rgba(201,169,110,0.4)] transition-all duration-300 text-center"
            >
              Start Your Order
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-gold/40 text-white font-semibold text-[0.78rem] tracking-[0.18em] uppercase rounded-sm hover:border-gold hover:text-gold hover:bg-gold/[0.02] transition-all duration-300 text-center"
            >
              See What We Do
            </a>
          </div>
        </div>

        {/* Right column: Floating Card with Parallax */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            style={{
              transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) rotateY(${-parallax.x * 0.4}deg) rotateX(${parallax.y * 0.4}deg)`,
              opacity: isMounted ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
            className="w-full max-w-[340px] glass-card p-9 rounded-2xl relative border-gold/15 select-none"
          >
            {/* Soft inner highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl pointer-events-none" />
            
            <div className="text-[0.62rem] font-bold tracking-[0.25em] text-gold uppercase mb-8 opacity-90">
              Why Brands Trust Us
            </div>

            <div className="flex flex-col gap-8">
              {HERO_STATS.map((stat, idx) => (
                <div key={idx} className="group relative">
                  <div className="font-serif text-4xl font-bold text-gold leading-none mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[0.78rem] text-neutral-400 font-medium tracking-[0.02em]">
                    {stat.label}
                  </div>
                  {idx < HERO_STATS.length - 1 && (
                    <div className="w-full h-[1px] bg-white/6 mt-6 pointer-events-none" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
