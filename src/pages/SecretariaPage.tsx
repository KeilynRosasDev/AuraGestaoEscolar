// src/pages/SecretariaPage.tsx
import React from 'react';
import SecretariaLayout from '../layouts/SecretariaLayout';
import SecretariaHero from '../sections/SecretariaHero';
import SecretariaServices from '../sections/SecretariaServices';
import SecretariaBenefits from '../sections/SecretariaBenefits';
import SecretariaFeatures from '../sections/SecretariaFeatures';
import CTASection from '../sections/CTASection';

const SecretariaPage: React.FC = () => {
  return (
    <SecretariaLayout>
      <SecretariaHero />
      <SecretariaServices />
      <SecretariaBenefits />
      <SecretariaFeatures />
      <CTASection />
    </SecretariaLayout>
  );
};

export default SecretariaPage;