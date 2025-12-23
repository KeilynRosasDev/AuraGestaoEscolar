// src/sections/SecretariaServices.tsx
import React from 'react';
import { 
  UserPlus, 
  Users, 
  UserCheck, 
  BookOpen, 
  FileText, 
  ClipboardCheck,
  Calendar,
  Download,
  Upload,
  Shield,
  BookmarkCheck,
  FileArchive,
  Mail
} from 'lucide-react';

const SecretariaServices: React.FC = () => {
  const services = [
    {
      icon: <UserPlus className="text-blue-600" size={24} />,
      title: 'Matrícula Digital',
      description: 'Processo completo de matrícula online para novos alunos',
      features: [
        'Cadastro digital de alunos',
        'Upload de documentos',
        'Pagamento online integrado',
        'Confirmação automática'
      ],
      color: 'blue'
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: 'Cadastro de Turmas',
      description: 'Gestão completa de turmas e alocação de alunos',
      features: [
        'Criação e organização de turmas',
        'Distribuição automática',
        'Controle de vagas e lotação',
        'Histórico de turmas'
      ],
      color: 'green'
    },
    {
      icon: <UserCheck className="text-purple-600" size={24} />,
      title: 'Cadastro de Professores',
      description: 'Gestão do corpo docente com todos os dados profissionais',
      features: [
        'Registro de dados profissionais',
        'Contratos digitais',
        'Alocação por disciplina',
        'Controle de carga horária'
      ],
      color: 'purple'
    },
    {
      icon: <BookOpen className="text-yellow-600" size={24} />,
      title: 'Cadastro de Disciplinas',
      description: 'Organização completa da grade curricular escolar',
      features: [
        'Cadastro de disciplinas',
        'Definição de carga horária',
        'Pré-requisitos e dependências',
        'Plano de ensino digital'
      ],
      color: 'yellow'
    },
    {
      icon: <ClipboardCheck className="text-red-600" size={24} />,
      title: 'Rematrícula Online',
      description: 'Processo automatizado de renovação de matrícula',
      features: [
        'Solicitação online de rematrícula',
        'Comunicação automática com pais',
        'Renovação simplificada',
        'Confirmação digital'
      ],
      color: 'red'
    },
    {
      icon: <FileText className="text-indigo-600" size={24} />,
      title: 'Documentação Escolar',
      description: 'Emissão e controle de todos os documentos oficiais',
      features: [
        'Históricos escolares',
        'Declarações e atestados',
        'Diplomas e certificados',
        'Transferências e cancelamentos'
      ],
      color: 'indigo'
    },
    {
      icon: <Calendar className="text-pink-600" size={24} />,
      title: 'Controle Acadêmico',
      description: 'Gestão completa do calendário e atividades escolares',
      features: [
        'Calendário escolar digital',
        'Controle de eventos',
        'Agendamento de reuniões',
        'Registro de ocorrências'
      ],
      color: 'pink'
    },
    {
      icon: <Shield className="text-gray-600" size={24} />,
      title: 'Segurança e Conformidade',
      description: 'Proteção total dos dados com conformidade LGPD',
      features: [
        'Criptografia de dados',
        'Backup automático',
        'Controle de acesso',
        'Auditoria completa'
      ],
      color: 'gray'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que sua secretaria precisa,{' '}
            <span className="text-blue-600">agora digital</span>
          </h2>
          <p className="text-xl text-gray-600">
            Automatize todos os processos manuais e tenha controle total da gestão administrativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`p-6 border-b ${service.color === 'blue' ? 'bg-blue-50' : service.color === 'green' ? 'bg-green-50' : service.color === 'purple' ? 'bg-purple-50' : service.color === 'yellow' ? 'bg-yellow-50' : service.color === 'red' ? 'bg-red-50' : service.color === 'indigo' ? 'bg-indigo-50' : service.color === 'pink' ? 'bg-pink-50' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${service.color === 'blue' ? 'bg-blue-100' : service.color === 'green' ? 'bg-green-100' : service.color === 'purple' ? 'bg-purple-100' : service.color === 'yellow' ? 'bg-yellow-100' : service.color === 'red' ? 'bg-red-100' : service.color === 'indigo' ? 'bg-indigo-100' : service.color === 'pink' ? 'bg-pink-100' : 'bg-gray-100'}`}>
                    {service.icon}
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${service.color === 'blue' ? 'bg-blue-100 text-blue-700' : service.color === 'green' ? 'bg-green-100 text-green-700' : service.color === 'purple' ? 'bg-purple-100 text-purple-700' : service.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' : service.color === 'red' ? 'bg-red-100 text-red-700' : service.color === 'indigo' ? 'bg-indigo-100 text-indigo-700' : service.color === 'pink' ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-700'}`}>
                    Digital
                  </span>
                </div>
                <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{service.description}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-6 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-300">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <FileArchive className="mr-2" size={16} />
              Processos Otimizados
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Transforme sua secretaria em apenas 15 dias
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Implementação rápida, treinamento personalizado e suporte especializado 
              para digitalizar todos os processos da sua escola.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">1-15</div>
                <div className="font-medium">Dias para implantação</div>
                <div className="text-sm text-blue-200 mt-1">Implementação rápida</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="font-medium">Processos digitais</div>
                <div className="text-sm text-blue-200 mt-1">Sem papelada</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="font-medium">Suporte especializado</div>
                <div className="text-sm text-blue-200 mt-1">Sempre disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretariaServices;