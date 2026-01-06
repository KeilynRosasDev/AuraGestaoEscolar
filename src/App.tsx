// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import SecretariaPage from './pages/SecretariaPage';
import SecretariaLoginPage from './pages/SecretariaLoginPage';
import DashboardSecretariaPage from './pages/DashboardSecretariaPage';
import MatriculaAlunoPage from './pages/MatriculaAlunoPage';
import CadastroProfessorPage from './pages/CadastroProfessorPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/secretaria" element={<SecretariaPage />} />
        <Route path="/secretaria/login" element={<SecretariaLoginPage />} />
        <Route path="/secretaria/dashboard" element={<DashboardSecretariaPage />} />
        <Route path="/secretaria/matricula" element={<MatriculaAlunoPage />} />
        <Route path="/secretaria/professor" element={<CadastroProfessorPage />} />
      </Routes>
    </Router>
  );
};

export default App;