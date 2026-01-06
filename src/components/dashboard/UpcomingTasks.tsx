// src/components/dashboard/UpcomingTasks.tsx
import React from 'react';
import { 
  Calendar, 
  Clock, 
  CheckSquare,
  AlertCircle,
  ChevronRight
} from 'lucide-react';

const UpcomingTasks: React.FC = () => {
  const upcomingTasks = [
    {
      id: 1,
      title: 'Reunião pedagógica',
      time: 'Hoje, 14:00',
      priority: 'alta',
      assigned: 'Maria Silva'
    },
    {
      id: 2,
      title: 'Entrega de boletins',
      time: 'Amanhã, 09:00',
      priority: 'média',
      assigned: 'Você'
    },
    {
      id: 3,
      title: 'Renovar contratos professores',
      time: '15/12, 10:00',
      priority: 'alta',
      assigned: 'Carlos Santos'
    },
    {
      id: 4,
      title: 'Fechamento mensal',
      time: '20/12, 16:00',
      priority: 'média',
      assigned: 'Você'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta': return 'bg-red-100 text-red-700';
      case 'média': return 'bg-yellow-100 text-yellow-700';
      case 'baixa': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Próximas Tarefas</h2>
            <p className="text-gray-600 mt-1">Agenda e prazos</p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            <Calendar size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${getPriorityColor(task.priority)}`}>
                  {task.priority === 'alta' ? (
                    <AlertCircle size={18} />
                  ) : (
                    <Clock size={18} />
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock size={14} />
                      <span>{task.time}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {task.assigned}
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="p-2 text-gray-400 hover:text-blue-600">
                <CheckSquare size={18} />
              </button>
            </div>
          ))}
        </div>
        
        {/* Adicionar nova tarefa */}
        <div className="mt-6">
          <button className="w-full flex items-center justify-center space-x-2 p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:text-blue-600 hover:border-blue-400 transition-colors">
            <span>+ Adicionar nova tarefa</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTasks;