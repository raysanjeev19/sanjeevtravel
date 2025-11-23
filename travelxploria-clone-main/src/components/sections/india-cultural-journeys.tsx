import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  tagline: string;
  imageSrc: string;
}

const INDIA_DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Rajasthan',
    tagline: 'Colors, Culture, and Camels',
    imageSrc: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Kerala',
    tagline: 'A Symphony of Backwaters and Green',
    imageSrc: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Andaman',
    tagline: 'Explore the Untouched Beauty of the Sea',
    // Updated image link for Andaman
    imageSrc: 'https://images.unsplash.com/photo-1583207804784-198ba4353030?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Uttarakhand',
    tagline: 'Dev Bhoomi, Land of the Gods',
    imageSrc: 'https://images.unsplash.com/photo-1588414734732-660b07304ddb?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Himachal',
    tagline: 'Adventures in the heart of the Himalayas',
    imageSrc: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
  },
];

const IndiaCulturalJourneys: React.FC = () => {
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
        INDIA_DESTINATIONS.length - 1
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

  // Pagination Logic: Always show exactly 4 dots if possible, or fewer if items are few
  const totalDots = 4;
  const maxIndex = INDIA_DESTINATIONS.length - 1;
  const activeDotIndex = Math.round((activeIndex / maxIndex) * (totalDots - 1));

  return (
    <section className="relative bg-white py-10 md:py-16">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="container mx-auto px-0 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center px-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] font-serif mb-2">
            Incredible India, Cultural Journeys
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light tracking-wide">
            Discover the Wonders Next Door – Explore, Experience, Embrace India
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
            {INDIA_DESTINATIONS.map((destination) => (
              <div 
                key={destination.id}
                className="group relative h-[200px] w-[240px] md:h-[240px] md:w-[280px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[20px] bg-gray-200 snap-center shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={destination.imageSrc}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity duration-300"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-center transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                  {/* Tagline - Script/Serif mix like the reference */}
                  <p className="mb-1 text-[11px] md:text-xs font-serif italic tracking-wider text-gray-200 opacity-90">
                    {destination.tagline}
                  </p>
                  {/* Name - Large Serif */}
                  <h3 className="text-xl md:text-3xl font-bold text-white font-serif tracking-wide drop-shadow-md">
                    {destination.name}
                  </h3>
                </div>
              </div>
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

          {/* Indicators */}
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

export default IndiaCulturalJourneys;