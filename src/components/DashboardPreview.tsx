import React, { useState } from 'react';
import {
  CalendarCheck,
  BookOpen,
  Newspaper,
  CalendarDays,
  MessageSquareWarning,
  ArrowRight,
  Download,
  QrCode,
  CreditCard,
  Building2,
  Search,
  CheckCircle,
  AlertTriangle,
  Clock,
  Plus,
  ShieldCheck,
  User,
  MapPin,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import {
  STUDENT_PROFILE,
  SUBJECT_ATTENDANCE_DATA,
  LIBRARY_ZONES_DATA,
  LIBRARY_BOOKS_DATA,
  ANNOUNCEMENTS_DATA,
  CAMPUS_EVENTS_DATA,
  GRIEVANCE_TICKETS_DATA,
} from '../data/mockData';
import { LibraryBook, CampusEvent, GrievanceTicket } from '../types';

interface DashboardPreviewProps {
  initialTab?: string;
  onOpenFeedbackModal: () => void;
  userGrievances?: GrievanceTicket[];
}

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  initialTab = 'overview',
  onOpenFeedbackModal,
  userGrievances = [],
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [books, setBooks] = useState<LibraryBook[]>(LIBRARY_BOOKS_DATA);
  const [bookSearch, setBookSearch] = useState('');
  const [events, setEvents] = useState<CampusEvent[]>(CAMPUS_EVENTS_DATA);
  const [newsFilter, setNewsFilter] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Combine initial tickets with any dynamically submitted ones
  const allTickets = [...userGrievances, ...GRIEVANCE_TICKETS_DATA];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleReserveBook = (bookId: string) => {
    setBooks((prev) =>
      prev.map((b) => {
        if (b.id === bookId) {
          const nextState = !b.isReserved;
          showToast(
            nextState
              ? `Reserved "${b.title}". Collect from Circulation Desk within 24 hrs.`
              : `Reservation cancelled for "${b.title}".`
          );
          return {
            ...b,
            isReserved: nextState,
            availableCopies: nextState ? b.availableCopies - 1 : b.availableCopies + 1,
          };
        }
        return b;
      })
    );
  };

  const handleToggleEventRsvp = (eventId: string) => {
    setEvents((prev) =>
      prev.map((e) => {
        if (e.id === eventId) {
          const nextState = !e.isUserRegistered;
          showToast(
            nextState
              ? `RSVP confirmed for ${e.title}! Digital pass sent to student mail.`
              : `Registration cancelled for ${e.title}.`
          );
          return {
            ...e,
            isUserRegistered: nextState,
            registeredCount: nextState ? e.registeredCount + 1 : e.registeredCount - 1,
          };
        }
        return e;
      })
    );
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(bookSearch.toLowerCase()) ||
      b.authors.toLowerCase().includes(bookSearch.toLowerCase()) ||
      b.category.toLowerCase().includes(bookSearch.toLowerCase())
  );

  const filteredAnnouncements = ANNOUNCEMENTS_DATA.filter((a) => {
    if (newsFilter === 'all') return true;
    return a.category.toLowerCase() === newsFilter.toLowerCase();
  });

  const totalSeats = LIBRARY_ZONES_DATA.reduce((acc, z) => acc + z.totalSeats, 0);
  const totalOccupied = LIBRARY_ZONES_DATA.reduce((acc, z) => acc + z.occupiedSeats, 0);
  const totalFree = totalSeats - totalOccupied;

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <span>Interactive Portal Preview</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-500 font-medium lowercase">live session demo</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
              Campus360 Student Operating System
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              An authentic demonstration of the daily student interface. Interact with the live
              attendance calculator, real-time library seat telemetry, announcements, and grievance
              filing below.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-slate-500">Authenticated via:</span>
            <span className="text-xs font-semibold text-slate-800 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
              SOU SSO Gateway
            </span>
          </div>
        </div>

        {/* Portal Window Frame */}
        <div className="border border-slate-200 rounded-xl bg-slate-50 shadow-sm overflow-hidden">
          {/* Top Window Bar with Real Campus Image Backdrop */}
          <div className="relative bg-slate-950 text-white px-5 py-3.5 border-b border-slate-800 overflow-hidden">
            <img
              src="/m_general_sou_banner.webp"
              alt="Campus Backdrop"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-30 filter brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/75" />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20" />
                <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <span>Silver Oak University · Campus360 Portal</span>
                  <span className="text-slate-500">/</span>
                  <span className="text-blue-400 font-mono">ID: 21020310042</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <span className="text-slate-300 hidden sm:inline">
                  Academic Session: <span className="text-white font-medium">Winter 2026</span>
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/90 border border-slate-700/80 rounded text-slate-200 font-mono text-[11px] backdrop-blur-xs">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>Term Week 11</span>
                </div>
              </div>
            </div>
          </div>

          {/* Student Welcome Header Card */}
          <div className="p-6 bg-white border-b border-slate-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-xs shrink-0 border border-blue-500">
                  AS
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900">{STUDENT_PROFILE.name}</h3>
                    <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Active Student
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span>
                      Enr:{' '}
                      <strong className="text-slate-700 font-mono">
                        {STUDENT_PROFILE.enrollmentNo}
                      </strong>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{STUDENT_PROFILE.program}</span>
                    <span aria-hidden="true">·</span>
                    <span>{STUDENT_PROFILE.semester}</span>
                    <span aria-hidden="true">·</span>
                    <span>{STUDENT_PROFILE.institute}</span>
                  </div>
                </div>
              </div>

              {/* Key Student Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                    Attendance
                  </div>
                  <div className="text-lg font-bold font-mono text-emerald-700 mt-0.5 tabular-nums">
                    {STUDENT_PROFILE.overallAttendance}%
                  </div>
                  <div className="text-[10px] text-slate-500">Safe (&gt;75% required)</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                    CGPA
                  </div>
                  <div className="text-lg font-bold font-mono text-slate-900 mt-0.5 tabular-nums">
                    {STUDENT_PROFILE.cgpa}
                  </div>
                  <div className="text-[10px] text-slate-500">Rank 4 in Branch</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                    Library Loans
                  </div>
                  <div className="text-lg font-bold font-mono text-blue-700 mt-0.5 tabular-nums">
                    {STUDENT_PROFILE.booksCheckedOut} Books
                  </div>
                  <div className="text-[10px] text-slate-500">Due: Oct 18, 2026</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                    Next Exam
                  </div>
                  <div className="text-sm font-bold font-mono text-slate-900 mt-1">
                    {STUDENT_PROFILE.nextExamDate}
                  </div>
                  <div className="text-[10px] text-slate-500">Theory Session</div>
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs font-semibold text-slate-700">Quick Actions:</div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => showToast('Winter 2026 Hall Ticket (PDF) generated.')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Download Hall Ticket</span>
                </button>

                <button
                  onClick={() => showToast('Digital RFID Gate Pass verified for Main Campus Gate.')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-colors"
                >
                  <QrCode className="w-3.5 h-3.5 text-slate-500" />
                  <span>Digital Gate Pass</span>
                </button>

                <button
                  onClick={() => showToast('Fee payment receipt for Semester VI loaded.')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-colors"
                >
                  <CreditCard className="w-3.5 h-3.5 text-slate-500" />
                  <span>Fee Receipts</span>
                </button>

                <button
                  onClick={onOpenFeedbackModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>File Grievance / Feedback</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="bg-slate-100/80 px-6 border-b border-slate-200 flex overflow-x-auto scrollbar-none">
            {[
              { id: 'overview', label: 'All-in-One Overview', icon: Building2 },
              { id: 'attendance', label: 'Attendance', icon: CalendarCheck },
              { id: 'library', label: 'Library Availability', icon: BookOpen },
              { id: 'announcements', label: 'Campus News', icon: Newspaper },
              { id: 'events', label: 'Events & Life', icon: CalendarDays },
              { id: 'grievance', label: 'Grievance Desk', icon: MessageSquareWarning },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3.5 text-xs font-medium whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                    isActive
                      ? 'border-blue-600 text-blue-700 font-semibold bg-white'
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Area */}
          <div className="p-6">
            {/* Toast Notification Banner */}
            {toastMessage && (
              <div className="mb-6 p-3.5 bg-blue-50 border border-blue-200 rounded-md flex items-center justify-between text-xs text-blue-900 transition-all animate-fadeIn">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{toastMessage}</span>
                </div>
                <button
                  onClick={() => setToastMessage(null)}
                  className="text-blue-500 hover:text-blue-800 text-xs font-bold"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* TAB 1: ALL-IN-ONE OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Attendance Overview & Library Summary */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Attendance Snapshot Card */}
                    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <CalendarCheck className="w-4 h-4 text-blue-600" />
                          <h4 className="text-sm font-bold text-slate-900">Attendance Overview</h4>
                        </div>
                        <button
                          onClick={() => setActiveTab('attendance')}
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Subject Breakdown →
                        </button>
                      </div>

                      <div className="mt-4 space-y-3">
                        {SUBJECT_ATTENDANCE_DATA.slice(0, 3).map((sub) => (
                          <div key={sub.id} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-medium text-slate-800">
                                {sub.code} · {sub.name}
                              </span>
                              <span className="font-mono font-semibold text-slate-700 tabular-nums">
                                {sub.attended}/{sub.total} ({sub.percentage}%)
                              </span>
                            </div>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  sub.percentage >= 85
                                    ? 'bg-emerald-500'
                                    : sub.percentage >= 75
                                    ? 'bg-amber-500'
                                    : 'bg-rose-500'
                                }`}
                                style={{ width: `${sub.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Biometrics auto-synced today 02:45 PM</span>
                        <span className="text-emerald-700 font-medium">Eligible for Term Exam</span>
                      </div>
                    </div>

                    {/* Library Availability Summary */}
                    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-sky-600" />
                          <h4 className="text-sm font-bold text-slate-900">
                            Central Library Live Availability
                          </h4>
                        </div>
                        <button
                          onClick={() => setActiveTab('library')}
                          className="text-xs text-sky-600 hover:text-sky-800 font-medium"
                        >
                          Interactive Floor Map →
                        </button>
                      </div>

                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {LIBRARY_ZONES_DATA.map((z) => {
                          const free = z.totalSeats - z.occupiedSeats;
                          const percentOccupied = Math.round((z.occupiedSeats / z.totalSeats) * 100);
                          return (
                            <div key={z.id} className="p-3 bg-slate-50 rounded border border-slate-200/80">
                              <div className="text-[11px] font-semibold text-slate-700 truncate">
                                {z.name.replace(' Floor', '')}
                              </div>
                              <div className="text-xs font-mono font-bold text-slate-900 mt-1 tabular-nums">
                                {free} / {z.totalSeats} free
                              </div>
                              <div className="text-[10px] text-slate-500 mt-0.5">
                                {percentOccupied}% full
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: News & Events & Grievance shortcut */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Latest Campus Announcements */}
                    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <Newspaper className="w-4 h-4 text-blue-600" />
                          <h4 className="text-sm font-bold text-slate-900">
                            Latest Campus Circulars
                          </h4>
                        </div>
                        <button
                          onClick={() => setActiveTab('announcements')}
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View All ({ANNOUNCEMENTS_DATA.length}) →
                        </button>
                      </div>

                      <div className="mt-3 space-y-3">
                        {ANNOUNCEMENTS_DATA.slice(0, 2).map((ann) => (
                          <div
                            key={ann.id}
                            className="p-3 bg-slate-50 hover:bg-slate-100 rounded border border-slate-200/80 transition-colors"
                          >
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span className="font-mono text-blue-700 font-medium">{ann.category}</span>
                              <span>{ann.date}</span>
                            </div>
                            <h5 className="text-xs font-bold text-slate-900 mt-1 line-clamp-1">
                              {ann.title}
                            </h5>
                            <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                              {ann.summary}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Active Grievance Tracker Card */}
                    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <MessageSquareWarning className="w-4 h-4 text-amber-600" />
                          <h4 className="text-sm font-bold text-slate-900">
                            Active Student Grievance
                          </h4>
                        </div>
                        <button
                          onClick={onOpenFeedbackModal}
                          className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                        >
                          + New Ticket
                        </button>
                      </div>

                      {allTickets.length > 0 ? (
                        <div className="mt-3 p-3 bg-amber-50/50 border border-amber-200/80 rounded-md">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-mono font-bold text-amber-900">
                              {allTickets[0].ticketId}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800 border border-amber-300">
                              {allTickets[0].status}
                            </span>
                          </div>
                          <div className="text-xs font-bold text-slate-900 mt-1">
                            {allTickets[0].title}
                          </div>
                          <div className="text-[11px] text-slate-600 mt-1">
                            Assigned to: {allTickets[0].department}
                          </div>
                          <div className="text-[11px] text-amber-700 font-medium mt-2 flex items-center justify-between">
                            <span>SLA Window: {allTickets[0].slaHoursRemaining}h remaining</span>
                            <button
                              onClick={() => setActiveTab('grievance')}
                              className="text-blue-600 hover:underline font-semibold"
                            >
                              Track Status →
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="py-6 text-center text-xs text-slate-500">
                          No unresolved grievances. All campus services operational.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ATTENDANCE DETAILED INSPECTOR */}
            {activeTab === 'attendance' && (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 text-white rounded">
                      <CalendarCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        UGC & University 75% Attendance Compliance
                      </h4>
                      <p className="text-xs text-slate-600">
                        Overall current standing:{' '}
                        <strong className="text-emerald-700 font-mono">
                          {STUDENT_PROFILE.overallAttendance}% (Eligible)
                        </strong>
                        . Students below 75% are debarred from end-semester examinations.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      showToast(
                        'Medical Regularization Form downloaded. Submit within 7 days of absence.'
                      )
                    }
                    className="px-3.5 py-2 text-xs font-semibold text-blue-700 bg-white border border-blue-300 rounded hover:bg-blue-50 shrink-0"
                  >
                    Request Leave Regularization
                  </button>
                </div>

                {/* Subject Attendance Table */}
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-700">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Subject</th>
                          <th className="py-3 px-4">Faculty In-Charge</th>
                          <th className="py-3 px-4 text-center">Attended / Total</th>
                          <th className="py-3 px-4 text-center">Percentage</th>
                          <th className="py-3 px-4 text-center">Status</th>
                          <th className="py-3 px-4 text-right">Last Sync</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {SUBJECT_ATTENDANCE_DATA.map((subject) => {
                          const isSafe = subject.percentage >= 80;
                          const isWarning = subject.percentage >= 75 && subject.percentage < 80;
                          return (
                            <tr key={subject.id} className="hover:bg-slate-50/60 transition-colors">
                              <td className="py-3.5 px-4">
                                <div className="font-bold text-slate-900">{subject.name}</div>
                                <div className="text-[11px] font-mono text-slate-500">{subject.code}</div>
                              </td>
                              <td className="py-3.5 px-4 font-medium text-slate-600">
                                {subject.faculty}
                              </td>
                              <td className="py-3.5 px-4 text-center font-mono font-medium tabular-nums">
                                {subject.attended} / {subject.total}
                              </td>
                              <td className="py-3.5 px-4 text-center">
                                <span
                                  className={`inline-block font-mono font-bold text-xs tabular-nums px-2 py-0.5 rounded ${
                                    isSafe
                                      ? 'text-emerald-700 bg-emerald-50'
                                      : isWarning
                                      ? 'text-amber-700 bg-amber-50'
                                      : 'text-rose-700 bg-rose-50'
                                  }`}
                                >
                                  {subject.percentage}%
                                </span>
                              </td>
                              <td className="py-3.5 px-4 text-center">
                                <span
                                  className={`inline-flex items-center gap-1 text-[11px] font-medium ${
                                    isSafe
                                      ? 'text-emerald-700'
                                      : isWarning
                                      ? 'text-amber-700'
                                      : 'text-rose-700'
                                  }`}
                                >
                                  {isSafe ? (
                                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                  ) : (
                                    <AlertTriangle className="w-3.5 h-3.5" />
                                  )}
                                  {isSafe ? 'Compliant' : isWarning ? 'Warning (&lt;80%)' : 'Critical Deficit'}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 text-right text-slate-500 font-mono text-[11px]">
                                {subject.lastUpdated}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: LIBRARY SEATS & OPAC CATALOG */}
            {activeTab === 'library' && (
              <div className="space-y-6">
                {/* Real-time Library Telemetry Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {LIBRARY_ZONES_DATA.map((zone) => {
                    const free = zone.totalSeats - zone.occupiedSeats;
                    const percent = Math.round((zone.occupiedSeats / zone.totalSeats) * 100);
                    return (
                      <div
                        key={zone.id}
                        className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs"
                      >
                        <div className="flex items-start justify-between">
                          <span className="text-xs font-bold text-slate-900">{zone.name}</span>
                          <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                            {zone.floor}
                          </span>
                        </div>
                        <div className="mt-3 flex items-baseline justify-between">
                          <span className="text-2xl font-bold font-mono text-blue-600 tabular-nums">
                            {free}
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            of {zone.totalSeats} seats open
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              percent > 85
                                ? 'bg-rose-500'
                                : percent > 60
                                ? 'bg-amber-500'
                                : 'bg-emerald-500'
                            }`}
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <div className="mt-2 text-[10px] text-slate-500 flex items-center justify-between">
                          <span>{zone.quietLevel}</span>
                          <span>{zone.powerOutlets ? 'Power Outlets ✓' : ''}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Library Catalog Search & Reservation */}
                <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Central Library OPAC Catalog Lookup
                      </h4>
                      <p className="text-xs text-slate-500">
                        Check real-time shelf status or reserve copies for counter pickup.
                      </p>
                    </div>

                    <div className="relative w-full sm:w-72">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search title, author, topic..."
                        value={bookSearch}
                        onChange={(e) => setBookSearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Books List */}
                  <div className="mt-4 divide-y divide-slate-100">
                    {filteredBooks.map((book) => (
                      <div
                        key={book.id}
                        className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div>
                          <div className="font-bold text-xs text-slate-900">{book.title}</div>
                          <div className="text-[11px] text-slate-600 mt-0.5">
                            Author: {book.authors} · Call No:{' '}
                            <span className="font-mono text-slate-800">{book.callNumber}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            Location: {book.location}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <div className="text-right">
                            <span
                              className={`text-xs font-mono font-bold ${
                                book.availableCopies > 0 ? 'text-emerald-700' : 'text-rose-600'
                              }`}
                            >
                              {book.availableCopies} of {book.totalCopies} Available
                            </span>
                          </div>

                          <button
                            onClick={() => handleReserveBook(book.id)}
                            disabled={book.availableCopies === 0 && !book.isReserved}
                            className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                              book.isReserved
                                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                                : book.availableCopies > 0
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            }`}
                          >
                            {book.isReserved
                              ? 'Cancel Hold'
                              : book.availableCopies > 0
                              ? 'Reserve Copy'
                              : 'All Issued'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CAMPUS NEWS & OFFICIAL CIRCULARS */}
            {activeTab === 'announcements' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-700">Filter Circulars:</span>
                    {['all', 'Academics', 'Examination', 'Administration', 'Placement'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setNewsFilter(cat)}
                        className={`px-2.5 py-1 text-xs rounded transition-colors ${
                          newsFilter === cat
                            ? 'bg-blue-600 text-white font-medium'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat === 'all' ? 'All Updates' : cat}
                      </button>
                    ))}
                  </div>

                  <span className="text-xs text-slate-500">
                    Cryptographically authenticated by Registrar Office
                  </span>
                </div>

                <div className="space-y-4">
                  {filteredAnnouncements.map((ann) => (
                    <div
                      key={ann.id}
                      className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs hover:border-slate-300 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-bold text-blue-700 uppercase">{ann.category}</span>
                          <span className="text-slate-300">|</span>
                          <span className="font-mono text-slate-500">{ann.referenceNo}</span>
                          {ann.isImportant && (
                            <span className="px-1.5 py-0.5 bg-rose-50 text-rose-700 font-semibold rounded text-[10px] border border-rose-200">
                              Urgent
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-400 font-mono">{ann.date}</span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 mt-2">{ann.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{ann.summary}</p>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium">
                          Issuing Authority: {ann.department}
                        </span>
                        <button
                          onClick={() => showToast(`Downloaded Official Circular ${ann.referenceNo}`)}
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Signed PDF</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: EVENTS & LIFE */}
            {activeTab === 'events' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {events.map((evt) => (
                    <div
                      key={evt.id}
                      className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-blue-700 uppercase">{evt.category}</span>
                          <span className="text-slate-500 font-mono text-[11px]">{evt.date}</span>
                        </div>

                        <h4 className="text-sm font-bold text-slate-900 mt-2">{evt.title}</h4>

                        <div className="mt-2 space-y-1 text-xs text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>{evt.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>{evt.venue}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                          {evt.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-500 tabular-nums">
                          {evt.registeredCount} / {evt.capacity} registered
                        </span>

                        <button
                          onClick={() => handleToggleEventRsvp(evt.id)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                            evt.isUserRegistered
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                        >
                          {evt.isUserRegistered ? 'Registered ✓' : 'Register (Free)'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 6: GRIEVANCE DESK */}
            {activeTab === 'grievance' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-100 rounded-lg border border-slate-200">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Automated Campus Grievance Redressal
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Direct escalation to Dean of Student Welfare and Head of Estate. Guaranteed
                      48-hour SLA resolution.
                    </p>
                  </div>
                  <button
                    onClick={onOpenFeedbackModal}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-xs transition-colors shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>File New Grievance / Feedback</span>
                  </button>
                </div>

                {/* Tickets List */}
                <div className="space-y-4">
                  {allTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-blue-700">
                            {ticket.ticketId}
                          </span>
                          <span className="text-slate-300">·</span>
                          <span className="text-xs font-medium text-slate-500">
                            {ticket.category}
                          </span>
                          {ticket.isAnonymous && (
                            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                              Anonymous
                            </span>
                          )}
                        </div>

                        <span
                          className={`px-2.5 py-0.5 rounded text-xs font-semibold ${
                            ticket.status === 'Resolved'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : ticket.status === 'In Progress'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 mt-2">{ticket.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {ticket.description}
                      </p>

                      {ticket.resolutionNote && (
                        <div className="mt-3 p-3 bg-emerald-50/70 border border-emerald-200 rounded text-xs text-emerald-900">
                          <strong>Resolution Note:</strong> {ticket.resolutionNote}
                        </div>
                      )}

                      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
                        <span>Submitted: {ticket.submittedOn}</span>
                        <span>Routing: {ticket.department}</span>
                        {ticket.status !== 'Resolved' && (
                          <span className="font-medium text-amber-700">
                            SLA: {ticket.slaHoursRemaining} hrs remaining
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
