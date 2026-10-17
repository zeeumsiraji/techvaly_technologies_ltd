interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-12 text-center">
      <div className="text-5xl mb-3">🎯</div>
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      {description && (
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      )}
      {actionLabel && (
        <button
          onClick={onAction}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}