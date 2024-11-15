import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: 'Ваши решения подходят для малого бизнеса?',
      answer: 'Да, наши решения адаптируемы и легко масштабируются под любой бизнес'
    },
    {
      question: 'Какие задачи может выполнять ИИ-ассистент?',
      answer: 'ИИ-ассистент может обрабатывать запросы клиентов 24/7, отвечать на типовые вопросы, оформлять заказы, собирать и анализировать данные, генерировать контент и многое другое. Функционал настраивается под ваши конкретные потребности'
    },
    {
      question: 'Нужны ли изменения в существующих бизнес-процессах?',
      answer: 'Нет, наши системы интегрируются с минимальными изменениями в вашем бизнесе'
    },
    {
      question: 'Можно ли настроить автоматизацию под уникальные задачи?',
      answer: 'Да, мы адаптируем решения под любые специфические потребности вашего бизнеса'
    },
    {
      question: 'Поддерживаете ли вы бизнес на всех этапах внедрения?',
      answer: 'Да, мы сопровождаем каждый этап, обеспечивая поддержку и обучение вашей команды'
    }
  ];

  return (
    <section className="py-16 relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <HelpCircle className="w-8 h-8 text-[#e1f16b]" />
              <div className="absolute inset-0 bg-[#e1f16b]/20 rounded-full blur animate-pulse" />
            </div>
            <h2 className="font-['Impact'] font-normal text-2xl sm:text-4xl text-white">
              Часто задаваемые вопросы
            </h2>
          </div>
          <p className="text-white/60 text-lg">
            Ответы на популярные вопросы о наших ИИ-решениях
          </p>
        </div>

        <div 
          ref={ref}
          className={`
            space-y-6 transition-all duration-1000
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                relative transform transition-all duration-500
                ${activeIndex === index ? 'translate-x-4' : ''}
              `}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full"
              >
                <div className={`
                  relative glass-card p-6
                  transition-all duration-500
                  ${activeIndex === index ? 'bg-white/[0.05]' : 'hover:bg-white/[0.02]'}
                  overflow-hidden
                `}>
                  {/* Animated background line */}
                  <div className={`
                    absolute left-0 top-0 h-full w-1
                    transition-all duration-500
                    ${activeIndex === index ? 'bg-[#e1f16b]' : 'bg-white/10'}
                  `} />
                  
                  {/* Question */}
                  <div className="pl-6">
                    <h3 className={`
                      font-['Impact'] font-normal text-xl text-left
                      transition-colors duration-300
                      ${activeIndex === index ? 'text-[#e1f16b]' : 'text-white'}
                    `}>
                      {faq.question}
                    </h3>
                    
                    {/* Answer */}
                    <div className={`
                      overflow-hidden transition-all duration-500
                      ${activeIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="h-px bg-gradient-to-r from-[#e1f16b]/30 to-transparent mb-4" />
                      <p className="font-['PT Sans Narrow'] text-white/70 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-r from-[#e1f16b]/5 to-transparent
                    transition-opacity duration-300
                    ${activeIndex === index ? 'opacity-100' : 'opacity-0'}
                  `} />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;