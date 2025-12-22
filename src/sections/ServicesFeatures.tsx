// src/sections/ServicesFeatures.tsx
import React from 'react';
import { 
  Shield, 
  Zap, 
  RefreshCw, 
  Smartphone, 
  Cloud, 
  BarChart,
  BookOpen,
  FileText,
  Users,
  MessageSquare,
  Target,
  Lock,
  Cpu,
  Wifi,
  Database
} from 'lucide-react';

const ServicesFeatures: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="text-blue-600" size={32} />,
      title: 'Portal do Professor',
      description: 'Ferramentas especializadas para educadores',
      details: 'Planejamento de aulas, banco de questões, correção automatizada e acompanhamento individualizado',
      highlight: true,
    },
    {
      icon: <FileText className="text-green-600" size={32} />,
      title: 'Secretaria Digital',
      description: 'Processos administrativos automatizados',
      details: 'Documentos digitais, matrículas online, requerimentos automatizados e gestão documental',
      highlight: true,
    },
    {
      icon: <Shield className="text-purple-600" size={32} />,
      title: 'Segurança de Dados',
      description: 'Proteção total com criptografia e conformidade LGPD',
      details: 'Backup automático, acesso restrito, auditoria completa e criptografia de ponta a ponta',
    },
    {
      icon: <Zap className="text-orange-600" size={32} />,
      title: 'Implementação Rápida',
      description: 'Em funcionamento em até 15 dias',
      details: 'Migração de dados, treinamento personalizado e suporte especializado durante a implantação',
    },
    {
      icon: <Smartphone className="text-cyan-600" size={32} />,
      title: 'Multiplataforma',
      description: 'Acesse de qualquer dispositivo',
      details: 'Desktop, tablet e mobile com experiência otimizada para cada tipo de usuário',
    },
    {
      icon: <BarChart className="text-red-600" size={32} />,
      title: 'Business Intelligence',
      description: 'Insights para tomada de decisão',
      details: 'Dashboards personalizados, relatórios inteligentes e análises preditivas',
    },
  ];

  const integrations = [
    {
      title: 'Gestão Pedagógica',
      items: ['Portal do Professor', 'Planejamento de Aulas', 'Avaliações', 'Diários Online'],
      color: 'blue',
      icon: <BookOpen className="text-blue-400" size={24} />,
    },
    {
      title: 'Administrativo',
      items: ['Secretaria Digital', 'Matrículas Online', 'Documentação', 'Processos Automatizados'],
      color: 'green',
      icon: <FileText className="text-green-400" size={24} />,
    },
    {
      title: 'Comunicação',
      items: ['Aplicativo Escolar', 'Notificações', 'Mensagens em Massa', 'Portal dos Pais'],
      color: 'purple',
      icon: <MessageSquare className="text-purple-400" size={24} />,
    },
  ];

  const techSpecs = [
    {
      icon: <Cpu className="text-blue-400" size={24} />,
      title: 'Alta Performance',
      description: 'Infraestrutura escalável na nuvem AWS',
    },
    {
      icon: <Database className="text-green-400" size={24} />,
      title: 'Backup Automático',
      description: 'Recuperação de dados em até 5 minutos',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Target className="mr-2" size={16} />
            Diferenciais Exclusivos
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que somos a escolha <span className="text-blue-600">número 1</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Combinação perfeita de tecnologia, experiência educacional e suporte especializado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                feature.highlight ? 'border-blue-300 relative overflow-hidden' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {feature.highlight && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  NOVO
                </div>
              )}
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-xl ${feature.highlight ? 'bg-blue-50' : 'bg-gray-50'} group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-gray-700 font-medium">{feature.description}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-600">{feature.details}</p>
                </div>

                {feature.highlight && (
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <MessageSquare className="mr-2" size={16} />
                  Sistema Integrado
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Todos os módulos em <span className="text-blue-200">perfeita sincronia</span>
                </h3>
                <p className="text-blue-100 mb-8 text-lg">
                  Conectamos todos os sistemas da sua escola em uma única plataforma. 
                  Secretaria, professores, alunos e gestores trabalham em harmonia com dados atualizados em tempo real.
                </p>
                
                <div className="space-y-6">
                  {integrations.map((integration, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        {integration.icon}
                        <h4 className="text-xl font-bold ml-3">{integration.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {integration.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/20 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-4">Integração Total</h4>
                  <p className="text-blue-200">
                    Todas as áreas conectadas em tempo real
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {['👨‍🏫', '📋', '👨‍🎓', '💰', '📊', '📱'].map((emoji, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-white/20 rounded-xl flex items-center justify-center text-4xl hover:scale-110 transition-all duration-300 hover:bg-white/30 cursor-pointer"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Lock className="text-blue-300 mr-3" size={20} />
                    <h5 className="font-bold">Sincronização Segura</h5>
                  </div>
                  <p className="text-blue-200 text-sm">
                    Dados sincronizados com criptografia de ponta a ponta. 
                    Alterações em um módulo refletem instantaneamente em todos os outros.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Specs Row */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              {techSpecs.map((spec, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    {spec.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-1">{spec.title}</div>
                    <div className="text-blue-200">{spec.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-blue-200">Disponibilidade</div>
                <div className="text-sm text-blue-300">Uptime garantido</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">&lt;1s</div>
                <div className="text-blue-200">Tempo de Sincronia</div>
                <div className="text-sm text-blue-300">Atualização em tempo real</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-200">Integração</div>
                <div className="text-sm text-blue-300">Módulos conectados</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Tecnologia de <span className="text-blue-600">Ponta</span>
            </h3>
            <p className="text-gray-600">
              Utilizamos as mais avançadas tecnologias para garantir performance, segurança e escalabilidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-blue-600" size={24} />
              </div>
              <h4 className="font-bold mb-2">Cloud AWS</h4>
              <p className="text-gray-600 text-sm">Infraestrutura escalável global</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={24} />
              </div>
              <h4 className="font-bold mb-2">LGPD Compliant</h4>
              <p className="text-gray-600 text-sm">Total conformidade com a lei</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="text-purple-600" size={24} />
              </div>
              <h4 className="font-bold mb-2">Updates Automáticos</h4>
              <p className="text-gray-600 text-sm">Sempre com as últimas features</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-orange-600" size={24} />
              </div>
              <h4 className="font-bold mb-2">CDN Global</h4>
              <p className="text-gray-600 text-sm">Acesso rápido em qualquer lugar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;