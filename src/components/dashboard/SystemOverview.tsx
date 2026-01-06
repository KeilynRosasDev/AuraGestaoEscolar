// src/components/dashboard/SystemOverview.tsx
import React from 'react';
import { 
  Shield, 
  Cloud, 
  Database,
  Zap,
  Cpu,
  HardDrive
} from 'lucide-react';

const SystemOverview: React.FC = () => {
  const systemMetrics = [
    { label: 'Uso de CPU', value: 65, color: 'bg-green-500' },
    { label: 'Memória RAM', value: 78, color: 'bg-blue-500' },
    { label: 'Armazenamento', value: 42, color: 'bg-purple-500' },
    { label: 'Rede', value: 92, color: 'bg-orange-500' },
  ];

  const systemStatus = [
    { label: 'Segurança', icon: Shield, status: 'Ativa', color: 'text-green-600' },
    { label: 'Backup Cloud', icon: Cloud, status: 'Atualizado', color: 'text-green-600' },
    { label: 'Banco de Dados', icon: Database, status: 'Online', color: 'text-green-600' },
    { label: 'Performance', icon: Zap, status: 'Ótima', color: 'text-green-600' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Visão do Sistema</h2>
        <p className="text-gray-600 mt-1">Status e performance</p>
      </div>
      
      <div className="p-6">
        {/* Métricas do Sistema */}
        <div className="space-y-6">
          {systemMetrics.map((metric, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">{metric.label}</span>
                <span className="font-medium text-gray-900">{metric.value}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${metric.color} rounded-full`}
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Status do Sistema */}
        <div className="mt-8 space-y-4">
          <h3 className="font-semibold text-gray-900">Status dos Serviços</h3>
          {systemStatus.map((service, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <service.icon size={18} className="text-gray-500" />
                <span className="text-gray-700">{service.label}</span>
              </div>
              <span className={`text-sm font-medium ${service.color}`}>
                {service.status}
              </span>
            </div>
          ))}
        </div>

        {/* Último Backup */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <HardDrive size={18} className="text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">Último Backup</p>
              <p className="text-xs text-gray-600">Hoje às 02:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemOverview;