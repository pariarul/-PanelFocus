


export default function AboutPage() {
  return (
    <>

    <section className="w-full bg-gradient-to-br from-blue-50 to-white py-20 px-4 mt-10">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold  text-blue-900">
            About <span className="text-blue-600">Panel Focus</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your Trusted Partner for Global Insights
          </p>
        </div>

        {/* Intro With Image */}
        <div className="grid md:grid-cols-2 gap-12 place-items-center">
          <img src="/team-meeting.webp"
            alt="Panel Focus Team"
            className="rounded-3xl shadow-lg w-full object-cover"
          />

          <div className="bg-white rounded-3xl shadow-lg p-10 md:p-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              At <strong>Panel Focus (PFR Insights Pvt. Ltd.)</strong>, we empower organizations to make smarter,
              faster, and data-driven decisions through reliable and secure market research solutions.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Headquartered in Delhi, India, we deliver high-quality insights across <strong>40+ countries</strong>,
              supporting top brands, research agencies, and consulting firms.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              With deep expertise in <strong>B2C, B2B, and Healthcare research</strong>, we provide precise,
              actionable and high-credibility insights tailored for today’s global markets.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Why Brands Choose <span className="text-blue-600">Panel Focus</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality-Driven Sampling",
                text: "100+ profiling attributes ensure precise, laser-targeted respondent selection.",
                img: "/quality.webp",
              },
              {
                title: "Fast & Flexible Execution",
                text: "Rapid project turnaround with real-time tracking and quota control.",
                img: "/speed.jpg",
              },
              {
                title: "Secure & Compliant",
                text: "Fully ESOMAR & GDPR compliant — prioritizing privacy & transparency.",
                img: "/security.jpg",
              },
              {
                title: "24/7 Expert Support",
                text: "Dedicated project managers offering round-the-clock assistance.",
                img: "/support.webp",
              }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-xl h-36 w-full object-cover mb-4 group-hover:scale-105 transition duration-300"
                />

                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
            What Makes <span className="text-blue-600">Panel Focus</span> <span className="text-blue-900">Unique </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Global Reach with Local Expertise",
                text: "Access online panels across 40+ countries with culturally relevant insights.",
                img: "/global.jpg",
              },
              {
                title: "Targeted Recruitment",
                text: "Specialized recruitment for B2C, B2B & Healthcare — including niche profiles.",
                img: "/recruitment.jpg",
              },
              {
                title: "End-to-End Project Management",
                text: "Survey design, programming, sampling, quality checks & data delivery.",
                img: "/management.png",
              },
              {
                title: "Expertise in Specialized Audiences",
                text: "Engaging decision-makers, professionals & healthcare practitioners.",
                img: "/expertise.jpg",
              },
              {
                title: "Seamless Integration",
                text: "API integrations, dashboards & workflow support.",
                img: "/integration.jpg",
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl h-40 w-full object-cover mb-4"
                />

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    </>
  );
}
