import { CheckCircle } from "lucide-react";

export default function ServiceCard({ icon, title, desc, points, image }) {
  return (
    <div
      className="
        bg-white/80 backdrop-blur-xl 
        p-8 rounded-2xl 
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]
        hover:-translate-y-1 
        transition-all duration-300
        border border-transparent
        hover:bg-white
        relative
      "
    >

      {/* === IMAGE SECTION === */}
      {image && (
        <img
          src={image}
          alt={title}
          className="
            w-full h-40 
            object-cover 
            rounded-xl 
            mb-5 
            shadow-sm
          "
        />
      )}



      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        {desc}
      </p>

      {/* Points */}
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700">
            <CheckCircle size={18} className="text-blue-600" />
            {point}
          </li>
        ))}
      </ul>

    </div>
  );
}
