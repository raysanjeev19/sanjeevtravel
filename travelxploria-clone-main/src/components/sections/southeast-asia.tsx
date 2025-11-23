import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Destination } from "../types";

const destinations: Destination[] = [
  {
    id: "1",
    name: "Bali",
    subTitle: "Where Paradise Meets Culture",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Thailand",
    subTitle: "Thrill in",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Singapore",
    subTitle: "Urban Oasis",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Vietnam",
    subTitle: "Timeless Charm",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Malaysia",
    subTitle: "Asia's True Essence",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Indonesia",
    subTitle: "Emerald of the Equator",
    image: "https://images.unsplash.com/photo-1555899434-94d1368b7af6?q=80&w=1000&auto=format&fit=crop",
  },
];

const SoutheastAsiaSection: React.FC = () => {
  // Refs for custom navigation buttons
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-[#f8f9fa] py-20">
      {/* Increased padding-x for more side spacing as requested */}
      <div className="container mx-auto px-12 md:px-32 lg:px-48">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 font-sans mb-3">
            Explore South East Asia
          </h2>
          <p className="text-slate-500 font-sans font-light">
            One Region, Countless Wonders – Beaches, Temples & Timeless Culture
          </p>
        </div>

        <div className="relative group">
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: '.custom-swiper-pagination',
              clickable: true,
              dynamicBullets: true, // Limits visible bullets
              dynamicMainBullets: 3, // Ensures only 3 main bullets are visible
            }}
            onBeforeInit={(swiper) => {
              // Override internal navigation parameters with our refs
              if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="!pb-4 !px-2"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id}>
                {/* 
                  Updates:
                  - aspect-[4/4.5]: Reduces height (shorter than 4/5)
                  - rounded-[1.5rem]: Reduced curve (was 2.5rem)
                */}
                <div className="relative aspect-[4/4.5] w-full rounded-[1.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 group/card">
                  
                  {/* Background Image */}
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center justify-end h-full text-center">
                    
                    {/* Cursive Subtitle */}
                    <span className="font-script text-white/95 text-2xl md:text-3xl mb-1 transform transition-transform duration-500">
                      {destination.subTitle}
                    </span>
                    
                    {/* Main Title */}
                    <h3 className="text-white text-3xl font-serif font-bold tracking-wide drop-shadow-md">
                      {destination.name}
                    </h3>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation & Pagination Control Row */}
          {/* Reduced gap to 3 to bring arrows closer to the 3 dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            
            {/* Prev Button */}
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-accent-navy text-white flex items-center justify-center shadow-lg hover:bg-slate-700 active:scale-95 transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Pagination Dots Container */}
            {/* Removed !w-auto and flex to let Swiper handle dynamic width masking properly */}
            <div className="custom-swiper-pagination"></div>

            {/* Next Button */}
            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-accent-navy text-white flex items-center justify-center shadow-lg hover:bg-slate-700 active:scale-95 transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default SoutheastAsiaSection;