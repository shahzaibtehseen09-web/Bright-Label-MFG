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
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s, border-color 0.4s, box-shadow 0.4s, transform 0.4s`,
              }}
              className="group glass-card-thin p-10 rounded-2xl relative overflow-hidden flex flex-col items-start select-none min-h-[450px] border border-white/5 hover:border-gold/50 hover:shadow-[0_20px_40px_rgba(201,169,110,0.15)] hover:-translate-y-2.5 transition-all duration-500"
            >
              {/* Background image */}
              <img
                src={SERVICE_IMAGES[service.id]}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Dark overlay (minimum 0.88 opacity) */}
              <div 
                style={{ backgroundColor: 'rgba(8, 8, 8, 0.88)' }}
                className="absolute inset-0 z-1" 
              />

              {/* Gold Top line sweep highlight on hover */}
              <div className="gold-shimmer-sweep z-[3]" />
              
              {/* Background large number */}
              <div 
                style={{ 
                  color: 'rgba(201, 169, 110, 0.55)',
                  textShadow: '0 0 30px rgba(201, 169, 110, 0.4)'
                }}
                className="absolute top-4 right-6 font-serif text-[4.8rem] font-extrabold transition-colors duration-300 select-none z-[2]"
              >
                {service.num}
              </div>

              {/* Gold line that expands on hover */}
              <div className="w-8 h-[1px] bg-gold mb-6 group-hover:w-[60px] transition-all duration-300 relative z-[2]" />

              {/* Service name (Poppins 700 + increased size) */}
              <h3 className="text-white text-base md:text-lg font-bold tracking-[0.05em] uppercase mb-4 relative z-[2]">
                {service.title}
              </h3>

              {/* Description (Poppins 400 + increased size) */}
              <p className="text-neutral-300 text-[0.95rem] leading-relaxed font-normal relative z-[2]">
                {service.description}
              </p>
            </TiltCard>
          ))}

          {/* Card 6 — CTA Card */}
          <TiltCard
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
              transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, border-color 0.4s, box-shadow 0.4s, transform 0.4s`,
            }}
            className="group glass-card-thin p-10 rounded-2xl relative overflow-hidden flex flex-col items-start border border-gold/20 hover:border-gold/50 hover:shadow-[0_20px_40px_rgba(201,169,110,0.15)] hover:-translate-y-2.5 transition-all duration-500 select-none min-h-[450px]"
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
              style={{ backgroundColor: 'rgba(8, 8, 8, 0.88)' }}
              className="absolute inset-0 z-1" 
            />

            {/* Gold Top line sweep highlight on hover */}
            <div className="gold-shimmer-sweep z-[3]" />

            {/* Background large arrow */}
            <div 
              style={{ 
                color: 'rgba(201, 169, 110, 0.55)',
                textShadow: '0 0 30px rgba(201, 169, 110, 0.4)'
              }}
              className="absolute top-4 right-6 font-serif text-[4.8rem] font-extrabold select-none z-[2]"
            >
              →
            </div>

            {/* Gold line that expands on hover */}
            <div className="w-8 h-[1px] bg-gold mb-6 group-hover:w-[60px] transition-all duration-300 relative z-[2]" />

            {/* Title */}
            <h3 className="text-white text-base md:text-lg font-bold tracking-[0.05em] uppercase mb-4 relative z-[2]">
              Ready to Start?
            </h3>

            {/* Description */}
            <p className="text-neutral-300 text-[0.95rem] leading-relaxed font-normal mb-6 relative z-[2]">
              Tell us about your project and we'll put together a plan built around your brand's exact needs.
            </p>

            {/* Button */}
            <a
              href="#contact"
              className="mt-auto inline-block px-7 py-3 text-brand-black font-extrabold text-[0.8rem] tracking-[0.15em] uppercase rounded-sm shimmer-button hover:text-brand-black hover:shadow-[0_8px_30px_rgba(201,169,110,0.3)] transition-all relative z-[2]"
            >
              Get in Touch
            </a>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
