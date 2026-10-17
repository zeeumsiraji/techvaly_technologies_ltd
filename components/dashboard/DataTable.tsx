interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}

export default function DataTable<T>({
  columns,
  data,
  emptyMessage = "কোনো ডেটা নেই",
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-slate-200 p-10 text-center text-slate-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={`text-left px-4 py-3 font-medium text-slate-600 ${
                    col.className ?? ""
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              // ✅ Safe key — id/ID থাকলে সেটা, নাহলে index
              const r = row as Record<string, unknown>;
              const rowKey = String(
                r.id ?? r.ID ?? r._id ?? `row-${index}`
              );

              return (
                <tr
                  key={rowKey}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  {columns.map((col) => (
                    <td
                      key={String(col.key)}
                      className={`px-4 py-3 text-slate-700 ${
                        col.className ?? ""
                      }`}
                    >
                      {col.render
                        ? col.render(row)
                        : getCellValue(row, col.key)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ✅ Helper — any ছাড়া Safe Access
function getCellValue<T>(
  row: T,
  key: keyof T | string
): React.ReactNode {
  if (typeof key === "string" && key in (row as object)) {
    const value = (row as Record<string, unknown>)[key];
    if (value === null || value === undefined) return "—";
    if (typeof value === "string" || typeof value === "number") {
      return value;
    }
    return String(value);
  }
  return "—";
}