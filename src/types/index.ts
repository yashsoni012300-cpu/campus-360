export interface SubjectAttendance {
  id: string;
  code: string;
  name: string;
  faculty: string;
  attended: number;
  total: number;
  percentage: number;
  status: 'safe' | 'warning' | 'critical';
  lastUpdated: string;
}

export interface LibraryDeskZone {
  id: string;
  name: string;
  floor: string;
  totalSeats: number;
  occupiedSeats: number;
  quietLevel: 'Strict Silence' | 'Moderate Discussion' | 'Group Collaboration';
  powerOutlets: boolean;
}

export interface LibraryBook {
  id: string;
  title: string;
  authors: string;
  isbn: string;
  category: string;
  callNumber: string;
  availableCopies: number;
  totalCopies: number;
  location: string;
  isReserved?: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  department: string;
  date: string;
  category: 'Academics' | 'Examination' | 'Administration' | 'Placement' | 'Hostel';
  isImportant: boolean;
  referenceNo: string;
  summary: string;
}

export interface CampusEvent {
  id: string;
  title: string;
  organizer: string;
  date: string;
  time: string;
  venue: string;
  category: 'Technical' | 'Cultural' | 'Symposium' | 'Sports' | 'Career';
  registeredCount: number;
  capacity: number;
  isUserRegistered?: boolean;
  description: string;
}

export interface GrievanceTicket {
  id: string;
  ticketId: string;
  title: string;
  category: 'Academic Facility' | 'Hostel & Mess' | 'Wi-Fi & IT Infrastructure' | 'Transport' | 'Library';
  department: string;
  submittedOn: string;
  status: 'Under Review' | 'In Progress' | 'Resolved' | 'Escalated';
  slaHoursRemaining: number;
  description: string;
  resolutionNote?: string;
  isAnonymous: boolean;
}

export interface SmartCampusNode {
  id: string;
  title: string;
  role: string;
  protocol: string;
  latency: string;
  description: string;
  iconName: string;
}
