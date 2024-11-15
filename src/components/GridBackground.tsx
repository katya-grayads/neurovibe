import React from 'react';

export const GridBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Spotted gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1C2951]/90 to-[#0A1128] animate-gradient" />
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`spot-${i}`}
            className="absolute rounded-full bg-[#1C2951]/80 blur-3xl animate-float"
            style={{
              width: Math.random() * 400 + 300 + 'px',
              height: Math.random() * 400 + 300 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: '25s',
            }}
          />
        ))}
      </div>
      
      {/* Simple grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Dust-like particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={`dust-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `dust-float ${Math.random() * 15 + 20}s infinite`,
            animationDelay: `${Math.random() * -20}s`,
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Core particle */}
          <div 
            className="absolute inset-0 rounded-full bg-[#e1f16b]/50 blur-[0.5px]"
            style={{
              animation: `pulse ${Math.random() * 2 + 2}s infinite`,
              animationDelay: `${Math.random() * -2}s`,
            }}
          />
          {/* Subtle glow */}
          <div 
            className="absolute inset-[-2px] rounded-full bg-[#e1f16b]/10 blur-[1px]"
            style={{
              animation: `pulse ${Math.random() * 2 + 3}s infinite`,
              animationDelay: `${Math.random() * -2}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};