// src/components/professor/ContratoProfessor.tsx
import React, { useState } from 'react';
import { FileText, Upload, Eye, Download, Calendar, DollarSign, Clock, Check } from 'lucide-react';

interface ContratoProfessorProps {
  onSubmit: (dados: any) => void;
  initialData?: any;
}

const ContratoProfessor: React.FC<ContratoProfessorProps> = ({ 
  onSubmit, 
  initialData = {} 
}) => {
  const [formData, setFormData] = useState({
    numeroContrato: initialData.numeroContrato || '',
    dataInicio: initialData.dataInicio || '',
    dataTermino: initialData.dataTermino || '',
    tipoContrato: initialData.tipoContrato || 'CLT',
    salarioBase: initialData.salarioBase || '',
    cargaHoraria: initialData.cargaHoraria || '40',
    beneficios: initialData.beneficios || [],
    periodoExperiencia: initialData.periodoExperiencia || '90',
    arquivoContrato: null as File | null,
    termosAceitos: false
  });

  const beneficiosDisponiveis = [
    'Vale Transporte',
    'Vale Refeição',
    'Plano de Saúde',
    'Plano Odontológico',
    'Seguro de Vida',
    'Previdência Privada',
    'Auxílio Educação',
    'Gympass'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBeneficioToggle = (beneficio: string) => {
    setFormData(prev => {
      const beneficios = prev.beneficios.includes(beneficio)
        ? prev.beneficios.filter(b => b !== beneficio)
        : [...prev.beneficios, beneficio];
      return { ...prev, beneficios };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({ ...prev, arquivoContrato: file }));
    } else {
      alert('Por favor, selecione um arquivo PDF.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termosAceitos) {
      alert('Você precisa aceitar os termos do contrato para continuar.');
      return;
    }
    onSubmit(formData);
  };

  const formatCurrency = (value: string) => {
    const number = parseFloat(value.replace(/\D/g, '')) / 100;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contrato</h2>
          <p className="text-gray-600 mt-1">
            Informações contratuais do professor
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Etapa 5 de 6
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {/* Dados do Contrato */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <FileText size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Dados do Contrato</h3>
              </div>
              {formData.numeroContrato && (
                <span className="text-sm font-medium text-green-600">
                  Contrato {formData.numeroContrato}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Número do Contrato */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número do Contrato <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="numeroContrato"
                  value={formData.numeroContrato}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Ex: CONTRATO-2024-001"
                />
              </div>

              {/* Tipo de Contrato */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Contrato <span className="text-red-500">*</span>
                </label>
                <select
                  name="tipoContrato"
                  value={formData.tipoContrato}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="CLT">CLT</option>
                  <option value="Estatutário">Estatutário</option>
                  <option value="Temporário">Temporário</option>
                  <option value="Contrato Prazo Determinado">Contrato Prazo Determinado</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Data de Início */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data de Início <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="dataInicio"
                    value={formData.dataInicio}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Data de Término */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data de Término
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="dataTermino"
                    value={formData.dataTermino}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Remuneração */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <DollarSign size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Remuneração</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Salário Base */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salário Base <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">R$</span>
                  </div>
                  <input
                    type="text"
                    name="salarioBase"
                    value={formData.salarioBase}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="0,00"
                  />
                </div>
                {formData.salarioBase && (
                  <p className="text-sm text-gray-600 mt-1">
                    {formatCurrency(formData.salarioBase)}
                  </p>
                )}
              </div>

              {/* Carga Horária */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Carga Horária Semanal <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="cargaHoraria"
                    value={formData.cargaHoraria}
                    onChange={handleChange}
                    required
                    min="1"
                    max="60"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="40"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">horas por semana</p>
              </div>
            </div>

            {/* Período de Experiência */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Período de Experiência
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  name="periodoExperiencia"
                  value={formData.periodoExperiencia}
                  onChange={handleChange}
                  min="0"
                  max="180"
                  className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
                <span className="text-gray-600">dias</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Período de experiência previsto em lei
              </p>
            </div>
          </div>

          {/* Benefícios */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Benefícios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {beneficiosDisponiveis.map((beneficio) => (
                <button
                  key={beneficio}
                  type="button"
                  onClick={() => handleBeneficioToggle(beneficio)}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    formData.beneficios.includes(beneficio)
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{beneficio}</span>
                    {formData.beneficios.includes(beneficio) && (
                      <Check size={16} className="text-green-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Upload do Contrato */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Documento do Contrato</h3>
              {formData.arquivoContrato && (
                <span className="text-sm font-medium text-green-600">
                  ✓ Documento carregado
                </span>
              )}
            </div>

            <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              formData.arquivoContrato
                ? 'border-green-300 bg-green-50/50'
                : 'border-gray-300 hover:border-green-400 hover:bg-green-50/30'
            }`}>
              {formData.arquivoContrato ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText size={24} className="text-green-600" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{formData.arquivoContrato.name}</p>
                      <p className="text-sm text-gray-600">
                        {(formData.arquivoContrato.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => window.open(URL.createObjectURL(formData.arquivoContrato!), '_blank')}
                      className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg"
                      title="Visualizar"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, arquivoContrato: null }))}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
                      title="Remover"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-700 mb-2">
                    Faça upload do contrato assinado (PDF)
                  </p>
                  <label className="cursor-pointer">
                    <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:shadow-md transition-shadow inline-block">
                      Selecionar arquivo
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="text-sm text-gray-500 mt-2">
                    Tamanho máximo: 10MB • Apenas PDF
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Termos e Condições */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="termosAceitos"
                checked={formData.termosAceitos}
                onChange={(e) => setFormData(prev => ({ ...prev, termosAceitos: e.target.checked }))}
                className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-0.5"
              />
              <div>
                <label htmlFor="termosAceitos" className="font-medium text-yellow-800">
                  Declaro que li e concordo com os termos do contrato
                </label>
                <p className="text-sm text-yellow-700 mt-1">
                  • O professor terá acesso ao contrato digital através do portal do funcionário
                  • A assinatura digital será realizada após a confirmação do cadastro
                  • O contrato está sujeito às leis trabalhistas vigentes
                </p>
              </div>
            </div>
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
                console.log('Salvando contrato como rascunho:', formData);
                alert('Contrato salvo como rascunho!');
              }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Salvar Rascunho
            </button>
            <button
              type="submit"
              disabled={!formData.termosAceitos}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                formData.termosAceitos
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Próxima Etapa: Confirmação
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContratoProfessor;