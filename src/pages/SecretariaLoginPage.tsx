// src/pages/SecretariaLoginPage.tsx
import React from 'react';
import { LogIn, Lock, Mail, Shield, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SecretariaLoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex flex-col">
      {/* Header simples */}
      <header className="bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 px-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AGE</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Aura<span className="text-blue-600">Gestão</span>Escolar
              </span>
            </Link>
            
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft size={18} className="mr-2" />
              Voltar ao site
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6">
              <Lock className="text-blue-600" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Secretaria Digital</h1>
            <p className="text-gray-600">Acesso restrito à plataforma administrativa</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Institucional
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="text-gray-400" size={20} />
                  </div>
                  <input
                    type="email"
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="seuemail@escola.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="text-gray-400" size={20} />
                  </div>
                  <input
                    type="password"
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Lembrar-me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  Esqueceu a senha?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition flex items-center justify-center"
              >
                <LogIn className="mr-2" size={20} />
                Entrar na Secretaria
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="text-green-500 mr-2" size={20} />
                  <span className="text-sm text-gray-600">Ambiente seguro e protegido</span>
                </div>
                <p className="text-gray-500 text-sm">
                  Acesso restrito a funcionários autorizados. Em caso de problemas, 
                  entre em contato com o suporte técnico.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/secretaria" className="text-blue-600 hover:text-blue-700 text-sm">
              ← Voltar para a página da Secretaria Digital
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecretariaLoginPage;