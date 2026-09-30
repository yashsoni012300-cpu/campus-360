import React, { useState } from 'react';
import { X, Lock, ShieldCheck, GraduationCap, Building, ArrowRight, User } from 'lucide-react';
import { UniversityLogo } from './UniversityLogo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (name: string, role: string) => void;
  defaultRole?: 'student' | 'admin';
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  defaultRole = 'student',
}) => {
  const [role, setRole] = useState<'student' | 'faculty' | 'admin'>(
    defaultRole === 'admin' ? 'admin' : 'student'
  );
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  if (!isOpen) return null;

  const handleFillDemo = (type: 'student' | 'admin') => {
    if (type === 'student') {
      setRole('student');
      setIdentifier('21020310042');
      setPassword('••••••••••••');
    } else {
      setRole('admin');
      setIdentifier('ADM-SOU-882');
      setPassword('••••••••••••');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName =
      role === 'student' ? 'Aarav Sharma' : role === 'faculty' ? 'Dr. Rajesh Solanki' : 'Registrar Office';
    onLoginSuccess(finalName, role);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden z-10">
        {/* Header with Campus Image Backdrop */}
        <div className="relative bg-slate-950 text-white p-5 flex items-center justify-between border-b border-slate-800 overflow-hidden">
          <img
            src="/m_general_sou_banner.webp"
            alt="Campus Backdrop"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30 filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/75" />

          <div className="relative z-10 flex items-center gap-3">
            <UniversityLogo size="sm" />
            <div>
              <div className="text-sm font-bold flex items-center gap-1.5">
                <span>Campus360 Authentication Gateway</span>
              </div>
              <p className="text-[11px] text-slate-300">Silver Oak University Sovereign SSO</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="relative z-10 p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold">
          {[
            { id: 'student', label: 'Student', icon: GraduationCap },
            { id: 'faculty', label: 'Faculty', icon: User },
            { id: 'admin', label: 'Administrator', icon: Building },
          ].map((item) => {
            const Icon = item.icon;
            const isSel = role === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setRole(item.id as any);
                  if (item.id === 'student') setIdentifier('21020310042');
                  else if (item.id === 'faculty') setIdentifier('FAC-CE-104');
                  else setIdentifier('ADM-SOU-882');
                }}
                className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-colors cursor-pointer ${
                  isSel
                    ? 'border-blue-600 bg-white text-blue-700'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {role === 'student'
                ? 'Enrollment Number'
                : role === 'faculty'
                ? 'Faculty ID Code'
                : 'Administrative User ID'}
            </label>
            <input
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder={role === 'student' ? 'e.g. 21020310042' : 'e.g. ADM-SOU-882'}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono text-slate-900"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700">Password</label>
              <a href="#reset" onClick={(e) => e.preventDefault()} className="text-[11px] text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter university portal password"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
              />
              <Lock className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Remember session on this device</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Authenticate Session</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Quick Demo Pre-fills */}
          <div className="pt-4 border-t border-slate-100">
            <div className="text-[11px] font-medium text-slate-500 mb-2">Instant Demo Autofill:</div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleFillDemo('student')}
                className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-medium transition-colors text-left"
              >
                🎓 Student: Aarav Sharma
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('admin')}
                className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-medium transition-colors text-left"
              >
                🏛️ Admin: Dean / Registrar
              </button>
            </div>
          </div>
        </form>

        {/* Security Footer Notice */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            256-Bit TLS Secured
          </span>
          <span>SOU Identity Provider 2.4</span>
        </div>
      </div>
    </div>
  );
};
