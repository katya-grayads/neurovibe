import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Разработка + Поддержка',
      price: '2100',
      description: 'Разработка и обслуживание чат-бота',
      features: ['Индивидуальная разработка', '24/7 поддержка', 'Обновления'],
    },
    {
      name: 'Поддержка + Редагування',
      price: '700',
      description: 'Обслуживание существующего бота',
      features: ['Техническая поддержка', 'Обновления', 'Оптимизация'],
    },
    {
      name: 'Лишь Поддержка',
      price: '50',
      description: 'Базовое обслуживание',
      features: ['Мониторинг', 'Базовые обновления', 'Консультации'],
    },
  ];

  return (
    <section className="py-16 bg-[#f1f1f1]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Услуги и цены</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-[#f1f1f1] rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-4">
                от ${plan.price}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors">
                Заказать сейчас
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;