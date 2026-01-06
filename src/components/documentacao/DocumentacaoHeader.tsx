// src/components/documentacao/DocumentacaoHeader.tsx
import React from 'react';
import { ArrowLeft, Search, Filter, Download, Printer, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DocumentacaoHeaderProps {
  busca: string;
  onBuscaChange: (busca: string) => void;
}

const DocumentacaoHeader: React.FC<DocumentacaoHeaderProps> = ({ 
  busca, 
  onBuscaChange 
}) => {
  const navigate = useNavigate();

  const categorias = [
    { id: 'todos', label: 'Todos' },
    { id: 'declaracoes', label: 'Declarações' },
    { id: 'historico', label: 'Histórico' },
    { id: 'boletins', label: 'Boletins' },
    { id: 'matricula', label: 'Matrícula' },
    { id: 'contratos', label: 'Contratos' },
  ];

  const estatisticas = [
    { label: 'Documentos Emitidos', valor: '1,248', icone: FileText },
    { label: 'Este Mês', valor: '84', icone: Download },
    { label: 'Pendentes', valor: '12', icone: Printer },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="container-custom">
        <div className="px-4 py-6">
          {/* Navegação superior */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/secretaria/dashboard')}
              className="flex items-center space-x-2 text-purple-100 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Voltar para Dashboard</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-purple-100 hover:text-white">
                <Download size={20} />
              </button>
              <button className="p-2 text-purple-100 hover:text-white">
                <Printer size={20} />
              </button>
            </div>
          </div>

          {/* Título */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-3 bg-white/20 rounded-xl">
                <FileText size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  Documentação Escolar
                </h1>
                <p className="text-purple-100">
                  Emissão de documentos para alunos e professores
                </p>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {estatisticas.map((estatistica, index) => {
              const Icone = estatistica.icone;
              return (
                <div key={index} className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Icone size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{estatistica.valor}</div>
                      <div className="text-sm text-purple-100">{estatistica.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Barra de busca e filtros */}
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-purple-300" />
              </div>
              <input
                type="text"
                value={busca}
                onChange={(e) => onBuscaChange(e.target.value)}
                placeholder="Buscar documento por nome, código ou aluno..."
                className="pl-10 w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
                >
                  {categoria.label}
                </button>
              ))}
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors flex items-center space-x-2">
                <Filter size={14} />
                <span>Mais filtros</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentacaoHeader;