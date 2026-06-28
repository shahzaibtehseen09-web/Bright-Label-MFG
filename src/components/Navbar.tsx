import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

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

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'categories', 'process', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const logoBase64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNTAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8cGF0aAogICAgZD0iTSAxODAgMjUwIEwgMjMwIDI1MCBDIDI3MCAyNTAsIDI5MCAyMjAsIDMxNSAyMTAgQyAzMzUgMjAyLCAzNDUgMjIwLCAzNjAgMjIwIEMgMzgwIDIyMCwgNDAwIDE3MCwgNDQwIDE2MCBDIDQ4MCAxNTAsIDQ5MCAyMDAsIDUxMCAyMDAgQyA1MzAgMjAwLCA1NTAgMTg1LCA1ODAgMjE1IEMgNjAwIDIzNSwgNjE1IDI1MCwgNjYwIDI1MCBMIDcxMCAyNTAiCiAgICBmaWxsPSJub25lIgogICAgc3Ryb2tlPSIjZjVmNWY1IgogICAgc3Ryb2tlLXdpZHRoPSI1IgogICAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIKICAvPgogIDx0ZXh0CiAgICB4PSI1MCUiCiAgICB5PSIzMzAiCiAgICBmb250LWZhbWlseT0iJ0Nvcm1vcmFudCBHYXJhbW9uZCcsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIKICAgIGZvbnQtc2l6ZT0iNDIiCiAgICBmb250LXdlaWdodD0iYm9sZCIKICAgIGZpbGw9IiNmNWY1ZjUiCiAgICB0ZXh0LWFuY2hvcj0ibWlkZGxlIgogICAgbGV0dGVyLXNwYWNpbmc9IjEuNSIKICA+QnJpZ2h0IExhYmVsLjwvdGV4dD4KPC9zdmc+";

  return (
    <>
      <nav
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s, background-color 0.4s, border-color 0.4s',
        }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b ${
          isScrolled
            ? 'py-4 px-6 md:px-16 bg-brand-black/90 backdrop-blur-md border-gold/20 shadow-lg'
            : 'py-7 px-6 md:px-16 bg-brand-black/40 backdrop-blur-sm border-gold/10'
        }`}
      >
        {/* Left: Brand Logo */}
        <a href="#home" className="flex items-center select-none">
          <img 
            src={logoBase64} 
            alt="Bright Label MFG" 
            style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Center: Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {[
            { label: 'About', href: '#about', id: 'about' },
            { label: 'Services', href: '#services', id: 'services' },
            { label: 'Categories', href: '#categories', id: 'categories' },
            { label: 'Process', href: '#process', id: 'process' },
            { label: 'Contact', href: '#contact', id: 'contact' }
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-[0.82rem] font-semibold tracking-[0.18em] uppercase nav-link-underline transition-colors ${
                  activeSection === link.id ? 'nav-link-active text-gold' : 'text-neutral-400 hover:text-white'
                }`}
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
            className="px-6 py-2.5 border border-gold text-gold text-[0.82rem] font-extrabold tracking-[0.18em] uppercase rounded-sm shimmer-button hover:text-brand-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.25)]"
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
          { label: 'About', href: '#about', id: 'about' },
          { label: 'Services', href: '#services', id: 'services' },
          { label: 'Categories', href: '#categories', id: 'categories' },
          { label: 'Process', href: '#process', id: 'process' },
          { label: 'Contact', href: '#contact', id: 'contact' }
        ].map((link, idx) => (
          <a
            key={link.href}
            onClick={() => setIsMobileOpen(false)}
            href={link.href}
            style={{
              transform: isMobileOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.05}s, color 0.3s`,
            }}
            className={`text-3xl font-semibold tracking-[0.15em] uppercase ${
              activeSection === link.id ? 'text-gold' : 'text-white hover:text-gold'
            }`}
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
          className="mt-4 px-8 py-3 border border-gold text-gold text-sm font-extrabold tracking-[0.2em] uppercase rounded-sm shimmer-button hover:text-brand-black transition-all"
        >
          Start a Project
        </a>
      </div>
    </>
  );
}
