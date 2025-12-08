"use client";

import Navbar from "@/components/navbar";
import { CheckCircle, Shield, Globe, BarChart3, Users, Zap } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Healthcare & Life Sciences",
      image: "/healthcare.jpg",
      points: [
        "HCPs & specialists",
        "Patients & caregivers",
        "Therapy-specific research",
      ],
    },
    {
      title: "Consumer & Retail",
      image: "/consumer.jpg",
      points: [
        "FMCG & D2C trends",
        "Retail behavior analysis",
        "Brand health tracking",
      ],
    },
    {
      title: "Tech, IT & Telecom",
      image: "/tech.png",
      points: [
        "SaaS & app users",
        "IT decision-makers",
        "Device testing panels",
      ],
    },
    {
      title: "Finance & Insurance",
      image: "/finance.jpg",
      points: [
        "Fintech product users",
        "Digital banking customers",
        "UX testing for financial tools",
      ],
    },
    {
      title: "Automotive & EV",
      image: "/automotive.jpg",
      points: [
        "Fleet & car owners",
        "EV early adopters",
        "Vehicle concept testing",
      ],
    },
    {
      title: "B2B & Enterprise",
      image: "/b2b.webp",
      points: [
        "C-Suite executives",
        "Procurement & HR leads",
        "SMB decision-makers",
      ],
    },
  ];

  const moreIndustries = [
    "Education",
    "Energy",
    "Government",
    "Non-Profit",
    "Travel & Hospitality",
    "Media & Entertainment",
  ];

  const features = [
    {
      icon: <Shield className="w-7 h-7 text-blue-600" />,
      title: "ESOMAR & GDPR Compliant",
      desc: "Full compliance with global research & data privacy standards.",
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-blue-600" />,
      title: "100+ Data Points",
      desc: "Deep profiling for precise targeting & quality control.",
    },
    {
      icon: <Zap className="w-7 h-7 text-blue-600" />,
      title: "Real-Time Monitoring",
      desc: "Live data quality checks with instant alerts.",
    },
    {
      icon: <Users className="w-7 h-7 text-blue-600" />,
      title: "Dedicated Project Managers",
      desc: "End-to-end support for every research project.",
    },
    {
      icon: <Globe className="w-7 h-7 text-blue-600" />,
      title: "Global Reach",
      desc: "Access to verified respondents across 40+ countries.",
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-blue-600" />,
      title: "Transparent Processes",
      desc: "Secure, ethical, and auditable research workflows.",
    },
  ];

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-white ">
{/* HERO */}
<section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 mt-10">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Text */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
        Industries <span className="text-blue-600">We Serve</span>
      </h1>
      <p className="max-w-xl mt-4 text-lg text-gray-600">
        Industry-specific expertise that drives measurable results.
      </p>
    </div>

    {/* Image */}
    <div className="flex justify-center">
      <img 
        src="/industries.jpg" 
        alt="Industries We Serve" 
        className="w-full max-w-md drop-shadow-xl"
      />
    </div>

  </div>
</section>


      {/* INDUSTRIES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Our Core Industries
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Deep sector knowledge + agile research methodologies.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {industries.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-xl transition"
            >
                <img src={item.image} className="w-100 h-40 mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.points.map((p, i) => (
                  <li key={i} className="text-gray-600 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* MORE INDUSTRIES */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Don't See Your Industry?
        </h2>
        <p className="text-gray-600 text-center mt-2">
          We support many more sectors with custom research solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {moreIndustries.map((sector, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-white border shadow rounded-full text-gray-700 font-medium hover:bg-blue-100 transition"
            >
              {sector}
            </span>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Why Choose Panel Focus
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Your success. Our commitment.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 shadow-lg rounded-2xl border bg-white hover:shadow-xl transition"
            >
              {f.icon}
              <h4 className="text-xl font-semibold mt-4">{f.title}</h4>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUALITY ASSURANCE */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Quality Assurance Process
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12">
          <div className="p-6 bg-white shadow rounded-xl border">
            <h3 className="text-blue-600 font-bold text-3xl">1</h3>
            <h4 className="text-xl font-semibold mt-2">Pre-Screening</h4>
            <p className="text-gray-600 mt-2">
              Rigorous respondent verification and profiling.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl border">
            <h3 className="text-blue-600 font-bold text-3xl">2</h3>
            <h4 className="text-xl font-semibold mt-2">Real-Time Monitoring</h4>
            <p className="text-gray-600 mt-2">
              Continuous quality checks during data collection.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl border">
            <h3 className="text-blue-600 font-bold text-3xl">3</h3>
            <h4 className="text-xl font-semibold mt-2">Post-Processing</h4>
            <p className="text-gray-600 mt-2">
              Data cleaning and validation before delivery.
            </p>
          </div>
        </div>

        <p className="text-center text-blue-700 font-bold text-4xl mt-12">
          99.5% Data Quality Score
        </p>
        <p className="text-center text-gray-600">Based on client satisfaction surveys</p>
      </section>
    </main>
    
    </>
  );
}
