export type Role = "Admin" | "Manager" | "Accountant" | "Member";

export type MeetingCategory = "Client" | "Vendor" | "Partner" | "Lead" | "Other";

export interface Meeting {
  id: string;
  name: string;
  purpose: string;
  date: string;
  followUp: string;
  number: string;
  location: string;
  remarks: string;
  category: MeetingCategory;
  draft: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  address: string;
  category: string;
  totalMeetings: number;
  totalSales: number;
  lastContact: string;
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  type: "Call" | "WhatsApp" | "Email" | "SMS";
  lastTalk: string;
}

export interface Sale {
  id: string;
  date: string;
  customer: string;
  product: string;
  qty: number;
  price: number;
  total: number;
  paid: number;
  due: number;
}

export interface Investment {
  id: string;
  date: string;
  sector: string;
  amount: number;
  source: string;
  expectedReturn: number;
  receivedReturn: number;
  status: "Active" | "Pending" | "Closed";
}

export interface Expense {
  id: string;
  date: string;
  sector: string;
  description: string;
  amount: number;
  method: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

export interface UserRow {
  id: string;
  name: string;
  email: string;
  role: Role;
  lastLogin: string;
  status: "Active" | "Inactive";
}


export interface Notice {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  priority: "High" | "Medium" | "Low";
  pinned: boolean;
}

export interface ReportSummary {
  id: string;
  name: string;
  period: string;
  type: "Sales" | "Expenses" | "Investments" | "Meetings" | "Customers";
  generatedAt: string;
}

export interface InboxMessage {
  id: string;
  from: string;
  email: string;
  phone: string;
  subject: string;
  body: string;
  date: string;
  source: "Contact Form" | "Google Form" | "Email" | "WhatsApp";
  status: "Unread" | "Read" | "Replied" | "Archived";
  starred: boolean;
}