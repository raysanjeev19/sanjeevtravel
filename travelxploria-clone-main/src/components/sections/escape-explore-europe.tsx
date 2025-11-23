
import React from 'react';
import { ChevronRight } from 'lucide-react';

const destinations = [
  {
    name: 'Spain',
    sub: 'A Fiesta for the Senses',
    img: '', // Image removed
    fontClass: 'font-playfair font-black text-lg md:text-xl italic', 
    subFontClass: 'font-sans font-medium text-[7px] tracking-[0.15em] uppercase',
    overlayColor: 'from-black/80 via-black/20 to-transparent'
  },
  {
    name: 'FRANCE',
    sub: 'The Art of Living',
    img: '', // Image removed
    fontClass: 'font-oswald font-bold tracking-[0.2em] uppercase text-base md:text-lg', 
    subFontClass: 'font-sans font-light tracking-widest text-[8px] uppercase',
    overlayColor: 'from-black/80 via-black/20 to-transparent'
  },
  {
    name: 'Italy',
    sub: 'Discover the Myth',
    img: '', // Image removed
    fontClass: 'font-cinzel font-black tracking-wide text-base md:text-lg', 
    subFontClass: 'font-dancing text-xs text-[#cca352]',
    overlayColor: 'from-black/80 via-black/20 to-transparent'
  },
  {
    name: 'GERMANY',
    sub: 'Historic & Modern',
    img: '', // Image removed
    fontClass: 'font-oswald font-bold tracking-tighter uppercase text-base md:text-lg', 
    subFontClass: 'font-serif italic text-[9px] tracking-wide',
    overlayColor: 'from-black/80 via-black/20 to-transparent'
  },
  {
    name: 'GREECE',
    sub: 'Mediterranean Soul',
    img: '', // Image removed
    fontClass: 'font-cinzel font-bold text-sm md:text-base', 
    subFontClass: 'font-dancing text-xs',
    overlayColor: 'from-black/80 via-black/20 to-transparent'
  },
  {
    name: 'Switzerland',
    sub: 'The Heart of the Alps',
    img: '', // Image removed
    fontClass: 'font-playfair font-bold text-lg md:text-xl tracking-tight', 
    subFontClass: 'font-dancing text-xs md:text-sm text-[#f0e6d2]', 
    overlayColor: 'from-black/80 via-black/20 to-transparent'
  },
];

const EscapeExploreEurope = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FFFBF2] overflow-hidden">
      {/* 
         Updated Padding:
         lg:pl-40 -> High padding on the left to push text inwards
         lg:pr-4  -> Low padding on the right to keep images close to edge
      */}
      <div className="container mx-auto px-6 md:px-12 lg:pl-40 lg:pr-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5 self-center pt-2 animate-in slide-in-from-left duration-700">
            <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-[#1e3a5f] leading-tight mb-4 drop-shadow-xl font-playfair whitespace-nowrap">
              Escape <span className="text-[#eb6e55] font-dancing">&</span> Explore <span className="relative inline-block text-[#1e3a5f]">
                Europe
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#eb6e55] rounded-full shadow-sm"></div>
              </span>
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-sm font-light drop-shadow-sm">
              From romantic streets in Paris to the snowy Alps and Mediterranean
              coasts — your unforgettable European adventure begins here.
            </p>
            <a 
              href="/contact"
              className="group inline-flex items-center justify-center bg-[#eb6e55] hover:bg-[#d95d44] text-white text-xs font-semibold py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Contact Our Travel Experts
              <ChevronRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Image Grid */}
          <div className="lg:col-span-7 flex flex-col gap-3 animate-in slide-in-from-bottom duration-1000 mt-8 lg:mt-0">
            {/* 
                lg:ml-0 ensures it sticks to the text column
            */}
            <div className="max-w-2xl w-full lg:ml-0">
                <div className="grid grid-cols-3 gap-3">
                    {destinations.map((dest, index) => (
                    <div
                        key={index}
                        // Aspect ratio square (1:1)
                        // Use bg-gray-800 to serve as a placeholder background for the removed images
                        className="relative rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-gray-800 aspect-square"
                    >
                        {/* Image removed as requested */}
                        
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${dest.overlayColor} opacity-90 transition-opacity duration-300`}></div>
                        
                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end items-center pb-3 px-1 text-center z-10">
                            {dest.sub && (
                                <p className={`text-white/95 mb-0.5 drop-shadow-md transform group-hover:-translate-y-0.5 transition-transform duration-500 delay-75 ${dest.subFontClass}`}>
                                    {dest.sub}
                                </p>
                            )}
                            <h3 className={`text-white drop-shadow-2xl transform group-hover:-translate-y-0.5 transition-transform duration-500 ${dest.fontClass}`}>
                                {dest.name}
                            </h3>
                        </div>
                    </div>
                    ))}
                </div>
                
                {/* Show More Link */}
                <div className="flex justify-end mt-1 w-full">
                    <a href="/europe-packages" className="inline-flex items-center gap-1 text-[#1e3a5f] font-bold text-[9px] md:text-[10px] hover:text-[#eb6e55] transition-colors group uppercase tracking-widest border-b border-transparent hover:border-[#eb6e55] pb-0.5">
                        Show More Destinations
                        <ChevronRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EscapeExploreEurope;
