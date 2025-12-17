// src/App.tsx
import React from 'react';
import MainLayout from './layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import BenefitsSection from './sections/BenefitsSection';
import CredibilitySection from './sections/CredibilitySection';

const App: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <BenefitsSection />
      <CredibilitySection />
    </MainLayout>
  );
};

export default App;