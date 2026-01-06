// src/components/documentacao/ModalDocumento.tsx
import React, { useState } from 'react';
import { X, Download, Printer, Mail, Eye, Check, Calendar, User, FileText, AlertCircle } from 'lucide-react';

interface ModalDocumentoProps {
  aberto: boolean;
  onFechar: () => void;
  documento: any;
  onGerarDocumento: (documento: any) => void;
}

const ModalDocumento: React.FC<ModalDocumentoProps> = ({
  aberto,
  onFechar,
  documento,
  onGerarDocumento
}) => {
  const [formData, setFormData] = useState({
    alunoNome: '',
    alunoMatricula: '',
    dataEmissao: new Date().toISOString().split('T')[0],
    periodo: '',
    observacoes: '',
    formato: 'PDF',
    via: 'original',
    enviarEmail: false
  });

  const [etapa, setEtapa] = useState<'dados' | 'preview' | 'final'>('dados');

  if (!documento || !aberto) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleAvancar = () => {
    if (etapa === 'dados') {
      setEtapa('preview');
    } else if (etapa === 'preview') {
      setEtapa('final');
      onGerarDocumento({ ...documento, ...formData });
    }
  };

  const renderDados = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Preencha os dados do documento</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome do Aluno/Professor <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              name="alunoNome"
              value={formData.alunoNome}
              onChange={handleInputChange}
              required
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Digite o nome completo"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Matrícula <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="alunoMatricula"
            value={formData.alunoMatricula}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Número de matrícula"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data de Emissão
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={16} className="text-gray-400" />
            </div>
            <input
              type="date"
              name="dataEmissao"
              value={formData.dataEmissao}
              onChange={handleInputChange}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Período Letivo
          </label>
          <select
            name="periodo"
            value={formData.periodo}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Selecione o período</option>
            <option value="2024.1">2024 - 1º Semestre</option>
            <option value="2024.2">2024 - 2º Semestre</option>
            <option value="2023.1">2023 - 1º Semestre</option>
            <option value="2023.2">2023 - 2º Semestre</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Observações (Opcional)
        </label>
        <textarea
          name="observacoes"
          value={formData.observacoes}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Adicione observações especiais..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Formato do Documento
          </label>
          <select
            name="formato"
            value={formData.formato}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="PDF">PDF (Recomendado)</option>
            <option value="DOCX">Word (.docx)</option>
            <option value="ODT">OpenDocument (.odt)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Via
          </label>
          <select
            name="via"
            value={formData.via}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="original">Via Original</option>
            <option value="copia">Cópia Simples</option>
            <option value="autenticada">Cópia Autenticada</option>
          </select>
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="enviarEmail"
          name="enviarEmail"
          checked={formData.enviarEmail}
          onChange={handleCheckboxChange}
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        />
        <label htmlFor="enviarEmail" className="ml-2 text-sm text-gray-700">
          Enviar cópia por email após a geração
        </label>
      </div>
    </div>
  );

  const renderPreview = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Pré-visualização do Documento</h3>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <FileText size={48} className="mx-auto text-gray-400 mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">{documento.titulo}</h4>
          <p className="text-gray-600 mb-4">Pré-visualização do documento gerado</p>
          
          <div className="text-left bg-white p-4 rounded-lg border border-gray-200">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Documento:</span>
                <span className="font-medium">{documento.titulo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Beneficiário:</span>
                <span className="font-medium">{formData.alunoNome}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Matrícula:</span>
                <span className="font-medium">{formData.alunoMatricula}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Data de Emissão:</span>
                <span className="font-medium">{formData.dataEmissao}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Formato:</span>
                <span className="font-medium">{formData.formato}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle size={20} className="text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800">Importante</h4>
            <p className="text-sm text-yellow-700 mt-1">
              Verifique todos os dados antes de gerar o documento. Após a geração, não será possível editar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinal = () => (
    <div className="text-center py-8">
      <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
        <Check size={32} className="text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Documento Gerado com Sucesso!</h3>
      <p className="text-gray-600 mb-6">
        O documento <span className="font-semibold">{documento.titulo}</span> foi gerado e está pronto para uso.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center">
          <Download size={24} className="text-gray-600 mb-2" />
          <span className="text-sm font-medium text-gray-900">Download</span>
        </button>
        <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center">
          <Printer size={24} className="text-gray-600 mb-2" />
          <span className="text-sm font-medium text-gray-900">Imprimir</span>
        </button>
        <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center">
          <Mail size={24} className="text-gray-600 mb-2" />
          <span className="text-sm font-medium text-gray-900">Enviar Email</span>
        </button>
      </div>
      
      <p className="text-sm text-gray-500">
        Documento salvo no histórico de emissões. Código: {documento.codigo}-{Date.now().toString().slice(-6)}
      </p>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onFechar}
      />
      
      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl transform transition-all">
          {/* Cabeçalho */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-600 rounded-lg">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {documento.titulo}
                </h2>
                <p className="text-sm text-gray-600">{documento.codigo}</p>
              </div>
            </div>
            
            <button
              onClick={onFechar}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="px-6 py-6 max-h-[80vh] overflow-y-auto">
            {etapa === 'dados' && renderDados()}
            {etapa === 'preview' && renderPreview()}
            {etapa === 'final' && renderFinal()}
          </div>

          {/* Rodapé */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${etapa === 'dados' ? 'bg-purple-600' : 'bg-green-500'}`}></div>
                <span className="text-sm font-medium text-gray-700">Dados</span>
              </div>
              <div className={`h-0.5 w-8 ${etapa === 'dados' ? 'bg-gray-300' : 'bg-green-500'}`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${etapa === 'preview' ? 'bg-purple-600' : etapa === 'final' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span className="text-sm font-medium text-gray-700">Pré-visualização</span>
              </div>
              <div className={`h-0.5 w-8 ${etapa === 'final' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${etapa === 'final' ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
                <span className="text-sm font-medium text-gray-700">Conclusão</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {etapa !== 'final' && (
                <>
                  <button
                    onClick={onFechar}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleAvancar}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-md transition-shadow font-medium"
                  >
                    {etapa === 'dados' ? 'Pré-visualizar' : 'Gerar Documento'}
                  </button>
                </>
              )}
              {etapa === 'final' && (
                <button
                  onClick={onFechar}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-md transition-shadow font-medium"
                >
                  Concluir
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDocumento;