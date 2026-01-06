// src/layouts/DashboardLayout.tsx
import React from 'react';
import DashboardNavbar from '../components/dashboard/DashboardNavbar';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import Footer from '../components/Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Navbar superior */}
      <DashboardNavbar 
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        {/* Conteúdo principal */}
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
          {children}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;