import React from 'react';

export const BackgroundDots = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#e1f16b]/10 blur-3xl animate-float"
          style={{
            width: Math.random() * 300 + 200 + 'px',
            height: Math.random() * 300 + 200 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's',
            animationDuration: Math.random() * 20 + 20 + 's',
          }}
        />
      ))}
    </div>
  );
};