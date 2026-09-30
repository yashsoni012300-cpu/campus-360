import React, { useState } from 'react';
import {
  GraduationCap,
  Shield,
  CheckCircle2,
  CalendarCheck,
  BookOpen,
  Newspaper,
  CalendarDays,
  MessageSquareWarning,
  Users,
  Settings,
  Sliders,
  Send,
  FileSpreadsheet,
} from 'lucide-react';

export const ExperienceSplit: React.FC = () => {
  const [activeRole, setActiveRole] = useState<'student' | 'admin'>('student');

  const studentPoints = [
    {
      title: 'View Attendance in Real-Time',
      desc: 'Subject-by-subject percentage calculation, absence logs, and automated warnings before dropping below the 75% examination threshold.',
      icon: CalendarCheck,
    },
    {
      title: 'Check Library Resources & Live Desks',
      desc: 'Floor-by-floor reading room occupancy indicators, OPAC book availability, and instant copy holds for counter pickup.',
      icon: BookOpen,
    },
    {
      title: 'View News and Verified Events',
      desc: 'Direct examination timetables, departmental circulars, tech symposiums, and 1-tap RSVP passes sent to university email.',
      icon: Newspaper,
    },
    {
      title: 'Submit Complaints and Feedback',
      desc: 'Confidential grievance filing for hostel, Wi-Fi, lab, and canteen issues with guaranteed 48-hour administrative SLA tracking.',
      icon: MessageSquareWarning,
    },
  ];

  const adminPoints = [
    {
      title: 'Manage 28,000+ Students & Batches',
      desc: 'Centralized enrollment registries, student dossier archives, batch allocation, and unified academic standing audits.',
      icon: Users,
    },
    {
      title: 'Manage Attendance & Exemption Rules',
      desc: 'Audit biometric turnstile telemetry, process faculty log reconciliations, and review medical regularization petitions.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Manage Library Resources & Asset RFID',
      desc: 'Catalog inventory management, circulation penalties, zone capacity configuration, and return tracking across reading halls.',
      icon: BookOpen,
    },
    {
      title: 'Publish News, Events & Timetables',
      desc: 'Author tamper-evident circulars signed with institutional keys and broadcast notifications targeted by semester or branch.',
      icon: Send,
    },
    {
      title: 'Manage Complaints & Feedback SLAs',
      desc: 'Assign tickets to facility deans, monitor SLA countdowns, maintain resolution audit trails, and audit grievance redressal metrics.',
      icon: Sliders,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-wider text-blue-700 uppercase">
            Two Perspectives · One Ecosystem
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
            Tailored Experiences for Students and Administrators
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Campus360 delivers role-specific interfaces designed with maximum clarity. Students get
            an unburdened daily portal, while academic leadership gains institutional command.
          </p>
        </div>

        {/* Role Toggle Selector */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-lg max-w-sm mb-10 border border-slate-200">
          <button
            onClick={() => setActiveRole('student')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeRole === 'student'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>Student Experience</span>
          </button>
          <button
            onClick={() => setActiveRole('admin')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeRole === 'admin'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Shield className="w-4 h-4 text-indigo-600" />
            <span>Administrator Experience</span>
          </button>
        </div>

        {/* Dual Column Layout showing both, with active highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Student Experience Card */}
          <div
            className={`p-8 rounded-xl border transition-all ${
              activeRole === 'student'
                ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20'
                : 'bg-slate-50/70 border-slate-200 opacity-90'
            }`}
          >
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-100">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Students</h3>
                  <p className="text-xs text-slate-500">
                    Frictionless academic navigation & resource tracking
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold font-mono px-2.5 py-1 bg-blue-50 text-blue-800 rounded">
                Portal View
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {studentPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="p-2 bg-slate-100 rounded text-blue-600 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Optimized for desktop, tablet, and mobile</span>
              <span className="text-blue-600 font-semibold">Zero Paper Forms</span>
            </div>
          </div>

          {/* Administrator Experience Card */}
          <div
            className={`p-8 rounded-xl border transition-all ${
              activeRole === 'admin'
                ? 'bg-white border-indigo-500 shadow-md ring-1 ring-indigo-500/20'
                : 'bg-slate-50/70 border-slate-200 opacity-90'
            }`}
          >
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-50 text-indigo-700 rounded-lg border border-indigo-100">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Administrators</h3>
                  <p className="text-xs text-slate-500">
                    Sovereign university orchestration & governance
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold font-mono px-2.5 py-1 bg-indigo-50 text-indigo-800 rounded">
                Console View
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {adminPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="p-2 bg-slate-100 rounded text-indigo-600 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Granular Role-Based Access Control (RBAC)</span>
              <span className="text-indigo-600 font-semibold">Audit Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
