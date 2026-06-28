import { useEffect, useState, useRef } from 'react';
import TiltCard from './TiltCard';
import { SERVICES_LIST } from '../data';

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
              {/* Gold Top line highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Background large number */}
              <div className="absolute top-4 right-6 font-serif text-[4rem] font-bold text-gold/[0.1] group-hover:text-gold/[0.18] transition-colors duration-300 select-none">
                {service.num}
              </div>

              {/* Gold line that expands on hover */}
              <div className="w-8 h-[1px] bg-gold mb-6 group-hover:w-[60px] transition-all duration-300" />

              {/* Service name */}
              <h3 className="text-white text-sm font-bold tracking-[0.05em] uppercase mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-[0.85rem] leading-relaxed font-light">
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
              background: 'linear-gradient(135deg, rgba(201, 169, 110, 0.12), rgba(201, 169, 110, 0.04))',
            }}
            className="group p-10 rounded-2xl relative overflow-hidden flex flex-col items-start border-gold/20 select-none"
          >
            {/* Background large arrow */}
            <div className="absolute top-4 right-6 font-serif text-[4rem] font-bold text-gold/[0.25] select-none">
              →
            </div>

            {/* Gold line that expands on hover */}
            <div className="w-8 h-[1px] bg-gold mb-6 group-hover:w-[60px] transition-all duration-300" />

            {/* Title */}
            <h3 className="text-white text-sm font-bold tracking-[0.05em] uppercase mb-4">
              Ready to Start?
            </h3>

            {/* Description */}
            <p className="text-neutral-400 text-[0.85rem] leading-relaxed font-light mb-6">
              Tell us about your project and we'll put together a plan built around your brand's exact needs.
            </p>

            {/* Button */}
            <a
              href="#contact"
              className="mt-auto inline-block px-7 py-3 bg-gold text-brand-black font-extrabold text-[0.7rem] tracking-[0.15em] uppercase rounded-sm hover:bg-[#d4b07a] transition-all"
            >
              Get in Touch
            </a>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
