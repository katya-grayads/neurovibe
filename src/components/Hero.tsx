import React from 'react';
import { ArrowRight, Bot, Sparkles, Zap } from 'lucide-react';

export const Hero = () => {
  const stats = [
    { value: '24/7', label: 'Поддержка' },
    { value: '95%', label: 'Точность ИИ' },
    { value: '3x', label: 'Рост эффективности' }
  ];

  return (
    <section className="relative min-h-[100svh] pt-20 sm:pt-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#e1f16b]" />
              <span className="text-white/80 text-xs sm:text-sm whitespace-nowrap">
                Ускоряем бизнес с умом
              </span>
            </div>
            
            <h1 className="font-['Impact'] font-normal text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-6">
              <span className="relative inline-block">
                Бизнес на автопилоте с ИИ 24/7
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-[#e1f16b]/50 rounded-full" />
              </span>
            </h1>

            <p className="font-['Impact'] font-normal text-sm xs:text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Оптимизируйте процессы и освободите ресурсы для настоящего роста
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-[#e1f16b] text-[#2c346b] font-['PT Sans Narrow'] font-bold text-sm xs:text-base sm:text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(225,241,107,0.3)] relative overflow-hidden"
              >
                <span className="relative z-10 whitespace-nowrap">Получить консультацию</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10 transition-transform duration-300 group-hover:animate-[moveRight_1s_ease-in-out_infinite]" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_ease-in-out_infinite]" />
              </a>
              
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl border border-white/20 text-white font-['PT Sans Narrow'] text-sm xs:text-base sm:text-lg hover:bg-white/5 transition-all whitespace-nowrap"
              >
                Как это работает
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-[#e1f16b]" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-8 mt-8 sm:mt-16 p-3 xs:p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-['Impact'] text-base xs:text-lg sm:text-2xl text-[#e1f16b]">
                    {stat.value}
                  </div>
                  <div className="font-['PT Sans Narrow'] text-white/60 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[30vh] xs:h-[35vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[min(70vw,300px)] sm:max-w-[min(80vw,400px)] lg:max-w-md">
              <div className="absolute inset-0 rounded-full bg-[#e1f16b]/20 blur-3xl animate-pulse" />
              
              <div className="relative bg-[#2c346b] rounded-full p-6 xs:p-8 sm:p-12 border border-white/10 shadow-[0_0_50px_rgba(225,241,107,0.2)]">
                <Bot className="w-full h-full text-[#e1f16b] animate-float" />
              </div>

              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center"
                  style={{
                    animation: `float ${2 + i}s infinite ease-in-out ${i * 0.5}s`,
                    top: `${20 + i * 30}%`,
                    left: i % 2 ? '10%' : '70%'
                  }}
                >
                  <div className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-lg bg-[#e1f16b]/20 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};