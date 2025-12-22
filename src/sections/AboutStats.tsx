// src/sections/AboutStats.tsx
import React from 'react';
import { TrendingUp, Users, Globe, Award, Star, Shield, Target, Heart } from 'lucide-react';

const AboutStats: React.FC = () => {
  const stats = [
    {
      icon: <Globe className="text-blue-600" size={32} />,
      value: '15+',
      label: 'Estados Atendidos',
      description: 'Presença nacional em crescimento',
      color: 'blue',
    },
    {
      icon: <Users className="text-green-600" size={32} />,
      value: '500+',
      label: 'Escolas Parceiras',
      description: 'Confiança de instituições de ensino',
      color: 'green',
    },
    {
      icon: <TrendingUp className="text-purple-600" size={32} />,
      value: '150K+',
      label: 'Usuários Ativos',
      description: 'Impactando diretamente a educação',
      color: 'purple',
    },
    {
      icon: <Award className="text-yellow-600" size={32} />,
      value: '12',
      label: 'Prêmios Recebidos',
      description: 'Reconhecimento pela excelência',
      color: 'yellow',
    },
    {
      icon: <Star className="text-orange-600" size={32} />,
      value: '98%',
      label: 'Satisfação',
      description: 'Taxa de satisfação dos clientes',
      color: 'orange',
    },
    {
      icon: <Shield className="text-red-600" size={32} />,
      value: '100%',
      label: 'Segurança',
      description: 'Dados protegidos e seguros',
      color: 'red',
    },
  ];

  const impactStats = [
    {
      value: '-40%',
      label: 'Tempo administrativo',
      description: 'Redução no trabalho burocrático',
    },
    {
      value: '+35%',
      label: 'Engajamento dos pais',
      description: 'Maior participação familiar',
    },
    {
      value: '-60%',
      label: 'Erros manuais',
      description: 'Redução em processos manuais',
    },
    {
      value: '+50%',
      label: 'Eficiência docente',
      description: 'Mais tempo para o ensino',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Target className="mr-2" size={16} />
            Nossos Números
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados que <span className="text-blue-300">falam por si</span>
          </h2>
          <p className="text-xl text-blue-200">
            Números que refletem nosso compromisso com a excelência e impacto positivo na educação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white/20 rounded-xl">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-xl font-bold mb-2">{stat.label}</div>
                  <div className="text-blue-200">{stat.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Nosso <span className="text-blue-200">Impacto</span> na Educação
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                A cada escola que transformamos, milhares de alunos são impactados. 
                Nossa tecnologia não apenas simplifica processos, mas cria condições 
                para uma educação de mais qualidade e inclusiva.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {impactStats.map((stat, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm font-medium">{stat.label}</div>
                    <div className="text-blue-200 text-xs mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <Heart className="text-red-400 mr-3" size={32} />
                  <Target className="text-blue-300" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Transformação Contínua</h4>
                <p className="text-blue-200 mb-6">
                  Monitoramos constantemente nosso impacto para garantir que 
                  continuamos a agregar valor real às escolas parceiras.
                </p>
                <button className="btn-primary bg-white text-blue-700 hover:bg-gray-100">
                  Ver Estudo de Caso
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;