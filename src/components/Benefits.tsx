import React, { useState } from 'react';
import { Clock, Users, TrendingUp, Maximize } from 'lucide-react';

export const Benefits = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      title: 'Экономия ресурсов',
      description: 'Автоматизация снижает затраты, оптимизирует бюджет и убирает рутину, чтобы вы могли сосредоточиться на важном',
    },
    {
      icon: Users,
      title: 'Круглосуточное обслуживание',
      description: 'Наши ИИ-чатботы обеспечивают клиентам мгновенные ответы в любое время суток',
    },
    {
      icon: TrendingUp,
      title: 'Рост конверсии',
      description: 'ИИ-анализ позволяет эффективно настраивать маркетинг и таргетинг',
    },
    {
      icon: Maximize,
      title: 'Масштабируемость',
      description: 'Наши решения подходят для бизнеса любого размера и адаптируются под ваш запрос',
    },
  ];

  return (
    <section className="py-12 sm:py-16 relative" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Impact'] font-normal text-2xl sm:text-4xl text-white text-center mb-8 sm:mb-12">
          Преимущества и выгоды
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`
                bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 text-center
                transform transition-transform duration-300 ease-out
                hover:scale-105
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                inline-block p-3 sm:p-4 rounded-full transition-colors duration-300
                ${hoveredIndex === index ? 'bg-[#e1f16b]' : 'bg-[#e1f16b]/20'}
              `}>
                <benefit.icon className={`
                  h-6 w-6 sm:h-8 sm:w-8 transition-colors duration-300
                  ${hoveredIndex === index ? 'text-[#2c346b]' : 'text-[#e1f16b]'}
                `} />
              </div>
              <h3 className="font-['Impact'] font-normal text-lg sm:text-xl text-white mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="font-['PT Sans Narrow'] text-white/60 text-sm leading-tight tracking-wide">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};