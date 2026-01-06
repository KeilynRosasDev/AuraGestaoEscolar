// src/components/matricula/MatriculaHeader.tsx
import React from 'react';
import { ArrowLeft, Save, Printer, Download, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MatriculaHeaderProps {
  etapaAtual: number;
  totalEtapas: number;
}

const MatriculaHeader: React.FC<MatriculaHeaderProps> = ({ 
  etapaAtual, 
  totalEtapas 
}) => {
  const navigate = useNavigate();
  const progresso = (etapaAtual / totalEtapas) * 100;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container-custom">
        <div className="px-4 py-6">
          {/* Navegação superior */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/secretaria/dashboard')}
              className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Voltar para Dashboard</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-blue-100 hover:text-white">
                <Save size={20} />
              </button>
              <button className="p-2 text-blue-100 hover:text-white">
                <Printer size={20} />
              </button>
              <button className="p-2 text-blue-100 hover:text-white">
                <Download size={20} />
              </button>
            </div>
          </div>

          {/* Título e progresso */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">
              Nova Matrícula de Aluno
            </h1>
            <p className="text-blue-100">
              Complete todas as etapas para registrar um novo aluno no sistema
            </p>
          </div>

          {/* Barra de progresso */}
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span>Etapa {etapaAtual} de {totalEtapas}</span>
              <span>{Math.round(progresso)}% completo</span>
            </div>
            <div className="h-2 bg-blue-400 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${progresso}%` }}
              ></div>
            </div>
          </div>

          {/* Ações rápidas */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center space-x-2 transition-colors">
              <Save size={16} />
              <span>Salvar Rascunho</span>
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center space-x-2 transition-colors">
              <Share2 size={16} />
              <span>Compartilhar</span>
            </button>
            <button className="px-4 py-2 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Pré-visualizar Ficha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatriculaHeader;