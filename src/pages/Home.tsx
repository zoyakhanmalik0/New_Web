import { motion } from 'framer-motion';
import { Download, Brain, Users, Zap, Shield, Feather, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'Smart AI Engine',
      description: 'Advanced AI that adapts to your playing style and provides challenging gameplay at any skill level.'
    },
    {
      icon: Users,
      title: 'Multiplayer Mode',
      description: 'Play with friends locally or online. Cross-platform support for seamless gaming experience.'
    },
    {
      icon: Zap,
      title: 'Smooth Gameplay',
      description: 'Optimized performance with stunning graphics and fluid animations across all devices.'
    },
    {
      icon: Shield,
      title: 'Secure Downloads',
      description: 'HTTPS-secured downloads with no malware, no trackers, and complete privacy protection.'
    },
    {
      icon: Feather,
      title: 'Lightweight',
      description: 'Minimal system requirements. Fast installation and efficient resource usage.'
    },
    {
      icon: MessageCircle,
      title: 'Community Support',
      description: 'Active community, regular updates, and dedicated support team ready to help.'
    }
  ];

  const downloads = [
    { label: 'Download Flying Chess', link: 'https://flyingchess.com/?from_gameid=8418021&channelCode=8307610' },
    { label: 'Download 3 Patti Teen', link: 'https://3pattiteen.com/?from_gameid=8418021&channelCode=8307610' },
    { label: 'Download 3 Patti Gold', link: 'https://flyingchess.com/?from_gameid=8173353&channelCode=100000' },
    { label: 'Download 3 Patti No 1', link: 'https://flyingchess.com/?from_gameid=8477993&channelCode=100000' },
    { label: 'Download 3 Patti Lucky', link: 'https://flyingchess.com/?from_gameid=8418021&channelCode=8307610' },
    { label: 'Download 3 Patti Room', link: 'https://3pattiteen.com/?from_gameid=8173353&channelCode=100000' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Casual Gamer',
      text: 'The AI is incredibly smart! Every game feels fresh and challenging. Best Flying Chess experience ever.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Strategy Enthusiast',
      text: 'Beautiful interface, smooth gameplay, and the multiplayer mode is flawless. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Parent',
      text: 'Safe, educational, and fun for the whole family. My kids love it and I appreciate the privacy focus.',
      rating: 5
    }
  ];

  return (
    <>
      <SEO />

      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Experience the Future of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Flying Chess
              </span>
              <br />
              Powered by AI
            </h1>

            {/* ✅ Buttons stacked vertically */}
            <div className="flex flex-col justify-center items-center gap-3 mb-16">
              {downloads.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group w-64 text-center px-5 py-3 bg-black border-2 border-black rounded-lg hover:bg-gray-900 hover:shadow-lg transition-all text-sm"
                >
                  <Download className="inline-block w-4 h-4 mr-1.5 text-white" />
                  <span className="text-white font-medium">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Flying Chess AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge features designed for the ultimate gaming experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-200 transition-colors">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What Players Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied players worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div>
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4">
            <p className="text-gray-500 text-center text-sm">
              Advertisement Space - AdSense Integration
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
