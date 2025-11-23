import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  tagline: string;
  imageSrc: string;
}

const GEMS_DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'JAPAN',
    tagline: 'Find Your Zen in',
    // Mount Fuji & Chureito Pagoda
    imageSrc: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'AUSTRALIA',
    tagline: "Nature's Boldest Canvas",
    // Sydney Opera House
    imageSrc: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'GEORGIA',
    tagline: 'A Journey Through Culture, History, and Nature',
    // Gergeti Trinity Church
    imageSrc: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'EGYPT',
    tagline: 'Beyond the Pyramids, Into Eternity',
    // Pyramids of Giza
    imageSrc: 'https://images.unsplash.com/photo-1539650116455-a2762580f008?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'JORDAN',
    tagline: 'Wander through Ancient Sands',
    // Petra / Wadi Rum style to match the reddish rock in screenshot
    imageSrc: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=600&auto=format&fit=crop',
  },
];

const HighlightsHiddenGems: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 280;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = 272;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, newIndex), GEMS_DESTINATIONS.length - 1));
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Pagination: Show 4 dots to match the screenshot style
  const totalDots = 4;
  const maxIndex = GEMS_DESTINATIONS.length - 1;
  const activeDotIndex = Math.round((activeIndex / maxIndex) * (totalDots - 1));

  return (
    <section className="bg-white py-16 md:py-24">
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
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[36px] font-semibold text-[#1a1a1a] font-sans mb-2 tracking-tight">
            Highlights & Hidden Gems
          </h2>
          <p className="text-gray-500 font-light text-base md:text-lg font-sans">
            perfect for every kind of traveler
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto px-4 pb-8 pt-2 scroll-smooth snap-x snap-mandatory hide-scrollbar justify-start md:justify-center"
          >
            {GEMS_DESTINATIONS.map((dest) => (
              <div
                key={dest.id}
                className="group relative h-[250px] w-[280px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-gray-200 snap-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={dest.imageSrc}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-5 text-left">
                  <p className="text-xs md:text-[13px] text-gray-200 font-light font-sans mb-1 opacity-90 leading-tight">
                    {dest.tagline}
                  </p>
                  <h3 className="text-2xl md:text-[26px] font-serif text-white uppercase tracking-wide font-normal">
                    {dest.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center hover:bg-[#162c47] transition-colors shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalDots }).map((_, idx) => (
                <div
                  key={idx}
                  className={`rounded-full transition-all duration-300 ${
                    idx === activeDotIndex ? 'w-8 h-2 bg-[#EF4444]' : 'w-2 h-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center hover:bg-[#162c47] transition-colors shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsHiddenGems;