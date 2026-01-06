// src/components/matricula/DocumentacaoAlunoForm.tsx
import React, { useState } from 'react';
import { Upload, File, Check, X, Eye, Download } from 'lucide-react';

interface Documento {
  id: number;
  nome: string;
  obrigatorio: boolean;
  arquivo: File | null;
  status: 'pendente' | 'enviado' | 'aprovado' | 'rejeitado';
}

interface DocumentacaoAlunoFormProps {
  onSubmit: (dados: any) => void;
  initialData?: any;
}

const DocumentacaoAlunoForm: React.FC<DocumentacaoAlunoFormProps> = ({ 
  onSubmit, 
  initialData = {} 
}) => {
  const [documentos, setDocumentos] = useState<Documento[]>([
    { id: 1, nome: 'RG ou Certidão de Nascimento', obrigatorio: true, arquivo: null, status: 'pendente' },
    { id: 2, nome: 'CPF', obrigatorio: true, arquivo: null, status: 'pendente' },
    { id: 3, nome: 'Comprovante de Residência', obrigatorio: true, arquivo: null, status: 'pendente' },
    { id: 4, nome: 'Foto 3x4', obrigatorio: true, arquivo: null, status: 'pendente' },
    { id: 5, nome: 'Histórico Escolar', obrigatorio: false, arquivo: null, status: 'pendente' },
    { id: 6, nome: 'Declaração de Transferência', obrigatorio: false, arquivo: null, status: 'pendente' },
    { id: 7, nome: 'Laudo Médico (se aplicável)', obrigatorio: false, arquivo: null, status: 'pendente' },
  ]);

  const handleFileChange = (id: number, file: File | null) => {
    setDocumentos(documentos.map(doc => 
      doc.id === id 
        ? { ...doc, arquivo: file, status: file ? 'enviado' : 'pendente' } 
        : doc
    ));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (id: number, e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange(id, file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filtra apenas os documentos enviados
    const documentosEnviados = documentos
      .filter(doc => doc.arquivo)
      .map(doc => ({
        nome: doc.nome,
        arquivo: doc.arquivo,
        status: doc.status
      }));
    
    onSubmit({ documentos: documentosEnviados });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aprovado': return 'text-green-600 bg-green-100';
      case 'rejeitado': return 'text-red-600 bg-red-100';
      case 'enviado': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'aprovado': return <Check size={16} />;
      case 'rejeitado': return <X size={16} />;
      case 'enviado': return <File size={16} />;
      default: return null;
    }
  };

  const documentosObrigatoriosCompletos = documentos
    .filter(doc => doc.obrigatorio)
    .every(doc => doc.arquivo !== null);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Documentação</h2>
          <p className="text-gray-600 mt-1">
            Upload dos documentos obrigatórios e complementares
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Etapa 4 de 6
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Status dos documentos */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Progresso da Documentação</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {documentos.filter(d => d.arquivo).length} de {documentos.length} documentos enviados
                </p>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${
                  documentosObrigatoriosCompletos ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {documentosObrigatoriosCompletos ? 'Completo' : 'Incompleto'}
                </div>
                <div className="text-sm text-gray-600">
                  Documentos obrigatórios
                </div>
              </div>
            </div>
            
            {/* Barra de progresso */}
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progresso</span>
                <span>{Math.round((documentos.filter(d => d.arquivo).length / documentos.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${(documentos.filter(d => d.arquivo).length / documentos.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Lista de documentos */}
          <div className="space-y-4">
            {documentos.map((documento) => (
              <div
                key={documento.id}
                className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${getStatusColor(documento.status)}`}>
                      {getStatusIcon(documento.status) || <File size={18} />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {documento.nome}
                        {documento.obrigatorio && (
                          <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                            Obrigatório
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Formatos aceitos: PDF, JPG, PNG (Máx. 5MB)
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <span className={`px-3 py-1 rounded-full ${getStatusColor(documento.status)}`}>
                      {documento.status === 'pendente' ? 'Pendente' :
                       documento.status === 'enviado' ? 'Enviado' :
                       documento.status === 'aprovado' ? 'Aprovado' : 'Rejeitado'}
                    </span>
                  </div>
                </div>

                {/* Área de upload */}
                <div
                  className={`mt-4 border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    documento.arquivo
                      ? 'border-green-300 bg-green-50/50'
                      : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50/30'
                  }`}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(documento.id, e)}
                >
                  {documento.arquivo ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <File size={24} className="text-green-600" />
                        <div className="text-left">
                          <p className="font-medium text-gray-900">{documento.arquivo.name}</p>
                          <p className="text-sm text-gray-600">
                            {(documento.arquivo.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => window.open(URL.createObjectURL(documento.arquivo!), '_blank')}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg"
                          title="Visualizar"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleFileChange(documento.id, null)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
                          title="Remover"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-700 mb-2">
                        Arraste e solte o arquivo aqui ou
                      </p>
                      <label className="cursor-pointer">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-md transition-shadow inline-block">
                          Selecionar arquivo
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            if (file && file.size <= 5 * 1024 * 1024) { // 5MB
                              handleFileChange(documento.id, file);
                            } else {
                              alert('Arquivo muito grande. Tamanho máximo: 5MB');
                            }
                          }}
                        />
                      </label>
                      <p className="text-sm text-gray-500 mt-2">
                        Clique ou arraste para fazer upload
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dicas de upload */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Importante</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Todos os documentos obrigatórios devem ser enviados para concluir a matrícula</li>
              <li>• Certifique-se de que os documentos estão legíveis e completos</li>
              <li>• Após o envio, a secretaria analisará os documentos em até 48 horas</li>
              <li>• Documentos rejeitados serão notificados para reenvio</li>
            </ul>
          </div>
        </div>

        {/* Botões de navegação */}
        <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Voltar
          </button>
          <div className="space-x-4">
            <button
              type="button"
              onClick={() => {
                // Salva como rascunho
                const documentosEnviados = documentos
                  .filter(doc => doc.arquivo)
                  .map(doc => ({
                    nome: doc.nome,
                    arquivo: doc.arquivo,
                    status: doc.status
                  }));
                
                console.log('Salvando rascunho:', { documentos: documentosEnviados });
                alert('Rascunho salvo com sucesso!');
              }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Salvar Rascunho
            </button>
            <button
              type="submit"
              disabled={!documentosObrigatoriosCompletos}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                documentosObrigatoriosCompletos
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Próxima Etapa: Turma
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DocumentacaoAlunoForm;