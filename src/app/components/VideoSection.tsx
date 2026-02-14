import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

const vid2 = "https://github.com/auraluvsu/valentines/releases/download/v0.1/1.fixed.mp4";
interface VideoCardProps {
  title: string;
  description: string;
  videoSrc: string;
}

function VideoCard({ title, description, videoSrc }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl" style={{ border: '2px solid #D4AF37' }}>
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFE5E8] to-[#FFD1D6] aspect-video" style={{ border: '2px solid red', backgroundColor: 'lightgray' }}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
          playsInline
          style={{ border: '2px solid blue', backgroundColor: 'lightblue' }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Play button that appears when paused */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 w-full h-full transition-all group"
          >
            <div className="bg-white/90 group-hover:bg-white rounded-full p-4 group-hover:scale-110 transition-all">
              <Play className="w-8 h-8 text-[#8B1538] translate-x-0.5" />
            </div>
          </button>
        )}
        
        {/* Pause button that appears when playing */}
        {isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all hover:scale-110 z-10"
            style={{ border: '2px solid #D4AF37' }}
          >
            <Pause className="w-6 h-6 text-[#8B1538]" />
          </button>
        )}
      </div>
      
      <h3
        className="text-xl text-[#8B1538] mt-4 mb-2"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {title}
      </h3>
      <p
        className="text-gray-700"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {description}
      </p>
    </div>
  );
}

export function VideoSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-6">
      <VideoCard
        title="September 5th, 2025"
        description="One of my favorite memories with you 💕"
        videoSrc={vid2}
      />
    </div>
  );
}
