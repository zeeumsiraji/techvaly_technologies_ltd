"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


import {
  LayoutDashboard,
  Users,
  Phone,
  Calendar,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Receipt,
  UserCog,
  Settings,
  Bell,
  BarChart3,
  Inbox,          // ⭐ নতুন
} from "lucide-react";

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/inbox", label: "Inbox", icon: Inbox },           // ⭐ নতুন
  { href: "/dashboard/customers", label: "Customers", icon: Users },
  { href: "/dashboard/contacts", label: "Contacts", icon: Phone },
  { href: "/dashboard/meetings", label: "Meetings", icon: Calendar },
  { href: "/dashboard/products", label: "Products", icon: ShoppingBag },
  { href: "/dashboard/sales", label: "Sales", icon: DollarSign },
  { href: "/dashboard/investments", label: "Investments", icon: TrendingUp },
  { href: "/dashboard/expenses", label: "Expenses", icon: Receipt },
  { href: "/dashboard/notices", label: "Notices", icon: Bell },
  { href: "/dashboard/reports", label: "Reports", icon: BarChart3 },
  { href: "/dashboard/users", label: "Users", icon: UserCog },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];


export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 min-h-screen p-4 shrink-0">
      <div className="text-xl font-bold mb-6 px-2">🏢 BdSoft</div>
      <nav className="space-y-1">
        {menuItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}