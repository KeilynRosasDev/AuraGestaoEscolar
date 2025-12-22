// src/sections/AboutHero.tsx
import React from 'react';
import { Target, Users, Heart, Award } from 'lucide-react';

const AboutHero: React.FC = () => {
  const values = [
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: 'Missão',
      description: 'Transformar a educação através da tecnologia',
    },
    {
      icon: <Heart className="text-red-600" size={24} />,
      title: 'Paixão',
      description: 'Pela educação de qualidade',
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria',
    },
    {
      icon: <Award className="text-yellow-600" size={24} />,
      title: 'Excelência',
      description: 'Em tudo que fazemos',
    },
  ];

  const stats = [
    { value: '500+', label: 'Escolas atendidas' },
    { value: '98%', label: 'Satisfação' },
    { value: '15', label: 'Estados do Brasil' },
    { value: '24/7', label: 'Suporte' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Desde 2025 transformando escolas
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              Mais que uma plataforma, uma{' '}
              <span className="text-blue-600">missão</span> educacional
            </h1>

            <p className="text-xl text-gray-600">
              Somos uma empresa brasileira de tecnologia educacional comprometida 
              em simplificar e modernizar a gestão escolar. Nossa jornada começou 
              com um simples objetivo: tornar a administração escolar mais eficiente 
              para que educadores possam focar no que realmente importa - o aprendizado.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3">
                    {value.icon}
                    <div>
                      <h3 className="font-bold text-gray-900">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🏫</div>
                  <h3 className="text-2xl font-bold mb-2">Nossa Essência</h3>
                  <p className="text-blue-100">Educação + Tecnologia = Transformação</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-colors duration-300"
                    >
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;