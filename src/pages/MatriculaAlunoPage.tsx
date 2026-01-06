// src/pages/MatriculaAlunoPage.tsx
import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import MatriculaHeader from '../components/matricula/MatriculaHeader';
import DadosPessoaisForm from '../components/matricula/DadosPessoaisForm';
import EnderecoForm from '../components/matricula/EnderecoForm';
import ResponsaveisForm from '../components/matricula/ResponsaveisForm';
import DocumentacaoAlunoForm from '../components/matricula/DocumentacaoAlunoForm'; // Nome atualizado
import TurmaSelecaoForm from '../components/matricula/TurmaSelecaoForm';
import MatriculaResumo from '../components/matricula/MatriculaResumo';
import MatriculaSidebar from '../components/matricula/MatriculaSidebar';

const MatriculaAlunoPage: React.FC = () => {
  const [etapaAtiva, setEtapaAtiva] = useState(1);
  const [formData, setFormData] = useState({
    dadosPessoais: {},
    endereco: {},
    responsaveis: [],
    documentacao: {},
    turma: null
  });

  const etapas = [
    { id: 1, label: 'Dados Pessoais', completado: true },
    { id: 2, label: 'Endereço', completado: false },
    { id: 3, label: 'Responsáveis', completado: false },
    { id: 4, label: 'Documentação', completado: false },
    { id: 5, label: 'Turma', completado: false },
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
          <DadosPessoaisForm
            onSubmit={(dados) => handleFormSubmit(dados, 'dadosPessoais')}
            initialData={formData.dadosPessoais}
          />
        );
      case 2:
        return (
          <EnderecoForm
            onSubmit={(dados) => handleFormSubmit(dados, 'endereco')}
            initialData={formData.endereco}
          />
        );
      case 3:
        return (
          <ResponsaveisForm
            onSubmit={(dados) => handleFormSubmit(dados, 'responsaveis')}
            initialData={formData.responsaveis}
          />
        );
      case 4:
        return (
          <DocumentacaoAlunoForm // Nome atualizado aqui
            onSubmit={(dados) => handleFormSubmit(dados, 'documentacao')}
            initialData={formData.documentacao}
          />
        );
      case 5:
        return (
          <TurmaSelecaoForm
            onSubmit={(dados) => handleFormSubmit(dados, 'turma')}
            initialData={formData.turma}
          />
        );
      case 6:
        return (
          <MatriculaResumo
            data={formData}
            onConfirm={() => console.log('Matrícula confirmada!', formData)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <MatriculaHeader 
        etapaAtual={etapaAtiva}
        totalEtapas={etapas.length}
      />
      
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar com etapas */}
          <div className="lg:col-span-1">
            <MatriculaSidebar
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

export default MatriculaAlunoPage;