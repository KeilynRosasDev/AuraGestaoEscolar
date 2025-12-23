// src/pages/SecretariaPage.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SecretariaHero from '../sections/SecretariaHero';
import SecretariaServices from '../sections/SecretariaServices';
import SecretariaBenefits from '../sections/SecretariaBenefits';
import SecretariaFeatures from '../sections/SecretariaFeatures';
import CTASection from '../sections/CTASection';

const SecretariaPage: React.FC = () => {
  return (
    <MainLayout>
      <SecretariaHero />
      <SecretariaServices />
      <SecretariaBenefits />
      <SecretariaFeatures />
      <CTASection />
    </MainLayout>
  );
};

export default SecretariaPage;