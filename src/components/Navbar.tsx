import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, UserCheck, Shield } from 'lucide-react';
import { UniversityLogo } from './UniversityLogo';

interface NavbarProps {
  onOpenLogin: (role?: 'student' | 'admin') => void;
  activeSection: string;
  isLoggedIn?: boolean;
  userName?: string;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLogin,
  activeSection,
  isLoggedIn = false,
  userName = 'Aarav Sharma',
  onLogout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Smart Campus', href: '#smart-campus' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Brand Wordmark & University Crest */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
          >
            <UniversityLogo size="sm" showText={false} />
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                Campus<span className="text-blue-600">360</span>
              </span>
              <span className="hidden sm:inline-block text-xs font-medium text-slate-500 border-l border-slate-300 pl-2">
                Silver Oak University
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Text with subtle hover) */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium tracking-normal transition-colors py-1 whitespace-nowrap ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Quick Access */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-medium text-slate-700">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{userName}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenLogin('admin')}
                  className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  title="Administrative Staff Gateway"
                >
                  <Shield className="w-3.5 h-3.5 text-slate-400" />
                  <span>Admin</span>
                </button>
                <button
                  onClick={() => onOpenLogin('student')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md transition-colors shadow-xs"
                >
                  <span>Student Login</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin('student');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-md"
              >
                <span>Student Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin('admin');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 rounded-md hover:bg-slate-50"
              >
                <Shield className="w-4 h-4 text-slate-400" />
                <span>Admin & Faculty Portal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
