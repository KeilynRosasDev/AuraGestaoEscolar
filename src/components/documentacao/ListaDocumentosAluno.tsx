// src/components/documentacao/ListaDocumentosAluno.tsx
import React from 'react';
import { FileText, Download, Printer, Eye, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface DocumentoAluno {
  id: number;
  titulo: string;
  descricao: string;
  codigo: string;
  categoria: string;
  tempoEmissao: string;
  status: 'ativo' | 'pendente' | 'rascunho';
  emitidosHoje: number;
  modelo: string;
}

interface ListaDocumentosAlunoProps {
  busca: string;
  onDocumentoClick: (documento: DocumentoAluno) => void;
}

const ListaDocumentosAluno: React.FC<ListaDocumentosAlunoProps> = ({
  busca,
  onDocumentoClick
}) => {
  // Documentos para alunos
  const documentos: DocumentoAluno[] = [
    {
      id: 1,
      titulo: 'Declaração de Matrícula',
      descricao: 'Comprovação de matrícula do aluno no ano letivo',
      codigo: 'DEC-MAT-001',
      categoria: 'declaracoes',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 12,
      modelo: 'Modelo padrão da secretaria'
    },
    {
      id: 2,
      titulo: 'Histórico Escolar',
      descricao: 'Documento completo com histórico de notas e frequência',
      codigo: 'HIS-ESCO-001',
      categoria: 'historico',
      tempoEmissao: '2 dias úteis',
      status: 'ativo',
      emitidosHoje: 8,
      modelo: 'Modelo oficial MEC'
    },
    {
      id: 3,
      titulo: 'Boletim Escolar',
      descricao: 'Notas e faltas do bimestre/ano letivo',
      codigo: 'BOL-ESCO-001',
      categoria: 'boletins',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 45,
      modelo: 'Modelo automático'
    },
    {
      id: 4,
      titulo: 'Declaração de Transferência',
      descricao: 'Documento para transferência de escola',
      codigo: 'DEC-TRANS-001',
      categoria: 'declaracoes',
      tempoEmissao: '1 dia útil',
      status: 'ativo',
      emitidosHoje: 3,
      modelo: 'Modelo padrão da secretaria'
    },
    {
      id: 5,
      titulo: 'Comprovante de Pagamento',
      descricao: 'Comprovação de pagamento de mensalidade',
      codigo: 'COMP-PAG-001',
      categoria: 'matricula',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 24,
      modelo: 'Modelo automático'
    },
    {
      id: 6,
      titulo: 'Declaração de Conclusão',
      descricao: 'Comprovação de conclusão do ano/série',
      codigo: 'DEC-CONC-001',
      categoria: 'declaracoes',
      tempoEmissao: '3 dias úteis',
      status: 'pendente',
      emitidosHoje: 2,
      modelo: 'Modelo oficial MEC'
    },
    {
      id: 7,
      titulo: 'Atestado de Frequência',
      descricao: 'Comprovação de frequência escolar',
      codigo: 'ATES-FREQ-001',
      categoria: 'declaracoes',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 18,
      modelo: 'Modelo padrão da secretaria'
    },
    {
      id: 8,
      titulo: 'Certificado de Aluno Regular',
      descricao: 'Certificado de aluno regularmente matriculado',
      codigo: 'CERT-REG-001',
      categoria: 'declaracoes',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 7,
      modelo: 'Modelo padrão da secretaria'
    },
    {
      id: 9,
      titulo: 'Comprovante de Reserva de Vaga',
      descricao: 'Comprovação de reserva de vaga para próximo ano',
      codigo: 'COMP-VAGA-001',
      categoria: 'matricula',
      tempoEmissao: 'Imediato',
      status: 'rascunho',
      emitidosHoje: 0,
      modelo: 'Modelo em desenvolvimento'
    },
    {
      id: 10,
      titulo: 'Declaração para Meia Entrada',
      descricao: 'Documento para obtenção de meia entrada estudantil',
      codigo: 'DEC-MEIA-001',
      categoria: 'declaracoes',
      tempoEmissao: 'Imediato',
      status: 'ativo',
      emitidosHoje: 15,
      modelo: 'Modelo padrão da secretaria'
    },
    {
      id: 11,
      titulo: 'Relatório de Desempenho',
      descricao: 'Relatório detalhado de desempenho acadêmico',
      codigo: 'REL-DESEMP-001',
      categoria: 'boletins',
      tempoEmissao: '2 dias úteis',
      status: 'ativo',
      emitidosHoje: 5,
      modelo: 'Modelo analítico'
    },
    {
      id: 12,
      titulo: 'Certificado de Participação',
      descricao: 'Certificado de participação em eventos escolares',
      codigo: 'CERT-PART-001',
      categoria: 'declaracoes',
      tempoEmissao: '1 dia útil',
      status: 'ativo',
      emitidosHoje: 9,
      modelo: 'Modelo personalizável'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ativo': return <CheckCircle size={14} className="text-green-500" />;
      case 'pendente': return <Clock size={14} className="text-yellow-500" />;
      case 'rascunho': return <AlertCircle size={14} className="text-blue-500" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return 'text-green-700 bg-green-100';
      case 'pendente': return 'text-yellow-700 bg-yellow-100';
      case 'rascunho': return 'text-blue-700 bg-blue-100';
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
          <h2 className="text-2xl font-bold text-gray-900">Documentos para Alunos</h2>
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
                  
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(documento.status)}`}>
                      <span className="flex items-center space-x-1">
                        {getStatusIcon(documento.status)}
                        <span>{documento.status}</span>
                      </span>
                    </span>
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
                      <span className="text-sm">Modelo:</span>
                    </div>
                    <span className="text-sm text-gray-900">{documento.modelo}</span>
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

      {/* Categorias mais usadas */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorias Mais Utilizadas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { nome: 'Declarações', count: 68, cor: 'bg-purple-100 text-purple-700' },
            { nome: 'Históricos', count: 42, cor: 'bg-blue-100 text-blue-700' },
            { nome: 'Boletins', count: 89, cor: 'bg-green-100 text-green-700' },
            { nome: 'Matrícula', count: 56, cor: 'bg-orange-100 text-orange-700' },
          ].map((categoria, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoria.cor}`}>
                  {categoria.nome}
                </span>
                <span className="text-lg font-bold text-gray-900">{categoria.count}</span>
              </div>
              <div className="mt-2 text-sm text-gray-600">documentos emitidos</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaDocumentosAluno;