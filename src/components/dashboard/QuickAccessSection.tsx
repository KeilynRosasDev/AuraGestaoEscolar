// src/components/dashboard/QuickAccessSection.tsx
import React from 'react';
import { 
  Users, 
  BookOpen, 
  Clock, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const QuickAccessSection: React.FC = () => {
  const quickAccessItems = [
    {
      title: 'Cadastro de Turmas',
      description: 'Crie e gerencie turmas, distribua alunos e controle vagas',
      icon: Users,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      stats: '24 turmas ativas',
      action: 'Gerenciar Turmas'
    },
    {
      title: 'Cadastro de Disciplinas',
      description: 'Organize a grade curricular e defina carga horária',
      icon: BookOpen,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      stats: '48 disciplinas cadastradas',
      action: 'Ver Disciplinas'
    },
    {
      title: 'Controle de Frequência',
      description: 'Registre e monitore a frequência de alunos e professores',
      icon: Clock,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      stats: '98% de presença',
      action: 'Registrar Frequência'
    },
    {
      title: 'Desempenho Acadêmico',
      description: 'Acompanhe notas e desempenho dos alunos',
      icon: TrendingUp,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      stats: 'Média: 8.2',
      action: 'Ver Boletins'
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Acessos Rápidos</h2>
            <p className="text-gray-600 mt-1">Funções mais utilizadas da secretaria</p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2">
            <span>Ver todos</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickAccessItems.map((item, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${item.color} p-3 rounded-lg`}>
                  <item.icon size={24} className="text-white" />
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  {item.stats}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:underline">
                  {item.action}
                </button>
                <div className="text-xs text-gray-500 group-hover:text-blue-600">
                  Clique para acessar →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAccessSection;