"use client";

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState, useEffect, useCallback } from 'react';

// Data for the destination cards based on instructions and assets
const destinations = [
  {
    name: 'Maldives',
    subtitle: 'Palm-Fringed Private Oasis',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_6.png'
  },
  {
    name: 'GOA',
    subtitle: 'Feel the Vibe of the Ocean',
    image: null // No image asset provided in the input, using a placeholder
  },
  {
    name: 'Andaman',
    subtitle: 'Explore the International Ocean of the Sea',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_12.png'
  }
];

const BeyondTheBlue = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [isScrolledToStart, setIsScrolledToStart] = useState(true);

  const debounce = (func: Function, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const updateNavState = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsScrolledToStart(scrollLeft < 10);
      setIsScrolledToEnd(scrollLeft + clientWidth >= scrollWidth - 10);

      const cardWidth = (scrollContainerRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
      const gap = 24; // from gap-6
      const effectiveCardWidth = cardWidth + gap;
      if (effectiveCardWidth > 0) {
        setCurrentIndex(Math.round(scrollLeft / effectiveCardWidth));
      }
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const debouncedUpdateNavState = debounce(updateNavState, 100);
      container.addEventListener('scroll', debouncedUpdateNavState);
      updateNavState(); // Initial check on mount
      return () => container.removeEventListener('scroll', debouncedUpdateNavState);
    }
  }, [updateNavState]);

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = (scrollContainerRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
      const gap = 24; 
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  };

  const handleNext = () => {
     if (scrollContainerRef.current) {
      const cardWidth = (scrollContainerRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
      const gap = 24; 
      scrollContainerRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold font-display text-text-black">Beyond the Blue</h2>
          <p className="mt-2 text-text-medium-gray font-body text-base">Where Every Wave Tells a Story</p>
        </div>

        <div className="relative flex justify-center">
            <div className="relative w-full max-w-5xl">
              <button
                onClick={handlePrev}
                disabled={isScrolledToStart}
                className="absolute top-1/2 -mt-5 -left-4 md:-left-5 w-10 h-10 bg-accent-navy text-white rounded-full flex items-center justify-center z-10 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-opacity-80"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div 
                ref={scrollContainerRef} 
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-2 py-4"
              >
                {destinations.map((dest, index) => (
                  <div key={index} className="snap-start flex-shrink-0 w-[calc(90vw-24px)] sm:w-[320px] lg:w-[350px]">
                    <div className="relative w-full h-[250px] md:h-[280px] rounded-xl overflow-hidden group shadow-md transition-shadow duration-300 hover:shadow-xl">
                      {dest.image ? (
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          sizes="(max-width: 640px) 90vw, 350px"
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-500 font-body">Image for {dest.name}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-5 left-5 text-white">
                        <p className="text-sm font-light font-body">{dest.subtitle}</p>
                        <h3 className="text-2xl font-bold font-display mt-1">{dest.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={isScrolledToEnd}
                className="absolute top-1/2 -mt-5 -right-4 md:-right-5 w-10 h-10 bg-accent-navy text-white rounded-full flex items-center justify-center z-10 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-opacity-80"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-accent-coral' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondTheBlue;