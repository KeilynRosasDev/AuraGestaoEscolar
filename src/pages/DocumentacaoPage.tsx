// src/pages/DocumentacaoPage.tsx
import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import DocumentacaoHeader from '../components/documentacao/DocumentacaoHeader';
import AbasDocumentacao from '../components/documentacao/AbasDocumentacao';
import ListaDocumentosAluno from '../components/documentacao/ListaDocumentosAluno';
import ListaDocumentosProfessor from '../components/documentacao/ListaDocumentosProfessor';
import ModalDocumento from '../components/documentacao/ModalDocumento';

const DocumentacaoPage: React.FC = () => {
  const [abaAtiva, setAbaAtiva] = useState<'alunos' | 'professores'>('alunos');
  const [modalAberto, setModalAberto] = useState(false);
  const [documentoSelecionado, setDocumentoSelecionado] = useState<any>(null);
  const [busca, setBusca] = useState('');

  const handleAbaChange = (aba: 'alunos' | 'professores') => {
    setAbaAtiva(aba);
  };

  const handleDocumentoClick = (documento: any) => {
    setDocumentoSelecionado(documento);
    setModalAberto(true);
  };

  const handleGerarDocumento = (documento: any) => {
    console.log('Gerando documento:', documento);
    // Aqui você implementaria a geração do documento
    alert(`Documento "${documento.titulo}" gerado com sucesso!`);
    setModalAberto(false);
  };

  return (
    <DashboardLayout>
      <DocumentacaoHeader 
        busca={busca}
        onBuscaChange={setBusca}
      />
      
      <div className="container-custom py-8">
        {/* Abas de navegação */}
        <AbasDocumentacao
          abaAtiva={abaAtiva}
          onAbaChange={handleAbaChange}
        />
        
        {/* Conteúdo da aba ativa */}
        <div className="mt-8">
          {abaAtiva === 'alunos' ? (
            <ListaDocumentosAluno
              busca={busca}
              onDocumentoClick={handleDocumentoClick}
            />
          ) : (
            <ListaDocumentosProfessor
              busca={busca}
              onDocumentoClick={handleDocumentoClick}
            />
          )}
        </div>

        {/* Modal de documento */}
        <ModalDocumento
          aberto={modalAberto}
          onFechar={() => setModalAberto(false)}
          documento={documentoSelecionado}
          onGerarDocumento={handleGerarDocumento}
        />
      </div>
    </DashboardLayout>
  );
};

export default DocumentacaoPage;