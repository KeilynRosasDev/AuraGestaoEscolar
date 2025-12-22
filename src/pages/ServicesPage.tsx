// src/pages/ServicesPage.tsx (atualizado)
import React from 'react';
import ServicesHero from '../sections/ServicesHero';
import ServicesFeatures from '../sections/ServicesFeatures';
import CTASection from '../sections/CTASection';
import ServiceCard from '../components/ServiceCard';
import MainLayout from '../layouts/MainLayout';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Gestão Acadêmica',
      description: 'Controle completo do processo acadêmico: matrículas, notas, frequência, histórico escolar e muito mais.',
      icon: '🎓',
      color: 'blue',
      features: [
        'Controle de matrículas online',
        'Lançamento de notas e faltas',
        'Histórico escolar digital',
        'Calendário acadêmico',
        'Controle de turmas e horários',
        'Registro de ocorrências',
      ],
    },
    {
      id: 2,
      title: 'Portal do Professor',
      description: 'Ferramentas especializadas para planejamento de aulas, avaliações e acompanhamento do desempenho dos alunos.',
      icon: '👨‍🏫',
      color: 'indigo',
      features: [
        'Planejamento de aulas digital',
        'Banco de questões e atividades',
        'Correção automatizada',
        'Relatórios individuais de alunos',
        'Comunicação com pais e gestores',
        'Controle de planejamento anual',
      ],
    },
    {
      id: 3,
      title: 'Secretaria Online',
      description: 'Sistema completo para secretaria escolar com automação de processos administrativos e documentos digitais.',
      icon: '📋',
      color: 'purple',
      features: [
        'Emissão de documentos escolares',
        'Controle de matrículas e transferências',
        'Gestão de requerimentos online',
        'Diplomas e certificados digitais',
        'Arquivo digital de documentos',
        'Processos administrativos automatizados',
      ],
    },
    {
      id: 4,
      title: 'Comunicação Escolar',
      description: 'Portal de comunicação integrado para professores, alunos, pais e gestores.',
      icon: '📱',
      color: 'green',
      features: [
        'Aplicativo para pais e alunos',
        'Comunicação em tempo real',
        'Notificações automáticas',
        'Portal do professor',
        'Mensagens em massa',
        'Agenda escolar digital',
      ],
    },
    {
      id: 5,
      title: 'Gestão Financeira',
      description: 'Sistema completo para controle financeiro escolar com emissão de boletos e relatórios.',
      icon: '💰',
      color: 'yellow',
      features: [
        'Controle de mensalidades',
        'Emissão de boletos automática',
        'Relatórios financeiros',
        'Contas a pagar/receber',
        'Integração bancária',
        'Fluxo de caixa em tempo real',
      ],
    },
    {
      id: 6,
      title: 'Relatórios Inteligentes',
      description: 'Dashboard com indicadores e relatórios personalizados para tomada de decisão.',
      icon: '📊',
      color: 'orange',
      features: [
        'Dashboard interativo',
        'Relatórios personalizáveis',
        'Indicadores de desempenho',
        'Exportação em múltiplos formatos',
        'Análises preditivas',
        'Business Intelligence',
      ],
    },
    {
      id: 7,
      title: 'Biblioteca Digital',
      description: 'Plataforma completa para gestão de acervo e empréstimos com catálogo online.',
      icon: '📚',
      color: 'red',
      features: [
        'Catálogo digital',
        'Controle de empréstimos',
        'Reservas online',
        'Acervo multimídia',
        'Integração com materiais didáticos',
        'Sugestões de leitura',
      ],
    },
    {
      id: 8,
      title: 'Portal do Aluno',
      description: 'Área personalizada para alunos acessarem materiais, notas e atividades.',
      icon: '👨‍🎓',
      color: 'cyan',
      features: [
        'Acesso a materiais didáticos',
        'Visualização de notas',
        'Atividades online',
        'Agenda escolar',
        'Comunicação com professores',
        'Histórico acadêmico',
      ],
    },
  ];

  return (
    <MainLayout>
      <ServicesHero />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Soluções <span className="text-blue-600">Completas</span> para sua Escola
            </h2>
            <p className="text-xl text-gray-600">
              Oferecemos um ecossistema integrado de ferramentas desenvolvidas especificamente 
              para o setor educacional. Da secretaria à sala de aula, temos a solução ideal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Categorias dos Serviços */}
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Organizados por <span className="text-blue-600">Áreas</span>
              </h3>
              <p className="text-gray-600">
                Nossos serviços são divididos em categorias para atender todas as necessidades da sua instituição
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                  <h4 className="text-xl font-bold">Área Pedagógica</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Portal do Professor</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Portal do Aluno</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Biblioteca Digital</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h4 className="text-xl font-bold">Administrativa</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Secretaria Online</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Gestão Acadêmica</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Comunicação Escolar</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="text-xl font-bold">Gestão & Analytics</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Gestão Financeira</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Relatórios Inteligentes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Dashboard Interativo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesFeatures />
      <CTASection />
    </MainLayout>
  );
};

export default ServicesPage;