import { useEffect, useState, useRef } from 'react';
import TiltCard from './TiltCard';
import { SERVICES_LIST } from '../data';

const SERVICE_IMAGES: Record<string, string> = {
  mfg: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
  sourcing: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&q=80",
  dev: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  qa: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
  delivery: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
};

export default function Services() {
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
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-brand-black overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-36">
        
        {/* Header Block */}
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="flex flex-col items-start mb-16"
        >
          {/* Eyebrow */}
          <div className="text-[0.65rem] font-bold tracking-[0.3em] text-gold uppercase mb-5 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-gold block" />
            Our Services
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.1] text-white select-none">
            Everything your<br />
            <span className="italic text-gold font-normal">brand needs.</span>
          </h2>
        </div>

        {/* Services Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_LIST.map((service, idx) => (
            <TiltCard
              key={service.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s, border-color 0.4s, box-shadow 0.4s`,
              }}
              className="group glass-card-thin p-10 rounded-2xl relative overflow-hidden flex flex-col items-start select-none"
            >
              {/* Background image */}
              <img
                src={SERVICE_IMAGES[service.id]}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Dark overlay */}
              <div 
                style={{ backgroundColor: 'rgba(8, 8, 8, 0.82)' }}
                className="absolute inset-0 z-1" 
              />

              {/* Gold Top line highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />
              
              {/* Background large number */}
              <div className="absolute top-4 right-6 font-serif text-[4rem] font-bold text-gold/[0.1] group-hover:text-gold/[0.18] transition-colors duration-300 select-none z-[2]">
                {service.num}
              </div>

              {/* Gold line that expands on hover */}
              <div className="w-8 h-[1px] bg-gold mb-6 group-hover:w-[60px] transition-all duration-300 relative z-[2]" />

              {/* Service name */}
              <h3 className="text-white text-sm font-bold tracking-[0.05em] uppercase mb-4 relative z-[2]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-[0.85rem] leading-relaxed font-light relative z-[2]">
                {service.description}
              </p>
            </TiltCard>
          ))}

          {/* Card 6 — CTA Card */}
          <TiltCard
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
              transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, border-color 0.4s, box-shadow 0.4s`,
            }}
            className="group p-10 rounded-2xl relative overflow-hidden flex flex-col items-start border-gold/20 select-none"
          >
            {/* Background image */}
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
              alt="Ready to Start?"
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark overlay */}
            <div 
              style={{ backgroundColor: 'rgba(8, 8, 8, 0.82)' }}
              className="absolute inset-0 z-1" 
            />

            {/* Background large arrow */}
            <div className="absolute top-4 right-6 font-serif text-[4rem] font-bold text-gold/[0.25] select-none z-[2]">
              →
            </div>

            {/* Gold line that expands on hover */}
            <div className="w-8 h-[1px] bg-gold mb-6 group-hover:w-[60px] transition-all duration-300 relative z-[2]" />

            {/* Title */}
            <h3 className="text-white text-sm font-bold tracking-[0.05em] uppercase mb-4 relative z-[2]">
              Ready to Start?
            </h3>

            {/* Description */}
            <p className="text-neutral-400 text-[0.85rem] leading-relaxed font-light mb-6 relative z-[2]">
              Tell us about your project and we'll put together a plan built around your brand's exact needs.
            </p>

            {/* Button */}
            <a
              href="#contact"
              className="mt-auto inline-block px-7 py-3 bg-gold text-brand-black font-extrabold text-[0.7rem] tracking-[0.15em] uppercase rounded-sm hover:bg-[#d4b07a] transition-all relative z-[2]"
            >
              Get in Touch
            </a>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
