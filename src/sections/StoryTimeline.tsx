// src/sections/StoryTimeline.tsx
import React from 'react';
import { Calendar, Users, Rocket, Award, Target, Zap, BookOpen, GraduationCap } from 'lucide-react';

const StoryTimeline: React.FC = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Fundação',
      description: 'Nascemos com a missão de simplificar a gestão escolar',
      icon: <Calendar className="text-blue-600" size={24} />,
      highlight: true,
    },
    {
      year: '2026',
      title: 'Primeiros Clientes',
      description: 'Atendemos nossas primeiras 10 escolas parceiras',
      icon: <Users className="text-green-600" size={24} />,
      highlight: false,
    },
    {
      year: '2026',
      title: 'Expansão',
      description: 'Crescimento para 5 estados brasileiros',
      icon: <Rocket className="text-purple-600" size={24} />,
      highlight: true,
    },
    {
      year: '2026',
      title: 'Reconhecimento',
      description: 'Premiada como melhor solução educacional do ano',
      icon: <Award className="text-yellow-600" size={24} />,
      highlight: false,
    },
    {
      year: '2027',
      title: 'Inovação',
      description: 'Lançamento do módulo de Inteligência Artificial',
      icon: <Zap className="text-red-600" size={24} />,
      highlight: true,
    },
    {
      year: '2027',
      title: 'Consolidação',
      description: 'Atendimento a mais de 500 escolas em todo Brasil',
      icon: <Target className="text-blue-600" size={24} />,
      highlight: false,
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa <span className="text-blue-600">Jornada</span>
          </h2>
          <p className="text-xl text-gray-600">
            Uma trajetória de crescimento, aprendizado e compromisso com a educação.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 hidden md:block"></div>

          {/* Milestones */}
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div
                    className={`bg-white rounded-xl p-6 shadow-lg border ${
                      milestone.highlight ? 'border-blue-300' : 'border-gray-200'
                    } hover:shadow-xl transition-shadow duration-300`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg ${milestone.highlight ? 'bg-blue-50' : 'bg-gray-50'}`}>
                        {milestone.icon}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">{milestone.year}</span>
                        <h3 className="text-xl font-bold">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full items-center justify-center z-10">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>

                {/* Year on mobile */}
                <div className="md:hidden flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full my-4">
                  <span className="text-blue-700 font-bold">{milestone.year}</span>
                </div>

                {/* Empty space for alignment */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>

          {/* Future milestone */}
          <div className="relative flex flex-col md:flex-row items-center justify-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center max-w-2xl">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap size={32} className="mr-3" />
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">O Futuro da Educação</h3>
              <p className="text-blue-100">
                Continuaremos inovando para levar tecnologia de ponta a todas as escolas brasileiras,
                com foco em inteligência artificial, análise preditiva e personalização do ensino.
              </p>
              <div className="mt-6 text-sm text-blue-200">
                🎯 Objetivo 2025: Atender 1000+ escolas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;