import { useEffect, useState, useRef } from 'react';
import { TRUST_POINTS } from '../data';

export default function WhyUs() {
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
      id="why-us"
      ref={containerRef}
      className="relative bg-brand-black overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-36">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Comparison Split Panel */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 select-none"
          >
            {/* Left side: BEFORE (Dark Red) */}
            <div className="absolute inset-y-0 left-0 right-[50%] bg-gradient-to-br from-[#1a0a0a] to-[#0e0808] flex flex-col justify-center p-6 md:p-8 lg:p-10 gap-6">
              <div className="text-[0.6rem] md:text-xs tracking-[0.25em] text-red-500 font-bold uppercase mb-2">
                Before
              </div>
              {[
                'No manufacturer to trust.',
                'MOQs too high to afford.',
                'Quality never consistent.',
                'Brand idea stuck.'
              ].map((item, idx) => (
                <div key={idx} className="text-xs md:text-sm text-neutral-400/50 line-through font-light leading-relaxed">
                  {item}
                </div>
              ))}
            </div>

            {/* Right side: WITH BRIGHT LABEL (Dark Green) */}
            <div className="absolute inset-y-0 right-0 left-[50%] bg-gradient-to-br from-[#0e100a] to-[#0a0d08] flex flex-col justify-center p-6 md:p-8 lg:p-10 gap-6 pl-8 md:pl-10">
              <div className="text-[0.6rem] md:text-xs tracking-[0.25em] text-gold font-bold uppercase mb-2">
                With Bright Label
              </div>
              {[
                'Direct factory. Zero middlemen.',
                'Flexible MOQs for startups.',
                'Strict QC on every piece.',
                'Your brand live. Your name on it.'
              ].map((item, idx) => (
                <div key={idx} className="text-xs md:text-sm text-neutral-200 font-normal leading-relaxed">
                  {item}
                </div>
              ))}
            </div>

            {/* Middle Divider Line with Mountain SVG */}
            <div className="absolute inset-y-0 left-[50%] w-[1px] bg-gold z-10">
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-11 h-11 rounded-full bg-brand-black border border-gold flex items-center justify-center z-20">
                <svg viewBox="0 0 40 24" fill="none" className="w-6 text-gold" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 22L10 6L16 16L22 8L39 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Trust Points */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="flex flex-col items-start"
          >
            {/* Section Eyebrow */}
            <div className="text-[0.65rem] font-bold tracking-[0.3em] text-gold uppercase mb-5 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold block" />
              Why Bright Label
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.1] text-white mb-10 select-none">
              We solve what<br />
              <span className="italic text-gold font-normal">stops you.</span>
            </h2>

            {/* List of 4 points */}
            <div className="flex flex-col gap-8 w-full">
              {TRUST_POINTS.map((point, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 items-start pb-6 border-b border-white/5 last:border-none last:pb-0"
                >
                  {/* Left 2px tall gold bar */}
                  <div className="w-[2px] h-11 bg-gold flex-shrink-0 mt-1" />
                  
                  <div>
                    <h3 className="text-[0.92rem] font-bold text-white tracking-[0.04em] mb-2 uppercase">
                      {point.title}
                    </h3>
                    <p className="text-neutral-400 text-xs md:text-[0.82rem] leading-relaxed font-light">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
