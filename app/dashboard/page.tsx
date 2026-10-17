import StatCard from "@/components/dashboard/StatCard";
import {
  dummyMeetings,
  dummyCustomers,
  dummySales,
  dummyExpenses,
} from "@/lib/dashboard/dummy-data";
import { Users, Calendar, DollarSign, Receipt } from "lucide-react";

export default function DashboardHome() {
  const totalSales = dummySales.reduce((s, x) => s + x.total, 0);
  const totalExpenses = dummyExpenses.reduce((s, x) => s + x.amount, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">🏠 Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="মোট গ্রাহক"
          value={dummyCustomers.length}
          change="+৮ এই মাসে"
          icon={<Users size={20} />}
        />
        <StatCard
          title="আজকের মিটিং"
          value={dummyMeetings.length}
          change="Follow-up বাকি ৭"
          icon={<Calendar size={20} />}
        />
        <StatCard
          title="এই মাসের বিক্রয়"
          value={`৳ ${totalSales.toLocaleString("bn-BD")}`}
          change="+১২% ↑"
          icon={<DollarSign size={20} />}
        />
        <StatCard
          title="এই মাসের খরচ"
          value={`৳ ${totalExpenses.toLocaleString("bn-BD")}`}
          change="-৩% ↓"
          positive={false}
          icon={<Receipt size={20} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-4 h-64 flex items-center justify-center text-slate-400">
          📊 মাসিক বিক্রয় vs খরচ (Chart Placeholder)
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4 h-64 flex items-center justify-center text-slate-400">
          🥧 Category ভাগ (Chart Placeholder)
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <h2 className="font-semibold mb-3">⏰ আজকের Follow-up</h2>
          <ul className="space-y-2 text-sm">
            {dummyMeetings.slice(0, 5).map((m) => (
              <li
                key={m.id}
                className="flex justify-between border-b border-slate-100 pb-2"
              >
                <span>{m.name}</span>
                <span className="text-slate-500">{m.followUp}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <h2 className="font-semibold mb-3">🕐 সাম্প্রতিক কার্যকলাপ</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• নতুন মিটিং যোগ হয়েছে — রহিম উদ্দিন</li>
            <li>• বিক্রয় ৳ ২,৪০০ — Laptop Bag</li>
            <li>• নতুন গ্রাহক — সজীব ট্রেডার্স</li>
          </ul>
        </div>
      </div>
    </div>
  );
}