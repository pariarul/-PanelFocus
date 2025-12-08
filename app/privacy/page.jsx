"use client";

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-white py-16 px-6 mt-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-blue-950 text-center">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Effective Date: [Insert Date]
        </p>

        {/* Card */}
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8 border border-gray-200 space-y-6">

          <p className="text-gray-700 leading-relaxed">
            Company Name: <strong>Panel Focus (PFR Insights Pvt. Ltd.)</strong>
          </p>

          <p className="text-gray-700 leading-relaxed">
            At Panel Focus, we are committed to protecting the privacy and personal data of our panel members, clients, and website visitors. 
            This Privacy Policy outlines how we collect, use, store, and protect your information in connection with our panel recruitment 
            and sample provision services.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">1. Who We Are</h2>
            <p className="text-gray-700 mt-1">
              Panel Focus, officially registered as <strong>PFR Insights Pvt. Ltd.</strong>, 
              is a global market research agency headquartered in Delhi, India. 
              We specialize in online panel recruitment, sample provision, and full-service market research 
              solutions across 40+ countries.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">2. What Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              <li>
                <strong>From Panelists (Respondents):</strong> Name, email, demographics, location, preferences, device info, etc.
              </li>
              <li>
                <strong>From Clients:</strong> Contact details, project specifications, company details, etc.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              <li>Survey invitations and data processing</li>
              <li>Fraud prevention and quality checks</li>
              <li>Analytics and reporting</li>
              <li>Improving user experience (never sold or rented)</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">4. Legal Basis for Data Processing</h2>
            <p className="text-gray-700 mt-1">
              We process data based on consent, legitimate interest, and legal requirements.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">5. Data Storage & Security</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              <li>SSL encryption, secure servers, firewalls</li>
              <li>Limited access controls</li>
              <li>Regular audits and compliance checks</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">6. Data Sharing & Third Parties</h2>
            <p className="text-gray-700 mt-1">
              Information may be shared with vetted partners following GDPR, ESOMAR, and ISO standards. 
              Shared data is anonymized.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">7. International Data Transfers</h2>
            <p className="text-gray-700 mt-1">
              All transfers follow strict compliance and security procedures.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">8. Cookies & Tracking</h2>
            <p className="text-gray-700 mt-1">
              We use cookies for analytics and performance improvements. You may disable cookies in your browser settings.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">9. Your Rights</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              <li>Access, update, or delete your data</li>
              <li>Withdraw consent at any time</li>
              <li>Request data portability</li>
              <li>Restrict or object to data processing</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">10. Children’s Privacy</h2>
            <p className="text-gray-700 mt-1">
              We do not knowingly collect or process data for individuals under the age of 16.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">11. Policy Updates</h2>
            <p className="text-gray-700 mt-1">
              Any changes to this policy will be updated on this page.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-xl font-bold text-blue-900">12. Contact Us</h2>
            <p className="text-gray-700 mt-1">
              <strong>Panel Focus (PFR Insights Pvt. Ltd.)</strong><br/>
              Northwest Delhi, Delhi, India – 110085<br/>
              ✉ <a href="mailto:privacy@panelfocus.com" className="text-blue-700 underline">
                privacy@panelfocus.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
