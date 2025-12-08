"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  Server,
  Briefcase,
  FileText,
  Phone,
  PhoneCall
} from "lucide-react";
import JoinPanelModal from "./JoinPanelModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openJoinModal, setOpenJoinModal] = useState(false);

  const menuItems = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "/about", label: "About's", icon: <Info size={20} /> },
    { href: "/services", label: "Services", icon: <Server size={20} /> },
    { href: "/industries", label: "Industries", icon: <Briefcase size={20} /> },
    { href: "/case-studies", label: "Case Studies", icon: <FileText size={20} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={20} /> },
  ];

  return (
    <>
      <nav className="w-full bg-white  fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

{/* Logo + Name + Tagline */}
<Link href="/" className="flex items-center gap-3 group">
  {/* Logo Image */}
  <img
    src="/logo-removebg-preview.png"
    alt="Panel Focus Logo"
    className="h-12 w-auto"
  />

  {/* Text Block */}
  <div className="leading-tight">
    <h1 className="text-xl font-extrabold text-blue-900">
      Panel Focus
    </h1>
    <p className="text-sm text-orange-600  transition">
      Real People. Trusted Data.
    </p>
  </div>
</Link>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 ml-110">

            {/* Call CTA (Added Phone Icon) */}
            <button className="flex items-center gap-2 px-4 py-2 border bg-green-600 text-white rounded-lg  transition font-medium">
              <PhoneCall size={18} />
              +91 9876543210
            </button>

            {/* Join Panel */}
            <button
              onClick={() => setOpenJoinModal(true)}
              className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:scale-105 transform transition"
            >
              Join Our Panel
            </button>

            {/* Get Quote */}
            <Link
              href="/get-quote"
              className="px-4 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition font-medium"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 text-white shadow-lg hover:shadow-xl transition transform hover:scale-110 "
          >
            {isOpen ? <X size={20} /> : <Menu size={18} />}
          </button>

        </div>

        {/* Mobile Right-Side Slide Menu */}
        {isOpen && (
          <div className="fixed inset-0 flex justify-end z-50">

            {/* Backdrop */}
            <div
              className="flex-1 bg-black/40"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Slide Panel */}
            <div className="w-64 bg-white shadow-2xl p-6 animate-slideLeft">

              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-blue-900 transition"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-blue-900 hover:bg-blue-900 hover:text-white transition font-medium"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}

                {/* Join Panel CTA */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setOpenJoinModal(true);
                  }}
                  className="w-full mt-4 bg-blue-900 text-white py-2 rounded-lg shadow-md hover:scale-105 transform transition"
                >
                  Join Our Panel
                </button>

                {/* Get Quote */}
                <Link
                  href="/get-quote"
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-2 text-center py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-100 transition font-medium"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Join Panel Modal */}
      <JoinPanelModal
        isOpen={openJoinModal}
        onClose={() => setOpenJoinModal(false)}
      />
    </>
  );
}
