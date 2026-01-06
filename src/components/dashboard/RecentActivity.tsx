// src/components/dashboard/RecentActivity.tsx
import React from 'react';
import { 
  Clock, 
  CheckCircle, 
  AlertCircle,
  FileText,
  UserPlus,
  BookOpen,
  MoreVertical
} from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      user: 'João Silva',
      action: 'Matrícula realizada',
      time: '10 minutos atrás',
      type: 'success',
      icon: CheckCircle
    },
    {
      id: 2,
      user: 'Maria Santos',
      action: 'Documento pendente de assinatura',
      time: '25 minutos atrás',
      type: 'warning',
      icon: AlertCircle
    },
    {
      id: 3,
      user: 'Professor Carlos',
      action: 'Contrato atualizado',
      time: '1 hora atrás',
      type: 'info',
      icon: FileText
    },
    {
      id: 4,
      user: 'Ana Oliveira',
      action: 'Cadastro de nova disciplina',
      time: '2 horas atrás',
      type: 'success',
      icon: BookOpen
    },
    {
      id: 5,
      user: 'Roberto Alves',
      action: 'Rematrícula processada',
      time: '3 horas atrás',
      type: 'success',
      icon: UserPlus
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Atividades Recentes</h2>
            <p className="text-gray-600 mt-1">Últimas ações no sistema</p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Ver histórico completo
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${getTypeColor(activity.type)}`}>
                  <activity.icon size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {activity.user} - {activity.action}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <MoreVertical size={18} />
              </button>
            </div>
          ))}
        </div>
        
        {/* Atividade em tempo real */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium text-gray-900">Sistema online</p>
                <p className="text-sm text-gray-600">Todas as funcionalidades disponíveis</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Atualizado agora há pouco
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;