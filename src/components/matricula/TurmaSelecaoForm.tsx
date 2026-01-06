// src/components/matricula/TurmaSelecaoForm.tsx
import React, { useState, useEffect } from 'react';
import { Users, Calendar, Clock, BookOpen, MapPin, Check, X, AlertCircle } from 'lucide-react';

interface Turma {
  id: number;
  codigo: string;
  nome: string;
  periodo: 'MATUTINO' | 'VESPERTINO' | 'INTEGRAL' | 'NOTURNO';
  capacidade: number;
  vagasDisponiveis: number;
  professor: string;
  disciplinaPrincipal: string;
  local: string;
  horario: string;
  gradeCurricular: string[];
}

interface TurmaSelecaoFormProps {
  onSubmit: (dados: any) => void;
  initialData?: any;
}

const TurmaSelecaoForm: React.FC<TurmaSelecaoFormProps> = ({ 
  onSubmit, 
  initialData = null 
}) => {
  const [turmaSelecionada, setTurmaSelecionada] = useState<Turma | null>(initialData);
  const [busca, setBusca] = useState('');
  const [periodoFiltro, setPeriodoFiltro] = useState<string>('TODOS');

  // Dados mockados de turmas
  const [turmas, setTurmas] = useState<Turma[]>([
    { id: 1, codigo: '2024-1A', nome: '1º Ano A', periodo: 'MATUTINO', capacidade: 30, vagasDisponiveis: 5, professor: 'Prof. Ana Silva', disciplinaPrincipal: 'Português', local: 'Sala 101', horario: '07:30 - 11:30', gradeCurricular: ['Português', 'Matemática', 'Ciências'] },
    { id: 2, codigo: '2024-1B', nome: '1º Ano B', periodo: 'VESPERTINO', capacidade: 30, vagasDisponiveis: 12, professor: 'Prof. Carlos Santos', disciplinaPrincipal: 'Matemática', local: 'Sala 102', horario: '13:00 - 17:00', gradeCurricular: ['Matemática', 'História', 'Geografia'] },
    { id: 3, codigo: '2024-2A', nome: '2º Ano A', periodo: 'INTEGRAL', capacidade: 25, vagasDisponiveis: 3, professor: 'Prof. Mariana Oliveira', disciplinaPrincipal: 'Ciências', local: 'Sala 201', horario: '07:30 - 17:00', gradeCurricular: ['Ciências', 'Inglês', 'Educação Física'] },
    { id: 4, codigo: '2024-2B', nome: '2º Ano B', periodo: 'MATUTINO', capacidade: 28, vagasDisponiveis: 8, professor: 'Prof. Roberto Alves', disciplinaPrincipal: 'História', local: 'Sala 202', horario: '07:30 - 11:30', gradeCurricular: ['História', 'Geografia', 'Artes'] },
    { id: 5, codigo: '2024-3A', nome: '3º Ano A', periodo: 'NOTURNO', capacidade: 20, vagasDisponiveis: 15, professor: 'Prof. Juliana Costa', disciplinaPrincipal: 'Inglês', local: 'Sala 301', horario: '19:00 - 22:30', gradeCurricular: ['Inglês', 'Filosofia', 'Sociologia'] },
    { id: 6, codigo: '2024-3B', nome: '3º Ano B', periodo: 'VESPERTINO', capacidade: 25, vagasDisponiveis: 2, professor: 'Prof. Fernando Lima', disciplinaPrincipal: 'Geografia', local: 'Sala 302', horario: '13:00 - 17:00', gradeCurricular: ['Geografia', 'Biologia', 'Química'] },
  ]);

  const periodos = [
    { id: 'TODOS', label: 'Todos os períodos' },
    { id: 'MATUTINO', label: 'Matutino' },
    { id: 'VESPERTINO', label: 'Vespertino' },
    { id: 'INTEGRAL', label: 'Integral' },
    { id: 'NOTURNO', label: 'Noturno' },
  ];

  const getPeriodoLabel = (periodo: string) => {
    switch (periodo) {
      case 'MATUTINO': return 'Manhã';
      case 'VESPERTINO': return 'Tarde';
      case 'INTEGRAL': return 'Integral';
      case 'NOTURNO': return 'Noite';
      default: return periodo;
    }
  };

  const getPeriodoColor = (periodo: string) => {
    switch (periodo) {
      case 'MATUTINO': return 'bg-blue-100 text-blue-700';
      case 'VESPERTINO': return 'bg-orange-100 text-orange-700';
      case 'INTEGRAL': return 'bg-purple-100 text-purple-700';
      case 'NOTURNO': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const turmasFiltradas = turmas.filter(turma => {
    const buscaMatch = 
      turma.codigo.toLowerCase().includes(busca.toLowerCase()) ||
      turma.nome.toLowerCase().includes(busca.toLowerCase()) ||
      turma.professor.toLowerCase().includes(busca.toLowerCase());
    
    const periodoMatch = periodoFiltro === 'TODOS' || turma.periodo === periodoFiltro;
    
    return buscaMatch && periodoMatch && turma.vagasDisponiveis > 0;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (turmaSelecionada) {
      onSubmit(turmaSelecionada);
    } else {
      alert('Por favor, selecione uma turma antes de continuar.');
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Seleção de Turma</h2>
          <p className="text-gray-600 mt-1">
            Escolha a turma que o aluno irá frequentar
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Etapa 5 de 6
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de turmas */}
          <div className="lg:col-span-2">
            {/* Filtros */}
            <div className="mb-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar turma por código, nome ou professor..."
                      value={busca}
                      onChange={(e) => setBusca(e.target.value)}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users size={18} className="text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {periodos.map((periodo) => (
                    <button
                      key={periodo.id}
                      type="button"
                      onClick={() => setPeriodoFiltro(periodo.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        periodoFiltro === periodo.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {periodo.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {turmasFiltradas.length} turmas disponíveis
                </span>
                <span className="text-blue-600 font-medium">
                  {turmas.reduce((total, turma) => total + turma.vagasDisponiveis, 0)} vagas totais
                </span>
              </div>
            </div>

            {/* Grid de turmas */}
            <div className="space-y-4">
              {turmasFiltradas.map((turma) => (
                <div
                  key={turma.id}
                  className={`border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    turmaSelecionada?.id === turma.id
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                  onClick={() => setTurmaSelecionada(turma)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${getPeriodoColor(turma.periodo)}`}>
                        <Users size={20} />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-bold text-gray-900">{turma.nome}</h3>
                          <span className="text-sm font-medium text-gray-500">{turma.codigo}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPeriodoColor(turma.periodo)}`}>
                            {getPeriodoLabel(turma.periodo)}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1">{turma.disciplinaPrincipal} • {turma.professor}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {turma.vagasDisponiveis} vagas
                      </div>
                      <div className="text-sm text-gray-500">
                        de {turma.capacidade}
                      </div>
                    </div>
                  </div>

                  {/* Detalhes da turma */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock size={16} />
                      <span className="text-sm">{turma.horario}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin size={16} />
                      <span className="text-sm">{turma.local}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <BookOpen size={16} />
                      <span className="text-sm">{turma.gradeCurricular.length} disciplinas</span>
                    </div>
                  </div>

                  {/* Grade curricular */}
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Grade curricular:</p>
                    <div className="flex flex-wrap gap-2">
                      {turma.gradeCurricular.map((disciplina, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {disciplina}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status da vaga */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {turma.vagasDisponiveis < 5 ? (
                      <div className="flex items-center text-yellow-600 text-sm">
                        <AlertCircle size={16} className="mr-2" />
                        <span>Vagas limitadas! Apenas {turma.vagasDisponiveis} disponíveis</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-green-600 text-sm">
                        <Check size={16} className="mr-2" />
                        <span>Vagas disponíveis</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {turmasFiltradas.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-xl">
                  <Users size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Nenhuma turma encontrada
                  </h3>
                  <p className="text-gray-600">
                    Tente ajustar os filtros ou entre em contato com a secretaria.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Painel de resumo */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Resumo da Seleção</h3>
                
                {turmaSelecionada ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900">Turma Selecionada</h4>
                      <div className="mt-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-gray-900">{turmaSelecionada.nome}</span>
                          <span className="text-sm font-medium text-gray-500">{turmaSelecionada.codigo}</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users size={14} className="text-gray-500" />
                            <span>{turmaSelecionada.professor}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock size={14} className="text-gray-500" />
                            <span>{turmaSelecionada.horario}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={14} className="text-gray-500" />
                            <span>{turmaSelecionada.local}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">Vagas</h4>
                      <div className="mt-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">Disponíveis</span>
                          <span className="text-lg font-bold text-green-600">{turmaSelecionada.vagasDisponiveis}</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: `${(turmaSelecionada.vagasDisponiveis / turmaSelecionada.capacidade) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">Recomendações</h4>
                      <ul className="mt-2 space-y-2 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                          <Check size={14} className="text-green-500 mt-0.5" />
                          <span>Verificar compatibilidade de horários</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check size={14} className="text-green-500 mt-0.5" />
                          <span>Confirmar localização da sala</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check size={14} className="text-green-500 mt-0.5" />
                          <span>Revisar grade curricular</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Users size={24} className="text-gray-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Nenhuma turma selecionada
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Selecione uma turma da lista ao lado para continuar.
                    </p>
                  </div>
                )}

                {/* Informações importantes */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-900 mb-1">Informações importantes:</p>
                    <ul className="space-y-1">
                      <li>• A seleção pode ser alterada posteriormente</li>
                      <li>• Vagas são garantidas após confirmação</li>
                      <li>• Turmas com menos de 5 vagas são sujeitas a remanejamento</li>
                    </ul>
                  </div>
                </div>
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
                console.log('Salvando seleção de turma como rascunho:', turmaSelecionada);
                alert('Seleção de turma salva como rascunho!');
              }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Salvar Rascunho
            </button>
            <button
              type="submit"
              disabled={!turmaSelecionada}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                turmaSelecionada
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg'
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

export default TurmaSelecaoForm;