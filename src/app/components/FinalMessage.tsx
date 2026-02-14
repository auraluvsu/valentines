import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function FinalMessage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#FFF8F0] to-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        style={{ border: '3px solid #D4AF37' }}
      >
        {/* Decorative gold corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#D4AF37] rounded-br-3xl"></div>

        <div className="relative z-10">
          <h2
            className="text-3xl md:text-4xl text-center mb-8 text-[#8B1538]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            To My Beautiful Diamond
          </h2>

          <div className="space-y-4 text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8', textAlign: 'center' }}>
            <p className="text-lg">
            Thank you for being my valentine Ameniye. I know we’ve been through so much in our relationship and its definitely had its ups and downs but theres no one else I would rather go through all of that with. You’re kind, funny, caring, helpful, gorgeous, funny, intelligent, wise beyond your years and literally everything wanted since i was little. You are an amazing and wonderful person and I want nothing more than to spend the rest of my life with you.<br></br><br></br>I love you my diamond💎
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <Heart className="w-12 h-12 text-[#8B1538] fill-[#8B1538] animate-pulse" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
