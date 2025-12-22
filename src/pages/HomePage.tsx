// src/pages/HomePage.tsx
import React from 'react';
import HeroSection from '../sections/HeroSection';
import BenefitsSection from '../sections/BenefitsSection';
import CredibilitySection from '../sections/CredibilitySection';
import MainLayout from '../layouts/MainLayout';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <BenefitsSection />
      <CredibilitySection />
    </MainLayout>
  );
};

export default HomePage;