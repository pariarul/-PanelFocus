"use client";

export default function TermsOfServicePage() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-white py-16 px-6 mt-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-extrabold text-blue-950 text-center">
          Terms of Service
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Effective Date: [Insert Date]
        </p>

        {/* Card */}
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8 border border-gray-200 space-y-6">

          <p className="text-gray-700 leading-relaxed">
            Welcome to <strong>Panel Focus</strong>. By accessing our website, joining our panel,
            using our services, or partnering with us as a client, you agree to abide by the
            following Terms of Service (“Terms”).
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">1. Definitions</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              <li><strong>“Company,” “We,” “Us”</strong> refers to Panel Focus (PFR Insights Pvt. Ltd.).</li>
              <li><strong>“You,” “User,” “Panelist”</strong> refers to individuals using our services.</li>
              <li><strong>“Client”</strong> refers to businesses using our research services.</li>
              <li><strong>“Services”</strong> means all research-related offerings provided by Panel Focus.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">2. Eligibility</h2>
            <p className="text-gray-700 mt-1">
              You must be at least 16 years old and legally capable of entering into contracts.
              All information provided must be accurate and truthful.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">3. User Obligations</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              <li>Provide truthful, accurate information</li>
              <li>No bots, duplicate accounts, or fraudulent behavior</li>
              <li>Use the platform lawfully</li>
              <li>Maintain confidentiality of surveys & materials</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">4. Client Obligations</h2>
            <p className="text-gray-700 mt-1">
              Clients must use services solely for research purposes and adhere to GDPR, ESOMAR,
              and ISO-compliant data practices.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">5. Incentives & Payments</h2>
            <p className="text-gray-700 mt-1">
              Rewards vary based on study and country. Fraudulent activity voids all incentive eligibility.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">6. Intellectual Property</h2>
            <p className="text-gray-700 mt-1">
              All logos, content, graphics, and materials belong to Panel Focus or its licensors.
              No reproduction or distribution is allowed without written consent.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">7. Privacy & Data Protection</h2>
            <p className="text-gray-700 mt-1">
              Your data is governed by our Privacy Policy. By using our services, you consent to
              lawful data processing under GDPR and ESOMAR guidelines.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">8. Termination</h2>
            <p className="text-gray-700 mt-1">
              Accounts may be suspended or terminated due to violations or by user request.
              We may do so without prior notice.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">9. Limitation of Liability</h2>
            <p className="text-gray-700 mt-1">
              Panel Focus is not liable for indirect, incidental, or data loss damages. Use of
              our services is entirely at your own risk.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">10. Modifications</h2>
            <p className="text-gray-700 mt-1">
              We may update these Terms at any time. Continued use of our services constitutes
              acceptance of updated Terms.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">11. Governing Law</h2>
            <p className="text-gray-700 mt-1">
              These Terms are governed by the laws of India. All legal matters fall under the
              jurisdiction of the courts of Delhi, India.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">12. Contact Us</h2>
            <p className="text-gray-700 mt-1">
              <strong>Panel Focus (PFR Insights Pvt. Ltd.)</strong><br />
              Northwest Delhi, Delhi, India – 110085<br />
              ✉ <a href="mailto:info@panelfocus.com" className="text-blue-700 underline">info@panelfocus.com</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
