import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Inline Type definition to avoid import errors
interface Destination {
  id: string;
  name: string;
  tagline?: string;
  href: string;
  imageSrc: string;
}

// Inline Data to avoid import errors due to folder structure mismatches
const DESTINATIONS: Destination[] = [
  { 
    id: '1',
    name: 'Thailand', 
    tagline: 'Land of Smiles',
    href: '#', 
    imageSrc: 'https://picsum.photos/seed/thailand/600/800' 
  },
  { 
    id: '2',
    name: 'Mauritius', 
    tagline: 'Beyond the Blue',
    href: '#', 
    imageSrc: 'https://picsum.photos/seed/mauritius/600/800'
  },
  { 
    id: '3',
    name: 'Malaysia', 
    tagline: 'A Mosaic of Cultures',
    href: '#', 
    imageSrc: 'https://picsum.photos/seed/malaysia/600/800'
  },
  { 
    id: '4',
    name: 'Sri Lanka', 
    tagline: 'Island of Treasures',
    href: '#', 
    imageSrc: 'https://picsum.photos/seed/srilanka/600/800'
  },
  { 
    id: '5',
    name: 'Kenya', 
    tagline: 'Home of Safari',
    href: '#', 
    imageSrc: 'https://picsum.photos/seed/kenya/600/800'
  },
  { 
    id: '6',
    name: 'Vietnam', 
    tagline: 'Timeless Charm',
    href: '#', 
    imageSrc: 'https://picsum.photos/seed/vietnam/600/800'
  },
  { 
    id: '7',
    name: 'Dubai', 
    tagline: 'Desert Luxury',
    href: '#', 
    imageSrc: 'https://picsum.photos/seed/dubai/600/800'
  },
  { 
    id: '8',
    name: 'Maldives', 
    tagline: 'Tropical Paradise',
    href: '#', 
    imageSrc: 'https://picsum.photos/seed/maldives/600/800'
  },
  { 
    id: '9',
    name: 'Singapore', 
    tagline: 'City in a Garden',
    href: '#', 
    imageSrc: 'https://picsum.photos/seed/singapore/600/800'
  },
  { 
    id: '10',
    name: 'Bali', 
    tagline: 'Island of Gods',
    href: '#', 
    imageSrc: 'https://picsum.photos/seed/bali/600/800'
  },
];

const PopularDestinations: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll handler function
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by the width of a card + gap (approx 240px + 16px)
      const scrollAmount = 260;
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Update active index based on scroll position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      // Card width (approx 240) + gap (16) = 256
      const cardWidth = 256; 
      
      const newIndex = Math.round(scrollLeft / cardWidth);
      const safeIndex = Math.min(
        Math.max(0, newIndex), 
        DESTINATIONS.length - 1
      );
      
      setActiveIndex(safeIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Pagination Logic: Always show exactly 4 dots
  const totalDots = 4;
  const maxIndex = DESTINATIONS.length - 1;
  // Calculate which dot is active (0 to 3) based on the scroll percentage
  const activeDotIndex = Math.round((activeIndex / maxIndex) * (totalDots - 1));

  return (
    <section className="relative bg-[#f6f7fb] py-10 md:py-16">
      {/* Internal Style to Hide Scrollbar safely across different environments */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="container mx-auto px-0 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center px-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] font-serif mb-2">
            Popular Destinations
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light tracking-wide uppercase">
            Handpicked Getaways Loved by Thousands
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-8">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 pt-2 scroll-smooth snap-x snap-mandatory hide-scrollbar"
            style={{ 
              scrollPaddingLeft: '50%',
              scrollPaddingRight: '50%'
            }}
          >
            {DESTINATIONS.map((destination) => (
              <a 
                key={destination.id}
                href={destination.href} 
                className="group relative h-[200px] w-[240px] md:h-[240px] md:w-[280px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[20px] bg-gray-200 snap-center shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={destination.imageSrc}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-center transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                  {destination.tagline && (
                    <p className="mb-1 text-[10px] font-medium tracking-wider text-gray-300 uppercase opacity-90 font-sans">
                      {destination.tagline}
                    </p>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-white font-serif tracking-wide drop-shadow-md">
                    {destination.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-4">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#1e293b] text-white hover:bg-[#334155] transition-colors shadow-lg focus:outline-none"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Indicators - Strictly 4 Dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalDots }).map((_, index) => {
              const isActive = index === activeDotIndex;
              return (
                <div 
                  key={index}
                  className={`
                    transition-all duration-300 rounded-full
                    ${isActive ? 'w-8 h-1.5 bg-[#ff6b6b]' : 'w-1.5 h-1.5 bg-gray-300'}
                  `}
                />
              );
            })}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#1e293b] text-white hover:bg-[#334155] transition-colors shadow-lg focus:outline-none"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;