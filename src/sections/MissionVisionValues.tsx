// src/sections/MissionVisionValues.tsx
import React from 'react';
import { Target, Eye, Star, Users, Shield, Heart, Award, TrendingUp } from 'lucide-react';

const MissionVisionValues: React.FC = () => {
  const cards = [
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: 'Missão',
      description: 'Democratizar o acesso à tecnologia educacional de qualidade, proporcionando ferramentas inovadoras que simplificam a gestão escolar e potencializam o aprendizado.',
      color: 'blue',
      gradient: 'from-blue-50 to-blue-100',
    },
    {
      icon: <Eye className="text-purple-600" size={32} />,
      title: 'Visão',
      description: 'Ser referência nacional em soluções de gestão educacional, reconhecida pela excelência, inovação e impacto positivo na educação brasileira até 2030.',
      color: 'purple',
      gradient: 'from-purple-50 to-purple-100',
    },
    {
      icon: <Star className="text-yellow-600" size={32} />,
      title: 'Valores',
      description: 'Paixão pela educação, inovação constante, transparência, colaboração e compromisso com resultados que transformam vidas.',
      color: 'yellow',
      gradient: 'from-yellow-50 to-yellow-100',
    },
  ];

  const values = [
    {
      icon: <Heart className="text-red-500" size={20} />,
      title: 'Paixão Educacional',
      description: 'Acreditamos no poder transformador da educação',
    },
    {
      icon: <Shield className="text-green-500" size={20} />,
      title: 'Integridade',
      description: 'Agimos com ética e transparência em tudo',
    },
    {
      icon: <Users className="text-blue-500" size={20} />,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria com nossas escolas',
    },
    {
      icon: <TrendingUp className="text-purple-500" size={20} />,
      title: 'Inovação',
      description: 'Buscamos constantemente melhorias',
    },
    {
      icon: <Award className="text-orange-500" size={20} />,
      title: 'Excelência',
      description: 'Compromisso com a qualidade em cada detalhe',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa <span className="text-blue-600">Razão de Ser</span>
          </h2>
          <p className="text-xl text-gray-600">
            Guiados por princípios sólidos e um propósito claro, construímos 
            soluções que realmente fazem a diferença na educação.
          </p>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 bg-white rounded-xl mb-6 shadow-sm`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">
              Nossos <span className="text-blue-600">Valores</span> em Ação
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estes princípios guiam cada decisão, cada linha de código, 
              e cada interação com nossas escolas parceiras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;