import { useEffect, useState, useRef } from 'react';
import TiltCard from './TiltCard';
import { ABOUT_CARDS } from '../data';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      style={{
        backgroundImage: 'linear-gradient(rgba(14,14,14,0.91), rgba(14,14,14,0.94)), url("https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1800&q=80")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
      className="relative bg-brand-deep overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute right-[-5%] bottom-[5%] font-serif text-[12vw] font-bold text-white/[0.012] leading-none select-none pointer-events-none tracking-widest z-0" style={{ fontFamily: 'Cormorant Garamond' }}>
        BRIGHT LABEL
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-36 relative z-10">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Section Eyebrow */}
            <div className="text-[0.78rem] md:text-sm font-bold tracking-[0.3em] text-gold uppercase mb-5 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold block" />
              Who We Are
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl md:text-[3.2rem] font-light leading-[1.1] text-white mb-6 select-none">
              We are your<br />
              <span className="italic text-gold font-normal">manufacturing partner.</span>
            </h2>

            {/* Content paragraphs */}
            <p className="text-neutral-300 font-light text-base md:text-lg leading-relaxed select-none">
              Bright Label MFG was built to solve one critical problem — global brands couldn't find a manufacturer they could actually trust. We changed that. From fabric sourcing to final delivery, we handle everything so you can focus on building your brand.
            </p>
            
            <div className="w-[80px] h-[1px] bg-gold my-8 opacity-80" />
            
            <p className="text-neutral-300 font-light text-base md:text-lg leading-relaxed select-none">
              Whether you're launching your first collection or scaling an established brand globally, we bring years of hands-on manufacturing experience with complete transparency, consistency, and confidentiality.
            </p>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {ABOUT_CARDS.map((card, idx) => (
              <TiltCard
                key={idx}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
                  transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + idx * 0.1}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + idx * 0.1}s, border-color 0.4s, box-shadow 0.4s`,
                }}
                className={`glass-card p-8 rounded-2xl flex flex-col border-gold/15 relative overflow-hidden group hover:border-gold/40 hover:shadow-[0_0_30px_rgba(201,169,110,0.15)] hover:bg-[#141414]/85 transition-all duration-300 ${
                  card.isFullWidth ? 'col-span-2' : ''
                }`}
              >
                {/* Soft inner hover shine */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent to-gold/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="font-serif text-5xl md:text-[3.2rem] font-bold text-gold leading-none mb-2" style={{ fontFamily: 'Cormorant Garamond' }}>
                  {card.number}
                </div>
                <div className="text-xs md:text-[0.85rem] text-neutral-400 font-semibold tracking-[0.04em] uppercase">
                  {card.label}
                </div>
              </TiltCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
