// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Home, Settings, Info, BookOpen, User, Users, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const location = useLocation();

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Atualiza página ativa baseada na rota
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActivePage('home');
    else if (path.startsWith('/servicos')) setActivePage('servicos');
    else if (path.startsWith('/sobre')) setActivePage('sobre');
  }, [location]);

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      href: '/',
      icon: <Home size={18} />,
      activeColor: 'text-blue-600',
      activeBg: 'bg-blue-50',
      borderColor: 'border-blue-200',
      gradient: 'from-blue-500 to-blue-600',
      description: 'Página inicial'
    },
    {
      id: 'servicos',
      label: 'Serviços',
      href: '/servicos',
      icon: <Settings size={18} />,
      activeColor: 'text-green-600',
      activeBg: 'bg-green-50',
      borderColor: 'border-green-200',
      gradient: 'from-green-500 to-green-600',
      description: 'Nossas soluções'
    },
    {
      id: 'sobre',
      label: 'Sobre',
      href: '/sobre',
      icon: <Info size={18} />,
      activeColor: 'text-purple-600',
      activeBg: 'bg-purple-50',
      borderColor: 'border-purple-200',
      gradient: 'from-purple-500 to-purple-600',
      description: 'Conheça nossa história'
    },
  ];

  const userButtons = [
    { 
      label: 'Sou Aluno', 
      variant: 'outline',
      icon: <User size={16} />,
      color: 'blue'
    },
    { 
      label: 'Sou Educador', 
      variant: 'outline',
      icon: <BookOpen size={16} />,
      color: 'green'
    },
    { 
      label: 'Sou Gestor', 
      variant: 'primary',
      icon: <GraduationCap size={16} />,
      color: 'blue'
    },
  ];

  const isActive = (pageId: string) => activePage === pageId;

  // Obtém a página ativa para o breadcrumb
  const getActivePageData = () => {
    return menuItems.find(item => item.id === activePage) || menuItems[0];
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-white'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={() => setActivePage('home')}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isActive('home') 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg' 
                  : 'bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700'
              }`}>
                <span className="text-white font-bold text-xl">AGE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 leading-tight">
                  Aura<span className="text-blue-600">Gestão</span>Escolar
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {getActivePageData().description}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => {
                const active = isActive(item.id);
                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`relative px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 group/nav ${
                      active 
                        ? `${item.activeColor} ${item.activeBg} border ${item.borderColor} shadow-sm` 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setActivePage(item.id)}
                  >
                    <div className={`p-1.5 rounded-md ${active ? 'bg-white' : 'bg-gray-100 group-hover/nav:bg-white'}`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                    
                    {/* Indicador ativo */}
                    {active && (
                      <>
                        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                        <ChevronRight size={16} className={`ml-1 ${item.activeColor}`} />
                      </>
                    )}
                  </Link>
                );
              })}
              
              {/* Separador */}
              <div className="h-8 w-px bg-gray-200 mx-2"></div>
              
              {/* User Buttons */}
              <div className="flex items-center space-x-3">
                {userButtons.map((button, index) => (
                  <button
                    key={button.label}
                    className={`
                      relative px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2
                      ${button.variant === 'primary' 
                        ? `bg-gradient-to-r ${button.color === 'blue' ? 'from-blue-600 to-blue-700' : 'from-green-600 to-green-700'} text-white hover:shadow-xl hover:scale-[1.02] shadow-lg` 
                        : `border-2 ${button.color === 'blue' ? 'border-blue-600 text-blue-600' : 'border-green-600 text-green-600'} hover:bg-${button.color}-50`
                      }
                      ${isActive('servicos') && button.label === 'Sou Gestor' ? 'ring-2 ring-blue-400 ring-offset-1' : ''}
                    `}
                  >
                    <div className={`${button.variant === 'primary' ? 'text-white' : `text-${button.color}-600`}`}>
                      {button.icon}
                    </div>
                    <span>{button.label}</span>
                    
                    {/* Efeito de brilho no hover */}
                    {button.variant === 'primary' && (
                      <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/20 to-transparent"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2.5 rounded-lg transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
              <div className="px-4 py-6 space-y-2">
                {/* Indicador de página atual */}
                <div className="flex items-center justify-between mb-4 px-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getActivePageData().gradient}`}></div>
                    <span className="text-sm font-medium text-gray-500">Página atual:</span>
                  </div>
                  <span className={`font-bold ${getActivePageData().activeColor}`}>
                    {getActivePageData().label}
                  </span>
                </div>

                {/* Menu items */}
                {menuItems.map((item) => {
                  const active = isActive(item.id);
                  return (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={() => {
                        setActivePage(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`
                        flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300
                        ${active 
                          ? `${item.activeColor} ${item.activeBg} border ${item.borderColor} shadow-sm` 
                          : 'text-gray-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${active ? 'bg-white/80' : 'bg-gray-100'}`}>
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.label}</span>
                          <span className="text-xs text-gray-500">{item.description}</span>
                        </div>
                      </div>
                      
                      {active && (
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full ${item.activeColor.replace('text-', 'bg-')} mr-2 animate-pulse`}></div>
                          <ChevronRight size={16} className={item.activeColor} />
                        </div>
                      )}
                    </Link>
                  );
                })}
                
                {/* User Buttons Mobile */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="mb-4 px-2">
                    <span className="text-sm font-medium text-gray-500">Acesso rápido:</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {userButtons.map((button) => (
                      <button
                        key={button.label}
                        className={`
                          flex items-center justify-center space-x-2 px-4 py-3.5 rounded-xl font-medium transition-all duration-300
                          ${button.variant === 'primary' 
                            ? `bg-gradient-to-r ${button.color === 'blue' ? 'from-blue-600 to-blue-700' : 'from-green-600 to-green-700'} text-white` 
                            : `border-2 ${button.color === 'blue' ? 'border-blue-600 text-blue-600' : 'border-green-600 text-green-600'}`
                          }
                        `}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {button.icon}
                        <span>{button.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Barra de progresso da página */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 opacity-10"></div>
        
        {/* Breadcrumb para páginas internas */}
        {activePage !== 'home' && (
          <div className="bg-gray-50/80 border-y border-gray-100">
            <div className="container-custom">
              <div className="px-4 py-3 flex items-center text-sm">
                <Link 
                  to="/" 
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  onClick={() => setActivePage('home')}
                >
                  <Home size={14} className="mr-1.5" />
                  Home
                </Link>
                <ChevronRight size={14} className="mx-2 text-gray-400" />
                <span className={`font-medium ${getActivePageData().activeColor} flex items-center`}>
                  {getActivePageData().icon}
                  <span className="ml-1.5">{getActivePageData().label}</span>
                </span>
                
                {/* Indicador de subpágina se houver */}
                {location.pathname.split('/').length > 2 && (
                  <>
                    <ChevronRight size={14} className="mx-2 text-gray-400" />
                    <span className="text-gray-700">
                      {location.pathname.split('/')[2].replace('-', ' ')}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Indicador flutuante da página atual (mobile) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl ${
          getActivePageData().activeBg
        } border ${getActivePageData().borderColor}`}>
          <div className={getActivePageData().activeColor}>
            {getActivePageData().icon}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;