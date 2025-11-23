import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  tagline: string;
  imageSrc: string;
}

const HIMALAYAN_DESTINATIONS: Destination[] = [
  { 
    id: '1',
    name: 'Nepal', 
    tagline: 'Home of the Himalayas',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_24.png' 
  },
  { 
    id: '2',
    name: 'Bhutan', 
    tagline: 'Sacred Peaks & Silent Prayers', 
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_25.png' 
  },
  { 
    id: '3',
    name: 'Darjeeling & Sikkim', 
    tagline: 'Eastern Crown', 
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_26.png' 
  },
  { 
    id: '4',
    name: 'Arunachal', 
    tagline: 'The Dawn-Lit Mountains', 
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_27.png' 
  },
  { 
    id: '5',
    name: 'Meghalaya', 
    tagline: 'Abode of Clouds', 
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_28.png' 
  }
];

const MysticHimalayas: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll handler
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

  // Scroll listener for pagination
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = 272; // Card width + gap approximation
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, newIndex), HIMALAYAN_DESTINATIONS.length - 1));
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  // Pagination Logic: STRICTLY 3 DOTS
  const totalDots = 3;
  const maxIndex = HIMALAYAN_DESTINATIONS.length - 1;
  const activeDotIndex = Math.round((activeIndex / maxIndex) * (totalDots - 1));

  return (
    <section className="bg-[#fafafa] py-16">
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] font-serif mb-2">
            Mystic Himalayas
          </h2>
          <p className="text-gray-500 font-light text-sm md:text-base font-sans">
            Breathe the Pure Air of the Himalayas
          </p>
        </div>

        <div className="relative">
           <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto px-4 pb-8 pt-2 scroll-smooth snap-x snap-mandatory hide-scrollbar justify-start md:justify-center"
          >
            {HIMALAYAN_DESTINATIONS.map((dest) => (
              <div 
                key={dest.id}
                className="group relative h-[250px] w-[280px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-gray-200 snap-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={dest.imageSrc}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-4 left-0 w-full text-center px-4">
                  <p className="text-[10px] md:text-xs text-gray-300 font-sans mb-1 uppercase tracking-wider opacity-90">
                    {dest.tagline}
                  </p>
                  <h3 className="text-2xl font-serif text-white font-bold tracking-wide drop-shadow-md">
                    {dest.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation & Pagination */}
          <div className="flex items-center justify-center gap-6 mt-4">
             <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#1e293b] text-white flex items-center justify-center hover:bg-[#334155] transition-colors shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Exactly 3 Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalDots }).map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeDotIndex ? 'w-8 bg-[#ff6b6b]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#1e293b] text-white flex items-center justify-center hover:bg-[#334155] transition-colors shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MysticHimalayas;