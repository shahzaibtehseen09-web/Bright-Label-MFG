import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Categories from './components/Categories';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress((window.scrollY / totalScrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-black text-white selection:bg-gold selection:text-brand-black">
      
      {/* Scroll Progress Bar */}
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-gold-dim to-gold z-[9999] transition-all duration-100 ease-out"
      />

      {/* Preloader */}
      <Loader onComplete={() => setIsLoading(false)} />

      {/* Main Page Layout (Rendered with soft fade-in once loaded) */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="w-full flex flex-col"
      >
        <Navbar />
        
        <main className="w-full flex flex-col">
          <Hero />
          <About />
          <Services />
          <Categories />
          <WhyUs />
          <Process />
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>

    </div>
  );
}
