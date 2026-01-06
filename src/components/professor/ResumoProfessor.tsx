// src/components/professor/ResumoProfessor.tsx
import React from 'react';
import { 
  CheckCircle, 
  User, 
  Briefcase, 
  GraduationCap, 
  BookOpen,
  FileText,
  Calendar,
  Mail,
  Phone,
  DollarSign,
  Clock,
  Download,
  Printer,
  Share2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ResumoProfessorProps {
  data: any;
  onConfirm: () => void;
}

const ResumoProfessor: React.FC<ResumoProfessorProps> = ({ data, onConfirm }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    console.log('Professor cadastrado com sucesso!', data);
    onConfirm();
    
    setTimeout(() => {
      alert('Professor cadastrado com sucesso!');
      navigate('/secretaria/dashboard');
    }, 1000);
  };

  const calcularCodigoProfessor = () => {
    const ano = new Date().getFullYear();
    const sequencial = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `PROF${ano}${sequencial}`;
  };

  const codigoProfessor = calcularCodigoProfessor();

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Confirmação de Cadastro</h2>
          <p className="text-gray-600 mt-1">
            Revise todos os dados antes de confirmar o cadastro
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Etapa 6 de 6
        </div>
      </div>

      {/* Banner de sucesso */}
      <div className="mb-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6">
        <div className="flex items-center space-x-4">
          <CheckCircle size={48} className="text-white" />
          <div>
            <h3 className="text-xl font-bold">Cadastro Pronto para Confirmação!</h3>
            <p className="text-green-100">
              Todos os dados foram preenchidos corretamente. Revise e confirme para finalizar.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Resumo detalhado */}
        <div className="lg:col-span-2 space-y-8">
          {/* Seção: Dados Pessoais */}
          {data.dadosPessoais && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <User size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Dados Pessoais</h3>
                </div>
                <span className="text-sm font-medium text-blue-600">✓ Completo</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600">Nome Completo</label>
                  <p className="font-medium text-gray-900">{data.dadosPessoais.nomeCompleto}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">CPF</label>
                  <p className="font-medium text-gray-900">{data.dadosPessoais.cpf}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Data de Nascimento</label>
                  <p className="font-medium text-gray-900">{data.dadosPessoais.dataNascimento}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <div className="flex items-center space-x-2">
                    <Mail size={14} className="text-gray-400" />
                    <p className="font-medium text-gray-900">{data.dadosPessoais.email}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Seção: Dados Profissionais */}
          {data.dadosProfissionais && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Dados Profissionais</h3>
                </div>
                <span className="text-sm font-medium text-green-600">✓ Completo</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600">Matrícula</label>
                  <p className="font-bold text-gray-900 text-lg">{data.dadosProfissionais.matricula}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Cargo</label>
                  <p className="font-medium text-gray-900">{data.dadosProfissionais.cargo}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Regime de Trabalho</label>
                  <p className="font-medium text-gray-900">{data.dadosProfissionais.regimeTrabalho}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Data de Admissão</label>
                  <p className="font-medium text-gray-900">{data.dadosProfissionais.dataAdmissao}</p>
                </div>
              </div>
            </div>
          )}

          {/* Seção: Formação Acadêmica */}
          {data.formacao && data.formacao.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Formação Acadêmica</h3>
                </div>
                <span className="text-sm font-medium text-purple-600">
                  {data.formacao.length} formação(ões)
                </span>
              </div>
              
              <div className="space-y-4">
                {data.formacao.map((formacao: any, index: number) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {formacao.nivel} - {formacao.curso}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">Instituição</label>
                        <p className="font-medium text-gray-900">{formacao.instituicao}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Ano de Conclusão</label>
                        <p className="font-medium text-gray-900">{formacao.anoConclusao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seção: Disciplinas */}
          {data.disciplinas && data.disciplinas.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Disciplinas Lecionadas</h3>
                </div>
                <span className="text-sm font-medium text-orange-600">
                  {data.disciplinas.filter((d: any) => d.habilitado).length} habilitada(s)
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.disciplinas.map((disciplina: any, index: number) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    disciplina.habilitado ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{disciplina.nome}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        disciplina.habilitado 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {disciplina.habilitado ? 'Habilitada' : 'Desabilitada'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm">
                      <span className="text-gray-600">{disciplina.codigo}</span>
                      <span className="font-medium text-gray-900">{disciplina.cargaHoraria}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seção: Contrato */}
          {data.contrato && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                    <FileText size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Contrato</h3>
                </div>
                <span className="text-sm font-medium text-indigo-600">✓ Configurado</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600">Número do Contrato</label>
                  <p className="font-bold text-gray-900">{data.contrato.numeroContrato}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Tipo de Contrato</label>
                  <p className="font-medium text-gray-900">{data.contrato.tipoContrato}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Salário Base</label>
                  <div className="flex items-center space-x-2">
                    <DollarSign size={14} className="text-gray-400" />
                    <p className="font-medium text-gray-900">{data.contrato.salarioBase}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Carga Horária</label>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} className="text-gray-400" />
                    <p className="font-medium text-gray-900">{data.contrato.cargaHoraria} horas/semana</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Data de Início</label>
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} className="text-gray-400" />
                    <p className="font-medium text-gray-900">{data.contrato.dataInicio}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Benefícios</label>
                  <p className="font-medium text-gray-900">
                    {data.contrato.beneficios?.join(', ') || 'Nenhum benefício'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Painel lateral de ações */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-6">
            {/* Card de resumo */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Resumo Final</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Código do Professor</span>
                  <span className="font-bold text-green-600">{codigoProfessor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Data de Criação</span>
                  <span className="font-medium text-gray-900">{new Date().toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    Aguardando Confirmação
                  </span>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Progresso do Cadastro</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">Dados Pessoais</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">Dados Profissionais</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">Formação Acadêmica</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">Disciplinas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">Contrato</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ações de exportação */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900 mb-3">Exportar Cadastro</p>
                <div className="grid grid-cols-3 gap-2">
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
                    <Printer size={18} className="text-gray-600 mb-1" />
                    <span className="text-xs text-gray-700">Imprimir</span>
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
                    <Download size={18} className="text-gray-600 mb-1" />
                    <span className="text-xs text-gray-700">PDF</span>
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
                    <Share2 size={18} className="text-gray-600 mb-1" />
                    <span className="text-xs text-gray-700">Compartilhar</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card de confirmação */}
            <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Pronto para Confirmar?</h3>
              <p className="text-green-100 text-sm mb-6">
                Após a confirmação, o professor será registrado no sistema e receberá acesso ao portal.
              </p>
              
              <button
                onClick={handleConfirm}
                className="w-full py-3 bg-white text-green-700 rounded-lg font-bold hover:bg-green-50 transition-colors shadow-lg mb-3"
              >
                CONFIRMAR CADASTRO
              </button>
              
              <button
                onClick={() => navigate('/secretaria/cadastro-professor')}
                className="w-full py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Editar Dados
              </button>
            </div>

            {/* Informações de contato */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Próximos Passos</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <CheckCircle size={14} className="text-green-500 mt-0.5" />
                  <span>O professor receberá email de boas-vindas</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle size={14} className="text-green-500 mt-0.5" />
                  <span>Credenciais serão enviadas por SMS</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle size={14} className="text-green-500 mt-0.5" />
                  <span>Contrato será assinado digitalmente</span>
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
          Voltar para Edição
        </button>
        <div className="space-x-4">
          <button
            type="button"
            onClick={() => {
              console.log('Salvando cadastro completo como rascunho:', data);
              alert('Cadastro salvo como rascunho!');
            }}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Salvar como Rascunho
          </button>
          <button
            onClick={handleConfirm}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-bold hover:shadow-lg transition-all shadow-lg"
          >
            CONFIRMAR E FINALIZAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumoProfessor;