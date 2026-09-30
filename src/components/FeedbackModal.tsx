import React, { useState } from 'react';
import { X, MessageSquareWarning, Send, Shield, Paperclip } from 'lucide-react';
import { GrievanceTicket } from '../types';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitGrievance: (ticket: GrievanceTicket) => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  onSubmitGrievance,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<
    'Academic Facility' | 'Hostel & Mess' | 'Wi-Fi & IT Infrastructure' | 'Transport' | 'Library'
  >('Academic Facility');
  const [department, setDepartment] = useState('Estate & Facility Management');
  const [description, setDescription] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newTicket: GrievanceTicket = {
      id: `grv-${Date.now()}`,
      ticketId: `GRV-2026-${randomSuffix}`,
      title,
      category,
      department,
      submittedOn: 'Just now',
      status: 'Under Review',
      slaHoursRemaining: 48,
      description,
      isAnonymous,
    };

    onSubmitGrievance(newTicket);
    setTitle('');
    setDescription('');
    onClose();
  };

  const handleCategoryChange = (val: any) => {
    setCategory(val);
    if (val === 'Wi-Fi & IT Infrastructure') {
      setDepartment('Information Technology Centre');
    } else if (val === 'Library') {
      setDepartment('Central Library Administration');
    } else if (val === 'Hostel & Mess') {
      setDepartment('Hostel Wardens & Mess Committee');
    } else if (val === 'Transport') {
      setDepartment('Campus Transit Operations');
    } else {
      setDepartment('Estate & Facility Management');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden z-10">
        <div className="relative bg-slate-950 text-white p-5 flex items-center justify-between border-b border-slate-800 overflow-hidden">
          <img
            src="/m_general_sou_banner.webp"
            alt="Campus Backdrop"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30 filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/75" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded text-white shadow-xs">
              <MessageSquareWarning className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Campus Grievance & Student Feedback</h3>
              <p className="text-[11px] text-slate-300">Guaranteed 48-Hour SLA Redressal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="relative z-10 p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Issue Category
            </label>
            <select
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 font-medium"
            >
              <option value="Academic Facility">Academic Facility / Classroom / Labs</option>
              <option value="Wi-Fi & IT Infrastructure">Wi-Fi & IT Infrastructure / Portals</option>
              <option value="Library">Central Library Resources & Seating</option>
              <option value="Hostel & Mess">Hostel & Mess Food Services</option>
              <option value="Transport">Campus Transit & Bus Routes</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Grievance Summary / Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Projector HDMI cable loose in Seminar Hall 2"
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Detailed Description & Location
            </label>
            <textarea
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Specify academic block, room number, or workstation ID to expedite resolution..."
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 resize-none"
            />
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-md flex items-center justify-between text-xs">
            <span className="text-slate-600 font-medium">Assigned Department:</span>
            <span className="font-semibold text-slate-900">{department}</span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Submit as confidential anonymous grievance</span>
            </label>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-xs flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Grievance</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
