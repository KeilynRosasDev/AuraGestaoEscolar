// src/sections/CTASection.tsx
import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
          <div className="relative">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full translate-y-48 -translate-x-48"></div>

            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto para transformar sua escola?
                </h2>
                <p className="text-xl text-blue-200">
                  Agende uma demonstração personalizada e descubra como podemos atender 
                  às necessidades específicas da sua instituição.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Demonstração Online</h3>
                  <p className="text-blue-200 mb-6">
                    Agende um horário para ver a plataforma em ação
                  </p>
                  <button className="w-full btn-primary bg-white text-blue-700 hover:bg-gray-100">
                    Agendar Agora
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Chat Online</h3>
                  <p className="text-blue-200 mb-6">
                    Converse agora com nossos especialistas
                  </p>
                  <button className="w-full btn-outline border-white text-white hover:bg-white/10">
                    Iniciar Chat
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Ligue para nós</h3>
                  <p className="text-blue-200 mb-6">
                    Fale diretamente com nossa equipe de vendas
                  </p>
                  <div className="text-2xl font-bold mb-4">(11) 99999-9999</div>
                  <button className="w-full btn-outline border-white text-white hover:bg-white/10">
                    Ligar Agora
                  </button>
                </div>
              </div>

              <div className="text-center mt-12 pt-8 border-t border-white/20">
                <p className="text-blue-200">
                  <strong>300+ escolas</strong> já transformaram sua gestão conosco
                </p>
                <div className="flex justify-center items-center space-x-2 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-2xl">★</span>
                  ))}
                  <span className="text-white ml-2">4.9/5 baseado em 487 avaliações</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;