// src/sections/BenefitsSection.tsx
import React from 'react';
import { 
  Zap, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Lock, 
  Cloud, 
  Calendar,
  FileText
} from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="text-blue-600" size={24} />,
      title: 'Agilidade nos Processos',
      description: 'Automatize tarefas repetitivas e ganhe tempo para o que realmente importa: a educação.',
      color: 'blue',
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: 'Comunicação Integrada',
      description: 'Conecte professores, alunos, pais e gestores em uma única plataforma.',
      color: 'green',
    },
    {
      icon: <BarChart3 className="text-purple-600" size={24} />,
      title: 'Relatórios Inteligentes',
      description: 'Tome decisões baseadas em dados com dashboards e relatórios em tempo real.',
      color: 'purple',
    },
    {
      icon: <Lock className="text-red-600" size={24} />,
      title: 'Segurança de Dados',
      description: 'Proteção total das informações com criptografia e conformidade com a LGPD.',
      color: 'red',
    },
    {
      icon: <Cloud className="text-cyan-600" size={24} />,
      title: 'Acesso em Qualquer Lugar',
      description: 'Plataforma 100% web, acessível de qualquer dispositivo com internet.',
      color: 'cyan',
    },
    {
      icon: <Calendar className="text-orange-600" size={24} />,
      title: 'Gestão Acadêmica',
      description: 'Controle de frequência, notas, horários e calendários escolares de forma simplificada.',
      color: 'orange',
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher o{' '}
            <span className="text-blue-600">AuraGestãoEscolar</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Uma plataforma completa que atende às necessidades de todos os envolvidos no processo educacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-transparent"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-${benefit.color}-50 group-hover:bg-${benefit.color}-100 transition-colors duration-300`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* For Whom Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Feito para cada <span className="text-blue-600">perfil</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-blue-50 to-white border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-blue-600" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Gestores</h4>
              <p className="text-gray-600 mb-6">
                Controle total da instituição com visão macro e ferramentas de análise avançadas.
              </p>
              <button className="btn-outline">Saiba mais</button>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-green-50 to-white border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="text-green-600" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Educadores</h4>
              <p className="text-gray-600 mb-6">
                Ferramentas didáticas, controle de turmas e comunicação eficiente com alunos e pais.
              </p>
              <button className="btn-secondary">Saiba mais</button>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-purple-600" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Alunos</h4>
              <p className="text-gray-600 mb-6">
                Acesso fácil a materiais, notas, frequência e comunicação direta com professores.
              </p>
              <button className="btn-outline">Saiba mais</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;