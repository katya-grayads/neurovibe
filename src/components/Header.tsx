import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#problems', label: 'Проблемы' },
    { href: '#benefits', label: 'Преимущества' },
    { href: '#how-it-works', label: 'Как это работает' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#about', label: 'О нас' },
    { href: '#contact', label: 'Контакты' },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-[#f1f1f1]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center h-16 px-4">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="flex items-center gap-2"
              onClick={(e) => handleNavClick(e, '#')}
            >
              <img 
                src="https://i.ibb.co.com/c8j0nny/logo-removebg-preview.png" 
                alt="NeuroVibe Logo" 
                className="h-6 w-auto"
              />
              <span className="font-['Arial'] text-xs text-[#606060] tracking-[0.2em] whitespace-nowrap">NEUROVIBE</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center justify-center flex-1 px-2">
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    font-['PT Sans Narrow'] text-[13px] text-gray-700
                    transition-all duration-300 ease-in-out
                    whitespace-nowrap tracking-wide px-2 sm:px-3 py-1.5 rounded-full
                    relative overflow-hidden
                    ${activeItem === item.href ? 'text-[#2c346b] scale-105' : 'hover:text-[#2c346b]'}
                  `}
                  onMouseEnter={() => setActiveItem(item.href)}
                  onMouseLeave={() => setActiveItem(null)}
                  onMouseDown={() => setActiveItem(item.href)}
                  onMouseUp={() => setActiveItem(null)}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className={`
                    absolute inset-0 bg-white rounded-full transform scale-x-0 scale-y-0
                    transition-transform duration-300 ease-in-out origin-center
                    ${activeItem === item.href ? 'scale-x-100 scale-y-100' : ''}
                  `} />
                </a>
              ))}
            </div>
          </nav>

          <div className="flex-shrink-0 pr-4">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:block bg-[#2c346b] text-white text-[13px] px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors font-['PT Sans Narrow'] tracking-wide whitespace-nowrap"
            >
              Связаться
            </a>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`
          fixed inset-0 top-16 bg-[#f1f1f1]/95 backdrop-blur-md transition-all duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          overflow-y-auto
        `}>
          <div className="py-6 px-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-base font-['PT Sans Narrow'] text-gray-700 hover:text-[#2c346b] hover:bg-gray-50 transition-colors tracking-wide"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 block px-4 py-3 rounded-xl text-base font-['PT Sans Narrow'] bg-[#2c346b] text-white text-center hover:bg-opacity-90 transition-colors tracking-wide"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Связаться
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;