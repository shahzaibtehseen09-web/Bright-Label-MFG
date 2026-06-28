import React, { useEffect, useState, useRef } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    need: '',
    message: ''
  });
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        brand: '',
        email: '',
        phone: '',
        need: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{
        backgroundImage: 'linear-gradient(rgba(8, 8, 8, 0.90), rgba(8, 8, 8, 0.90)), url("https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative bg-brand-black overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-36">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column Contact Info */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="flex flex-col items-start"
          >
            {/* Section Eyebrow */}
            <div className="text-[0.78rem] md:text-sm font-bold tracking-[0.3em] text-gold uppercase mb-5 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold block" />
              Get in Touch
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl md:text-[3.2rem] font-light leading-[1.1] text-white mb-6 select-none">
              Ready to build<br />
              <span className="italic text-gold font-normal">your brand?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-neutral-300 font-normal text-base md:text-lg leading-relaxed mb-12 select-none">
              Tell us about your project. We'll handle the rest — confidentially, professionally, and on time.
            </p>

            {/* Contact Details with Thin Divider Lines */}
            <div className="w-full flex flex-col">
              {[
                { label: 'Email', value: 'hello@brightlabelmfg.com', href: 'mailto:hello@brightlabelmfg.com' },
                { label: 'LinkedIn', value: 'linkedin.com/company/brightlabelmfg', href: 'https://www.linkedin.com/company/brightlabelmfg/' },
                { label: 'Based In', value: 'Karachi, Pakistan — Serving Global Brands', href: null }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="py-6 border-b border-white/6 first:pt-0 last:border-none last:pb-0 group"
                >
                  <div className="text-[0.75rem] md:text-xs font-bold tracking-[0.25em] text-gold uppercase mb-1.5 opacity-90">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-base md:text-lg text-white hover:text-gold transition-colors font-normal"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-base md:text-lg text-white font-normal">
                      {item.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Glassmorphism form card */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
            }}
            className="w-full bg-brand-deep border border-gold/15 glass-card rounded-2xl p-8 md:p-11"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Row 1: Full Name + Brand Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.75rem] font-bold tracking-[0.2em] text-neutral-300 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/8 rounded-sm px-4.5 py-3.5 text-white font-normal text-base outline-none transition-all duration-350 focus:border-gold focus:shadow-[0_0_12px_rgba(201,169,110,0.1)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.75rem] font-bold tracking-[0.2em] text-neutral-300 uppercase">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Brand Co."
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/8 rounded-sm px-4.5 py-3.5 text-white font-normal text-base outline-none transition-all duration-350 focus:border-gold focus:shadow-[0_0_12px_rgba(201,169,110,0.1)]"
                  />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.75rem] font-bold tracking-[0.2em] text-neutral-300 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/8 rounded-sm px-4.5 py-3.5 text-white font-normal text-base outline-none transition-all duration-350 focus:border-gold focus:shadow-[0_0_12px_rgba(201,169,110,0.1)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.75rem] font-bold tracking-[0.2em] text-neutral-300 uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/8 rounded-sm px-4.5 py-3.5 text-white font-normal text-base outline-none transition-all duration-350 focus:border-gold focus:shadow-[0_0_12px_rgba(201,169,110,0.1)]"
                  />
                </div>
              </div>

              {/* Dropdown Full Width */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-[0.75rem] font-bold tracking-[0.2em] text-neutral-300 uppercase">
                  What Do You Need?
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.need}
                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/8 rounded-sm px-4.5 py-3.5 text-white font-normal text-base outline-none transition-all duration-350 focus:border-gold focus:shadow-[0_0_12px_rgba(201,169,110,0.1)] cursor-pointer appearance-none"
                  >
                    <option value="" className="bg-brand-card text-neutral-400">Select a service</option>
                    <option value="Manufacturing Solutions" className="bg-brand-card text-white">Manufacturing Solutions</option>
                    <option value="Fabric & Trim Sourcing" className="bg-brand-card text-white">Fabric & Trim Sourcing</option>
                    <option value="Product Development" className="bg-brand-card text-white">Product Development</option>
                    <option value="Quality Assurance" className="bg-brand-card text-white">Quality Assurance</option>
                    <option value="Full Package — End to End" className="bg-brand-card text-white">Full Package — End to End</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Textarea Full Width */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.75rem] font-bold tracking-[0.2em] text-neutral-300 uppercase">
                  Tell Us About Your Project
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your collection, quantities, timeline, and any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/8 rounded-sm px-4.5 py-3.5 text-white font-normal text-base outline-none transition-all duration-350 focus:border-gold focus:shadow-[0_0_12px_rgba(201,169,110,0.1)] resize-y min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: isSubmitted ? '#15803d' : '#C9A96E',
                  color: isSubmitted ? '#ffffff' : '#080808',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="w-full py-4.5 font-extrabold text-[0.85rem] tracking-[0.2em] uppercase rounded-sm hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(201,169,110,0.35)] select-none cursor-pointer mt-2"
              >
                {isSubmitted ? 'Message Sent ✓' : 'Send Your Request'}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
