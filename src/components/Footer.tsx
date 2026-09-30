import React from 'react';
import { UniversityLogo } from './UniversityLogo';
import { ShieldCheck, Mail, Phone, MapPin, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLogin: (role?: 'student' | 'admin') => void;
  onOpenFeedback: () => void;
  onNavigateTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLogin,
  onOpenFeedback,
  onNavigateTab,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 text-xs border-t border-slate-800 overflow-hidden">
      {/* Background Campus Image Layer replacing plain dark ink blue */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/m_general_sou_banner.webp"
          alt="Silver Oak University Campus Grounds"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Institutional Brand & Motto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <UniversityLogo size="md" />
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  Campus<span className="text-blue-500">360</span>
                </span>
                <p className="text-[11px] text-slate-400">
                  Integrated Digital Hub for Campus Services and Academic Resources
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sovereign university digital infrastructure engineered for Silver Oak University,
              Ahmedabad. Unifying student attendance, library reserves, authenticated circulars, and
              administrative governance into one resilient platform.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
              <span className="text-emerald-400 font-semibold">● Live Production Node</span>
              <span>·</span>
              <span>UGC & NIRF Digital Standards Compliant</span>
            </div>
          </div>

          {/* Col 3: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Campus Services
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateTab('attendance')}
                  className="hover:text-white transition-colors"
                >
                  Biometric Attendance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('library')}
                  className="hover:text-white transition-colors"
                >
                  Central Library OPAC & Seats
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('announcements')}
                  className="hover:text-white transition-colors"
                >
                  Verified Campus Circulars
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('events')}
                  className="hover:text-white transition-colors"
                >
                  Hackathons & Events Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('grievance')}
                  className="hover:text-white transition-colors"
                >
                  48-Hour Grievance Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Academic Portals
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenLogin('student')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Student Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLogin('admin')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Admin & Faculty Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenFeedback}
                  className="hover:text-white transition-colors"
                >
                  Submit Student Feedback
                </button>
              </li>
              <li>
                <a
                  href="#smart-campus"
                  className="hover:text-white transition-colors"
                >
                  Viksit Bharat @ 2047 Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: University Helpdesk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Campus Helpdesk
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  Opp. Bhagwat Vidyapith, S.G. Highway, Gota, Ahmedabad, Gujarat 382481
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="font-mono text-slate-300">support.campus360@silveroakuni.ac.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="font-mono text-slate-300">+91 79 6604 6300</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Campus360 · Silver Oak University. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Sovereign Campus Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Privacy & RBAC Security</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
