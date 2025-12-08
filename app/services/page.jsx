"use client";

import {
  Globe,
  Users,
  Cpu,
  ClipboardList,
  PhoneCall,
  FlaskConical,
  BarChart3,
  Settings,
  Package,
  Eye,
  Building2
} from "lucide-react";

import ServiceCard from "./ServiceCard";
import Navbar from "@/components/navbar";

export default function ServicesPage() {
  return (
    <>
  
      <section className="w-full bg-gradient-to-br from-blue-50 to-white py-20 px-4 mt-10">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Research Solutions, Powered by Technology and Expertise
            </p>
          </div>


{/* Premium Intro Section */}
<div className="grid md:grid-cols-2 gap-12 place-items-center">
  {/* Text Card */}
  <div className="bg-white rounded-3xl shadow-lg p-10 md:p-12 border border-blue-100">
    <p className="text-gray-700 leading-relaxed text-lg">
      At <span className="font-semibold">Panel Focus</span>, we deliver end-to-end 
      market research solutions by blending traditional methodologies with 
      innovative, real-time technologies. Our global capabilities span 
      <strong> 40+ countries</strong>, enabling us to support research across 
      diverse industries including FMCG, Healthcare, Automotive, Technology, 
      and Finance.
    </p>

    <p className="text-gray-700 leading-relaxed text-lg mt-4">
      Whether you are exploring consumer behavior or targeting niche 
      professional audiences, our flexible and tech-enabled approach ensures 
      accurate, fast, and actionable insights—every time.
    </p>
  </div>

  {/* Image */}
  <img
    src="/services-hero.webp"
    alt="Services Illustration"
    className="rounded-3xl shadow-lg w-full object-cover h-auto max-h-96"
  />

</div>



          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <ServiceCard
              image="/face-to-face.jpg"
            
              title="Face-to-Face Fieldwork"
              desc="Traditional methodologies to collect in-person insights with precision."
              points={[
                "Trained field teams",
                "Urban & rural reach",
                "On-ground quality checks"
              ]}
            />

            <ServiceCard
              image="/online-sample.webp"
              
              title="Online Sample Collection"
              desc="Verified B2C, B2B, and HCP respondents using 100+ profiling attributes."
              points={[
                "Targeted sampling",
                "Real-time quota control",
                "Live dashboards"
              ]}
            />

            <ServiceCard
              image="/clt.jpg"
           
              title="Central Location Testing (CLT)"
              desc="Controlled environment testing for product, sensory, and ad evaluations."
              points={[
                "Monitored sessions",
                "Real-time response capture",
                "Custom setups"
              ]}
            />

            <ServiceCard
              image="/product-testing.jpg"
              
              title="Product Placement & Testing"
              desc="Real-world product evaluation for deeper consumer understanding."
              points={[
                "Recruitment & logistics",
                "Feedback collection",
                "Behavior insights"
              ]}
            />

            <ServiceCard
              image="/qualitative.jpg"
              
              title="Qualitative Research"
              desc="FGDs, IDIs & ethnographic research for deep-dive insights."
              points={[
                "Expert moderation",
                "HCP & B2B respondents",
                "Transcripts & summaries"
              ]}
            />

            <ServiceCard
              image="/quantitative.png"
              title="Quantitative Research"
              desc="Large-scale surveys across online, offline & hybrid formats."
              points={[
                "High sample size",
                "Statistical accuracy",
                "Data consistency"
              ]}
            />

            <ServiceCard
              image="/cati.webp"
            
              title="CATI (Telephone Interviewing)"
              desc="Structured calling with real-time monitoring & validation."
              points={[
                "Trained agents",
                "Supervised operations",
                "Quality checks"
              ]}
            />

            <ServiceCard
              image="/programming.jpg"
              icon={<Settings size={40} />}
              title="Survey Programming & Hosting"
              desc="Mobile-first surveys with logic-based routing & testing."
              points={[
                "Complex routing",
                "Custom logic",
                "Live testing"
              ]}
            />

            <ServiceCard
              image="/panel.jpg"
     
              title="Panel Recruitment & Management"
              desc="Validated respondents with ongoing profiling & engagement."
              points={[
                "Panel APIs",
                "Niche audiences",
                "Incentive fulfillment"
              ]}
            />

            <ServiceCard
              image="/data-processing.webp"
            
              title="Data Processing & Tabulation"
              desc="Clean datasets ready for analytics & dashboards."
              points={[
                "SPSS/Excel outputs",
                "Cross-tabs",
                "Dashboard-ready data"
              ]}
            />

            <ServiceCard
              image="/analytics.jpg"
           
              title="Data Analytics & Insight Reporting"
              desc="Actionable insights with rich storytelling visuals."
              points={[
                "Insight decks",
                "Statistical testing",
                "Custom visuals"
              ]}
            />

            <ServiceCard
              image="/management.jpg"
              
              title="Project Management"
              desc="End-to-end execution with centralized coordination."
              points={[
                "Timeline tracking",
                "Resource allocation",
                "Client collaboration"
              ]}
            />

           <ServiceCard
              image="/real-time.jpg"
              icon={<Eye size={40} />}
              title="Real-Time Data Viewing"
              desc="Live dashboards to monitor survey progress, quotas & quality."
              points={[
                "Live updates",
                "Quota management",
                "Quality monitoring"
              ]}
            />

          </div>

          {/* CTA Button */}
          <div className="text-center pt-10">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-xl shadow transition"
            >
              Request Custom Solution
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
