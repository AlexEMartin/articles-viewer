import { useNavigate } from "@remix-run/react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-200"
    >
      <ArrowLeftIcon className="w-5 h-5" />
      <span className="text-sm font-semibold">Back</span>
    </button>
  );
}
