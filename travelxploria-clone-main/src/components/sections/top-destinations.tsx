import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  { 
    name: "Europe", 
    image: "/larki.webp", 
    alt: "Europe" 
  },
  { 
    name: "Thailand", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_7.png", 
    alt: "Thailand" 
  },
  { 
    name: "Vietnam", 
    image: "/vietnam1.webp", 
    alt: "Vietnam" 
  },
  { 
    name: "Dubai & Abudhabi", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_4.png", 
    alt: "Dubai & Abudhabi" 
  },
  { 
    name: "Singapore", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_9.png", 
    alt: "Singapore" 
  },
  { 
    name: "Malaysia", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_6.png", 
    alt: "Malaysia" 
  },
  { 
    name: "Maldives", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_3.png", 
    alt: "Maldives" 
  },
  { 
    name: "Kenya", 
    image: "/malaysia.webp", 
    alt: "Kenya" 
  },
  { 
    name: "Switzerland", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_5.png", 
    alt: "Switzerland" 
  },
];

const TopDestinations: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white py-12 lg:py-16">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] font-serif flex items-center justify-center gap-2">
            <span className="text-[#ffcb74]">✨</span> Our Top Destination
          </h2>
          <p className="mt-2 text-base text-gray-500 font-light font-sans">
            Explore the Most Loved Places Around the World
          </p>
        </div>
        
        {/* Reduced gap to gap-2 for 'closer' arrows */}
        <div className="flex items-center justify-center gap-2 md:gap-4">
            <button
                onClick={() => scroll('left')}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-lg text-[#1E3A5F] flex items-center justify-center z-10 transition-all hover:bg-white hover:shadow-xl"
                aria-label="Scroll left"
            >
                <ChevronLeft size={20} />
            </button>
            
            <div
                ref={scrollContainerRef}
                className="flex items-start gap-8 overflow-x-auto scroll-smooth hide-scrollbar px-4 py-4"
            >
                {destinations.map((dest, index) => (
                  <div key={index} className="flex flex-col items-center flex-shrink-0 w-[100px] text-center group cursor-pointer">
                    <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 ring-2 ring-transparent group-hover:ring-[#1E3A5F]/20">
                        <img
                            src={dest.image}
                            alt={dest.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-800 leading-tight font-sans">
                        {dest.name}
                    </p>
                  </div>
                ))}
            </div>

            <button
                onClick={() => scroll('right')}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-lg text-[#1E3A5F] flex items-center justify-center z-10 transition-all hover:bg-white hover:shadow-xl"
                aria-label="Scroll right"
            >
                <ChevronRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
