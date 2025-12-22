// src/sections/TeamSection.tsx
import React from 'react';
import { Linkedin, Mail, Github, Award, Book, Code, Cpu, Database, Server, Layers, Terminal, Star, Users, Target } from 'lucide-react';

const TeamSection: React.FC = () => {
  // Apenas Keilyn Rosas como membro da equipe
  const founder = {
    name: 'Keilyn Rosas',
    role: 'CEO, Fundadora e Desenvolvedora FullStack',
    description: 'Com paixão por educação e tecnologia, lidero o desenvolvimento da AuraGestãoEscolar desde sua concepção. Minha missão é unir expertise técnica com visão pedagógica para criar soluções que realmente transformam a educação.',
    image: '👩‍💻',
    emoji: '🚀',
    background: 'Com mais de 5 anos de experiência em desenvolvimento de software e uma visão clara das necessidades educacionais, criei a plataforma para resolver problemas reais que vivenciei no setor educacional.',
    skills: [
      { name: 'React/TypeScript', icon: <Code className="text-blue-500" size={16} /> },
      { name: 'Java', icon: <Terminal className="text-green-500" size={16} /> },
      { name: 'AWS Cloud', icon: <Cpu className="text-yellow-500" size={16} /> },
      { name: 'PostgreSQL', icon: <Database className="text-purple-500" size={16} /> },
      { name: 'UI/UX Design', icon: <Layers className="text-pink-500" size={16} /> },
      { name: 'Arquitetura de Software', icon: <Server className="text-red-500" size={16} /> },
    ],
    achievements: [
      'Desenvolvimento completo da plataforma desde MVP',
      'Arquitetura escalável para mais de 500 escolas',
      'Integração com sistemas governamentais',
      'Implementação de segurança LGPD',
      'Gestão de toda a stack tecnológica',
      'Visão estratégica e operacional'
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/keilyn-rosas-234019258',
      email: 'keilynrosasprofissional@gmail.com',
      github: 'https://github.com/KeilynRosasDev'
    }
  };

  const values = [
    {
      icon: <Target className="text-blue-500" size={20} />,
      title: 'Foco na Educação',
      description: 'Tecnologia a serviço do aprendizado',
    },
    {
      icon: <Star className="text-yellow-500" size={20} />,
      title: 'Excelência Técnica',
      description: 'Código de qualidade e escalável',
    },
    {
      icon: <Users className="text-green-500" size={20} />,
      title: 'Parceria com Escolas',
      description: 'Desenvolvimento colaborativo',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Users className="mr-2" size={16} />
            Fundadora e Desenvolvedora
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A <span className="text-blue-600">Força</span> por trás da Plataforma
          </h2>
          <p className="text-xl text-gray-600">
            Unindo expertise técnica com visão educacional para criar soluções que transformam
          </p>
        </div>

        {/* Founder Card - Keilyn Rosas */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Profile */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-200 shadow-lg">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6 text-6xl">
                  {founder.image}
                </div>
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg -mt-8 text-2xl">
                  {founder.emoji}
                </div>
                
                <h3 className="text-2xl font-bold mt-6">{founder.name}</h3>
                <div className="text-blue-600 font-bold text-lg mb-4">{founder.role}</div>
                
                <div className="flex justify-center space-x-4 mb-6">
                  <a
                    href={founder.social.linkedin}
                    className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${founder.social.email}`}
                    className="w-10 h-10 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors duration-300"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href={founder.social.github}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>

                {/* Values */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Princípios</h4>
                  <div className="space-y-3">
                    {values.map((value, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          {value.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-gray-900">{value.title}</div>
                          <div className="text-sm text-gray-600">{value.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Minha História</h4>
                  <p className="text-gray-600 mb-4">{founder.description}</p>
                  <p className="text-gray-600">{founder.background}</p>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Skills Técnicas</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {founder.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                      >
                        {skill.icon}
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Conquistas com a Plataforma</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {founder.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200"
                      >
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Badges - Certificado MEC e Associado ABED */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-white text-blue-700 rounded-full text-sm font-medium mb-4">
              <Award className="mr-2" size={16} />
              Reconhecimentos e Parcerias
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Compromisso com <span className="text-blue-600">Qualidade</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossas certificações garantem que oferecemos soluções alinhadas com as melhores práticas do setor educacional.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Certificado MEC */}
            <div className="flex items-center space-x-4 bg-white px-8 py-6 rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                <Book className="text-green-600" size={28} />
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">Certificado MEC</div>
                <div className="text-gray-600">Conformidade com padrões educacionais</div>
                <div className="text-sm text-green-600 font-medium mt-1">Validação oficial</div>
              </div>
            </div>

            {/* Associado ABED */}
            <div className="flex items-center space-x-4 bg-white px-8 py-6 rounded-xl shadow-lg border border-purple-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                <Users className="text-purple-600" size={28} />
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">Associado ABED</div>
                <div className="text-gray-600">Associação Brasileira de Educação a Distância</div>
                <div className="text-sm text-purple-600 font-medium mt-1">Membro ativo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Filosofia de Trabalho
            </div>
            
            <blockquote className="text-2xl md:text-3xl italic mb-6 leading-relaxed">
              "Acredito que a tecnologia deve servir à educação, não o contrário. 
              Cada linha de código que escrevo tem o propósito de tornar a gestão escolar 
              mais humana, eficiente e focada no que realmente importa: o aprendizado."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                ✨
              </div>
              <div className="text-left">
                <p className="font-bold">{founder.name}</p>
                <p className="text-blue-200 text-sm">Fundadora da AuraGestãoEscolar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;