// src/components/Header.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
  ];

  const userButtons = [
    { label: 'Sou Aluno', variant: 'outline' },
    { label: 'Sou Educador', variant: 'outline' },
    { label: 'Sou Gestor', variant: 'primary' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AGE</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Aura<span className="text-blue-600">Gestão</span>Escolar
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center space-x-4">
              {userButtons.map((button, index) => (
                <button
                  key={button.label}
                  className={`
                    ${index === 2 ? 'btn-primary' : 'btn-outline'}
                    ${index === 2 ? 'px-4' : 'px-3'}
                  `}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                {userButtons.map((button) => (
                  <button
                    key={button.label}
                    className={`
                      w-full text-center
                      ${button.variant === 'primary' ? 'btn-primary' : 'btn-outline'}
                    `}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;