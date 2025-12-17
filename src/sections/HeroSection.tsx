// src/sections/HeroSection.tsx
import React from 'react';
import { ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="section-padding bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Shield className="mr-2" size={16} />
                Plataforma Confiável
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme a{' '}
                <span className="text-blue-600">gestão escolar</span>{' '}
                com tecnologia
              </h1>
              
              <p className="text-xl text-gray-600">
                Uma solução completa e intuitiva para escolas públicas e privadas. 
                Centralize processos, melhore a comunicação e otimize resultados educacionais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center">
                Comece agora
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="btn-outline">
                Agendar demonstração
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Users className="text-blue-600" size={24} />
                  <span className="text-3xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-gray-600">Escolas</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className="text-green-600" size={24} />
                  <span className="text-3xl font-bold text-gray-900">98%</span>
                </div>
                <p className="text-gray-600">Satisfação</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="text-purple-600" size={24} />
                  <span className="text-3xl font-bold text-gray-900">100%</span>
                </div>
                <p className="text-gray-600">Seguro</p>
              </div>
            </div>
          </div>

          {/* Right Content - Placeholder for illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-2">Dashboard Interativo</h3>
                  <p className="opacity-90">Visualize dados em tempo real</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl">🎓</div>
                  <p className="font-bold mt-1">+30%</p>
                  <p className="text-xs">Eficiência</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl">⏱️</div>
                  <p className="font-bold mt-1">-50%</p>
                  <p className="text-xs">Tempo Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;