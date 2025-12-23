// src/sections/SecretariaHero.tsx
import React from 'react';
import { FileText, Clock, Shield, CheckCircle, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SecretariaHero: React.FC = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: <FileText className="text-blue-600" size={24} />,
      title: 'Documentação 100% Digital',
      description: 'Processos sem papel e totalmente organizados',
    },
    {
      icon: <Clock className="text-green-600" size={24} />,
      title: '-70% Tempo de Processos',
      description: 'Automação que acelera todas as tarefas',
    },
    {
      icon: <Shield className="text-purple-600" size={24} />,
      title: 'Segurança LGPD',
      description: 'Dados protegidos e conformidade total',
    },
    {
      icon: <CheckCircle className="text-red-600" size={24} />,
      title: 'Controle Total',
      description: 'Gestão completa da secretaria escolar',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Secretaria 100% Digital
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              Transforme a gestão administrativa com a{' '}
              <span className="text-blue-600">Secretaria Digital</span>
            </h1>

            <p className="text-xl text-gray-600">
              Automatize processos, elimine a papelada e tenha controle total 
              da gestão escolar. Tudo em uma plataforma intuitiva, segura e 
              desenvolvida especificamente para secretarias escolares.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/secretaria/login')}
                className="btn-primary flex items-center justify-center"
              >
                <LogIn className="mr-2" size={20} />
                Acessar Secretaria
              </button>
              <button className="btn-outline">
                Solicitar Demonstração
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Escolas</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-green-600">-70%</div>
                <div className="text-sm text-gray-600">Tempo Processos</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Digital</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-600">Disponível</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
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

export default SecretariaHero;