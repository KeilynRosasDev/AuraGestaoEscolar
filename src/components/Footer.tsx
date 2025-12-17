// src/components/Footer.tsx
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const contactInfo = [
    { icon: <Mail size={20} />, text: 'contato@auragestaoescolar.com' },
    { icon: <Phone size={20} />, text: '(11) 99999-9999' },
    { icon: <MapPin size={20} />, text: 'Salvador, BA' },
  ];

  const links = {
    serviços: ['Gestão Acadêmica', 'Comunicação', 'Financeiro', 'Relatórios'],
    sobre: ['Nossa História', 'Equipe', 'Missão e Valores', 'Carreiras'],
    legal: ['Termos de Uso', 'Política de Privacidade', 'LGPD', 'Contrato'],
  };

  const socialMedia = [
    { icon: <Facebook size={20} />, label: 'Facebook' },
    { icon: <Instagram size={20} />, label: 'Instagram' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AGE</span>
              </div>
              <span className="text-2xl font-bold">
                Aura<span className="text-blue-400">Gestão</span>Escolar
              </span>
            </div>
            <p className="text-gray-400">
              Transformando a gestão educacional com tecnologia inovadora e soluções eficientes.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-400">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(links).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-semibold text-blue-400 mb-3 capitalize">{category}</h4>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4 mb-6">
              {socialMedia.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
              </div>
            </div>
          </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 AuraGestãoEscolar. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Desenvolvido com ❤️ para revolucionar a educação
          </p>
        </div>
    </footer>
  );
};

export default Footer;