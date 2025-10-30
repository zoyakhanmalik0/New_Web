import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Flying Chess AI Terms & Conditions. User responsibilities, intellectual property rights, and usage guidelines."
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
              Terms & Conditions
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using Flying Chess AI (the "Game"), you agree to be bound by these Terms
                and Conditions. If you do not agree with any part of these terms, you may not use the Game.
                Please read these terms carefully before downloading or playing.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">License to Use</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We grant you a limited, non-exclusive, non-transferable, revocable license to use
                  Flying Chess AI for personal, non-commercial purposes, subject to these terms.
                </p>
                <p className="font-semibold text-gray-900">You may:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Download and install the Game on your personal devices</li>
                  <li>Play the Game for personal entertainment</li>
                  <li>Share the official download links with others</li>
                </ul>
                <p className="font-semibold text-gray-900 mt-4">You may NOT:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Redistribute, sell, or lease the Game</li>
                  <li>Reverse engineer, decompile, or disassemble the Game</li>
                  <li>Remove or modify copyright notices or branding</li>
                  <li>Use the Game for commercial purposes without permission</li>
                  <li>Exploit bugs or vulnerabilities for unfair advantage</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>As a user of Flying Chess AI, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Use the Game in compliance with all applicable laws and regulations</li>
                  <li>Not use the Game to harass, abuse, or harm others</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not use cheats, hacks, or unauthorized third-party software</li>
                  <li>Respect other players and maintain appropriate conduct</li>
                  <li>Keep your account credentials secure and confidential</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  All content in Flying Chess AI, including but not limited to graphics, code, design,
                  gameplay mechanics, AI algorithms, logos, and trademarks, are owned by Flying Chess AI
                  or its licensors and are protected by intellectual property laws.
                </p>
                <p>
                  The Flying Chess AI name, logo, and all related names, logos, product and service names,
                  designs, and slogans are trademarks of Flying Chess AI. You may not use these marks
                  without our prior written permission.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Downloads & Installation</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Flying Chess AI is available for download on multiple platforms. By downloading the Game:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>You confirm you meet the minimum system requirements</li>
                  <li>You accept that downloads are provided "as is"</li>
                  <li>You are responsible for any data charges from your provider</li>
                  <li>Updates may be required to continue using the Game</li>
                  <li>All downloads are served over secure HTTPS connections</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Flying Chess AI is provided "AS IS" and "AS AVAILABLE" without warranties of any kind,
                  either express or implied, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Implied warranties of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                  <li>Uninterrupted or error-free operation</li>
                </ul>
                <p className="mt-4">
                  We do not guarantee that the Game will be free from bugs, viruses, or other harmful
                  components, although we take reasonable precautions to prevent such issues.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, Flying Chess AI and its affiliates shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages, or any
                loss of profits or revenues, whether incurred directly or indirectly, or any loss of data,
                use, goodwill, or other intangible losses resulting from your use of the Game.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Account Termination</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We reserve the right to suspend or terminate your access to Flying Chess AI at any time,
                  with or without notice, for any reason, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Violation of these Terms and Conditions</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Harassment or abuse of other users</li>
                  <li>Use of unauthorized software or cheats</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Updates & Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, update, or discontinue Flying Chess AI or any part of it
                at any time. We may also update these Terms and Conditions periodically. Continued use of
                the Game after changes constitutes acceptance of the updated terms. We will notify users
                of significant changes through the Game or via email.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with applicable
                laws, without regard to conflict of law principles. Any disputes arising from these terms
                or your use of the Game shall be resolved through binding arbitration or in the appropriate
                courts.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms and Conditions is found to be invalid or unenforceable,
                the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>Email: <a href="mailto:legal@flyingchessai.com" className="text-blue-600 hover:underline">legal@flyingchessai.com</a></p>
                <p>Support: <a href="mailto:contact@flyingchessai.com" className="text-blue-600 hover:underline">contact@flyingchessai.com</a></p>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 text-sm leading-relaxed">
                By downloading, installing, or using Flying Chess AI, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </>
  );
}
