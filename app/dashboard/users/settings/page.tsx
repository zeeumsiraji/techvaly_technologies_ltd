export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">⚙️ Settings</h1>

      <div className="bg-white rounded-lg border border-slate-200 p-6 max-w-2xl space-y-4">
        <Field label="Business নাম" defaultValue="BdSoft" />
        <Field label="Currency" defaultValue="৳ BDT" />
        <Field label="Timezone" defaultValue="Asia/Dhaka" />
        <Field label="Date Format" defaultValue="DD-MM-YYYY" />
        <Field label="Google Sheet ID" defaultValue="(পরে যোগ হবে)" />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          Save Settings
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <div>
      <label className="text-sm text-slate-600 block mb-1">{label}</label>
      <input
        defaultValue={defaultValue}
        className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm"
      />
    </div>
  );
}