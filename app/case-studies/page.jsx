"use client";

import { CheckCircle } from "lucide-react";


export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: "global-healthcare-product-launch",
      category: "Healthcare",
      title: "Global Healthcare Product Launch",
      challenge:
        "A pharmaceutical company needed insights from 500+ specialists across 15 countries for a new treatment launch.",
      solution:
        "Deployed our HCP panel with targeted recruitment of cardiologists and endocrinologists, completing fieldwork in 3 weeks.",
      metrics: [
        "500+ qualified HCP responses",
        "15 countries covered",
        "3-week turnaround",
        "95% data quality score",
      ],
      impact:
        "Enabled successful product positioning and go-to-market strategy, resulting in 40% faster market penetration.",
    },
    {
      slug: "b2b-saas-ux-study",
      category: "Technology",
      title: "B2B SaaS User Experience Study",
      challenge:
        "A SaaS company required feedback from IT decision-makers to improve their enterprise platform UX.",
      solution:
        "Recruited 300+ ITDMs from Fortune 500 companies using our B2B panel with advanced screening criteria.",
      metrics: [
        "300+ ITDM participants",
        "Fortune 500 companies",
        "Multi-phase research",
        "Actionable UX insights",
      ],
      impact:
        "UX improvements led to 60% increase in user adoption and 25% reduction in churn rate.",
    },
    {
      slug: "fmcg-brand-health-tracking",
      category: "FMCG",
      title: "Consumer Brand Health Tracking",
      challenge:
        "A global FMCG brand needed continuous brand health monitoring across 8 markets with monthly reporting.",
      solution:
        "Established ongoing consumer panel tracking with automated reporting dashboard and real-time alerts.",
      metrics: [
        "8 global markets",
        "Monthly tracking waves",
        "Real-time dashboard",
        "Automated reporting",
      ],
      impact:
        "Marketing adjustments improved brand equity by 15% across all monitored regions.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 mt-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
                Case <span className="text-blue-600">Studies</span>
              </h1>
              <p className="max-w-xl mt-4 text-lg text-gray-600">
                Real Results. Meaningful Impact.
              </p>
              <p className="max-w-xl mt-2 text-gray-600">
                See how Panel Focus empowers organizations with global insights, data-driven decisions, and measurable outcomes.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/case-hero.jpeg"
                alt="Case Studies Illustration"
                className="w-full max-w-md drop-shadow-xl"
              />
            </div>

          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40+", label: "Industries Served" },
              { value: "50K+", label: "Global Respondents" },
              { value: "95%", label: "Avg. Data Quality" },
              { value: "75%", label: "Client Retention" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <h3 className="text-4xl font-bold text-blue-700">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-1 bg-gradient-to-r from-blue-200 to-blue-600 w-full"></div>

        {/* CASE STUDIES GRID */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Featured Case Studies
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Explore how real businesses achieved measurable outcomes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {caseStudies.map((cs, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-xl border rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >
                <p className="text-sm font-semibold text-blue-600">{cs.category}</p>

                <h2 className="text-xl font-bold text-gray-900 mt-2">{cs.title}</h2>

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800">Challenge</h3>
                  <p className="text-gray-600 mt-1">{cs.challenge}</p>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800">Solution</h3>
                  <p className="text-gray-600 mt-1">{cs.solution}</p>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Key Highlights</h3>
                  <ul className="space-y-2">
                    {cs.metrics.map((m, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800">Impact</h3>
                  <p className="text-gray-600 mt-1">{cs.impact}</p>
                </div>

 
              </div>
            ))}
          </div>
        </section>


      </main>
    </>
  );
}
