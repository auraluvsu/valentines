import { useState } from 'react';
import { motion } from 'motion/react';
import { PasswordGate } from './components/PasswordGate';
import { PhotoCarousel } from './components/PhotoCarousel';
import { VideoSection } from './components/VideoSection';
import { FinalMessage } from './components/FinalMessage';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <PasswordGate onCorrectPassword={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFE5E8] via-[#FFF0F2] to-[#FFE5E8]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-12 pb-8 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[#D4AF37] animate-pulse" />
            <h1
              className="text-4xl md:text-6xl text-[#8B1538]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Happy Valentine's Day, Ameniye
            </h1>
            <Sparkles className="w-8 h-8 text-[#D4AF37] animate-pulse" />
          </div>
          <p
            className="text-xl text-gray-700 italic"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            A few memories from us
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="space-y-16 pb-16">
        {/* Photo Carousel Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="py-8"
        >
          <h2
            className="text-3xl md:text-4xl text-center mb-8 text-[#8B1538]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Moments Together
          </h2>
          <PhotoCarousel />
        </motion.section>

        {/* Video Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8"
        >
          <h2
            className="text-3xl md:text-4xl text-center mb-8 text-[#8B1538]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Special Moments
          </h2>
          <VideoSection />
        </motion.section>

        {/* Final Message Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8"
        >
          <FinalMessage />
        </motion.section>
      </div>

      {/* Floating hearts decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#D4AF37] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              y: ['-10vh', '110vh'],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>
    </div>
  );
}
