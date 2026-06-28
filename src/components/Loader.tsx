import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let currentPct = 0;
    const interval = setInterval(() => {
      currentPct += Math.floor(Math.random() * 12) + 4;
      if (currentPct >= 100) {
        currentPct = 100;
        clearInterval(interval);
        setPercent(100);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onComplete();
          }, 800); // Wait for transition out
        }, 300);
      } else {
        setPercent(currentPct);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`fixed inset-0 bg-brand-black z-[9998] flex flex-col items-center justify-center gap-6 ${
        percent === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      id="loader"
    >
      <div className="font-serif text-3xl md:text-5xl font-light tracking-[0.25em] text-white uppercase select-none">
        Bright <span className="text-gold font-normal">Label</span> MFG
      </div>
      
      <div className="w-[200px] h-[1px] bg-white/10 relative overflow-hidden">
        <div
          style={{ width: `${percent}%` }}
          className="h-full bg-gold transition-all duration-100 ease-out"
        />
      </div>
      
      <div className="text-[0.7rem] tracking-[0.25em] text-neutral-500 font-medium select-none">
        {percent}%
      </div>
    </div>
  );
}
