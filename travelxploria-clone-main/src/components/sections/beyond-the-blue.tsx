import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Interfaces
interface Destination {
  name: string;
  subtitle: string;
  image: string;
}

// Data matching the image provided
const destinations: Destination[] = [
  {
    name: 'Maldives',
    subtitle: 'Heaven Meets the Ocean',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'GOA',
    subtitle: 'Feel Alive in',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    
    image: '/srilanka.webp'
  },
  {
   
    image: '/singapore.webp'
  },
  {
    name: 'Lakshadweep',
    subtitle: 'A High Tide of Serenity',
    image: 'https://images.unsplash.com/photo-1590444391696-6e54541315ce?q=80&w=1000&auto=format&fit=crop'
  }
];

const BeyondTheBlue: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // State to track scroll availability for button enabling/disabling
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Debounce helper
  const debounce = (func: Function, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // Check scroll position and update index/buttons
  const updateScrollState = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

      // Calculate approximate index
      const card = scrollContainerRef.current.children[0] as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 24; // gap-6 is 24px
        const effectiveWidth = cardWidth + gap;
        const newIndex = Math.round(scrollLeft / effectiveWidth);
        
        // Clamp index to bounds
        const safeIndex = Math.min(Math.max(newIndex, 0), destinations.length - 1);
        setCurrentIndex(safeIndex);
      }
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const debouncedUpdate = debounce(updateScrollState, 100);
      container.addEventListener('scroll', debouncedUpdate);
      // Initial check
      updateScrollState();
      
      return () => container.removeEventListener('scroll', debouncedUpdate);
    }
  }, [updateScrollState]);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[index] as HTMLElement;
      if (card) {
        const gap = 24;
        const offset = index * (card.offsetWidth + gap);
        
        scrollContainerRef.current.scrollTo({
          left: offset,
          behavior: 'smooth'
        });
      }
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(destinations.length - 1, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <section className="bg-white py-12 w-full">
      {/* Increased padding on the container: px-8 on mobile, md:px-24 on desktop */}
      <div className="container mx-auto px-8 md:px-24 lg:px-32 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-normal font-sans text-gray-900 tracking-tight">
            Beyond the Blue
          </h2>
          <p className="mt-2 text-gray-500 font-sans text-base font-light tracking-wide">
            Where Every Wave Tells a Story
          </p>
        </div>

        {/* Carousel Section */}
        <div className="w-full max-w-[1400px]">
          <div 
            ref={scrollContainerRef}
            // Hiding scrollbar explicitly using Tailwind arbitrary variants and inline styles for cross-browser support
            className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] snap-x snap-mandatory px-2 md:px-4 pb-4 pt-2"
            style={{ 
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none' // IE/Edge
            }}
          >
            {destinations.map((dest, index) => (
              <div 
                key={index} 
                onClick={() => scrollToIndex(index)}
                // Small Card Sizes
                className="snap-start flex-shrink-0 relative w-[220px] h-[180px] md:w-[260px] md:h-[220px] lg:w-[300px] lg:h-[240px] rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
              >
                {/* Image */}
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-90"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] md:text-xs font-sans font-light tracking-widest uppercase mb-1 opacity-90">
                    {dest.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-wide drop-shadow-lg">
                    {dest.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls (Bottom Centered) */}
        <div className="flex items-center gap-6 mt-6">
          
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              !canScrollLeft 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-accent-navy text-white hover:bg-slate-700 shadow-lg'
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`rounded-full transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'w-6 h-1.5 bg-accent-coral' // Active state: dash
                    : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400' // Inactive state: dot
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              !canScrollRight 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-accent-navy text-white hover:bg-slate-700 shadow-lg'
            }`}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default BeyondTheBlue;
