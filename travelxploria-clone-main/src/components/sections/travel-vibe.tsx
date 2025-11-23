
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const vibeCardsData = [
  { 
    title: "Family\nVacation", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_29.png",
    fontClass: "font-dancing" // Script style
  },
  { 
    title: "Honey\nMoon", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_29.png",
    fontClass: "font-playfair italic" // Elegant serif
  },
  { 
    title: "Hill\nStation", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_30.png",
    fontClass: "font-caveat" // Handwriting
  },
  { 
    title: "Beach\nHoliday", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_29.png",
    fontClass: "font-cinzel" // Decorative
  },
  { 
    title: "Adventure", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_30.png",
    fontClass: "font-oswald uppercase tracking-wider" // Stencil/Impact look
  },
  { 
    title: "Tour By\nLarge Team", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_29.png",
    fontClass: "font-playfair font-bold" // Bold Serif
  }
];

const TravelVibeSection = () => {
  return (
    <>
      <style>
        {`
          .font-caveat {
            font-family: 'Caveat', cursive;
          }
           .travel-vibe-section .swiper-button-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}
      </style>
      <section className="travel-vibe-section w-full py-16 px-4 bg-white">
        {/* Container with Lime Gradient */}
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#eefce3] via-[#e6f9d9] to-[#dcfce7] rounded-[32px] py-16 px-4 sm:px-6 lg:px-8 shadow-sm">
            <div className="text-center">
                <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f43f5e]">
                    Pick Your Travel Vibe
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-gray-600 font-sans leading-relaxed">
                    Whether you're a thrill-seeker, a laid-back beach lover, or a cultural explorer, your perfect trip starts here. Browse handpicked experiences tailored to your unique travel personality and let your next adventure unfold effortlessly. Because travel isn’t one-size-fits-all — it’s personal.
                </p>
            </div>

            <div className="relative mt-12 px-2 md:px-8">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    loop={true}
                    centeredSlides={false}
                    navigation={{
                        nextEl: ".travel-vibe-next",
                        prevEl: ".travel-vibe-prev",
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 12 },
                        640: { slidesPerView: 3, spaceBetween: 16 },
                        768: { slidesPerView: 4, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 24 },
                        1280: { slidesPerView: 6, spaceBetween: 24 },
                    }}
                    className="flex justify-center pb-8"
                >
                    {vibeCardsData.map((card, index) => (
                        <SwiperSlide key={index} className="!w-[160px] md:!w-[180px]">
                            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <img
                                    src={card.image}
                                    alt={card.title.replace('\n', ' ')}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                                
                                <div className="absolute inset-0 flex items-center justify-center p-3">
                                    <p className={`${card.fontClass} text-white text-2xl md:text-3xl text-center leading-tight whitespace-pre-line drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]`}>
                                        {card.title}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* Custom Navigation with 3 Dots in the middle */}
                <div className="flex justify-center items-center gap-6 mt-8">
                    <button className="travel-vibe-prev w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center hover:bg-[#162d4a] transition-all shadow-md active:scale-95">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {/* 3 Static Dots */}
                    <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#f43f5e] opacity-50"></div>
                        <div className="w-2 h-2 rounded-full bg-[#f43f5e] opacity-50"></div>
                    </div>
                    
                    <button className="travel-vibe-next w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center hover:bg-[#162d4a] transition-all shadow-md active:scale-95">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default TravelVibeSection;
