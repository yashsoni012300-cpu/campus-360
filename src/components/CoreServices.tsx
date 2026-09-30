import React from 'react';
import {
  CalendarCheck,
  BookOpen,
  Newspaper,
  CalendarDays,
  MessageSquareWarning,
  ArrowRight,
} from 'lucide-react';

interface CoreServicesProps {
  onSelectService: (serviceKey: string) => void;
}

export const CoreServices: React.FC<CoreServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'attendance',
      title: 'Attendance',
      subtitle: 'Automated biometric & lecture monitoring',
      description:
        'Continuous synchronization between campus RFID turnstiles and professor classroom logs. Real-time deficit alerts keep you comfortably above the 75% university norm.',
      icon: CalendarCheck,
      keyMetric: '88.4% Average Student Synced',
      actionLabel: 'Check Attendance Logs',
    },
    {
      id: 'library',
      title: 'Library Availability',
      subtitle: 'Live seat counts & catalog reservations',
      description:
        'Instant visibility into Central Library seating across 4 reading zones. Search over 120,000 volumes, view shelf locations, and place reservations with zero counter queues.',
      icon: BookOpen,
      keyMetric: '76 Desks Open Across 4 Floors',
      actionLabel: 'View Library Floor Map',
    },
    {
      id: 'announcements',
      title: 'Campus News',
      subtitle: 'Tamper-evident official university circulars',
      description:
        'Direct broadcasts authenticated by the Controller of Examinations and Dean of Academics. Categorized by department to eliminate unverified social media circulars.',
      icon: Newspaper,
      keyMetric: 'Exam Timetables & Circulars Live',
      actionLabel: 'Read Official Circulars',
    },
    {
      id: 'events',
      title: 'Events',
      subtitle: 'Centralized symposium & hackathon registry',
      description:
        'Never miss university tech symposiums, national hackathons, cultural festivals, or industry recruitment webinars. Reserve digital entry passes with one tap.',
      icon: CalendarDays,
      keyMetric: '3 Major Events Open for RSVP',
      actionLabel: 'Browse University Events',
    },
    {
      id: 'grievance',
      title: 'Complaints & Feedback',
      subtitle: 'Transparent grievance redressal with SLA tracking',
      description:
        'Submit infrastructure, mess, laboratory, or academic feedback with optional anonymity. Every ticket is routed directly to the responsible dean with an automated resolution timer.',
      icon: MessageSquareWarning,
      keyMetric: '48-Hour Enforced SLA Redressal',
      actionLabel: 'Track or File Grievance',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold tracking-wider text-blue-700 uppercase">
            Campus360 Infrastructure
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2 text-balance">
            Everything Students Need, In One Place
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Eliminating fragmented communication and disconnected systems by unifying every vital
            academic and administrative touchpoint into a sovereign university platform.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Let the 5th item take 2 cols on lg if desired or fit cleanly
            const isLast = index === 4;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.id)}
                className={`group bg-white p-7 rounded-lg border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-5 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-blue-600 mt-1">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    {service.keyMetric}
                  </span>
                  <span className="font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                    <span>{service.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
