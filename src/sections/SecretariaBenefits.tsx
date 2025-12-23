// src/sections/SecretariaBenefits.tsx
import React from 'react';
import { Zap, Clock, DollarSign, TrendingUp, CheckCircle, BarChart, Users, Shield } from 'lucide-react';

const SecretariaBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="text-blue-600" size={32} />,
      title: 'Processos Rápidos',
      description: 'Reduza o tempo de matrícula de dias para minutos',
      stats: '-70% tempo de processamento',
      color: 'blue'
    },
    {
      icon: <Clock className="text-green-600" size={32} />,
      title: 'Economia de Tempo',
      description: 'Automatize tarefas repetitivas e foque no que importa',
      stats: '16h economizadas/semana',
      color: 'green'
    },
    {
      icon: <DollarSign className="text-yellow-600" size={32} />,
      title: 'Redução de Custos',
      description: 'Elimine gastos com papel, impressão e armazenamento',
      stats: '-40% custos operacionais',
      color: 'yellow'
    },
    {
      icon: <TrendingUp className="text-purple-600" size={32} />,
      title: 'Maior Produtividade',
      description: 'Equipe mais eficiente com processos otimizados',
      stats: '+60% produtividade',
      color: 'purple'
    },
    {
      icon: <CheckCircle className="text-red-600" size={32} />,
      title: 'Redução de Erros',
      description: 'Menos falhas humanas com validação automática',
      stats: '-90% erros manuais',
      color: 'red'
    },
    {
      icon: <BarChart className="text-indigo-600" size={32} />,
      title: 'Tomada de Decisão',
      description: 'Relatórios em tempo real para decisões assertivas',
      stats: 'Dados atualizados 24/7',
      color: 'indigo'
    },
    {
      icon: <Users className="text-pink-600" size={32} />,
      title: 'Melhor Atendimento',
      description: 'Serviço mais ágil para pais, alunos e professores',
      stats: '+85% satisfação',
      color: 'pink'
    },
    {
      icon: <Shield className="text-gray-600" size={32} />,
      title: 'Segurança Total',
      description: 'Proteção de dados com conformidade LGPD',
      stats: '100% protegido',
      color: 'gray'
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a{' '}
            <span className="text-blue-600">Secretaria Digital</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Descubra como a transformação digital pode revolucionar a gestão da sua escola
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-xl mb-6 ${
                  benefit.color === 'blue' ? 'bg-blue-50' : 
                  benefit.color === 'green' ? 'bg-green-50' : 
                  benefit.color === 'yellow' ? 'bg-yellow-50' : 
                  benefit.color === 'purple' ? 'bg-purple-50' : 
                  benefit.color === 'red' ? 'bg-red-50' : 
                  benefit.color === 'indigo' ? 'bg-indigo-50' : 
                  benefit.color === 'pink' ? 'bg-pink-50' : 'bg-gray-50'
                }`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                  benefit.color === 'blue' ? 'bg-blue-50 text-blue-700' : 
                  benefit.color === 'green' ? 'bg-green-50 text-green-700' : 
                  benefit.color === 'yellow' ? 'bg-yellow-50 text-yellow-700' : 
                  benefit.color === 'purple' ? 'bg-purple-50 text-purple-700' : 
                  benefit.color === 'red' ? 'bg-red-50 text-red-700' : 
                  benefit.color === 'indigo' ? 'bg-indigo-50 text-indigo-700' : 
                  benefit.color === 'pink' ? 'bg-pink-50 text-pink-700' : 'bg-gray-50 text-gray-700'
                }`}>
                  {benefit.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Users className="mr-2" size={16} />
              Depoimento
            </div>
            
            <blockquote className="text-2xl italic mb-8">
              "Implementamos a Secretaria Digital e em 30 dias reduzimos 70% do tempo 
              em processos manuais. Agora nossa equipe foca no atendimento, não na papelada."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👩‍💼</span>
              </div>
              <div className="text-left">
                <div className="font-bold">Ana Silva</div>
                <div className="text-blue-200 text-sm">Secretária Escolar - Colégio Progresso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretariaBenefits;