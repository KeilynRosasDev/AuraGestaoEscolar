// src/pages/CadastroProfessorPage.tsx
import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import ProfessorHeader from '../components/professor/ProfessorHeader';
import DadosPessoaisProfessor from '../components/professor/DadosPessoaisProfessor';
import DadosProfissionais from '../components/professor/DadosProfissionais';
import FormacaoAcademica from '../components/professor/FormacaoAcademica';
import DisciplinasLecionadas from '../components/professor/DisciplinasLecionadas';
import ContratoProfessor from '../components/professor/ContratoProfessor';
import ResumoProfessor from '../components/professor/ResumoProfessor';
import ProfessorSidebar from '../components/professor/ProfessorSidebar';

const CadastroProfessorPage: React.FC = () => {
  const [etapaAtiva, setEtapaAtiva] = useState(1);
  const [formData, setFormData] = useState({
    dadosPessoais: {},
    dadosProfissionais: {},
    formacao: [],
    disciplinas: [],
    contrato: {}
  });

  const etapas = [
    { id: 1, label: 'Dados Pessoais', completado: true },
    { id: 2, label: 'Dados Profissionais', completado: false },
    { id: 3, label: 'Formação Acadêmica', completado: false },
    { id: 4, label: 'Disciplinas', completado: false },
    { id: 5, label: 'Contrato', completado: false },
    { id: 6, label: 'Confirmação', completado: false },
  ];

  const handleEtapaChange = (etapa: number) => {
    setEtapaAtiva(etapa);
  };

  const handleFormSubmit = (dados: any, etapa: string) => {
    setFormData(prev => ({
      ...prev,
      [etapa]: dados
    }));
    
    // Avança para próxima etapa
    if (etapaAtiva < etapas.length) {
      setEtapaAtiva(etapaAtiva + 1);
      
      // Marca etapa como completada
      const novasEtapas = [...etapas];
      const etapaIndex = novasEtapas.findIndex(e => e.id === etapaAtiva);
      if (etapaIndex >= 0) {
        novasEtapas[etapaIndex].completado = true;
      }
    }
  };

  const renderizarEtapa = () => {
    switch (etapaAtiva) {
      case 1:
        return (
          <DadosPessoaisProfessor
            onSubmit={(dados) => handleFormSubmit(dados, 'dadosPessoais')}
            initialData={formData.dadosPessoais}
          />
        );
      case 2:
        return (
          <DadosProfissionais
            onSubmit={(dados) => handleFormSubmit(dados, 'dadosProfissionais')}
            initialData={formData.dadosProfissionais}
          />
        );
      case 3:
        return (
          <FormacaoAcademica
            onSubmit={(dados) => handleFormSubmit(dados, 'formacao')}
            initialData={formData.formacao}
          />
        );
      case 4:
        return (
          <DisciplinasLecionadas
            onSubmit={(dados) => handleFormSubmit(dados, 'disciplinas')}
            initialData={formData.disciplinas}
          />
        );
      case 5:
        return (
          <ContratoProfessor
            onSubmit={(dados) => handleFormSubmit(dados, 'contrato')}
            initialData={formData.contrato}
          />
        );
      case 6:
        return (
          <ResumoProfessor
            data={formData}
            onConfirm={() => console.log('Professor cadastrado!', formData)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <ProfessorHeader 
        etapaAtual={etapaAtiva}
        totalEtapas={etapas.length}
      />
      
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar com etapas */}
          <div className="lg:col-span-1">
            <ProfessorSidebar
              etapas={etapas}
              etapaAtiva={etapaAtiva}
              onEtapaClick={handleEtapaChange}
            />
          </div>
          
          {/* Conteúdo principal */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              {renderizarEtapa()}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CadastroProfessorPage;