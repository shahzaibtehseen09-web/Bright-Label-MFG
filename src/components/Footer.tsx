export default function Footer() {
  return (
    <footer 
      style={{
        backgroundImage: 'radial-gradient(rgba(201, 169, 110, 0.03) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
      className="bg-brand-deep border-t border-gold/15 relative z-10 overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-16 lg:px-24 pt-20 pb-10">
        
        {/* Top Tagline Banner Section */}
        <div className="flex flex-col items-center justify-center text-center border-b border-white/5 pb-16 mb-16 select-none">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white leading-snug">
            YOUR BRAND. <span className="italic text-gold font-normal">OUR EXPERTISE.</span>
          </h2>
          <p className="font-sans text-[0.78rem] md:text-sm font-bold tracking-[0.3em] text-gold uppercase mt-4 flex items-center gap-3">
            <span className="w-5 h-[1px] bg-gold opacity-60" />
            Complete Confidentiality
            <span className="w-5 h-[1px] bg-gold opacity-60" />
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="flex flex-col items-start gap-5">
            <a href="#home" className="flex items-center gap-4 group">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNTAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8cGF0aAogICAgZD0iTSAxODAgMjUwIEwgMjMwIDI1MCBDIDI3MCAyNTAsIDI5MCAyMjAsIDMxNSAyMTAgQyAzMzUgMjAyLCAzNDUgMjIwLCAzNjAgMjIwIEMgMzgwIDIyMCwgNDAwIDE3MCwgNDQwIDE2MCBDIDQ4MCAxNTAsIDQ5MCAyMDAsIDUxMCAyMDAgQyA1MzAgMjAwLCA1NTAgMTg1LCA1ODAgMjE1IEMgNjAwIDIzNSwgNjE1IDI1MCwgNjYwIDI1MCBMIDcxMCAyNTAiCiAgICBmaWxsPSJub25lIgogICAgc3Ryb2tlPSIjZjVmNWY1IgogICAgc3Ryb2tlLXdpZHRoPSI1IgogICAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIKICAvPgogIDx0ZXh0CiAgICB4PSI1MCUiCiAgICB5PSIzMzAiCiAgICBmb250LWZhbWlseT0iJ0Nvcm1vcmFudCBHYXJhbW9uZCcsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIKICAgIGZvbnQtc2l6ZT0iNDIiCiAgICBmb250LXdlaWdodD0iYm9sZCIKICAgIGZpbGw9IiNmNWY1ZjUiCiAgICB0ZXh0LWFuY2hvcj0ibWlkZGxlIgogICAgbGV0dGVyLXNwYWNpbmc9IjEuNSIKICA+QnJpZ2h0IExhYmVsLjwvdGV4dD4KPC9zdmc+" 
                alt="Bright Label MFG" 
                className="h-10 w-auto object-contain brightness-100 transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-sm md:text-[0.92rem] text-neutral-400 font-normal leading-relaxed max-w-[280px]">
              Premium apparel sourcing and manufacturing from Pakistan — built for emerging global brands.
            </p>
          </div>

          {/* Column 2: Navigate links */}
          <div className="flex flex-col gap-4">
            <div className="text-[0.75rem] font-bold tracking-[0.25em] text-gold uppercase mb-2">
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
                  className="text-sm md:text-[0.92rem] text-neutral-400 hover:text-gold transition-colors font-medium tracking-[0.05em]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Services links */}
          <div className="flex flex-col gap-4">
            <div className="text-[0.75rem] font-bold tracking-[0.25em] text-gold uppercase mb-2">
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
                  className="text-sm md:text-[0.92rem] text-neutral-400 hover:text-gold transition-colors font-medium tracking-[0.05em]"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Connect links */}
          <div className="flex flex-col gap-4">
            <div className="text-[0.75rem] font-bold tracking-[0.25em] text-gold uppercase mb-2">
              Connect
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/company/brightlabelmfg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-[0.92rem] text-neutral-400 hover:text-gold transition-colors font-medium tracking-[0.05em]"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@brightlabelmfg.com"
                className="text-sm md:text-[0.92rem] text-neutral-400 hover:text-gold transition-colors font-medium tracking-[0.05em]"
              >
                Email Us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 select-none">
          <div className="text-sm md:text-[0.82rem] text-neutral-500 font-normal tracking-[0.05em] text-center md:text-left">
            © 2026 <span className="text-gold font-normal">Bright Label MFG</span>. All rights reserved.
          </div>
          <div className="text-sm md:text-[0.82rem] text-neutral-500 font-normal tracking-[0.05em] text-center md:text-right">
            Karachi, Pakistan · Serving Global Brands
          </div>
        </div>

      </div>
    </footer>
  );
}
