// components/ErrorAlert.jsx
export default function ErrorAlert({ error, onClose }) {
  if (!error) return null;

  return (
    <div
      className="mt-4 flex items-start gap-3 p-4 rounded-xl border border-red-300 bg-red-50 text-red-800 shadow-md transition-all animate-fade-in"
      role="alert"
    >
      <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-5H9v2h2v-2zm0-6H9v5h2V7z"
          clipRule="evenodd"
        />
      </svg>
      <div className="flex-1">
        <strong className="font-semibold">Erreur :</strong> {error}
      </div>
      <button
        onClick={onClose}
        className="ml-auto text-red-400 hover:text-red-600"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 8.586l-4.95-4.95a1 1 0 10-1.414 1.414L8.586 10l-4.95 4.95a1 1 0 001.414 1.414L10 11.414l4.95 4.95a1 1 0 001.414-1.414L11.414 10l4.95-4.95a1 1 0 00-1.414-1.414L10 8.586z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
