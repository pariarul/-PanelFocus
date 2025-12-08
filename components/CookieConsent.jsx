"use client";

import { useState } from "react";
import { Cookie } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 max-w-md z-50">
      <div className="flex items-start gap-3">
        
        {/* Icon */}
        <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
          <Cookie size={24} />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            This website uses cookies
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Panel Focus uses cookies to improve your browsing experience, analyze traffic, 
            and support essential site functionality. You can change your preferences at any time. 
            Learn more in our{" "}
            <a href="/privacy" className="text-blue-600 font-medium hover:underline">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-5">
        <button
          onClick={() => setShow(false)}
          className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Manage Preferences
        </button>

        <button
          onClick={() => setShow(false)}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
