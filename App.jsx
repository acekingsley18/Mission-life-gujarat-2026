import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext.jsx';
import { LanguageProvider, useLanguage } from './context/LanguageContext.jsx';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import Toast from './components/common/Toast.jsx';
import OnboardingModal from './components/onboarding/OnboardingModal.jsx';

import DashboardPage from './pages/DashboardPage.jsx';
import FootprintCalculator from './components/calculator/FootprintCalculator.jsx';
import RecommendationList from './components/recommendations/RecommendationList.jsx';
import ChallengesTab from './components/gamification/ChallengesTab.jsx';
import SolarFeasibilityExplorer from './components/solar/SolarFeasibilityExplorer.jsx';
import ResourceLibrary from './components/education/ResourceLibrary.jsx';
import DistrictPledgeWall from './components/community/DistrictPledgeWall.jsx';

function MainLayout() {
  const getPageFromHash = () => {
    if (typeof window === 'undefined') return 'dashboard';
    const hash = (window.location.hash || '').replace('#', '').toLowerCase();
    const validPages = ['dashboard', 'calculator', 'recommendations', 'challenges', 'solar', 'education', 'community'];
    return validPages.includes(hash) ? hash : 'dashboard';
  };

  const [activePage, setActivePageState] = useState(getPageFromHash);
  const { isProfileModalOpen, setIsProfileModalOpen } = useApp();

  const setActivePage = (page) => {
    if (typeof window !== 'undefined' && window.location) {
      window.location.hash = page;
    }
    setActivePageState(page);
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActivePageState(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage setActivePage={setActivePage} />;
      case 'calculator':
        return <FootprintCalculator />;
      case 'recommendations':
        return <RecommendationList />;
      case 'challenges':
        return <ChallengesTab />;
      case 'solar':
        return <SolarFeasibilityExplorer />;
      case 'education':
        return <ResourceLibrary />;
      case 'community':
        return <DistrictPledgeWall />;
      default:
        return <DashboardPage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-slate-800">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentPage()}
      </main>

      <Footer />
      <Toast />

      <OnboardingModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <LanguageConsumerApp />
    </AppProvider>
  );
}

function LanguageConsumerApp() {
  const { state, handleLanguageChange } = useApp();

  return (
    <LanguageProvider
      initialLanguage={state.language || 'en'}
      onLanguageChange={handleLanguageChange}
    >
      <MainLayout />
    </LanguageProvider>
  );
}
