import React, { useRef, useState } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number;
  style?: React.CSSProperties;
  key?: React.Key;
}

export default function TiltCard({ 
  children, 
  className = '', 
  maxRotation = 10, 
  style: parentStyle = {}, 
  ...props 
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate rotation angles
    const tX = -(y / (rect.height / (maxRotation * 2)));
    const tY = (x / (rect.width / (maxRotation * 2)));

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tX}deg) rotateY(${tY}deg) translateY(-6px) scale(1.02)`,
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(201, 169, 110, 0.12)',
      borderColor: 'rgba(201, 169, 110, 0.35)',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
      boxShadow: '',
      borderColor: '',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...parentStyle,
        ...tiltStyle,
        // Keep the transition for tilt fast, but allow fade-in transition from parent
        transition: `${parentStyle.transition ? parentStyle.transition + ', ' : ''}transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, box-shadow 0.4s`,
      }}
      className={`tilt-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
