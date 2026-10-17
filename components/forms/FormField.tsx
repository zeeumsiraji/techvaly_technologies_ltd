"use client";

interface BaseProps {
  label: string;
  required?: boolean;
  error?: string;
}

interface InputProps extends BaseProps {
  type?: "input" | "textarea" | "select";
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  inputType?: string;
  rows?: number;
  options?: { value: string; label: string }[];
}

export default function FormField({
  label,
  required,
  error,
  value,
  onChange,
  placeholder,
  type = "input",
  inputType = "text",
  rows = 4,
  options,
}: InputProps) {
  const baseClass =
    "w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div>
      <label className="text-sm text-slate-600 block mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {type === "input" && (
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      )}

      {type === "textarea" && (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={baseClass}
        />
      )}

      {type === "select" && (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={baseClass}
        >
          <option value="">{placeholder ?? "সিলেক্ট করুন"}</option>
          {options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      )}

      {error && <p className="text-xs text-red-600 mt-1">⚠️ {error}</p>}
    </div>
  );
}