// src/components/matricula/ResponsaveisForm.tsx
import React, { useState } from 'react';
import { User, Users, Phone, Mail, Plus, Trash2 } from 'lucide-react';

interface Responsavel {
  id: number;
  nome: string;
  parentesco: string;
  cpf: string;
  telefone: string;
  email: string;
  responsavelPrincipal: boolean;
}

interface ResponsaveisFormProps {
  onSubmit: (dados: Responsavel[]) => void;
  initialData?: Responsavel[];
}

const ResponsaveisForm: React.FC<ResponsaveisFormProps> = ({ 
  onSubmit, 
  initialData = [] 
}) => {
  const [responsaveis, setResponsaveis] = useState<Responsavel[]>(
    initialData.length > 0 ? initialData : [
      {
        id: 1,
        nome: '',
        parentesco: '',
        cpf: '',
        telefone: '',
        email: '',
        responsavelPrincipal: true
      }
    ]
  );

  const parentescos = [
    'Mãe',
    'Pai',
    'Avó',
    'Avô',
    'Tio',
    'Tia',
    'Irmão',
    'Irmã',
    'Responsável Legal',
    'Outro'
  ];

  const handleAddResponsavel = () => {
    const novoId = responsaveis.length > 0 ? Math.max(...responsaveis.map(r => r.id)) + 1 : 1;
    setResponsaveis([
      ...responsaveis,
      {
        id: novoId,
        nome: '',
        parentesco: '',
        cpf: '',
        telefone: '',
        email: '',
        responsavelPrincipal: false
      }
    ]);
  };

  const handleRemoveResponsavel = (id: number) => {
    if (responsaveis.length > 1) {
      setResponsaveis(responsaveis.filter(r => r.id !== id));
    }
  };

  const handleChange = (id: number, field: string, value: string | boolean) => {
    setResponsaveis(responsaveis.map(responsavel => {
      if (responsavel.id === id) {
        if (field === 'responsavelPrincipal' && value === true) {
          // Desmarca outros responsáveis principais
          return { ...responsavel, [field]: value };
        }
        return { ...responsavel, [field]: value };
      }
      
      // Se estiver marcando um como principal, desmarca os outros
      if (field === 'responsavelPrincipal' && value === true) {
        return { ...responsavel, responsavelPrincipal: false };
      }
      
      return responsavel;
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(responsaveis);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Responsáveis</h2>
          <p className="text-gray-600 mt-1">
            Cadastro dos responsáveis pelo aluno
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Etapa 3 de 6
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {responsaveis.map((responsavel, index) => (
            <div key={responsavel.id} className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    responsavel.responsavelPrincipal 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {responsavel.responsavelPrincipal ? <Users size={20} /> : <User size={20} />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Responsável {index + 1}
                    {responsavel.responsavelPrincipal && (
                      <span className="ml-2 text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        Principal
                      </span>
                    )}
                  </h3>
                </div>
                
                {responsaveis.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveResponsavel(responsavel.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={responsavel.nome}
                      onChange={(e) => handleChange(responsavel.id, 'nome', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Nome do responsável"
                    />
                  </div>

                  {/* Parentesco */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Parentesco <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={responsavel.parentesco}
                      onChange={(e) => handleChange(responsavel.id, 'parentesco', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione o parentesco</option>
                      {parentescos.map(parentesco => (
                        <option key={parentesco} value={parentesco}>
                          {parentesco}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* CPF */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CPF <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={responsavel.cpf}
                      onChange={(e) => handleChange(responsavel.id, 'cpf', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="000.000.000-00"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        value={responsavel.telefone}
                        onChange={(e) => handleChange(responsavel.id, 'telefone', e.target.value)}
                        required
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={responsavel.email}
                      onChange={(e) => handleChange(responsavel.id, 'email', e.target.value)}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="responsavel@email.com"
                    />
                  </div>
                </div>

                {/* Checkbox responsável principal */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`principal-${responsavel.id}`}
                    checked={responsavel.responsavelPrincipal}
                    onChange={(e) => handleChange(responsavel.id, 'responsavelPrincipal', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`principal-${responsavel.id}`} className="ml-2 text-sm text-gray-700">
                    Responsável principal (receberá comunicados importantes)
                  </label>
                </div>
              </div>
            </div>
          ))}

          {/* Botão para adicionar mais responsáveis */}
          <button
            type="button"
            onClick={handleAddResponsavel}
            className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:text-blue-600 hover:border-blue-400 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus size={20} />
            <span>Adicionar outro responsável</span>
          </button>
        </div>

        {/* Botões de navegação */}
        <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-medium"
          >
            Próxima Etapa: Documentação
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResponsaveisForm;