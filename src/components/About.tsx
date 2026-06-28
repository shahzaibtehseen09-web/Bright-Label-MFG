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
      className="relative bg-brand-deep overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-36">
        
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
            <div className="text-[0.65rem] font-bold tracking-[0.3em] text-gold uppercase mb-5 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold block" />
              Who We Are
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.1] text-white mb-6 select-none">
              We are your<br />
              <span className="italic text-gold font-normal">manufacturing partner.</span>
            </h2>

            {/* Content paragraphs */}
            <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-6 select-none">
              Bright Label MFG was built to solve one critical problem — US brands couldn't find a manufacturer they could actually trust. We changed that. From fabric sourcing to final delivery, we handle everything so you can focus on building your brand.
            </p>
            <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed select-none">
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
                className={`glass-card p-8 rounded-2xl flex flex-col border-gold/15 ${
                  card.isFullWidth ? 'col-span-2' : ''
                }`}
              >
                <div className="font-serif text-4xl md:text-[2.6rem] font-bold text-gold leading-none mb-2">
                  {card.number}
                </div>
                <div className="text-xs md:text-[0.75rem] text-neutral-400 font-medium tracking-[0.04em]">
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
