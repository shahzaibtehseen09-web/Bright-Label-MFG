import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s, background-color 0.3s, border-color 0.3s, transform 0.3s',
      }}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-brand-deep/60 backdrop-blur-md border border-gold/20 flex items-center justify-center text-white z-[90] cursor-pointer hover:bg-gold hover:border-gold hover:text-brand-black hover:shadow-[0_8px_30px_rgba(201,169,110,0.35)] hover:-translate-y-1`}
      aria-label="Scroll to top of page"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
