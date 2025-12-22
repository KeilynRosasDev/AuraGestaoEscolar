// src/sections/ServicesHero.tsx (atualizado)
import React from 'react';
import { Target, Users, TrendingUp, BookOpen, FileText } from 'lucide-react';

const ServicesHero: React.FC = () => {
  const highlights = [
    {
      icon: <BookOpen className="text-blue-600" size={24} />,
      title: 'Portal do Professor',
      description: 'Ferramentas especializadas para educadores',
    },
    {
      icon: <FileText className="text-green-600" size={24} />,
      title: 'Secretaria Online',
      description: 'Automação completa dos processos administrativos',
      highlight: true,
    },
    {
      icon: <Users className="text-purple-600" size={24} />,
      title: '+500 Escolas',
      description: 'Já transformaram sua gestão com nossas soluções',
    },
    {
      icon: <TrendingUp className="text-orange-600" size={24} />,
      title: '+30% de Eficiência',
      description: 'Aumento médio na produtividade das escolas',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Tudo em uma única plataforma
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Do professor à secretaria,{' '}
                <span className="text-blue-600">soluções integradas</span>
              </h1>
              <p className="text-xl text-gray-600">
                Oferecemos ferramentas especializadas para cada membro da comunidade escolar. 
                Professores, secretários, gestores e alunos têm recursos específicos para suas necessidades.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Para Professores</h3>
                    <p className="text-sm text-gray-600">Planejamento e avaliação</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Para Secretaria</h3>
                    <p className="text-sm text-gray-600">Processos automatizados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Solicitar Demonstração
              </button>
              <button className="btn-outline">
                Baixar Catálogo Completo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-white shadow-lg border ${
                  item.highlight ? 'col-span-2 border-blue-300' : ''
                } ${item.highlight ? 'bg-gradient-to-r from-green-50 to-white' : ''}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${item.highlight ? 'bg-green-100' : 'bg-gray-50'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;