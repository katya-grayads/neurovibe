import React, { useState } from 'react';
import { Users, Building, Target, Workflow } from 'lucide-react';

export const AboutUs = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('→')) {
        const colonIndex = line.indexOf(':');
        if (colonIndex !== -1) {
          const boldPart = line.substring(2, colonIndex + 1);
          const restPart = line.substring(colonIndex + 1);
          return (
            <div key={index} className="flex items-start space-x-2">
              <span className="text-[#e1f16b]">→</span>
              <span>
                <strong>{boldPart}</strong>
                {restPart}
              </span>
            </div>
          );
        }
        return (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-[#e1f16b]">→</span>
            <span>{line.substring(2)}</span>
          </div>
        );
      }
      return <div key={index}>{line}</div>;
    });
  };

  const sections = [
    {
      id: 'company',
      title: 'О КОМПАНИИ',
      icon: Building,
      content: 'NeuroVibe – надёжный партнёр в мире ИИ и автоматизации\n\n→ Мы упрощаем сложные технологии, чтобы малый и средний бизнес могли работать быстрее, точнее и продуктивнее\n→ Наши решения – в автоматизации, чат-ботах и ИИ-ассистентах – освобождают от рутины, давая больше ресурсов для роста\n\nС NeuroVibe технологии работают на ваш успех'
    },
    {
      id: 'mission',
      title: 'НАША МИССИЯ',
      icon: Target,
      content: 'Мы стремимся освободить ваш бизнес от рутинных задач, позволяя сосредоточиться на стратегическом планировании и принятии важных решений\n\n→ Наши технологии повышают эффективность, снижают затраты и экономят ресурсы, что помогает оптимизировать бюджет\n→ Мы улучшаем клиентский сервис с помощью быстрого и точного взаимодействия, повышая удовлетворённость и лояльность клиентов\n\nЭто способствует росту повторных продаж и укреплению репутации вашего бизнеса, открывая новые горизонты для успеха'
    },
    {
      id: 'team',
      title: 'НАША КОМАНДА',
      icon: Users,
      content: '→ Эксперты в своей области: Наша команда имеет обширный опыт в ИИ и автоматизации, превращая технологии в удобные и эффективные инструменты для вашего бизнеса\n\n→ Индивидуальный подход: Мы адаптируем технологии под ваши конкретные задачи, чтобы они работали на ваш успех и приносили реальные результаты\n\n→ Забота и прозрачность: Мы тщательно анализируем ваш бизнес и предлагаем полную прозрачность и надежную поддержку на всех этапах сотрудничества'
    },
    {
      id: 'approach',
      title: 'НАШ ПОДХОД',
      icon: Workflow,
      content: 'Мы верим в индивидуальный подход к каждому клиенту. Наша методология основана на глубоком анализе потребностей бизнеса, разработке кастомизированных решений и постоянной поддержке на всех этапах внедрения'
    }
  ];

  return (
    <section className="py-16 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="font-['Impact'] font-normal text-4xl text-white text-center mb-12">О Нас</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative group"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className={`
                bg-white/10 backdrop-blur-sm rounded-2xl p-6
                border border-white/20 cursor-pointer
                transform transition-all duration-500 ease-out
                ${hoveredSection === section.id ? 'shadow-[0_0_30px_rgba(225,241,107,0.2)] translate-y-[-8px]' : 'hover:shadow-[0_0_20px_rgba(225,241,107,0.1)]'}
                min-h-[80px]
              `}>
                <div className="flex items-center gap-4">
                  <div className={`
                    p-3 rounded-xl transition-all duration-300 relative
                    ${hoveredSection === section.id ? 'bg-[#e1f16b] rotate-[15deg] shadow-[0_0_15px_rgba(225,241,107,0.4)]' : 'bg-white/5'}
                  `}>
                    <section.icon className={`
                      h-6 w-6 transition-all duration-300
                      ${hoveredSection === section.id ? 'text-[#2c346b]' : 'text-[#e1f16b]'}
                    `} />
                    {hoveredSection === section.id && (
                      <div className="absolute inset-0 bg-[#e1f16b]/20 rounded-xl animate-pulse" />
                    )}
                  </div>
                  <h3 className={`
                    font-['Impact'] font-normal text-xl transition-colors duration-300
                    ${hoveredSection === section.id ? 'text-[#e1f16b]' : 'text-white'}
                  `}>
                    {section.title}
                  </h3>
                </div>
                
                <div className={`
                  overflow-hidden transition-all duration-500
                  ${hoveredSection === section.id ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                `}>
                  <div className="font-['PT Sans Narrow'] text-white/80 text-sm leading-relaxed">
                    {formatContent(section.content)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};