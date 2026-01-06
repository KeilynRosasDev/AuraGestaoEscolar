// src/components/dashboard/DashboardHeader.tsx
import React from 'react';
import { 
  Users, 
  UserPlus, 
  FileText, 
  Download,
  Filter,
  Calendar
} from 'lucide-react';

const DashboardHeader: React.FC = () => {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const actionButtons = [
    {
      label: 'Nova Matrícula',
      icon: Users,
      color: 'bg-gradient-to-r from-blue-600 to-blue-700',
      description: 'Cadastrar novo aluno'
    },
    {
      label: 'Cadastrar Professor',
      icon: UserPlus,
      color: 'bg-gradient-to-r from-green-600 to-green-700',
      description: 'Adicionar docente'
    },
    {
      label: 'Documentação',
      icon: FileText,
      color: 'bg-gradient-to-r from-purple-600 to-purple-700',
      description: 'Emitir documentos'
    },
    {
      label: 'Exportar Dados',
      icon: Download,
      color: 'bg-gradient-to-r from-orange-600 to-orange-700',
      description: 'Relatórios em PDF/Excel'
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container-custom">
        <div className="px-4 py-8">
          {/* Cabeçalho superior */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Dashboard da Secretaria
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span className="text-blue-100">{today}</span>
                </div>
                <span className="text-blue-200">•</span>
                <span className="text-blue-100">Bem-vinda, Maria Silva</span>
              </div>
            </div>
            
            <div className="mt-4 lg:mt-0">
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center space-x-2 transition-colors">
                  <Filter size={16} />
                  <span>Filtrar</span>
                </button>
                <button className="px-4 py-2 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Ver Relatórios
                </button>
              </div>
            </div>
          </div>

          {/* Grid de Botões de Ação */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {actionButtons.map((button, index) => (
              <button
                key={index}
                className={`${button.color} rounded-xl p-6 text-left hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <button.icon size={24} className="text-white/90" />
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    + Novo
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{button.label}</h3>
                <p className="text-sm text-white/80">{button.description}</p>
                <div className="mt-4 flex items-center text-xs">
                  <span className="opacity-80">Clique para começar →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;