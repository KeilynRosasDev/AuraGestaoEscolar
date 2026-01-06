// src/components/professor/ProfessorSidebar.tsx
import React from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  BookOpen,
  FileText,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface Etapa {
  id: number;
  label: string;
  completado: boolean;
}

interface ProfessorSidebarProps {
  etapas: Etapa[];
  etapaAtiva: number;
  onEtapaClick: (etapa: number) => void;
}

const ProfessorSidebar: React.FC<ProfessorSidebarProps> = ({
  etapas,
  etapaAtiva,
  onEtapaClick
}) => {
  const getEtapaIcon = (etapaId: number) => {
    switch (etapaId) {
      case 1: return User;
      case 2: return Briefcase;
      case 3: return GraduationCap;
      case 4: return BookOpen;
      case 5: return FileText;
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
        Etapas do Cadastro
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
                  ? 'bg-green-50 border-l-4 border-green-600'
                  : status === 'completado'
                  ? 'bg-green-50 border-l-4 border-green-600'
                  : 'hover:bg-gray-50 border-l-4 border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  status === 'ativo'
                    ? 'bg-green-100 text-green-600'
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
                        ? 'text-green-700'
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

      {/* Informações úteis */}
      <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
        <h3 className="font-semibold text-gray-900 mb-2">Dica Importante</h3>
        <p className="text-sm text-gray-600">
          Todos os campos com <span className="text-red-500">*</span> são obrigatórios.
          Documentos devem ser escaneados em alta qualidade.
        </p>
      </div>
    </div>
  );
};

export default ProfessorSidebar;