/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreServices } from './components/CoreServices';
import { DashboardPreview } from './components/DashboardPreview';
import { SmartCampus } from './components/SmartCampus';
import { HowItWorks } from './components/HowItWorks';
import { ExperienceSplit } from './components/ExperienceSplit';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { FeedbackModal } from './components/FeedbackModal';
import { GrievanceTicket } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginRole, setLoginRole] = useState<'student' | 'admin'>('student');
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [dashboardTab, setDashboardTab] = useState('overview');
  const [userGrievances, setUserGrievances] = useState<GrievanceTicket[]>([]);

  // User session state
  const [userSession, setUserSession] = useState<{
    isLoggedIn: boolean;
    name: string;
    role: string;
  }>({
    isLoggedIn: true, // Default to demo student logged in for immediate interactive enjoyment
    name: 'Aarav Sharma',
    role: 'student',
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleOpenLogin = (role: 'student' | 'admin' = 'student') => {
    setLoginRole(role);
    setIsLoginModalOpen(true);
  };

  const handleLoginSuccess = (name: string, role: string) => {
    setUserSession({
      isLoggedIn: true,
      name,
      role,
    });
    showNotification(`Welcome, ${name}! Authenticated via Silver Oak SSO.`);
  };

  const handleLogout = () => {
    setUserSession({
      isLoggedIn: false,
      name: '',
      role: 'guest',
    });
    showNotification('You have safely signed out of Campus360.');
  };

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceKey: string) => {
    setDashboardTab(serviceKey);
    handleScrollTo('dashboard');
  };

  const handleAddGrievance = (ticket: GrievanceTicket) => {
    setUserGrievances((prev) => [ticket, ...prev]);
    setDashboardTab('grievance');
    showNotification(
      `Ticket ${ticket.ticketId} registered with ${ticket.department}. 48-hr SLA active.`
    );
    handleScrollTo('dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* Global Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl border border-slate-700 flex items-center justify-between text-xs animate-fadeIn">
          <span>{notification}</span>
          <button
            onClick={() => setNotification(null)}
            className="ml-3 text-slate-400 hover:text-white font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        onOpenLogin={handleOpenLogin}
        activeSection={activeSection}
        isLoggedIn={userSession.isLoggedIn}
        userName={userSession.name}
        onLogout={handleLogout}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplore={() => handleScrollTo('dashboard')}
          onLogin={() => handleOpenLogin('student')}
          onOpenDashboardTab={(tab) => {
            setDashboardTab(tab);
            handleScrollTo('dashboard');
          }}
        />

        {/* Core Services Section */}
        <CoreServices onSelectService={handleSelectService} />

        {/* Interactive Student Operating System / Dashboard Preview */}
        <DashboardPreview
          initialTab={dashboardTab}
          onOpenFeedbackModal={() => setIsFeedbackModalOpen(true)}
          userGrievances={userGrievances}
        />

        {/* Smart Campus & Viksit Bharat @ 2047 Architecture Section */}
        <SmartCampus />

        {/* Operational Blueprint / How It Works */}
        <HowItWorks />

        {/* Student vs Administrator Experience Split */}
        <ExperienceSplit />

        {/* Project Context & About Section */}
        <AboutSection />
      </main>

      {/* Comprehensive Institutional Footer */}
      <Footer
        onOpenLogin={handleOpenLogin}
        onOpenFeedback={() => setIsFeedbackModalOpen(true)}
        onNavigateTab={(tab) => {
          setDashboardTab(tab);
          handleScrollTo('dashboard');
        }}
      />

      {/* Login Authentication Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        defaultRole={loginRole}
      />

      {/* Grievance & Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
        onSubmitGrievance={handleAddGrievance}
      />
    </div>
  );
}
