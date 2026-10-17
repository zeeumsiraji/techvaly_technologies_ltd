interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  positive?: boolean;
  icon?: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  change,
  positive = true,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 flex items-start justify-between">
      <div>
        <p className="text-xs text-slate-500 mb-1">{title}</p>
        <p className="text-2xl font-bold text-slate-800">{value}</p>
        {change && (
          <p
            className={`text-xs mt-1 ${
              positive ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </p>
        )}
      </div>
      {icon && <div className="text-blue-500">{icon}</div>}
    </div>
  );
}