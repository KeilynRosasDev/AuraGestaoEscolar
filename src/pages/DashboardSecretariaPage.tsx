// src/pages/DashboardSecretariaPage.tsx
import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import QuickAccessSection from '../components/dashboard/QuickAccessSection';
import StatsOverview from '../components/dashboard/StatsOverview';
import RecentActivity from '../components/dashboard/RecentActivity';
import SystemOverview from '../components/dashboard/SystemOverview';
import UpcomingTasks from '../components/dashboard/UpcomingTasks';

const DashboardSecretariaPage: React.FC = () => {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <main className="container-custom py-8">
        {/* Seção de Visão Geral */}
        <StatsOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Coluna 1: Acesso Rápido e Tarefas */}
          <div className="lg:col-span-2 space-y-8">
            <QuickAccessSection />
            <RecentActivity />
          </div>
          
          {/* Coluna 2: Visão do Sistema e Próximas Tarefas */}
          <div className="space-y-8">
            <SystemOverview />
            <UpcomingTasks />
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default DashboardSecretariaPage;