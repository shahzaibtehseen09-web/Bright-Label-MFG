import { useEffect, useState, useRef } from 'react';
import { PROCESS_STEPS } from '../data';

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [lineWidth, setLineWidth] = useState(0); // This represents the scaleY height of the process line
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For fade-in visibility of the entire section
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

    // Scroll line animation
    const handleScroll = () => {
      if (!stepsContainerRef.current) return;
      const rect = stepsContainerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start measuring when the steps container top enters the viewport center
      const start = rect.top - viewportHeight / 2;
      const totalHeight = rect.height;
      
      let progress = 0;
      if (start < 0) {
        progress = Math.abs(start) / (totalHeight - 100);
      }
      
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      setLineWidth(progress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on load

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      style={{
        backgroundImage: 'linear-gradient(rgba(14, 14, 14, 0.88), rgba(14, 14, 14, 0.88)), url("https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1800&q=80")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
      className="relative bg-brand-deep overflow-hidden"
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
            The Process
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.1] text-white select-none">
            From idea to<br />
            <span className="italic text-gold font-normal">finished garment.</span>
          </h2>
        </div>

        {/* Timeline Steps Block */}
        <div 
          ref={stepsContainerRef}
          className="relative max-w-[640px] mt-16"
        >
          {/* Vertical gold progress line */}
          <div className="absolute left-[20px] top-4 bottom-4 w-[1px] bg-white/5 pointer-events-none">
            <div
              style={{
                height: `${lineWidth}%`,
                transition: 'height 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold to-[#a07840] origin-top"
            />
          </div>

          {/* List of steps */}
          <div className="flex flex-col gap-12">
            {PROCESS_STEPS.map((step, idx) => {
              // Decide if this individual step is active/visited based on progress scroll percentage
              const stepPercentPosition = (idx / (PROCESS_STEPS.length - 1)) * 100;
              const isStepActive = lineWidth >= stepPercentPosition - 5;

              return (
                <div
                  key={step.num}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.12}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.12}s`,
                  }}
                  className="group relative flex gap-12 pl-16 py-2"
                >
                  {/* Bullet point / circle on the line */}
                  <div className="absolute left-3 top-5 w-[16px] h-[16px] rounded-full border border-gold bg-brand-black flex items-center justify-center transition-all duration-300 z-10">
                    <div 
                      style={{
                        transform: isStepActive ? 'scale(1)' : 'scale(0)',
                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-gold" 
                    />
                  </div>

                  {/* Left big faded step number */}
                  <div className="font-serif text-4xl md:text-[3.5rem] font-bold text-gold/[0.12] group-hover:text-gold/[0.25] transition-colors duration-400 leading-none select-none w-20 flex-shrink-0">
                    {step.num}
                  </div>

                  {/* Right side content */}
                  <div className="flex flex-col">
                    <h3 className="text-white text-base font-bold tracking-[0.04em] mb-2 uppercase group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 text-[0.88rem] leading-relaxed font-light select-none">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
