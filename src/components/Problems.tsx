import React, { useState } from 'react';
import { MessageSquare, Bot, Sparkles, Zap, HelpCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const Problems = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      question: 'Устали от выполнения рутинных задач?',
      solution: 'Автоматизация рутинных процессов сэкономит вам время и деньги',
      icon: MessageSquare
    },
    {
      question: 'Не удаётся оставаться на связи с клиентами 24/7?',
      solution: 'Наши ИИ-ассистенты готовы помогать клиентам круглосуточно',
      icon: Bot
    },
    {
      question: 'Хотите повысить эффективность маркетинга, но не знаете как?',
      solution: 'ИИ-алгоритмы оптимизируют маркетинг и увеличат возврат на инвестиции',
      icon: Sparkles
    },
    {
      question: 'Не хватает времени на съемки, но нужен постоянный контент?',
      solution: 'Виртуальный аватар будет взаимодействовать с вашей аудиторией через сгенерированный контент',
      icon: Zap
    }
  ];

  return (
    <section className="py-16 relative" id="problems">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <HelpCircle className="w-8 h-8 text-[#e1f16b]" />
              <div className="absolute inset-0 bg-[#e1f16b]/20 rounded-full blur animate-pulse" />
            </div>
            <h2 className="font-['Impact'] font-normal text-2xl sm:text-4xl text-white">
              Какие проблемы решает чат-бот?
            </h2>
          </div>
          <p className="text-white/60 text-lg">
            Автоматизируйте процессы и освободите время для развития бизнеса
          </p>
        </div>

        <div 
          ref={ref}
          className={`
            grid sm:grid-cols-2 gap-6 transition-all duration-1000
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}
        >
          {problems.map((item, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                glass-card p-6 transition-all duration-500
                ${hoveredIndex === index ? 'translate-y-[-8px]' : ''}
                border border-white/10 hover:border-[#e1f16b]/30
                overflow-hidden
              `}>
                {/* Glowing background effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-[#e1f16b]/10 to-transparent opacity-0
                  group-hover:opacity-100 transition-opacity duration-500
                `} />

                {/* Animated line */}
                <div className={`
                  absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#e1f16b]/50 to-transparent
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700
                `} />

                {/* Content wrapper */}
                <div className="relative">
                  {/* Icon with animated background */}
                  <div className="mb-4 relative">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      transition-all duration-500 relative overflow-hidden
                      ${hoveredIndex === index ? 'bg-[#e1f16b]' : 'bg-white/5'}
                    `}>
                      <item.icon className={`
                        w-6 h-6 transition-all duration-500
                        ${hoveredIndex === index ? 'text-[#2c346b] scale-110' : 'text-[#e1f16b]'}
                      `} />
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 bg-[#e1f16b]/20 animate-pulse" />
                      )}
                    </div>
                    {/* Glowing circle behind icon */}
                    <div className={`
                      absolute inset-[-8px] bg-[#e1f16b]/20 rounded-full blur-xl
                      transition-opacity duration-500
                      ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                    `} />
                  </div>

                  {/* Text content */}
                  <div className="relative z-10">
                    <h3 className={`
                      font-['Impact'] font-normal text-lg mb-2
                      transition-colors duration-300
                      ${hoveredIndex === index ? 'text-[#e1f16b]' : 'text-white'}
                    `}>
                      {item.question}
                    </h3>
                    <p className="font-['PT Sans Narrow'] text-white/70 text-base leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className={`
                    absolute -bottom-6 -right-6 w-12 h-12
                    bg-gradient-to-br from-[#e1f16b]/20 to-transparent
                    transform rotate-45 transition-opacity duration-500
                    ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                  `} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;