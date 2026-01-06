// src/components/documentacao/AbasDocumentacao.tsx
import React from 'react';
import { Users, UserCheck } from 'lucide-react';

interface AbasDocumentacaoProps {
  abaAtiva: 'alunos' | 'professores';
  onAbaChange: (aba: 'alunos' | 'professores') => void;
}

const AbasDocumentacao: React.FC<AbasDocumentacaoProps> = ({
  abaAtiva,
  onAbaChange
}) => {
  const abas = [
    {
      id: 'alunos',
      label: 'Documentos de Alunos',
      descricao: 'Declarações, históricos, boletins e mais',
      icone: Users,
      contador: 24
    },
    {
      id: 'professores',
      label: 'Documentos de Professores',
      descricao: 'Contratos, declarações, certificados',
      icone: UserCheck,
      contador: 12
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {abas.map((aba) => {
          const Icone = aba.icone;
          const ativa = abaAtiva === aba.id;
          
          return (
            <button
              key={aba.id}
              onClick={() => onAbaChange(aba.id as 'alunos' | 'professores')}
              className={`
                p-6 text-left transition-all duration-300 relative
                ${ativa 
                  ? 'bg-gradient-to-r from-purple-50 to-indigo-50 border-b-4 border-purple-600' 
                  : 'hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    ativa 
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Icone size={20} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${
                      ativa ? 'text-purple-700' : 'text-gray-900'
                    }`}>
                      {aba.label}
                    </h3>
                    <p className={`text-sm mt-1 ${
                      ativa ? 'text-purple-600' : 'text-gray-600'
                    }`}>
                      {aba.descricao}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`text-2xl font-bold ${
                    ativa ? 'text-purple-600' : 'text-gray-400'
                  }`}>
                    {aba.contador}
                  </div>
                  <div className={`text-xs ${
                    ativa ? 'text-purple-500' : 'text-gray-500'
                  }`}>
                    disponíveis
                  </div>
                </div>
              </div>
              
              {ativa && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AbasDocumentacao;