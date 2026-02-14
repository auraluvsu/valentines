import { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface PasswordGateProps {
  onCorrectPassword: () => void;
}

export function PasswordGate({ onCorrectPassword }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - "04082022"
    if (password === '08042022' || password.toLowerCase() === 'infinity') {
      onCorrectPassword();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FFE5E8] via-[#FFD1D6] to-[#8B1538] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-[#D4AF37]">
          <motion.div
            animate={{ scale: error ? [1, 1.1, 1] : 1 }}
            className="flex justify-center mb-6"
          >
            <Heart className="w-12 h-12 text-[#8B1538] fill-[#8B1538]" />
          </motion.div>

          <h1 className="text-3xl md:text-4xl text-center mb-2 text-[#8B1538]" style={{ fontFamily: 'Playfair Display, serif' }}>
            A Little Place
          </h1>
          <p className="text-center text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Made just for you
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  error ? 'border-red-400' : 'border-[#D4AF37]'
                } focus:outline-none focus:ring-2 focus:ring-[#8B1538]/50 transition-all bg-[#FFF8F0]`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-2 text-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Try again, love ❤️
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8B1538] to-[#A61F3D] text-white py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Enter
            </button>
          </form>

          <div className="mt-8 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" style={{ animationDelay: '200ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}