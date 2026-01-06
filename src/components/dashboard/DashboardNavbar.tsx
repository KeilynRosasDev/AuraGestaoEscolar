// src/components/dashboard/DashboardNavbar.tsx
import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Bell, 
  Search, 
  User, 
  ChevronDown,
  Home,
  Settings,
  FileText,
  Users,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardNavbarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ 
  sidebarOpen, 
  toggleSidebar 
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Dados do usuário (mockado para desenvolvimento)
  const userData = {
    name: 'Maria Silva',
    role: 'Secretária',
    email: 'maria.silva@escola.com',
    avatar: 'MS'
  };

  const notifications = [
    { id: 1, title: 'Nova matrícula pendente', time: '10 min atrás', unread: true },
    { id: 2, title: 'Documento requer assinatura', time: '1 hora atrás', unread: true },
    { id: 3, title: 'Renovação de contrato professor', time: '2 horas atrás', unread: false },
  ];

  const userMenuItems = [
    { label: 'Meu Perfil', icon: User },
    { label: 'Configurações', icon: Settings },
    { label: 'Sair', icon: X },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Botão menu lateral e logo */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            <Link to="/secretaria/dashboard" className="ml-4 flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AGE</span>
              </div>
              <span className="text-lg font-bold text-gray-900 hidden md:inline">
                Aura<span className="text-blue-600">Gestão</span>
              </span>
            </Link>
          </div>

          {/* Barra de pesquisa */}
          <div className="flex-1 max-w-2xl mx-4 hidden lg:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Pesquisar alunos, turmas, documentos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>

          {/* Botões de ação principais */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-md transition-shadow flex items-center space-x-2">
              <Users size={16} />
              <span>Matrícula Aluno</span>
            </button>
            
            <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:shadow-md transition-shadow flex items-center space-x-2">
              <User size={16} />
              <span>Cadastrar Professor</span>
            </button>
            
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-medium hover:shadow-md transition-shadow flex items-center space-x-2">
              <FileText size={16} />
              <span>Documentação</span>
            </button>
          </div>

          {/* Ícones direita */}
          <div className="flex items-center space-x-3">
            {/* Notificações */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 relative"
              >
                <Bell size={20} />
                {notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications.filter(n => n.unread).length}
                  </span>
                )}
              </button>
              
              {/* Dropdown Notificações */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Notificações</h3>
                    <span className="text-sm text-gray-500">
                      {notifications.filter(n => n.unread).length} não lidas
                    </span>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                          notification.unread ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-900">
                            {notification.title}
                          </span>
                          {notification.unread && (
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          {notification.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <Link
                      to="/secretaria/notificacoes"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Ver todas as notificações
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Usuário */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">{userData.avatar}</span>
                </div>
                <div className="text-left hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                  <p className="text-xs text-gray-500">{userData.role}</p>
                </div>
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              {/* Dropdown Usuário */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <p className="font-semibold text-gray-900">{userData.name}</p>
                    <p className="text-sm text-gray-500">{userData.email}</p>
                  </div>
                  <div className="p-2">
                    {userMenuItems.map((item, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm"
                      >
                        <item.icon size={16} />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;