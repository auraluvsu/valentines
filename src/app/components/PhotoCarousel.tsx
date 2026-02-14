import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import photo1 from '../../assets/1st.png';
import photo4 from '../../assets/2nd.png';
import photo5 from '../../assets/3rd.png';

interface Photo {
  url: string;
  caption: string;
}

const photos: Photo[] = [
  {
    url: photo1,
    caption: 'Our favorite selfie together',
  },
  {
    url: photo4,
    caption: 'Peace and love with you',
  },
  {
    url: photo5,
    caption: 'Adventures in the sunshine',
  },
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
      style={{ border: '2px solid #D4AF37' }}
    >
      <ChevronRight className="w-6 h-6 text-[#8B1538]" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
      style={{ border: '2px solid #D4AF37' }}
    >
      <ChevronLeft className="w-6 h-6 text-[#8B1538]" />
    </button>
  );
}

export function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="outline-none">
            <div className="px-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ border: '3px solid #D4AF37' }}>
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className={`w-full h-[400px] md:h-[500px] ${index === 1 ? 'object-contain' : 'object-cover'}`}
                />
              </div>
              <p
                className="text-center mt-4 text-[#8B1538] italic"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem' }}
              >
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
