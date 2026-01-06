// src/components/dashboard/StatsOverview.tsx
import React from 'react';
import { 
  Users, 
  UserCheck, 
  BookOpen, 
  TrendingUp,
  FileText,
  Calendar,
  DollarSign,
  Clock
} from 'lucide-react';

const StatsOverview: React.FC = () => {
  const stats = [
    {
      label: 'Total de Alunos',
      value: '1,248',
      change: '+12%',
      icon: Users,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      description: 'Ativos no sistema'
    },
    {
      label: 'Professores',
      value: '48',
      change: '+3%',
      icon: UserCheck,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      description: 'Corpo docente'
    },
    {
      label: 'Turmas Ativas',
      value: '24',
      change: '+2',
      icon: BookOpen,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      description: 'Em andamento'
    },
    {
      label: 'Média de Notas',
      value: '8.2',
      change: '+0.3',
      icon: TrendingUp,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      description: 'Desempenho geral'
    },
    {
      label: 'Documentos Pendentes',
      value: '12',
      change: '-4',
      icon: FileText,
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      description: 'Para processar'
    },
    {
      label: 'Eventos Hoje',
      value: '8',
      change: '+3',
      icon: Calendar,
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      description: 'No calendário'
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Visão Geral do Sistema</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon size={20} className="text-white" />
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                stat.change.startsWith('+') 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {stat.change}
              </span>
            </div>
            
            <div className="mb-2">
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
            
            <div className="text-xs text-gray-500">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;