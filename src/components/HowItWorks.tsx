import React from 'react';
import { useInView } from 'react-intersection-observer';

export const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Консультация',
      description: 'Детально анализируем ваши цели и задачи',
    },
    {
      number: '2',
      title: 'Индивидуальное предложение',
      description: 'Разрабатываем решение, которое подходит именно вам',
    },
    {
      number: '3',
      title: 'Внедрение',
      description: 'Устанавливаем и настраиваем ИИ-системы',
    },
    {
      number: '4',
      title: 'Поддержка и обучение',
      description: 'Обучаем вашу команду и обеспечиваем техническую поддержку',
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 relative" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="font-['Impact'] font-normal text-2xl sm:text-4xl text-white text-center mb-8 sm:mb-12 tracking-wider">
          Как это работает?
        </h2>
        
        <div ref={ref} className="flex flex-col sm:flex-row justify-between items-start relative max-w-5xl mx-auto">
          {/* Updated connecting line with higher opacity and glow effect */}
          <div className="hidden sm:block absolute top-14 left-0 right-0 h-0.5 bg-[#e1f16b]/50 z-0 shadow-[0_0_10px_#e1f16b]" />
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`
                relative z-10 transform transition-all duration-500 w-full sm:w-48
                ${inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                ${index < steps.length - 1 ? 'mb-8 sm:mb-0' : ''}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md h-full relative border border-white/20 hover:border-[#e1f16b]/30 transition-colors">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="p-2 rounded-full bg-[#e1f16b] relative">
                    <span className="text-xl font-bold text-[#2c346b]">{step.number}</span>
                    <div className="absolute -inset-1 bg-[#e1f16b]/30 rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="font-['Impact'] font-normal text-sm text-white leading-tight text-center tracking-wider">
                    {step.title}
                  </h3>
                  <p className="font-['PT Sans Narrow'] text-white/60 text-xs mt-2 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};