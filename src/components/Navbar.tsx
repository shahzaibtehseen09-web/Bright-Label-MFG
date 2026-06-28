import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled styling (blur and smaller padding)
      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !isMobileOpen) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileOpen]);

  return (
    <>
      <nav
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s, background-color 0.4s, border-color 0.4s',
        }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b ${
          isScrolled
            ? 'py-4 px-6 md:px-16 bg-brand-black/90 backdrop-blur-md border-white/5 shadow-lg'
            : 'py-7 px-6 md:px-16 bg-brand-black/40 backdrop-blur-sm border-white/0'
        }`}
      >
        {/* Left: Brand */}
        <a href="#home" className="flex items-center gap-3 select-none group">
          <svg className="w-9 h-6 text-gold" viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 44L24 8L36 28L48 14L78 44"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 group-hover:stroke-white"
            />
          </svg>
          <span className="font-serif text-lg md:text-xl font-semibold tracking-[0.12em] text-white uppercase transition-colors group-hover:text-gold">
            Bright <span className="text-gold font-normal group-hover:text-white">Label</span>
          </span>
        </a>

        {/* Center: Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {[
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Categories', href: '#categories' },
            { label: 'Process', href: '#process' },
            { label: 'Contact', href: '#contact' }
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[0.72rem] font-semibold tracking-[0.18em] text-neutral-400 hover:text-white uppercase nav-link-underline transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Desktop Action */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 border border-gold text-gold text-[0.72rem] font-bold tracking-[0.18em] uppercase rounded-sm hover:bg-gold hover:text-brand-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.25)]"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="block md:hidden text-white hover:text-gold transition-colors focus:outline-none p-1 z-50"
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile: Full Screen Overlay */}
      <div
        style={{
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="fixed inset-0 bg-brand-black/95 backdrop-blur-lg z-[99] flex flex-col items-center justify-center gap-10"
      >
        {[
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Categories', href: '#categories' },
          { label: 'Process', href: '#process' },
          { label: 'Contact', href: '#contact' }
        ].map((link, idx) => (
          <a
            key={link.href}
            onClick={() => setIsMobileOpen(false)}
            href={link.href}
            style={{
              transform: isMobileOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.05}s, color 0.3s`,
            }}
            className="text-white text-3xl font-serif font-light tracking-[0.15em] hover:text-gold uppercase"
          >
            {link.label}
          </a>
        ))}
        
        <a
          onClick={() => setIsMobileOpen(false)}
          href="#contact"
          style={{
            transform: isMobileOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
          }}
          className="mt-4 px-8 py-3 border border-gold text-gold text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-gold hover:text-brand-black transition-all"
        >
          Start a Project
        </a>
      </div>
    </>
  );
}
