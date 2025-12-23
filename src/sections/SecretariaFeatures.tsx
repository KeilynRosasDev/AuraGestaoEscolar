// src/sections/SecretariaFeatures.tsx
import React from 'react';
import { 
  Smartphone, 
  Cloud, 
  RefreshCw, 
  Lock, 
  Zap, 
  BarChart,
  FileText,
  Users
} from 'lucide-react';

const SecretariaFeatures: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="text-blue-600" size={32} />,
      title: 'Multiplataforma',
      description: 'Acesse de qualquer dispositivo',
      details: 'Desktop, tablet e mobile com experiência otimizada',
    },
    {
      icon: <Cloud className="text-green-600" size={32} />,
      title: 'Cloud Native',
      description: 'Sem necessidade de infraestrutura local',
      details: 'Escalabilidade automática e alta disponibilidade',
    },
    {
      icon: <RefreshCw className="text-purple-600" size={32} />,
      title: 'Sincronização em Tempo Real',
      description: 'Dados atualizados instantaneamente',
      details: 'Alterações refletem imediatamente em todo o sistema',
    },
    {
      icon: <Lock className="text-red-600" size={32} />,
      title: 'Segurança Máxima',
      description: 'Proteção total dos dados',
      details: 'Criptografia, backup automático e conformidade LGPD',
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      title: 'Implementação Rápida',
      description: 'Em funcionamento em até 15 dias',
      details: 'Migração de dados e treinamento especializado',
    },
    {
      icon: <BarChart className="text-indigo-600" size={32} />,
      title: 'Relatórios Inteligentes',
      description: 'Insights para gestão eficiente',
      details: 'Dashboards personalizados e análises em tempo real',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologia de <span className="text-blue-600">Ponta</span>
          </h2>
          <p className="text-xl text-gray-600">
            Desenvolvida com as mais avançadas tecnologias para garantir performance, 
            segurança e escalabilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="space-y-6">
                <div className="p-4 bg-white rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-700 font-medium mb-3">{feature.description}</p>
                  <p className="text-gray-600">{feature.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Integração <span className="text-blue-600">Total</span>
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Conecte a Secretaria Digital com todos os outros sistemas da sua escola. 
                Dados sincronizados em tempo real entre secretaria, professores, alunos e gestores.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="text-blue-600" size={20} />
                  </div>
                  <span>Sincronização automática com sistemas legados</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="text-green-600" size={20} />
                  </div>
                  <span>Integração com sistemas governamentais</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <RefreshCw className="text-purple-600" size={20} />
                  </div>
                  <span>Conectores para outras ferramentas educacionais</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold mb-4">Sistema Integrado</h4>
                <p className="text-gray-600">Todas as áreas conectadas</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {['📋', '👨‍🏫', '👨‍🎓', '💰', '📊', '🏫'].map((emoji, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-blue-50 rounded-lg flex items-center justify-center text-3xl hover:scale-110 transition-transform duration-300"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretariaFeatures;