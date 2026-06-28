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

  const logoBase64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNTAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8cGF0aAogICAgZD0iTSAxODAgMjUwIEwgMjMwIDI1MCBDIDI3MCAyNTAsIDI5MCAyMjAsIDMxNSAyMTAgQyAzMzUgMjAyLCAzNDUgMjIwLCAzNjAgMjIwIEMgMzgwIDIyMCwgNDAwIDE3MCwgNDQwIDE2MCBDIDQ4MCAxNTAsIDQ5MCAyMDAsIDUxMCAyMDAgQyA1MzAgMjAwLCA1NTAgMTg1LCA1ODAgMjE1IEMgNjAwIDIzNSwgNjE1IDI1MCwgNjYwIDI1MCBMIDcxMCAyNTAiCiAgICBmaWxsPSJub25lIgogICAgc3Ryb2tlPSIjZjVmNWY1IgogICAgc3Ryb2tlLXdpZHRoPSI1IgogICAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIKICAvPgogIDx0ZXh0CiAgICB4PSI1MCUiCiAgICB5PSIzMzAiCiAgICBmb250LWZhbWlseT0iJ0Nvcm1vcmFudCBHYXJhbW9uZCcsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIKICAgIGZvbnQtc2l6ZT0iNDIiCiAgICBmb250LXdlaWdodD0iYm9sZCIKICAgIGZpbGw9IiNmNWY1ZjUiCiAgICB0ZXh0LWFuY2hvcj0ibWlkZGxlIgogICAgbGV0dGVyLXNwYWNpbmc9IjEuNSIKICA+QnJpZ2h0IExhYmVsLjwvdGV4dD4KPC9zdmc+";

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
      <img 
        src={logoBase64} 
        alt="Bright Label MFG" 
        style={{ height: '80px', width: 'auto', objectFit: 'contain', marginBottom: '16px' }}
        referrerPolicy="no-referrer"
      />
      
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
