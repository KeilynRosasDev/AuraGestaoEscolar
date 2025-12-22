// src/components/ServiceCard.tsx (atualizado)
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
    features: string[];
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    red: 'bg-red-50 border-red-200 text-red-700',
    cyan: 'bg-cyan-50 border-cyan-200 text-cyan-700',
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className={`p-6 border-b ${colorClasses[service.color as keyof typeof colorClasses]}`}>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold">{service.title}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">{service.icon}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow">
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        <div className="space-y-3 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
          {service.features.length > 3 && (
            <div className="text-gray-500 text-sm mt-2">
              +{service.features.length - 3} outros recursos
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-0">
        <button className="w-full btn-outline flex items-center justify-center group">
          Saiba mais
          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;