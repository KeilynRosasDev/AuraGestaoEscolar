// src/components/matricula/MatriculaSidebar.tsx
import React from 'react';
import { 
  User, 
  Home, 
  Users, 
  FileText, 
  BookOpen,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface Etapa {
  id: number;
  label: string;
  completado: boolean;
}

interface MatriculaSidebarProps {
  etapas: Etapa[];
  etapaAtiva: number;
  onEtapaClick: (etapa: number) => void;
}

const MatriculaSidebar: React.FC<MatriculaSidebarProps> = ({
  etapas,
  etapaAtiva,
  onEtapaClick
}) => {
  const getEtapaIcon = (etapaId: number) => {
    switch (etapaId) {
      case 1: return User;
      case 2: return Home;
      case 3: return Users;
      case 4: return FileText;
      case 5: return BookOpen;
      case 6: return CheckCircle;
      default: return AlertCircle;
    }
  };

  const getEtapaStatus = (etapa: Etapa, index: number) => {
    if (etapa.completado) return 'completado';
    if (etapaAtiva === etapa.id) return 'ativo';
    return 'pendente';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Etapas da Matrícula
      </h2>
      
      <div className="space-y-2">
        {etapas.map((etapa, index) => {
          const status = getEtapaStatus(etapa, index);
          const Icon = getEtapaIcon(etapa.id);
          
          return (
            <button
              key={etapa.id}
              onClick={() => onEtapaClick(etapa.id)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                status === 'ativo'
                  ? 'bg-blue-50 border-l-4 border-blue-600'
                  : status === 'completado'
                  ? 'bg-green-50 border-l-4 border-green-600'
                  : 'hover:bg-gray-50 border-l-4 border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  status === 'ativo'
                    ? 'bg-blue-100 text-blue-600'
                    : status === 'completado'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  <Icon size={18} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${
                      status === 'ativo'
                        ? 'text-blue-700'
                        : status === 'completado'
                        ? 'text-green-700'
                        : 'text-gray-600'
                    }`}>
                      {etapa.label}
                    </span>
                    
                    {status === 'completado' && (
                      <CheckCircle size={16} className="text-green-500" />
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-1">
                    {status === 'completado' ? 'Completado' :
                     status === 'ativo' ? 'Em andamento' : 'Pendente'}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dicas rápidas */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
        <h3 className="font-semibold text-gray-900 mb-2">Dica Rápida</h3>
        <p className="text-sm text-gray-600">
          Todos os campos marcados com <span className="text-red-500">*</span> são obrigatórios.
          Você pode salvar como rascunho a qualquer momento.
        </p>
      </div>
    </div>
  );
};

export default MatriculaSidebar;