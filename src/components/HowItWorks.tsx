import React from 'react';
import { KeyRound, Layers, Radio } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Sign In',
      subtitle: 'Unified Single Sign-On',
      description:
        'Access Campus360 securely through your student enrollment number or university administrator credentials with federated 2FA security.',
      icon: KeyRound,
      featureBadge: 'SSO Federated Auth',
    },
    {
      step: '02',
      title: 'Access Services',
      subtitle: 'Centralized Live Dashboard',
      description:
        'View live biometric attendance, check Central Library desk occupancy, reserve research volumes, and explore verified academic news and hackathons.',
      icon: Layers,
      featureBadge: 'Real-time Telemetry',
    },
    {
      step: '03',
      title: 'Stay Connected',
      subtitle: 'Zero-Friction Administration',
      description:
        'Receive official exam circulars directly from the registrar, submit trackable grievance feedback, and download digitally stamped hall tickets.',
      icon: Radio,
      featureBadge: '48hr SLA Redressal',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold tracking-wider text-blue-700 uppercase">
            Operational Blueprint
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
            How Campus360 Powers Daily University Life
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            A frictionless three-step operational cycle connecting 28,000+ students and 1,200+
            faculty members into an agile digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white p-8 rounded-lg border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <span className="text-2xl font-black font-mono text-blue-600 tabular-nums">
                      {item.step}
                    </span>
                    <div className="p-2.5 bg-blue-50 text-blue-700 rounded-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-6">{item.title}</h3>
                  <div className="text-xs font-semibold text-blue-700 mt-1">{item.subtitle}</div>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                  <span>Phase {index + 1} of 3</span>
                  <span className="font-semibold text-slate-700">{item.featureBadge}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
