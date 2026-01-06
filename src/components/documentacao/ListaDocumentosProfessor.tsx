// src/components/documentacao/ListaDocumentosProfessor.tsx
import React from 'react';
import { FileText, Download, Printer, Eye, Clock, CheckCircle, AlertCircle, Shield } from 'lucide-react';

interface DocumentoProfessor {
  id: number;
  titulo: string;
  descricao: string;
  codigo: string;
  categoria: string;
  tempoEmissao: string;
  status: 'ativo' | 'pendente' | 'restrito';
  emitidosHoje: number;
  nivelAcesso: 'comum' | 'administrador';
}

interface ListaDocumentosProfessorProps {
  busca: string;
  onDocumentoClick: (documento: DocumentoProfessor) => void;
}

const ListaDocumentosProfessor: React.FC<ListaDocumentosProfessorProps> = ({
  busca,
  onDocumentoClick
}) => {
  // Documentos para professores
  const documentos: DocumentoProfessor[] = [
    {
      id: 1,
      titulo: 'Contrato de Trabalho',
      descricao: 'Contrato formal de trabalho do professor',
      codigo: 'CONT-TRAB-001',
      categoria: 'contratos',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 3,
      nivelAcesso: 'administrador'
    },
    {
      id: 2,
      titulo: 'Declaração de Vínculo Empregatício',
      descricao: 'Comprovação de vínculo empregatício com a escola',
      codigo: 'DEC-VINC-001',
      categoria: 'declaracoes',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 5,
      nivelAcesso: 'comum'
    },
    {
      id: 3,
      titulo: 'Holerite/Contracheque',
      descricao: 'Demonstrativo de pagamento mensal',
      codigo: 'HOL-MENS-001',
      categoria: 'financeiro',
      tempoEmissao: '5 dias úteis',
      status: 'ativo',
      emitidosHoje: 8,
      nivelAcesso: 'comum'
    },
    {
      id: 4,
      titulo: 'Certificado de Horas Trabalhadas',
      descricao: 'Comprovação de carga horária cumprida',
      codigo: 'CERT-HORAS-001',
      categoria: 'declaracoes',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 4,
      nivelAcesso: 'comum'
    },
    {
      id: 5,
      titulo: 'Declaração de Experiência',
      descricao: 'Documento comprobatório de experiência profissional',
      codigo: 'DEC-EXP-001',
      categoria: 'declaracoes',
      tempoEmissao: '1 dia útil',
      status: 'ativo',
      emitidosHoje: 2,
      nivelAcesso: 'comum'
    },
    {
      id: 6,
      titulo: 'Avaliação de Desempenho',
      descricao: 'Relatório de avaliação de desempenho docente',
      codigo: 'AVAL-DESP-001',
      categoria: 'avaliacoes',
      tempoEmissao: '3 dias úteis',
      status: 'pendente',
      emitidosHoje: 1,
      nivelAcesso: 'administrador'
    },
    {
      id: 7,
      titulo: 'Certificado de Participação em Eventos',
      descricao: 'Certificado de participação em eventos pedagógicos',
      codigo: 'CERT-EVENT-001',
      categoria: 'certificados',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 7,
      nivelAcesso: 'comum'
    },
    {
      id: 8,
      titulo: 'Relatório de Aulas Ministradas',
      descricao: 'Relatório detalhado de aulas ministradas',
      codigo: 'REL-AULAS-001',
      categoria: 'relatorios',
      tempoEmissao: '2 dias úteis',
      status: 'ativo',
      emitidosHoje: 3,
      nivelAcesso: 'comum'
    },
    {
      id: 9,
      titulo: 'Comprovante de Pagamento de Férias',
      descricao: 'Comprovação de pagamento de período de férias',
      codigo: 'COMP-FERIAS-001',
      categoria: 'financeiro',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 1,
      nivelAcesso: 'comum'
    },
    {
      id: 10,
      titulo: 'Declaração para Conselho de Classe',
      descricao: 'Documento para participação em conselho de classe',
      codigo: 'DEC-CONSELHO-001',
      categoria: 'declaracoes',
      tempoEmissao: 'Imediato',
      status: 'restrito',
      emitidosHoje: 2,
      nivelAcesso: 'administrador'
    },
    {
      id: 11,
      titulo: 'Certificado de Capacitação',
      descricao: 'Certificado de cursos de capacitação profissional',
      codigo: 'CERT-CAPAC-001',
      categoria: 'certificados',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 6,
      nivelAcesso: 'comum'
    },
    {
      id: 12,
      titulo: 'Termo de Responsabilidade',
      descricao: 'Termo de responsabilidade por materiais escolares',
      codigo: 'TERM-RESP-001',
      categoria: 'contratos',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 4,
      nivelAcesso: 'comum'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ativo': return <CheckCircle size={14} className="text-green-500" />;
      case 'pendente': return <Clock size={14} className="text-yellow-500" />;
      case 'restrito': return <Shield size={14} className="text-red-500" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return 'text-green-700 bg-green-100';
      case 'pendente': return 'text-yellow-700 bg-yellow-100';
      case 'restrito': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getNivelAcessoColor = (nivel: string) => {
    switch (nivel) {
      case 'administrador': return 'text-purple-700 bg-purple-100';
      case 'comum': return 'text-blue-700 bg-blue-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const documentosFiltrados = documentos.filter(doc =>
    doc.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    doc.descricao.toLowerCase().includes(busca.toLowerCase()) ||
    doc.codigo.toLowerCase().includes(busca.toLowerCase()) ||
    doc.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Documentos para Professores</h2>
          <p className="text-gray-600 mt-1">
            {documentosFiltrados.length} documentos disponíveis
          </p>
        </div>
        
        <div className="text-sm text-gray-600">
          <span className="font-medium">Hoje:</span> {documentos.reduce((total, doc) => total + doc.emitidosHoje, 0)} emitidos
        </div>
      </div>

      {documentosFiltrados.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
          <FileText size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Nenhum documento encontrado
          </h3>
          <p className="text-gray-600">
            Tente ajustar os termos da busca ou filtros.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentosFiltrados.map((documento) => (
            <div
              key={documento.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-purple-300 group cursor-pointer"
              onClick={() => onDocumentoClick(documento)}
            >
              {/* Cabeçalho do documento */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-600 rounded-lg">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {documento.titulo}
                      </h3>
                      <span className="text-xs font-medium text-gray-500 mt-1">
                        {documento.codigo}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(documento.status)}`}>
                        <span className="flex items-center space-x-1">
                          {getStatusIcon(documento.status)}
                          <span>{documento.status}</span>
                        </span>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getNivelAcessoColor(documento.nivelAcesso)}`}>
                        {documento.nivelAcesso}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm">
                  {documento.descricao}
                </p>
              </div>

              {/* Informações do documento */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock size={14} />
                      <span className="text-sm">Emissão:</span>
                    </div>
                    <span className="font-medium text-gray-900">{documento.tempoEmissao}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FileText size={14} />
                      <span className="text-sm">Categoria:</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{documento.categoria}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Download size={14} />
                      <span className="text-sm">Emitidos hoje:</span>
                    </div>
                    <span className="font-bold text-purple-600">{documento.emitidosHoje}</span>
                  </div>
                </div>

                {/* Ações do documento */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDocumentoClick(documento);
                      }}
                      className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                      title="Visualizar"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Download documento:', documento);
                        alert(`Download do documento "${documento.titulo}" iniciado!`);
                      }}
                      className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                      title="Download"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDocumentoClick(documento);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg text-sm font-medium hover:shadow-md transition-shadow"
                  >
                    Emitir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Estatísticas de emissão */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6">
          <h3 className="font-bold text-lg mb-2">Total de Emissões</h3>
          <div className="text-3xl font-bold">248</div>
          <p className="text-purple-100 text-sm mt-2">documentos emitidos este mês</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 text-lg mb-2">Categoria Mais Emitida</h3>
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Declarações
            </span>
            <span className="text-2xl font-bold text-gray-900">89</span>
          </div>
          <p className="text-gray-600 text-sm mt-2">documentos emitidos</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 text-lg mb-2">Acesso Restrito</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield size={20} className="text-red-500" />
              <span className="font-medium text-gray-900">3 documentos</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2">necessitam autorização especial</p>
        </div>
      </div>
    </div>
  );
};

export default ListaDocumentosProfessor;