import React, { useState } from 'react';
import { Mail, Phone, Send, Check, Copy, ArrowRight, Sparkles } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="py-16 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#e1f16b]/20 blur-2xl rounded-full animate-pulse" />
              <div className="relative bg-[#e1f16b] p-4 rounded-2xl">
                <Send className="w-8 h-8 text-[#2c346b]" />
              </div>
            </div>
            <h2 className="font-['Impact'] font-normal text-3xl sm:text-4xl text-white">
              Оставьте заявку
            </h2>
          </div>
          <p className="text-white/70 text-lg max-w-2xl text-center">
            Заполните форму и мы с вами свяжемся в самое ближайшее время
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e1f16b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <form onSubmit={handleSubmit} className="relative">
              <div className="space-y-6">
                {[
                  { name: 'name', label: 'Ваше имя', type: 'text', placeholder: 'Введите ваше имя' },
                  { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'example@email.com' }
                ].map((field) => (
                  <div key={field.name} className="relative group/field">
                    <label className="block font-['Impact'] font-normal text-xl text-white mb-2 group-hover/field:text-[#e1f16b] transition-colors">
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        type={field.type}
                        required
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className={`
                          w-full px-4 py-3 rounded-xl
                          bg-white/5 border border-white/10 text-white
                          placeholder-white/30 focus:outline-none transition-all duration-300
                          ${focusedField === field.name ? 'border-[#e1f16b] bg-white/10' : 'hover:border-white/20'}
                        `}
                        placeholder={field.placeholder}
                      />
                      {focusedField === field.name && (
                        <div className="absolute inset-0 bg-[#e1f16b]/5 rounded-xl animate-pulse pointer-events-none" />
                      )}
                    </div>
                  </div>
                ))}
                
                <button
                  type="submit"
                  className="group relative w-full py-3 px-6 rounded-xl bg-[#e1f16b] text-[#2c346b] font-['Impact'] font-normal text-xl transition-all duration-300 hover:bg-[#e1f16b]/90 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    Отправить
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_ease-in-out_infinite]" />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-['Impact'] font-normal text-2xl text-white relative">
                Связаться
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#e1f16b]/50 to-transparent" />
            </div>
            
            {[
              { icon: Phone, label: 'Телефон', value: '+7 (705) 764 78 15', field: 'phone' },
              { icon: Mail, label: 'Email', value: 'neuro.vibe.original@gmail.com', field: 'email' }
            ].map((contact) => (
              <div 
                key={contact.field}
                onClick={() => handleCopy(contact.value, contact.field)}
                className="glass-card p-6 cursor-pointer transition-all duration-300 relative group hover:border-[#e1f16b]/30 hover:translate-x-2"
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    p-3 rounded-xl transition-all duration-300 relative
                    ${copiedField === contact.field ? 'bg-[#e1f16b]' : 'bg-white/5 group-hover:bg-white/10'}
                  `}>
                    {copiedField === contact.field ? (
                      <Check className="h-6 w-6 text-[#2c346b]" />
                    ) : (
                      <contact.icon className="h-6 w-6 text-[#e1f16b]" />
                    )}
                    {copiedField === contact.field && (
                      <div className="absolute inset-0 bg-[#e1f16b]/20 rounded-xl animate-pulse" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-white/70 text-sm mb-1">{contact.label}:</p>
                    <p className="font-['Impact'] font-normal text-lg text-white group-hover:text-[#e1f16b] transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  
                  <div className={`
                    p-2 rounded-lg transition-all duration-300
                    ${copiedField === contact.field ? 'opacity-0' : 'bg-white/5 group-hover:bg-white/10'}
                  `}>
                    <Copy className="h-4 w-4 text-white/60" />
                  </div>
                </div>
                
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-[#e1f16b]/5 via-transparent to-transparent rounded-2xl
                  transition-opacity duration-300
                  ${copiedField === contact.field ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;