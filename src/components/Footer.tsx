export default function Footer() {
  return (
    <footer className="bg-brand-deep border-t border-gold/15 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-16 lg:px-24 pt-16 pb-10">
        
        {/* Top Row with 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="flex flex-col items-start gap-4">
            <a href="#home" className="flex items-center gap-3 group">
              <svg className="w-9 h-6 text-gold" viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 44L24 8L36 28L48 14L78 44"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-serif text-lg font-semibold tracking-[0.12em] text-white uppercase">
                Bright <span className="text-gold font-normal">Label</span>
              </span>
            </a>
            <p className="text-xs md:text-[0.8rem] text-neutral-400 font-light leading-relaxed max-w-[280px]">
              Your Brand. Our Expertise. Complete Confidentiality. — Karachi, Pakistan. Built for brands that demand quality.
            </p>
          </div>

          {/* Column 2: Navigate links */}
          <div className="flex flex-col gap-4">
            <div className="text-[0.62rem] font-bold tracking-[0.25em] text-gold uppercase mb-2">
              Navigate
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Categories', href: '#categories' },
                { label: 'Process', href: '#process' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs md:text-[0.82rem] text-neutral-400 hover:text-gold transition-colors font-medium tracking-[0.05em]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Services links */}
          <div className="flex flex-col gap-4">
            <div className="text-[0.62rem] font-bold tracking-[0.25em] text-gold uppercase mb-2">
              Services
            </div>
            <div className="flex flex-col gap-3">
              {[
                'Manufacturing',
                'Fabric Sourcing',
                'Product Development',
                'Quality Assurance',
                'Delivery'
              ].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="text-xs md:text-[0.82rem] text-neutral-400 hover:text-gold transition-colors font-medium tracking-[0.05em]"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Connect links */}
          <div className="flex flex-col gap-4">
            <div className="text-[0.62rem] font-bold tracking-[0.25em] text-gold uppercase mb-2">
              Connect
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/company/brightlabelmfg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-[0.82rem] text-neutral-400 hover:text-gold transition-colors font-medium tracking-[0.05em]"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@brightlabelmfg.com"
                className="text-xs md:text-[0.82rem] text-neutral-400 hover:text-gold transition-colors font-medium tracking-[0.05em]"
              >
                Email Us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 select-none">
          <div className="text-xs md:text-[0.72rem] text-neutral-500 font-light tracking-[0.05em] text-center md:text-left">
            © 2026 <span className="text-gold font-normal">Bright Label MFG</span>. All rights reserved.
          </div>
          <div className="text-xs md:text-[0.72rem] text-neutral-500 font-light tracking-[0.05em] text-center md:text-right">
            Karachi, Pakistan · Serving Global Brands
          </div>
        </div>

      </div>
    </footer>
  );
}
