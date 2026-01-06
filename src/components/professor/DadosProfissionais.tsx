// src/components/professor/DadosProfissionais.tsx
import React, { useState } from 'react';
import { Briefcase, Calendar, Award, UserCheck, Building } from 'lucide-react';

interface DadosProfissionaisProps {
  onSubmit: (dados: any) => void;
  initialData?: any;
}

const DadosProfissionais: React.FC<DadosProfissionaisProps> = ({ 
  onSubmit, 
  initialData = {} 
}) => {
  const [formData, setFormData] = useState({
    matricula: initialData.matricula || '',
    dataAdmissao: initialData.dataAdmissao || '',
    regimeTrabalho: initialData.regimeTrabalho || '',
    cargaHoraria: initialData.cargaHoraria || '',
    tipoContrato: initialData.tipoContrato || '',
    situacaoFuncional: initialData.situacaoFuncional || '',
    cargo: initialData.cargo || '',
    funcao: initialData.funcao || '',
    nivelEscolaridade: initialData.nivelEscolaridade || '',
    areaFormacao: initialData.areaFormacao || '',
    especialidade: initialData.especialidade || '',
    banco: initialData.banco || '',
    agencia: initialData.agencia || '',
    conta: initialData.conta || '',
    tipoConta: initialData.tipoConta || '',
  });

  const regimesTrabalho = ['20h', '40h', 'Dedicação Exclusiva', 'Horista'];
  const tiposContrato = ['CLT', 'Estatutário', 'Temporário', 'Contrato Prazo Determinado'];
  const situacoesFuncionais = ['Ativo', 'Afastado', 'Licença', 'Aposentado', 'Exonerado'];
  const niveisEscolaridade = [
    'Ensino Médio Completo',
    'Graduação Incompleta',
    'Graduação Completa',
    'Pós-Graduação',
    'Mestrado',
    'Doutorado'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const gerarMatricula = () => {
    const ano = new Date().getFullYear();
    const sequencial = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const matricula = `PROF${ano}${sequencial}`;
    setFormData(prev => ({ ...prev, matricula }));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dados Profissionais</h2>
          <p className="text-gray-600 mt-1">
            Informações profissionais e contratuais
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Etapa 2 de 6
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {/* Cabeçalho com matrícula */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Número de Matrícula</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Identificação única do professor no sistema
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-700">
                  {formData.matricula || 'Não gerado'}
                </div>
                <button
                  type="button"
                  onClick={gerarMatricula}
                  className="text-sm text-green-600 hover:text-green-800 font-medium mt-1"
                >
                  Gerar matrícula
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data de Admissão */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data de Admissão <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar size={18} className="text-gray-400" />
                </div>
                <input
                  type="date"
                  name="dataAdmissao"
                  value={formData.dataAdmissao}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Regime de Trabalho */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Regime de Trabalho <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase size={18} className="text-gray-400" />
                </div>
                <select
                  name="regimeTrabalho"
                  value={formData.regimeTrabalho}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione o regime</option>
                  {regimesTrabalho.map(regime => (
                    <option key={regime} value={regime}>{regime}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <option value="">Selecione o tipo</option>
                {tiposContrato.map(tipo => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>

            {/* Situação Funcional */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Situação Funcional <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCheck size={18} className="text-gray-400" />
                </div>
                <select
                  name="situacaoFuncional"
                  value={formData.situacaoFuncional}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione a situação</option>
                  {situacoesFuncionais.map(situacao => (
                    <option key={situacao} value={situacao}>{situacao}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Carga Horária */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Carga Horária Semanal
              </label>
              <input
                type="text"
                name="cargaHoraria"
                value={formData.cargaHoraria}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                placeholder="Ex: 40 horas"
              />
            </div>

            {/* Cargo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cargo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                placeholder="Ex: Professor de Matemática"
              />
            </div>
          </div>

          {/* Função */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Função/Atribuições
            </label>
            <textarea
              name="funcao"
              value={formData.funcao}
              onChange={(e) => setFormData(prev => ({ ...prev, funcao: e.target.value }))}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              placeholder="Descreva as funções e atribuições do professor..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nível de Escolaridade */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nível de Escolaridade <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Award size={18} className="text-gray-400" />
                </div>
                <select
                  name="nivelEscolaridade"
                  value={formData.nivelEscolaridade}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione o nível</option>
                  {niveisEscolaridade.map(nivel => (
                    <option key={nivel} value={nivel}>{nivel}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Área de Formação */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Área de Formação
              </label>
              <input
                type="text"
                name="areaFormacao"
                value={formData.areaFormacao}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                placeholder="Ex: Matemática, Letras, História"
              />
            </div>
          </div>

          {/* Especialidade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Especialidade(s)
            </label>
            <input
              type="text"
              name="especialidade"
              value={formData.especialidade}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              placeholder="Ex: Álgebra, Literatura Brasileira, História Antiga"
            />
          </div>

          {/* Dados Bancários */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Building size={20} className="mr-2 text-gray-500" />
              Dados Bancários
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Banco
                </label>
                <input
                  type="text"
                  name="banco"
                  value={formData.banco}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Nome do banco"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agência
                </label>
                <input
                  type="text"
                  name="agencia"
                  value={formData.agencia}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Número da agência"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conta
                </label>
                <input
                  type="text"
                  name="conta"
                  value={formData.conta}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Número da conta"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Conta
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tipoConta"
                    value="Corrente"
                    checked={formData.tipoConta === 'Corrente'}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">Conta Corrente</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tipoConta"
                    value="Poupança"
                    checked={formData.tipoConta === 'Poupança'}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">Poupança</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tipoConta"
                    value="Salário"
                    checked={formData.tipoConta === 'Salário'}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">Salário</span>
                </label>
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
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:shadow-lg transition-all font-medium"
          >
            Próxima Etapa: Formação Acadêmica
          </button>
        </div>
      </form>
    </div>
  );
};

export default DadosProfissionais;