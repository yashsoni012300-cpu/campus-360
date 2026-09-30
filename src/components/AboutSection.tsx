import React from 'react';
import { UniversityLogo } from './UniversityLogo';
import { ShieldCheck, Network, Sparkles, Building, Layers, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Emblem & Core Project Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <UniversityLogo size="lg" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  Silver Oak University
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Ahmedabad, Gujarat · Centre for Digital Innovation
                </p>
                <div className="text-[11px] text-blue-700 font-semibold mt-0.5 font-sans">
                  ज्ञानं परमं भूषणम् · Knowledge is the Supreme Ornament
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight text-balance">
              Engineered to Eliminate Fragmented University Communication
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Traditional campuses rely on scattered WhatsApp announcements, physical cork noticeboards,
              manual attendance ledgers, and disjointed library systems. This fragmentation causes
              missed deadlines, long administrative queues, and lost information.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong>Campus360</strong> consolidates every vital service into a sovereign,
              single-pane-of-glass digital operating system. Built for Silver Oak University’s
              dynamic student body, it delivers real-time visibility into attendance, library desks,
              authenticated circulars, and grievance redressal without administrative friction.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-xs">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Single Sign-On (SSO)</span>
                </div>
                <p className="text-slate-500 mt-1">
                  One federated account for turnstiles, exams, library, and grievances.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-xs">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Zero Paper Trails</span>
                </div>
                <p className="text-slate-500 mt-1">
                  100% digital clearance slips, signed circulars, and instant passes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Pillars & Institutional Blueprint */}
          <div className="lg:col-span-6 bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Core Principles of Campus360
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="p-2.5 bg-blue-50 text-blue-700 rounded-md shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Sovereign Data Privacy & Security
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Student attendance and academic records remain hosted on private university
                    infrastructure with strict role-based access control (RBAC). No third-party
                    commercial data brokers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="p-2.5 bg-sky-50 text-sky-700 rounded-md shrink-0">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Sub-second Synchrony Across Campus Nodes
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Biometric lecture hall scanners, library RFID turnstiles, and administrative
                    approval cells communicate over an event-driven campus bus in less than 200ms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-md shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Viksit Bharat @ 2047 Alignment
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Prepared for integration with national academic credit banks (ABC), DigiLocker
                    credential verification, and sustainable green campus energy protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Standard: IEEE / ISO 27001 Compliant Architecture</span>
              <span className="font-semibold text-slate-900">Version 3.6 Production</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
