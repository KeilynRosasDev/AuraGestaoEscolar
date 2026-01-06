// src/components/matricula/MatriculaResumo.tsx
import React from 'react';
import { 
  CheckCircle, 
  FileText, 
  User, 
  Home, 
  Users, 
  BookOpen,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Download,
  Printer,
  Share2,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MatriculaResumoProps {
  data: any;
  onConfirm: () => void;
}

const MatriculaResumo: React.FC<MatriculaResumoProps> = ({ data, onConfirm }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Simulação de envio para o backend
    console.log('Dados da matrícula enviados:', data);
    onConfirm();
    
    // Redireciona para dashboard após confirmação
    setTimeout(() => {
      alert('Matrícula realizada com sucesso!');
      navigate('/secretaria/dashboard');
    }, 1000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'aprovado': 
        return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">✓ Aprovado</span>;
      case 'pendente': 
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">⏳ Pendente</span>;
      case 'rejeitado': 
        return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">✗ Rejeitado</span>;
      default: 
        return <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Não enviado</span>;
    }
  };

  const calcularNumeroMatricula = () => {
    const ano = new Date().getFullYear();
    const sequencial = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${ano}${sequencial}`;
  };

  const numeroMatricula = calcularNumeroMatricula();

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Confirmação de Matrícula</h2>
          <p className="text-gray-600 mt-1">
            Revise todos os dados antes de confirmar
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
            <h3 className="text-xl font-bold">Matrícula Pronta para Confirmação!</h3>
            <p className="text-green-100">
              Todos os dados foram preenchidos corretamente. Revise e confirme para finalizar.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Resumo detalhado */}
        <div className="lg:col-span-2 space-y-8">
          {/* Seção: Dados do Aluno */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <User size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Dados do Aluno</h3>
              </div>
              <span className="text-sm font-medium text-blue-600">✓ Completo</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Nome Completo</label>
                <p className="font-medium text-gray-900">{data.dadosPessoais?.nomeCompleto || 'Não informado'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Data de Nascimento</label>
                <p className="font-medium text-gray-900">{data.dadosPessoais?.dataNascimento || 'Não informado'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">CPF</label>
                <p className="font-medium text-gray-900">{data.dadosPessoais?.cpf || 'Não informado'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">RG</label>
                <p className="font-medium text-gray-900">{data.dadosPessoais?.rg || 'Não informado'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <div className="flex items-center space-x-2">
                  <Mail size={14} className="text-gray-400" />
                  <p className="font-medium text-gray-900">{data.dadosPessoais?.email || 'Não informado'}</p>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Celular</label>
                <div className="flex items-center space-x-2">
                  <Phone size={14} className="text-gray-400" />
                  <p className="font-medium text-gray-900">{data.dadosPessoais?.celular || 'Não informado'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Seção: Endereço */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <Home size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Endereço</h3>
              </div>
              <span className="text-sm font-medium text-green-600">✓ Completo</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600">Logradouro</label>
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="text-gray-400" />
                  <p className="font-medium text-gray-900">
                    {data.endereco?.logradouro || 'Não informado'}, {data.endereco?.numero || ''}
                    {data.endereco?.complemento && ` - ${data.endereco.complemento}`}
                  </p>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Bairro</label>
                <p className="font-medium text-gray-900">{data.endereco?.bairro || 'Não informado'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Cidade/Estado</label>
                <p className="font-medium text-gray-900">
                  {data.endereco?.cidade || 'Não informado'}/{data.endereco?.estado || ''}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-600">CEP</label>
                <p className="font-medium text-gray-900">{data.endereco?.cep || 'Não informado'}</p>
              </div>
            </div>
          </div>

          {/* Seção: Responsáveis */}
          {data.responsaveis && data.responsaveis.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <Users size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Responsáveis</h3>
                </div>
                <span className="text-sm font-medium text-purple-600">
                  {data.responsaveis.length} cadastrado(s)
                </span>
              </div>
              
              <div className="space-y-4">
                {data.responsaveis.map((responsavel: any, index: number) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        Responsável {index + 1}
                        {responsavel.responsavelPrincipal && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            Principal
                          </span>
                        )}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">Nome</label>
                        <p className="font-medium text-gray-900">{responsavel.nome}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Parentesco</label>
                        <p className="font-medium text-gray-900">{responsavel.parentesco}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">CPF</label>
                        <p className="font-medium text-gray-900">{responsavel.cpf}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Telefone</label>
                        <p className="font-medium text-gray-900">{responsavel.telefone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seção: Documentação */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                  <FileText size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Documentação</h3>
              </div>
              <span className="text-sm font-medium text-orange-600">
                {data.documentacao?.documentos?.length || 0} documento(s)
              </span>
            </div>
            
            <div className="space-y-3">
              {data.documentacao?.documentos?.map((doc: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText size={16} className="text-gray-500" />
                    <span className="font-medium text-gray-900">{doc.nome}</span>
                  </div>
                  {getStatusBadge(doc.status)}
                </div>
              )) || (
                <p className="text-gray-600 text-center py-4">Nenhum documento enviado</p>
              )}
            </div>
          </div>

          {/* Seção: Turma */}
          {data.turma && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Turma Selecionada</h3>
                </div>
                <span className="text-sm font-medium text-indigo-600">✓ Selecionada</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600">Turma</label>
                  <p className="font-bold text-gray-900 text-lg">{data.turma.nome}</p>
                  <p className="text-gray-600">{data.turma.codigo}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Período</label>
                  <p className="font-medium text-gray-900">{data.turma.periodo}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Professor</label>
                  <p className="font-medium text-gray-900">{data.turma.professor}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Local/Horário</label>
                  <p className="font-medium text-gray-900">{data.turma.local} • {data.turma.horario}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600">Vagas</label>
                  <div className="flex items-center space-x-4">
                    <span className="font-bold text-green-600">{data.turma.vagasDisponiveis} disponíveis</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${(data.turma.vagasDisponiveis / data.turma.capacidade) * 100}%` }}
                      ></div>
                    </div>
                  </div>
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
                  <span className="text-gray-600">Número da Matrícula</span>
                  <span className="font-bold text-blue-600">{numeroMatricula}</span>
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
                  <div className="text-sm text-gray-600 mb-2">Progresso da Matrícula</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">Dados Pessoais</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">Endereço</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">Responsáveis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">Documentação</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">Turma</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ações de exportação */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900 mb-3">Exportar Matrícula</p>
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Pronto para Confirmar?</h3>
              <p className="text-blue-100 text-sm mb-6">
                Após a confirmação, a matrícula será processada e o aluno será registrado no sistema.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle size={18} className="text-yellow-300 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Verificação Importante</p>
                    <p className="text-blue-200 text-xs">
                      Confirme que todos os dados estão corretos antes de prosseguir.
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleConfirm}
                  className="w-full py-3 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  CONFIRMAR MATRÍCULA
                </button>
                
                <button
                  onClick={() => navigate('/secretaria/matricula')}
                  className="w-full py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Editar Dados
                </button>
              </div>
            </div>

            {/* Informações de contato */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Precisa de ajuda?</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Entre em contato com a secretaria:</p>
                <p className="font-medium text-gray-900">secretaria@escola.com</p>
                <p className="font-medium text-gray-900">(11) 99999-9999</p>
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
              console.log('Salvando matrícula completa como rascunho:', data);
              alert('Matrícula salva como rascunho!');
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

export default MatriculaResumo;