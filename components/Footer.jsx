"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Logo + Intro */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">Panel Focus</h2>
          <p className="text-sm mt-1 opacity-80">Real People. Trusted Data.</p>

          <p className="text-sm mt-4 leading-relaxed opacity-90">
            Delivering impactful insights through advanced online research
            solutions across 40+ global markets.
          </p>

          <div className="mt-4 space-y-1 text-sm opacity-90">
            <p>Email: info@panelfocus.com</p>
            <p>+91 99628 33690</p>
            <p>+91 97118 16414</p>
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Address</h3>

          <p className="text-sm opacity-80 leading-relaxed">
            <span className="font-semibold text-white">Registered Address:</span><br />
            Rohini, Delhi - 10085
          </p>

          <p className="text-sm opacity-80 mt-3 leading-relaxed">
            <span className="font-semibold text-white">Office Address:</span><br />
            The Office Pass, 7th Floor,<br />
            Paras Downtown Center,<br />
            Sector-54, Gurugram, Haryana - 122003
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm opacity-90">
            <li><Link href="/" className="hover:text-blue-300 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-300 transition">About's</Link></li>
            <li><Link href="/services" className="hover:text-blue-300 transition">Our Services</Link></li>
            <li><Link href="/industries" className="hover:text-blue-300 transition">Industries</Link></li>
            <li><Link href="/case-studies" className="hover:text-blue-300 transition">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-blue-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Industry Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Industries</h3>

          <ul className="space-y-2 text-sm opacity-90">
            <li><a className="hover:text-blue-300 transition">Healthcare</a></li>
            <li><a className="hover:text-blue-300 transition">Technology</a></li>
            <li><a className="hover:text-blue-300 transition">Retail</a></li>
            <li><a className="hover:text-blue-300 transition">Financial Services</a></li>
            <li><a className="hover:text-blue-300 transition">Automotive</a></li>
            <li><a className="hover:text-blue-300 transition">Media & Entertainment</a></li>
          </ul>
        </div>

      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto mt-14">
        <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
        <p className="text-sm opacity-80 mb-4">
          Stay updated with the latest market research trends and insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 text-sm rounded-lg bg-white text-blue-900 outline-none placeholder-blue-400"
          />
          <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-3 text-sm font-semibold transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/20 mt-12 pt-6 text-sm text-center opacity-80">
        © 2025 Panel Focus. All rights reserved.

        <div className="mt-2 flex justify-center gap-3">
          <Link href="/privacy" className="hover:text-blue-300 transition">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link href="/terms" className="hover:text-blue-300 transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
