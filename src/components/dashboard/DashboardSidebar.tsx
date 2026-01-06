// src/components/dashboard/DashboardSidebar.tsx
import React from 'react';
import { 
  Home, 
  Users, 
  User, 
  BookOpen, 
  FileText, 
  Calendar,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', icon: Home, path: '/secretaria/dashboard' },
    { label: 'Alunos', icon: Users, path: '/secretaria/alunos' },
    { label: 'Professores', icon: User, path: '/secretaria/professores' },
    { label: 'Turmas', icon: Users, path: '/secretaria/turmas' },
    { label: 'Disciplinas', icon: BookOpen, path: '/secretaria/disciplinas' },
    { label: 'Documentos', icon: FileText, path: '/secretaria/documentos' },
    { label: 'Calendário', icon: Calendar, path: '/secretaria/calendario' },
    { label: 'Relatórios', icon: BarChart3, path: '/secretaria/relatorios' },
    { label: 'Configurações', icon: Settings, path: '/secretaria/configuracoes' },
  ];

  const secondaryItems = [
    { label: 'Ajuda', icon: HelpCircle },
    { label: 'Sair', icon: LogOut },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Sidebar Desktop */}
      <aside className={`
        fixed left-0 top-0 h-screen bg-white border-r border-gray-200 
        transition-all duration-300 z-30 hidden lg:block
        ${isOpen ? 'w-64' : 'w-20'}
      `}>
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          {isOpen ? (
            <>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AGE</span>
                </div>
                <span className="font-bold text-gray-900">
                  Secretaria<span className="text-blue-600">Digital</span>
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
            </>
          ) : (
            <>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-sm">AGE</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Menu Principal */}
        <div className="p-4 space-y-1">
          {menuItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`
                  flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors
                  ${active 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <item.icon size={20} />
                {isOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Separador */}
        <div className="px-4 py-2">
          <div className="border-t border-gray-200"></div>
        </div>

        {/* Menu Secundário */}
        <div className="p-4 space-y-1 mt-auto">
          {secondaryItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100 w-full"
            >
              <item.icon size={20} />
              {isOpen && (
                <span className="font-medium">{item.label}</span>
              )}
            </button>
          ))}
        </div>

        {/* Versão do Sistema */}
        {isOpen && (
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-600">Versão 2.1.0</p>
              <p className="text-xs text-gray-500 mt-1">© 2024 AuraGestão</p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default DashboardSidebar;