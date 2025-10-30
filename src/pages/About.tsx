import { motion } from 'framer-motion';
import { Target, Heart, Shield, Globe } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create educational, fun, and engaging AI-powered games that bring people together while respecting their privacy and security.'
    },
    {
      icon: Heart,
      title: 'Player-First',
      description: 'Every decision we make prioritizes the player experience. No intrusive ads, no data selling, just pure gaming enjoyment.'
    },
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'We develop AI responsibly, ensuring fair gameplay, transparency, and respect for user privacy at every step.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Building a worldwide community of players who share our passion for strategic gaming and innovation.'
    }
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Flying Chess AI's mission to create educational, fun, and privacy-safe AI games. We use ethical AI and prioritize data security."
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Flying Chess AI</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pioneering the future of strategic gaming through artificial intelligence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 sm:p-12 mb-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Flying Chess AI was born from a simple vision: to reimagine classic board games
                with cutting-edge artificial intelligence, making them more accessible, engaging,
                and enjoyable for players worldwide.
              </p>
              <p>
                We believe that games should be more than just entertainment. They should challenge
                the mind, foster social connections, and respect the player's time and privacy.
                That's why we've built Flying Chess AI from the ground up with these principles
                at our core.
              </p>
              <p>
                Our team combines decades of experience in game development, artificial intelligence,
                and cybersecurity to create an experience that's not only fun but also safe and
                educational. We're committed to continuous improvement and innovation, always
                listening to our community and pushing the boundaries of what's possible.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 sm:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy & Security</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Flying Chess AI, your privacy is paramount. We use ethical AI practices and
                implement robust security measures to ensure your data is always protected.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>All downloads are served over HTTPS for maximum security</li>
                <li>We never sell or share your personal data with third parties</li>
                <li>Minimal data collection - only what's essential for gameplay</li>
                <li>GDPR-compliant data handling and user rights protection</li>
                <li>Regular security audits and updates</li>
                <li>Transparent privacy policy with no hidden clauses</li>
              </ul>
              <p className="mt-6">
                We believe that great gaming experiences and strong privacy protections go hand in hand.
                That's our commitment to you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
