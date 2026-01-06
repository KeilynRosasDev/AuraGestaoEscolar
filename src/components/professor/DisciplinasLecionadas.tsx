// src/components/professor/DisciplinasLecionadas.tsx
import React, { useState } from 'react';
import { BookOpen, Plus, Trash2, Check, X, Search } from 'lucide-react';

interface Disciplina {
  id: number;
  nome: string;
  codigo: string;
  nivelEnsino: string;
  cargaHoraria: string;
  habilitado: boolean;
}

interface DisciplinasLecionadasProps {
  onSubmit: (dados: Disciplina[]) => void;
  initialData?: Disciplina[];
}

const DisciplinasLecionadas: React.FC<DisciplinasLecionadasProps> = ({ 
  onSubmit, 
  initialData = [] 
}) => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>(
    initialData.length > 0 ? initialData : []
  );
  
  const [busca, setBusca] = useState('');
  
  // Disciplinas disponíveis no sistema
  const disciplinasDisponiveis = [
    { id: 1, nome: 'Matemática', codigo: 'MAT001', nivelEnsino: 'Ensino Médio', cargaHoraria: '160h' },
    { id: 2, nome: 'Português', codigo: 'POR001', nivelEnsino: 'Ensino Médio', cargaHoraria: '160h' },
    { id: 3, nome: 'História', codigo: 'HIS001', nivelEnsino: 'Ensino Médio', cargaHoraria: '120h' },
    { id: 4, nome: 'Geografia', codigo: 'GEO001', nivelEnsino: 'Ensino Médio', cargaHoraria: '120h' },
    { id: 5, nome: 'Física', codigo: 'FIS001', nivelEnsino: 'Ensino Médio', cargaHoraria: '120h' },
    { id: 6, nome: 'Química', codigo: 'QUI001', nivelEnsino: 'Ensino Médio', cargaHoraria: '120h' },
    { id: 7, nome: 'Biologia', codigo: 'BIO001', nivelEnsino: 'Ensino Médio', cargaHoraria: '120h' },
    { id: 8, nome: 'Inglês', codigo: 'ING001', nivelEnsino: 'Ensino Médio', cargaHoraria: '80h' },
    { id: 9, nome: 'Educação Física', codigo: 'EDF001', nivelEnsino: 'Ensino Médio', cargaHoraria: '80h' },
    { id: 10, nome: 'Artes', codigo: 'ART001', nivelEnsino: 'Ensino Médio', cargaHoraria: '80h' },
    { id: 11, nome: 'Filosofia', codigo: 'FIL001', nivelEnsino: 'Ensino Médio', cargaHoraria: '80h' },
    { id: 12, nome: 'Sociologia', codigo: 'SOC001', nivelEnsino: 'Ensino Médio', cargaHoraria: '80h' },
  ];

  const niveisEnsino = ['Ensino Fundamental I', 'Ensino Fundamental II', 'Ensino Médio', 'Técnico'];

  const handleAddDisciplina = (disciplina: any) => {
    // Verifica se a disciplina já foi adicionada
    if (!disciplinas.some(d => d.codigo === disciplina.codigo)) {
      setDisciplinas([
        ...disciplinas,
        {
          id: Date.now(),
          nome: disciplina.nome,
          codigo: disciplina.codigo,
          nivelEnsino: disciplina.nivelEnsino,
          cargaHoraria: disciplina.cargaHoraria,
          habilitado: true
        }
      ]);
    }
  };

  const handleRemoveDisciplina = (id: number) => {
    setDisciplinas(disciplinas.filter(d => d.id !== id));
  };

  const handleToggleHabilitado = (id: number) => {
    setDisciplinas(disciplinas.map(disciplina => 
      disciplina.id === id ? { ...disciplina, habilitado: !disciplina.habilitado } : disciplina
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(disciplinas);
  };

  const disciplinasFiltradas = disciplinasDisponiveis.filter(disciplina => 
    !disciplinas.some(d => d.codigo === disciplina.codigo) &&
    (disciplina.nome.toLowerCase().includes(busca.toLowerCase()) ||
     disciplina.codigo.toLowerCase().includes(busca.toLowerCase()))
  );

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Disciplinas Lecionadas</h2>
          <p className="text-gray-600 mt-1">
            Selecione as disciplinas que o professor pode ministrar
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Etapa 4 de 6
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {/* Disciplinas selecionadas */}
          {disciplinas.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Disciplinas Selecionadas ({disciplinas.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {disciplinas.map((disciplina) => (
                  <div
                    key={disciplina.id}
                    className={`border rounded-xl p-4 transition-all ${
                      disciplina.habilitado 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          disciplina.habilitado 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <BookOpen size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{disciplina.nome}</h4>
                          <p className="text-sm text-gray-600">{disciplina.codigo}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => handleToggleHabilitado(disciplina.id)}
                          className={`p-1.5 rounded ${
                            disciplina.habilitado 
                              ? 'text-green-600 hover:bg-green-100' 
                              : 'text-gray-400 hover:bg-gray-100'
                          }`}
                          title={disciplina.habilitado ? 'Desabilitar' : 'Habilitar'}
                        >
                          {disciplina.habilitado ? <Check size={16} /> : <X size={16} />}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemoveDisciplina(disciplina.id)}
                          className="p-1.5 text-red-500 hover:bg-red-100 rounded"
                          title="Remover"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{disciplina.nivelEnsino}</span>
                      <span className="font-medium text-gray-900">{disciplina.cargaHoraria}</span>
                    </div>
                    {!disciplina.habilitado && (
                      <div className="mt-2 text-xs text-yellow-600">
                        ⚠️ Disciplina desabilitada temporariamente
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Busca de disciplinas */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-semibold text-gray-900 mb-4">Adicionar Disciplinas</h3>
            
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar disciplina por nome ou código..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Lista de disciplinas disponíveis */}
            <div className="max-h-60 overflow-y-auto">
              {disciplinasFiltradas.length > 0 ? (
                <div className="space-y-2">
                  {disciplinasFiltradas.map((disciplina) => (
                    <button
                      key={disciplina.id}
                      type="button"
                      onClick={() => handleAddDisciplina(disciplina)}
                      className="w-full p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50/50 transition-colors text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                            <BookOpen size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{disciplina.nome}</h4>
                            <p className="text-sm text-gray-600">{disciplina.codigo}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{disciplina.cargaHoraria}</div>
                          <div className="text-xs text-gray-500">{disciplina.nivelEnsino}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <BookOpen size={32} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-600">
                    {busca ? 'Nenhuma disciplina encontrada' : 'Todas as disciplinas já foram adicionadas'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Adicionar disciplina manualmente */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Adicionar Disciplina Manualmente</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Disciplina
                </label>
                <input
                  type="text"
                  placeholder="Digite o nome da disciplina"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nível de Ensino
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Selecione o nível</option>
                  {niveisEnsino.map(nivel => (
                    <option key={nivel} value={nivel}>{nivel}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="button"
              className="mt-4 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center space-x-2"
            >
              <Plus size={16} />
              <span>Adicionar Disciplina</span>
            </button>
          </div>

          {/* Resumo */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Resumo</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {disciplinas.filter(d => d.habilitado).length} disciplinas habilitadas
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {disciplinas.filter(d => d.habilitado).length}
                </div>
                <div className="text-sm text-gray-600">de {disciplinas.length} totais</div>
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
                console.log('Salvando disciplinas como rascunho:', disciplinas);
                alert('Disciplinas salvas como rascunho!');
              }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Salvar Rascunho
            </button>
            <button
              type="submit"
              disabled={disciplinas.length === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                disciplinas.length > 0
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Próxima Etapa: Contrato
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DisciplinasLecionadas;