import type {
  Meeting,
  Customer,
  Contact,
  Sale,
  Investment,
  Expense,
  Product,
  UserRow,
  Notice,
  ReportSummary,
  InboxMessage
} from "@/types";



export const dummyInbox: InboxMessage[] = [
  {
    id: "1",
    from: "রহিম উদ্দিন",
    email: "rahim@example.com",
    phone: "01712-345678",
    subject: "Product Price জানতে চাই",
    body: "আপনাদের Laptop Bag-এর দাম কত? বাল্ক অর্ডার করলে ডিসকাউন্ট হবে কি?",
    date: "2026-10-16",
    source: "Contact Form",
    status: "Unread",
    starred: true,
  },
  {
    id: "2",
    from: "করিম সাহেব",
    email: "karim@example.com",
    phone: "01812-987654",
    subject: "Payment Confirmation",
    body: "গতকালের ৫,০০০ টাকা Bkash-এ পাঠিয়েছি। Transaction ID: 8A7B6C5D।",
    date: "2026-10-15",
    source: "WhatsApp",
    status: "Read",
    starred: false,
  },
  {
    id: "3",
    from: "সজীব ট্রেডার্স",
    email: "sajib@example.com",
    phone: "01912-111222",
    subject: "Partnership Proposal",
    body: "আমরা আপনার সাথে পার্টনারশিপ করতে আগ্রহী। বিস্তারিত আলোচনার জন্য সময় চাই।",
    date: "2026-10-14",
    source: "Email",
    status: "Replied",
    starred: false,
  },
  {
    id: "4",
    from: "নাসির এন্টারপ্রাইজ",
    email: "nasir@example.com",
    phone: "01612-333444",
    subject: "Vendor Registration",
    body: "আমরা সাপ্লায়ার হিসেবে যুক্ত হতে চাই। Requisition পাঠাব।",
    date: "2026-10-12",
    source: "Google Form",
    status: "Archived",
    starred: false,
  },
];

export const dummyMeetings: Meeting[] = [
  {
    id: "1",
    name: "রহিম উদ্দিন",
    purpose: "Product Demo",
    date: "2026-10-15",
    followUp: "2026-10-22",
    number: "01712-345678",
    location: "Mirpur, Dhaka",
    remarks: "৩টি পণ্য দেখতে চেয়েছেন",
    category: "Client",
    draft:
      "গ্রাহক ৩টি পণ্য দেখতে চেয়েছেন। দাম নিয়ে আলোচনা হয়েছে। পরের সপ্তাহে আবার দেখা হবে।",
  },
  {
    id: "2",
    name: "করিম সাহেব",
    purpose: "Payment Follow-up",
    date: "2026-10-14",
    followUp: "2026-10-18",
    number: "01812-987654",
    location: "Uttara, Dhaka",
    remarks: "বকেয়া ৫,০০০ টাকা",
    category: "Client",
    draft: "বকেয়া নিয়ে কথা হয়েছে, পরের সপ্তাহে পরিশোধ করবেন।",
  },
  {
    id: "3",
    name: "সজীব ট্রেডার্স",
    purpose: "New Partnership",
    date: "2026-10-12",
    followUp: "2026-10-25",
    number: "01912-111222",
    location: "Motijheel, Dhaka",
    remarks: "পার্টনারশিপ প্রস্তাব",
    category: "Partner",
    draft: "পার্টনারশিপের শর্ত নিয়ে আলোচনা চলছে।",
  },
  {
    id: "4",
    name: "নাসির এন্টারপ্রাইজ",
    purpose: "Vendor Meeting",
    date: "2026-10-10",
    followUp: "2026-10-20",
    number: "01612-333444",
    location: "Gulshan, Dhaka",
    remarks: "নতুন সাপ্লাই আলোচনা",
    category: "Vendor",
    draft: "সাপ্লাই রেট নিয়ে আলোচনা হয়েছে।",
  },
];

export const dummyCustomers: Customer[] = [
  {
    id: "1",
    name: "রহিম উদ্দিন",
    phone: "01712-345678",
    address: "Mirpur, Dhaka",
    category: "Client",
    totalMeetings: 8,
    totalSales: 45000,
    lastContact: "2026-10-15",
  },
  {
    id: "2",
    name: "করিম সাহেব",
    phone: "01812-987654",
    address: "Uttara, Dhaka",
    category: "Client",
    totalMeetings: 5,
    totalSales: 22000,
    lastContact: "2026-10-14",
  },
];

export const dummyContacts: Contact[] = [
  {
    id: "1",
    name: "রহিম উদ্দিন",
    phone: "01712-345678",
    email: "rahim@example.com",
    type: "Call",
    lastTalk: "2026-10-15",
  },
  {
    id: "2",
    name: "করিম সাহেব",
    phone: "01812-987654",
    email: "karim@example.com",
    type: "WhatsApp",
    lastTalk: "2026-10-14",
  },
];

export const dummySales: Sale[] = [
  {
    id: "1",
    date: "2026-10-15",
    customer: "রহিম উদ্দিন",
    product: "Laptop Bag",
    qty: 2,
    price: 1200,
    total: 2400,
    paid: 2000,
    due: 400,
  },
  {
    id: "2",
    date: "2026-10-14",
    customer: "করিম সাহেব",
    product: "Mouse",
    qty: 5,
    price: 500,
    total: 2500,
    paid: 2500,
    due: 0,
  },
];

export const dummyInvestments: Investment[] = [
  {
    id: "1",
    date: "2026-09-01",
    sector: "Stock",
    amount: 50000,
    source: "Personal",
    expectedReturn: 5000,
    receivedReturn: 3000,
    status: "Active",
  },
];

export const dummyExpenses: Expense[] = [
  {
    id: "1",
    date: "2026-10-15",
    sector: "Rent",
    description: "Office Rent October",
    amount: 15000,
    method: "Bank",
  },
  {
    id: "2",
    date: "2026-10-14",
    sector: "Utility",
    description: "Electricity Bill",
    amount: 3500,
    method: "Bkash",
  },
];

export const dummyProducts: Product[] = [
  { id: "1", name: "Laptop Bag", price: 1200, stock: 25, category: "Accessories", image: "" },
  { id: "2", name: "Wireless Mouse", price: 500, stock: 40, category: "Electronics", image: "" },
  { id: "3", name: "Keyboard", price: 1500, stock: 15, category: "Electronics", image: "" },
];

export const dummyUsers: UserRow[] = [
  { id: "1", name: "Admin", email: "admin@bdsoft.org", role: "Admin", lastLogin: "2026-10-16", status: "Active" },
  { id: "2", name: "Manager", email: "manager@bdsoft.org", role: "Manager", lastLogin: "2026-10-15", status: "Active" },
];




export const dummyNotices: Notice[] = [
  {
    id: "1",
    title: "সাপ্তাহিক মিটিং — শুক্রবার সকাল ১০টা",
    body: "সব টিম মেম্বারকে সময়মতো উপস্থিত থাকার অনুরোধ করা হচ্ছে। আলোচ্যসূচি: মাসিক বিক্রয় রিভিউ।",
    author: "Admin",
    date: "2026-10-16",
    priority: "High",
    pinned: true,
  },
  {
    id: "2",
    title: "নতুন পণ্য Stock-এ এসেছে",
    body: "Laptop Bag ও Keyboard-এর নতুন চালান এসেছে। Sales টিমকে জানানো হচ্ছে।",
    author: "Manager",
    date: "2026-10-15",
    priority: "Medium",
    pinned: false,
  },
  {
    id: "3",
    title: "Expense Entry-র সময় Receipt আপলোড করুন",
    body: "হিসাবের স্বচ্ছতার জন্য প্রতিটি খরচের Receipt সংযুক্ত করা বাধ্যতামূলক।",
    author: "Accountant",
    date: "2026-10-12",
    priority: "Low",
    pinned: false,
  },
];

export const dummyReports: ReportSummary[] = [
  {
    id: "1",
    name: "Monthly Sales Report",
    period: "October 2026",
    type: "Sales",
    generatedAt: "2026-10-16",
  },
  {
    id: "2",
    name: "Expense Breakdown",
    period: "October 2026",
    type: "Expenses",
    generatedAt: "2026-10-15",
  },
  {
    id: "3",
    name: "Customer Growth",
    period: "Q3 2026",
    type: "Customers",
    generatedAt: "2026-10-01",
  },
];