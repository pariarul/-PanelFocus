import { FileDown } from "lucide-react";

export default function PanelBookDownload() {
  return (
    <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mt-10 mb-10">

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-700 mb-5">
        <FileDown size={28} />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900">
        Panel Book (PDF)
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 leading-relaxed">
        Download our complete Panel Book to explore audience reach, industry 
        categories, profiling capabilities, and country-wise coverage.
      </p>

      {/* Small Highlights */}
      <ul className="mt-5 space-y-2 text-gray-700">
        <li>• Audience coverage for 40+ countries</li>
        <li>• Healthcare, B2B & Consumer panels</li>
        <li>• Detailed recruitment & quality process</li>
      </ul>

      {/* Button */}
      <a
        href="/panel-book.pdf"
        download
        className="
          mt-6 inline-flex items-center gap-2
          bg-blue-600 text-white
          px-6 py-3 rounded-xl
          hover:bg-blue-700 transition font-semibold shadow-md
        "
      >
        <FileDown size={20} />
        Download PDF
      </a>
    </div>
  );
}
