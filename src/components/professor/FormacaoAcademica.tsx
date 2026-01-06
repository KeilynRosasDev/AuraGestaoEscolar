// src/components/professor/FormacaoAcademica.tsx
import React, { useState } from 'react';
import { GraduationCap, Plus, Trash2, Edit, Check, X } from 'lucide-react';

interface Formacao {
  id: number;
  nivel: string;
  curso: string;
  instituicao: string;
  anoConclusao: string;
  concluido: boolean;
}

interface FormacaoAcademicaProps {
  onSubmit: (dados: Formacao[]) => void;
  initialData?: Formacao[];
}

const FormacaoAcademica: React.FC<FormacaoAcademicaProps> = ({ 
  onSubmit, 
  initialData = [] 
}) => {
  const [formacoes, setFormacoes] = useState<Formacao[]>(
    initialData.length > 0 ? initialData : [
      {
        id: 1,
        nivel: 'Graduação',
        curso: '',
        instituicao: '',
        anoConclusao: '',
        concluido: true
      }
    ]
  );

  const niveisFormacao = [
    'Ensino Médio',
    'Técnico',
    'Graduação',
    'Pós-Graduação (Lato Sensu)',
    'Pós-Graduação (Stricto Sensu)',
    'Mestrado',
    'Doutorado',
    'Pós-Doutorado'
  ];

  const handleAddFormacao = () => {
    const novoId = formacoes.length > 0 ? Math.max(...formacoes.map(f => f.id)) + 1 : 1;
    setFormacoes([
      ...formacoes,
      {
        id: novoId,
        nivel: 'Graduação',
        curso: '',
        instituicao: '',
        anoConclusao: '',
        concluido: true
      }
    ]);
  };

  const handleRemoveFormacao = (id: number) => {
    if (formacoes.length > 1) {
      setFormacoes(formacoes.filter(f => f.id !== id));
    }
  };

  const handleChange = (id: number, field: string, value: string | boolean) => {
    setFormacoes(formacoes.map(formacao => 
      formacao.id === id ? { ...formacao, [field]: value } : formacao
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formacoes);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Formação Acadêmica</h2>
          <p className="text-gray-600 mt-1">
            Registre a formação acadêmica do professor
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Etapa 3 de 6
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {formacoes.map((formacao, index) => (
            <div key={formacao.id} className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    formacao.concluido ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Formação {index + 1}
                    {formacao.concluido && (
                      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        Concluída
                      </span>
                    )}
                  </h3>
                </div>
                
                {formacoes.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveFormacao(formacao.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nível de Formação */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nível de Formação <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formacao.nivel}
                      onChange={(e) => handleChange(formacao.id, 'nivel', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione o nível</option>
                      {niveisFormacao.map(nivel => (
                        <option key={nivel} value={nivel}>{nivel}</option>
                      ))}
                    </select>
                  </div>

                  {/* Curso */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Curso <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formacao.curso}
                      onChange={(e) => handleChange(formacao.id, 'curso', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Ex: Licenciatura em Matemática"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Instituição */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Instituição de Ensino <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formacao.instituicao}
                      onChange={(e) => handleChange(formacao.id, 'instituicao', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Ex: Universidade Federal"
                    />
                  </div>

                  {/* Ano de Conclusão */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ano de Conclusão
                    </label>
                    <input
                      type="text"
                      value={formacao.anoConclusao}
                      onChange={(e) => handleChange(formacao.id, 'anoConclusao', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Ex: 2020"
                    />
                  </div>
                </div>

                {/* Status da Formação */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`concluido-${formacao.id}`}
                    checked={formacao.concluido}
                    onChange={(e) => handleChange(formacao.id, 'concluido', e.target.checked)}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`concluido-${formacao.id}`} className="ml-2 text-sm text-gray-700">
                    Formação concluída
                  </label>
                </div>
              </div>
            </div>
          ))}

          {/* Botão para adicionar mais formações */}
          <button
            type="button"
            onClick={handleAddFormacao}
            className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:text-green-600 hover:border-green-400 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus size={20} />
            <span>Adicionar outra formação acadêmica</span>
          </button>

          {/* Informações adicionais */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Informações Importantes</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Certifique-se de incluir todas as formações relevantes para a atuação docente</li>
              <li>• Para formações em andamento, desmarque a opção "concluída"</li>
              <li>• Cursos de especialização também podem ser incluídos nesta seção</li>
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
                console.log('Salvando formação acadêmica como rascunho:', formacoes);
                alert('Formação acadêmica salva como rascunho!');
              }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Salvar Rascunho
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:shadow-lg transition-all font-medium"
            >
              Próxima Etapa: Disciplinas
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormacaoAcademica;