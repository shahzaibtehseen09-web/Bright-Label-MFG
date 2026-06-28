import { useEffect, useState, useRef } from 'react';
import TiltCard from './TiltCard';
import { CATEGORIES_LIST } from '../data';

const CAT_IMAGES: Record<string, string> = {
  tops: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  outerwear: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80",
  bottoms: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
  denim: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80",
  activewear: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
  accessories: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&q=80"
};

export default function Categories() {
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
      id="categories"
      ref={containerRef}
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
            What We Manufacture
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.1] text-white select-none">
            6 categories.<br />
            <span className="italic text-gold font-normal">One partner.</span>
          </h2>
        </div>

        {/* Categories Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES_LIST.map((cat, idx) => (
            <TiltCard
              key={cat.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s, border-color 0.4s, box-shadow 0.4s`,
              }}
              className="group glass-card-thin p-10 rounded-2xl relative overflow-hidden flex flex-col select-none"
            >
              {/* Background image */}
              <img
                src={CAT_IMAGES[cat.id]}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Dark overlay slightly lighter */}
              <div 
                style={{ backgroundColor: 'rgba(8, 8, 8, 0.78)' }}
                className="absolute inset-0 z-1" 
              />

              {/* Giant Faded Number on Bottom-Right */}
              <div className="absolute -bottom-2 right-4 font-serif text-[7rem] font-bold text-gold/[0.05] group-hover:text-gold/[0.1] transition-colors duration-300 leading-none select-none pointer-events-none z-[2]">
                {cat.num}
              </div>

              {/* Category Name */}
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-6 relative z-[2]">
                {cat.name}
              </h3>

              {/* Items List */}
              <ul className="flex flex-col gap-3 relative z-[2]">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-[0.82rem] text-neutral-350 font-medium flex items-center gap-3.5">
                    <span className="w-4 h-[1px] bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
