"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 pt-20 pb-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Logo Section */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo-removebg-preview.png"
              alt="Panel Focus Logo"
              className="h-12 w-auto"
            />
            <div className="leading-tight">
              <h1 className="text-xl font-extrabold text-gray-900">
                Panel Focus
              </h1>
              <p className="text-sm text-red-600">
                Real People. Trusted Data.
              </p>
            </div>
          </Link>

          <p className="text-sm mt-4 text-gray-500 leading-relaxed">
            Delivering impactful insights through advanced online research
            solutions across 40+ global markets.
          </p>

          <div className="mt-4 text-sm space-y-1 text-gray-600">
            <p>Email: info@panelfocus.com</p>
            <p>+91 99628 33690</p>
            <p>+91 97118 16414</p>
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Address</h3>

          <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
            <p>
              <span className="font-semibold text-gray-900">Registered Address:</span><br />
              Rohini, Delhi - 10085
            </p>

            <p>
              <span className="font-semibold text-gray-900">Office Address:</span><br />
              The Office Pass, 7th Floor,<br />
              Paras Downtown Center,<br />
              Sector-54, Gurugram, Haryana - 122003
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About's", href: "/about" },
              { name: "Our Services", href: "/services" },
              { name: "Industries", href: "/industries" },
              { name: "Case Studies", href: "/case-studies" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industry Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Industries</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "Healthcare",
              "Technology",
              "Retail",
              "Financial Services",
              "Automotive",
              "Media & Entertainment"
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto mt-16 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Newsletter</h3>
        <p className="text-sm text-gray-500 mb-4">
          Stay updated with the latest market research trends and insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 text-sm rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-900 hover:bg-blue-700 text-white rounded-lg px-8 py-3 text-sm font-semibold transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-sm text-center text-gray-500">
        © 2025 Panel Focus. All rights reserved.

        <div className="mt-2 flex justify-center gap-3">
          <Link href="/privacy" className="hover:text-blue-600 transition">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link href="/terms" className="hover:text-blue-600 transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
