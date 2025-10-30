import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Flying Chess AI Privacy Policy. Learn how we protect your data and respect your privacy. GDPR-compliant and transparent."
      />

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 sm:p-12 space-y-8 shadow-lg"
          >
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                At Flying Chess AI, we take your privacy seriously. This Privacy Policy explains how we
                collect, use, and protect your information when you use our game and services. We are
                committed to transparency and maintaining the highest standards of data protection.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Account information (username, email) if you create an account</li>
                    <li>Contact information when you reach out to support</li>
                    <li>Feedback and survey responses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Game usage statistics (anonymized)</li>
                    <li>Device information and operating system</li>
                    <li>Technical data for bug fixes and improvements</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>To provide and improve our gaming services</li>
                <li>To personalize your gaming experience</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To ensure security and prevent fraud</li>
                <li>To send important updates about the game (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Protection & Security</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We implement robust security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>All downloads are served over HTTPS encryption</li>
                  <li>Data is encrypted both in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Limited employee access to personal data</li>
                  <li>Secure server infrastructure with industry-standard protections</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Data Rights</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We respect your rights under GDPR and other privacy regulations. You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@flyingchessai.com" className="text-blue-600 hover:underline">
                  privacy@flyingchessai.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies & Tracking</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We use minimal cookies to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Essential cookies for basic functionality</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Analytics cookies (with your consent) to improve our service</li>
                </ul>
                <p className="mt-4">
                  You can control cookie preferences through our cookie banner or your browser settings.
                  Disabling certain cookies may limit some features.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Sharing & Third Parties</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p className="font-semibold text-gray-900">
                  We NEVER sell your personal data to third parties.
                </p>
                <p>
                  We may share limited data with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Service providers who help us operate the game (under strict confidentiality agreements)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Analytics services (anonymized data only)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Flying Chess AI is suitable for all ages. We do not knowingly collect personal information
                from children under 13 without parental consent. If you believe we have collected such
                information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of significant changes
                via email or through the game. Your continued use after changes constitutes acceptance
                of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>Email: <a href="mailto:privacy@flyingchessai.com" className="text-cyan-400 hover:underline">privacy@flyingchessai.com</a></p>
                <p>Privacy Officer: Flying Chess AI Privacy Team</p>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </>
  );
}
