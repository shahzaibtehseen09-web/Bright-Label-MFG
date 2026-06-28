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

  const row1Words = "Your Brand.".split(" ");
  const row2Words = "Our Expertise.".split(" ");
  const row3Words = "Complete Confidentiality.".split(" ");

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        backgroundImage: 'linear-gradient(rgba(8, 8, 8, 0.92), rgba(8, 8, 8, 0.95)), radial-gradient(circle at 30% 50%, rgba(201, 169, 110, 0.16) 0%, transparent 60%), url("https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="relative min-height-screen min-h-[100vh] w-full bg-brand-black flex items-center overflow-hidden px-6 md:px-16 lg:px-24 py-32"
    >
      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(110%); }
          100% { transform: translateY(0); }
        }
        .animate-word {
          display: inline-block;
          transform: translateY(110%);
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '3px',
            height: '3px',
            backgroundColor: '#C9A96E',
            borderRadius: '50%',
            opacity: 0.3,
            pointerEvents: 'none',
            top: `${15 + (i * 7.7) % 70}%`,
            left: `${10 + (i * 9.3) % 80}%`,
            animation: `particleFloat ${20 + (i * 3.5) % 15}s infinite ease-in-out`,
            animationDelay: `${i * -1.8}s`,
          }}
        />
      ))}

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
          <div className="flex items-center gap-4 text-[0.78rem] md:text-sm font-bold tracking-[0.28em] text-gold uppercase mb-8 select-none">
            <span className="w-[60px] h-[1px] bg-gold block" />
            Pakistan · Global Manufacturing
          </div>

          {/* Heading with animated word reveal */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.2rem] font-light leading-[1.05] tracking-tight text-white mb-6 select-none">
            <div className="block overflow-hidden h-fit py-1">
              {row1Words.map((word, idx) => (
                <span key={idx} className="inline-block mr-3 md:mr-4 overflow-hidden">
                  <span className="animate-word" style={{ animationDelay: `${idx * 0.08}s` }}>{word}</span>
                </span>
              ))}
            </div>
            <div className="block overflow-hidden h-fit py-1 italic text-gold font-normal">
              {row2Words.map((word, idx) => (
                <span key={idx} className="inline-block mr-3 md:mr-4 overflow-hidden">
                  <span className="animate-word" style={{ animationDelay: `${0.3 + idx * 0.08}s` }}>{word}</span>
                </span>
              ))}
            </div>
            <div className="block overflow-hidden h-fit py-1 font-bold text-white">
              {row3Words.map((word, idx) => (
                <span key={idx} className="inline-block mr-3 md:mr-4 overflow-hidden">
                  <span className="animate-word" style={{ animationDelay: `${0.6 + idx * 0.08}s` }}>{word}</span>
                </span>
              ))}
            </div>
          </h1>

          {/* Subtitle (increased by 10-15%) */}
          <p className="text-base md:text-lg font-light text-neutral-300 leading-relaxed max-w-[680px] mb-10 select-none">
            A professional team that brings every design to life through precise Tech Pack interpretation and expert craftsmanship — transforming concepts into high-quality, production-ready garments.<br /><br />
            Based in Karachi, Pakistan — one of the world's leading apparel manufacturing hubs — we proudly serve fashion brands across Asia, North America, and beyond, delivering reliable manufacturing solutions with global standards.
          </p>

          {/* Buttons (increased text size and shimmer effect) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-8 py-4 text-brand-black font-extrabold text-[0.88rem] tracking-[0.18em] uppercase rounded-sm shimmer-button hover:text-brand-black hover:shadow-[0_8px_40px_rgba(201,169,110,0.4)] transition-all duration-300 text-center"
            >
              Start Your Order
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-gold/40 text-white font-extrabold text-[0.88rem] tracking-[0.18em] uppercase rounded-sm hover:border-gold hover:text-gold hover:bg-gold/[0.02] transition-all duration-300 text-center"
            >
              See What We Do
            </a>
          </div>

          {/* Hero stats row (separated by vertical gold lines) */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-12 pt-10 border-t border-white/10 w-full select-none">
            <div className="flex-1 min-w-[120px]">
              <div className="font-sans text-xl md:text-2xl font-bold text-white mb-1">6+ Categories</div>
              <div className="font-sans text-[0.72rem] md:text-[0.8rem] font-light text-gold/70 uppercase tracking-widest">Global Range</div>
            </div>
            <div className="hidden md:block w-[1px] h-10 bg-gold/20" />
            <div className="flex-1 min-w-[120px]">
              <div className="font-sans text-xl md:text-2xl font-bold text-white mb-1">100% Confidential</div>
              <div className="font-sans text-[0.72rem] md:text-[0.8rem] font-light text-gold/70 uppercase tracking-widest">Protected IP</div>
            </div>
            <div className="hidden md:block w-[1px] h-10 bg-gold/20" />
            <div className="flex-1 min-w-[120px]">
              <div className="font-sans text-xl md:text-2xl font-bold text-white mb-1">End-to-End Service</div>
              <div className="font-sans text-[0.72rem] md:text-[0.8rem] font-light text-gold/70 uppercase tracking-widest">Design to Delivery</div>
            </div>
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
            
            <div className="text-[0.72rem] font-bold tracking-[0.25em] text-gold uppercase mb-8 opacity-90">
              Why Brands Trust Us
            </div>

            <div className="flex flex-col gap-8">
              {HERO_STATS.map((stat, idx) => (
                <div key={idx} className="group relative">
                  <div className="font-serif text-5xl font-bold text-gold leading-none mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[0.85rem] text-neutral-300 font-medium tracking-[0.02em]">
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
