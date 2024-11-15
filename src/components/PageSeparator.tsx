import React from 'react';
import { ChevronDown } from 'lucide-react';

export const PageSeparator = () => {
  return (
    <div className="relative h-24 flex items-center justify-center will-change-transform">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e1f16b]/10 to-transparent" />
      <div className="relative">
        <ChevronDown className="w-8 h-8 text-[#e1f16b] animate-bounce" />
      </div>
    </div>
  );
};