import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Анна Сереброва',
      position: 'Директор по маркетингу и развитию центра медицинских услуг',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      text: 'Внедрение ИИ-ассистента кардинально изменило наш подход к работе с клиентами. Теперь мы обрабатываем в 3 раза больше запросов, а удовлетворенность клиентов выросла на 40%.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-['Impact'] font-normal text-2xl sm:text-4xl text-white mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-white/60 font-['PT Sans Narrow'] text-lg whitespace-nowrap">Узнайте, как наши решения помогают бизнесу развиваться и достигать новых высот</p>
        </div>

        <div 
          ref={ref}
          className={`
            relative max-w-4xl mx-auto transition-all duration-1000
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}
        >
          {/* Main testimonial card */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            {/* Quote icon */}
            <div className="absolute -top-6 -left-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#e1f16b]/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-12 h-12 rounded-full bg-[#e1f16b] flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#2c346b]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <div className="absolute inset-0 bg-[#e1f16b]/20 rounded-full blur-xl animate-pulse" />
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="relative w-full h-full object-cover rounded-full border-2 border-[#e1f16b]/30"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-3">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#e1f16b] fill-[#e1f16b]" />
                  ))}
                </div>

                <p className="text-white/80 text-lg mb-4 font-['PT Sans Narrow']">
                  "{testimonials[activeIndex].text}"
                </p>

                <div>
                  <h3 className="font-['Impact'] font-normal text-xl text-white mb-1">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-white/60 font-['PT Sans Narrow']">
                    {testimonials[activeIndex].position}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute -bottom-6 right-8 flex gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group hover:bg-[#e1f16b] transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#2c346b] transition-colors" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group hover:bg-[#e1f16b] transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-[#2c346b] transition-colors" />
              </button>
            </div>
          </div>

          {/* Background decorations */}
          <div className="absolute -inset-4 -z-10">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e1f16b]/30 to-transparent" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#e1f16b]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;