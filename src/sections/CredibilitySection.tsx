// src/sections/CredibilitySection.tsx
import React from 'react';
import { Award, CheckCircle, Globe, ShieldCheck, Users, Target } from 'lucide-react';

const CredibilitySection: React.FC = () => {
  const trustPoints = [
    {
      icon: <ShieldCheck className="text-green-600" size={32} />,
      title: 'Segurança Garantida',
      description: 'Certificação ISO 27001 e compliance total com a LGPD.',
    },
    {
      icon: <Globe className="text-blue-600" size={32} />,
      title: 'Atendimento Nacional',
      description: 'Presente em todas as regiões do Brasil, com suporte local.',
    },
    {
      icon: <Award className="text-yellow-600" size={32} />,
      title: 'Reconhecimento',
      description: 'Premiada como melhor solução educacional por 3 anos consecutivos.',
    },
    {
      icon: <Target className="text-red-600" size={32} />,
      title: 'Foco Educacional',
      description: 'Desenvolvido por especialistas em educação e tecnologia.',
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center px-4 py-2 bg-blue-800/50 text-blue-200 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="mr-2" size={16} />
                Confiança e Profissionalismo
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A escolha certa para{' '}
                <span className="text-blue-300">educação pública e privada</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Mais de 500 instituições de ensino confiam na nossa plataforma 
                para uma gestão escolar eficiente, organizada e moderna.
              </p>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <p className="text-gray-300">Disponibilidade</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="text-gray-300">Suporte</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <p className="text-gray-300">Usuários Ativos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="text-gray-300">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Pronto para transformar a gestão da sua escola?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Entre em contato e solicite uma demonstração gratuita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Solicitar Demonstração
              </button>
              <button className="btn-outline border-white text-white hover:bg-white/10">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;