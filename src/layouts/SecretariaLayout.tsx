// src/layouts/SecretariaLayout.tsx
import React from 'react';
import SecretariaHeader from '../components/SecretariaHeader';
import Footer from '../components/Footer';

interface SecretariaLayoutProps {
  children: React.ReactNode;
}

const SecretariaLayout: React.FC<SecretariaLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50/30">
      <SecretariaHeader />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default SecretariaLayout;