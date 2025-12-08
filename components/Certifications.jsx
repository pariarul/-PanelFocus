export default function Certifications() {
  const certs = [
    { name: "ISO 20252 Certified", logo: "/Certificats/iso.jpg" },
    { name: "ISO 27001 Certified", logo: "/Certificats/iso91.jpg" },
    { name: "ESOMAR Member", logo: "/Certificats/eu-gdpr.jpg" },
    { name: "GDPR Compliant", logo: "/Certificats/gdpr.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Certifications & Compliance
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We follow globally recognized standards to ensure the highest levels of data quality,
          privacy, and ethical research practices.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {certs.map((c, i) => (
            <div key={i} className="flex flex-col items-center space-y-3">
              <img
                src={c.logo}
                alt={c.name}
                className="h-20 object-contain"
              />
              <p className="text-sm font-medium text-gray-700">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
