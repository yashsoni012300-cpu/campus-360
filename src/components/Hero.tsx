import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, BookOpen, Clock, Users } from 'lucide-react';
import { UniversityLogo } from './UniversityLogo';

interface HeroProps {
  onExplore: () => void;
  onLogin: () => void;
  onOpenDashboardTab?: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onLogin, onOpenDashboardTab }) => {
  const [bannerFailed, setBannerFailed] = useState(false);

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Campus Banner with High Fidelity Visibility */}
      <div className="absolute inset-0 z-0">
        {!bannerFailed ? (
          <img
            src="/m_general_sou_banner.webp"
            alt="Silver Oak University Campus Aircraft & Grounds"
            className="w-full h-full object-cover object-center opacity-65 transform scale-100 transition-all duration-700"
            referrerPolicy="no-referrer"
            onError={() => setBannerFailed(true)}
          />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        )}
        {/* Soft, readable gradient preserving campus architecture */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Institutional Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Institutional Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-slate-800/80 border border-slate-700/80 rounded-md text-xs font-medium text-slate-300 backdrop-blur-xs">
              <UniversityLogo size="sm" />
              <span>Silver Oak University · Centre for Digital Innovation</span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="hidden sm:inline text-blue-400 font-semibold">Viksit Bharat @ 2047</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              One Campus. <br />
              One Platform. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Everything Connected.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Campus360 brings essential campus services such as attendance, library resources,
              campus news, events, and student feedback into one centralized digital platform.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Explore Campus360</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onLogin}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Student Login</span>
              </button>
            </div>

            {/* Adjacency Trust Indicators */}
            <div className="pt-6 border-t border-slate-800/90 grid grid-cols-3 gap-4 max-w-xl text-slate-400 text-xs">
              <div>
                <div className="text-white font-bold text-lg font-mono tabular-nums">28,000+</div>
                <div className="text-slate-400 font-medium mt-0.5">Enrolled Students</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg font-mono tabular-nums">100%</div>
                <div className="text-slate-400 font-medium mt-0.5">Paperless Clearance</div>
              </div>
              <div>
                <div className="text-emerald-400 font-bold text-lg font-mono tabular-nums">&lt; 45ms</div>
                <div className="text-slate-400 font-medium mt-0.5">Biometric Sync</div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Student Portal Live Preview Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Realistic University Portal Frame */}
              <div className="bg-slate-900 border border-slate-700/80 rounded-lg shadow-2xl overflow-hidden backdrop-blur-md">
                {/* Simulated Portal Top Navigation */}
                <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                    <span className="font-semibold text-white">Campus360 Student Portal</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px] tabular-nums">
                    TERM WINTER 2026
                  </span>
                </div>

                {/* Student Identity Strip with Campus Backdrop */}
                <div className="relative p-4 border-b border-slate-800/80 flex items-center justify-between overflow-hidden">
                  <img
                    src="/m_general_sou_banner.webp"
                    alt="Campus Backdrop"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-30 filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/80" />

                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-blue-700 text-white font-bold flex items-center justify-center text-sm shadow-xs border border-blue-500/40">
                      AS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>Aarav Sharma</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        Enr: 21020310042 · Sem VI CE
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Institute
                    </span>
                    <p className="text-xs text-slate-200 font-medium">SOCET Engineering</p>
                  </div>
                </div>

                {/* Live Portal Metric Cards */}
                <div className="p-4 space-y-3 bg-slate-950/40">
                  {/* Attendance Glance */}
                  <div
                    onClick={() => {
                      onExplore();
                      onOpenDashboardTab?.('attendance');
                    }}
                    className="p-3 bg-slate-900/90 hover:bg-slate-850 border border-slate-800 rounded-md transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-slate-300 font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Biometric & Lecture Attendance
                      </span>
                      <span className="text-white font-mono font-bold tabular-nums">88.4%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                        style={{ width: '88.4%' }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1.5">
                      <span>Threshold: 75% required</span>
                      <span className="text-emerald-400 font-medium group-hover:underline">
                        Safe · View Breakdown →
                      </span>
                    </div>
                  </div>

                  {/* Library Availability Quick Row */}
                  <div
                    onClick={() => {
                      onExplore();
                      onOpenDashboardTab?.('library');
                    }}
                    className="p-3 bg-slate-900/90 hover:bg-slate-850 border border-slate-800 rounded-md transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                        Central Library Seats
                      </span>
                      <span className="text-sky-300 font-mono font-semibold tabular-nums text-xs">
                        76 Available
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span>164 / 240 occupied (Quiet Wing)</span>
                      <span className="text-sky-400 group-hover:underline">Live Map →</span>
                    </div>
                  </div>

                  {/* Latest Urgent Broadcast */}
                  <div
                    onClick={() => {
                      onExplore();
                      onOpenDashboardTab?.('announcements');
                    }}
                    className="p-3 bg-blue-950/40 border border-blue-900/50 rounded-md cursor-pointer hover:bg-blue-950/60 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 p-1 bg-blue-600/30 text-blue-300 rounded shrink-0">
                        <Clock className="w-3 h-3" />
                      </div>
                      <div className="text-xs">
                        <div className="font-semibold text-slate-200">
                          Mid-Semester Exam Schedule Published
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          Ref: SOU/EXAM/W26/1042 · Download hall tickets
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Shortcut Bar */}
                <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    RFID Card Synced
                  </span>
                  <button
                    onClick={onExplore}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                  >
                    <span>Open Interactive Portal</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
