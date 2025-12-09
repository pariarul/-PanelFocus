"use client";
import { Mail, Phone, Building2, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20">

        {/* HERO WITH 3D OWL MASCOT */}
        <section className="px-6 pt-16 pb-24 relative overflow-hidden">

          {/* BACKGROUND GLOWS */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <div className="space-y-6 relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                We’re Here to  
                <span className="text-blue-600"> Assist You Anytime</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg">
                Have questions or want to start a project?  
                Our support team responds within <span className="font-semibold">24 hours</span>.
              </p>

              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 shadow-md">
                  Contact Support
                </button>
                <button className="px-6 py-3 bg-white rounded-full font-semibold border hover:bg-gray-50 shadow-sm">
                  Request a Quote
                </button>
              </div>
            </div>

            {/* 3D ANIMATED OWL MASCOT */}
            <div className="flex justify-center relative">

              <div className="w-72 md:w-96 animate-float relative z-20">

                {/* SVG 3D Owl */}
                <svg width="100%" viewBox="0 0 300 300" className="drop-shadow-2xl">
                  <defs>
                    <radialGradient id="body" cx="50%" cy="50%" r="70%">
                      <stop offset="0%" stopColor="#ffffff"/>
                      <stop offset="100%" stopColor="#e2e8f0"/>
                    </radialGradient>

                    <radialGradient id="face" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#fff"/>
                      <stop offset="100%" stopColor="#f1f5f9"/>
                    </radialGradient>

                    <linearGradient id="wings" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#c7d2fe"/>
                      <stop offset="100%" stopColor="#818cf8"/>
                    </linearGradient>
                  </defs>

                  {/* Body */}
                  <circle cx="150" cy="160" r="90" fill="url(#body)" />

                  {/* Wings */}
                  <ellipse cx="75" cy="170" rx="55" ry="80" fill="url(#wings)" opacity="0.7" />
                  <ellipse cx="225" cy="170" rx="55" ry="80" fill="url(#wings)" opacity="0.7" />

                  {/* Face */}
                  <circle cx="150" cy="120" r="60" fill="url(#face)" />

                  {/* Eyes */}
                  <circle cx="130" cy="115" r="18" fill="#000" />
                  <circle cx="170" cy="115" r="18" fill="#000" />

                  {/* Eye highlights */}
                  <circle cx="124" cy="110" r="5" fill="#fff" />
                  <circle cx="164" cy="110" r="5" fill="#fff" />

                  {/* Beak */}
                  <polygon points="150,130 140,155 160,155" fill="#fbbf24" />

                </svg>

              </div>

              {/* Circle Glow Behind */}
              <div className="absolute w-72 h-72 bg-white rounded-full shadow-xl top-10 blur-xl opacity-70"></div>
            </div>

          </div>
        </section>

        {/* CONTACT CHANNEL CARDS */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 -mt-10 relative z-10">

          {[
            { icon: Mail, title: "Email Us", text: "info@panelfocus.com" },
            { icon: Phone, title: "Call Support", text: "+91 99628 33690" },
            { icon: Building2, title: "Our Location", text: "Delhi, India" }
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <item.icon className="w-10 h-10 text-blue-700" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </section>

        {/* CONTACT FORM */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

          {/* Left Text */}
          <div className="space-y-6 pt-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form and our team will reach out shortly.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>✔ Response in 24 hours</p>
              <p>✔ Dedicated support managers</p>
              <p>✔ 100% Confidential</p>
            </div>
          </div>

          {/* Form */}
<form className="bg-white p-10 rounded-3xl shadow-xl border border-blue-100 space-y-6 glass-card">

  {/* Full Name */}
  <div>
    <label className="font-medium text-gray-700">Full Name *</label>
    <input
      type="text"
      className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      placeholder="Enter your full name"
      required
    />
  </div>

  {/* Email */}
  <div>
    <label className="font-medium text-gray-700">Email Address *</label>
    <input
      type="email"
      className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      placeholder="example@email.com"
      required
    />
  </div>

  {/* Phone */}
  <div>
    <label className="font-medium text-gray-700">Phone Number *</label>
    <input
      type="text"
      className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      placeholder="+91 00000 00000"
      required
    />
  </div>

  {/* Description */}
  <div>
    <label className="font-medium text-gray-700">Project Description *</label>
    <textarea
      className="w-full mt-1 p-3 border rounded-xl h-32 focus:ring-2 focus:ring-blue-500 outline-none"
      placeholder="Describe your project details"
      required
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition font-semibold shadow-md"
  >
    Send Request
  </button>

</form>


        </section>

        {/* STATS */}
        <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 py-20 text-center">
          {[
            { value: "40+", label: "Global Markets" },
            { value: "100+", label: "Data Points" },
            { value: "GDPR", label: "Compliant" },
            { value: "24/7", label: "Support" }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-bold text-blue-700">{stat.value}</h3>
              <p className="mt-2 text-gray-700">{stat.label}</p>
            </div>
          ))}
        </section>

      </main>


    </>
  );
}






