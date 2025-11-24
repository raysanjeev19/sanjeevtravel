import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Volume2,
  VolumeX,
  Flame,
  ThumbsUp,
  Smile,
} from "lucide-react";

// --- Types ---
interface PostcardData {
  name: string;
  location: string;
  videoSrc: string;
  poster: string;
}

// --- Data ---
const postcards_data: PostcardData[] = [
  {
    name: "Subhodip",
    location: "Turkey",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-the-rain-1282-large.mp4",
    poster: "https://picsum.photos/400/800?random=1",
  },
  {
    name: "Soumee",
    location: "Mauritius",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-woman-running-above-the-camera-on-a-beach-40509-large.mp4",
    poster: "https://picsum.photos/400/800?random=2",
  },
  {
    name: "Abhishek",
    location: "Singapore",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-man-holding-neon-light-1238-large.mp4",
    poster: "https://picsum.photos/400/800?random=3",
  },
  {
    name: "Poushali",
    location: "Vietnam",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
    poster: "https://picsum.photos/400/800?random=4",
  },
  {
    name: "Rahul",
    location: "Thailand",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-tree-branches-in-the-breeze-1188-large.mp4",
    poster: "https://picsum.photos/400/800?random=5",
  },
];

// --- Internal Styles Component ---
const InternalStyles = () => (
  <style>{`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Sacramento&display=swap");

    .font-sacramento {
      font-family: 'Sacramento', cursive;
    }
    
    .font-poppins {
      font-family: 'Poppins', sans-serif;
    }

    /* Custom Swiper Pagination Styles - Dash and Dots */
    .swiper-pagination-custom .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background-color: #EF4444; /* Red color */
      opacity: 0.6;
      margin: 0 4px;
      transition: all 0.3s ease;
    }
    .swiper-pagination-custom .swiper-pagination-bullet-active {
      background-color: #EF4444;
      opacity: 1;
      width: 32px; /* Long dash */
      border-radius: 4px;
    }
  `}</style>
);

// --- Sub-components ---

const ReactionBubble = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <div className="bg-white rounded-full p-1.5 shadow-sm w-7 h-7 flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
    <div className={`${color}`}>
      {children}
    </div>
  </div>
);

const Postcard = ({ name, location, videoSrc, poster }: PostcardData) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl border-[4px] border-[#4A0404] group cursor-pointer aspect-[9/17]">
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        loop
        muted={isMuted}
        autoPlay
        playsInline
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      ></video>
      
      {/* Gradient Overlay - Darker at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

      {/* Top Right: Logo Watermark */}
      <div className="absolute top-4 right-4 z-20">
         <div className="flex flex-col items-end">
             {/* Simulating the logo from the image */}
             <span className="text-white font-sacramento text-lg opacity-90 drop-shadow-md leading-none">Travelxploria</span>
             <div className="w-8 h-0.5 bg-orange-400/80 mt-0.5"></div>
         </div>
      </div>

       {/* Top Right (Inside): Volume Icon similar to image */}
       <button
        onClick={toggleMute}
        className="absolute top-4 right-1 z-30 p-1 text-white/90 hover:text-white transition-colors"
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {/* Bottom Content - Centered */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20 flex flex-col items-center text-white pb-8 font-poppins">
        
        {/* Reaction Row */}
        <div className="flex items-center gap-1.5 mb-2">
          <ReactionBubble color="text-red-500"><Heart size={14} fill="currentColor" /></ReactionBubble>
          <ReactionBubble color="text-orange-500"><Flame size={14} fill="currentColor" /></ReactionBubble>
          <ReactionBubble color="text-yellow-500"><ThumbsUp size={14} fill="currentColor" /></ReactionBubble>
          <ReactionBubble color="text-pink-500"><Smile size={14} /></ReactionBubble>
        </div>

        {/* Name */}
        <h3 className="font-bold text-2xl tracking-wide mb-1">{name}</h3>

        {/* Location */}
        <div className="flex items-center text-sm font-medium text-gray-100">
          <MapPin size={14} className="mr-1 text-yellow-400 fill-yellow-400" />
          {location}
        </div>
      </div>
    </div>
  );
};

const FloatingEmojis = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <span className="absolute top-[10%] left-[5%] text-4xl opacity-40 transform -rotate-12 animate-pulse">✈️</span>
    <span className="absolute top-[20%] right-[10%] text-5xl opacity-30 transform rotate-12 delay-700">🏝️</span>
    <span className="absolute bottom-[20%] left-[8%] text-3xl opacity-50 transform rotate-6 animate-pulse delay-300">😊</span>
    <span className="absolute top-[40%] left-[45%] text-6xl opacity-20 transform -rotate-6">😍</span>
    <span className="absolute bottom-[10%] right-[15%] text-2xl opacity-40 animate-pulse delay-500">✨</span>
    <span className="absolute top-[15%] left-[25%] text-4xl opacity-30">☁️</span>
     <span className="absolute bottom-[40%] right-[5%] text-4xl opacity-30 -rotate-12">💖</span>
  </div>
);

const PostcardsSection = () => {
  return (
    <>
    <InternalStyles />
    <section className="relative w-full py-16 lg:py-20 bg-gradient-to-r from-[#FEF9E7] via-[#fefbe6] to-[#dff5e5] overflow-hidden min-h-screen flex items-center font-poppins">
      {/* Background Decor */}
      <FloatingEmojis />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start relative lg:pl-8">
            
            {/* Heart Decor */}
            <div className="text-[#FF6B6B] text-5xl mb-4 animate-bounce duration-1000">
               <Heart fill="#FF6B6B" strokeWidth={0} />
            </div>

            <h1 className="font-sacramento text-6xl md:text-7xl lg:text-8xl text-[#FF6B6B] mb-0 drop-shadow-sm leading-tight">
              Travelxploria's
            </h1>
            <h1 className="font-sacramento text-6xl md:text-7xl lg:text-8xl text-[#FF6B6B] mb-6 drop-shadow-sm leading-none">
              Postcard
            </h1>

            <p className="italic text-lg md:text-xl text-gray-800 mb-6 font-poppins">
              A message from the heart <span className="text-[#FF6B6B]">❤️</span>
            </p>

            <div className="space-y-3 mt-2 font-poppins">
              <p className="text-lg md:text-xl text-rose-500 font-medium">
                Dream honeymoons crafted perfectly
              </p>
              <p className="text-base md:text-lg text-emerald-600 font-medium flex items-center justify-center lg:justify-start gap-2">
                Let your journeys inspire the world <span className="text-yellow-500">✨</span>
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Swiper Carousel */}
          <div className="lg:col-span-7 w-full relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                el: ".swiper-pagination-custom",
                clickable: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                480: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3.5, // Matches the density in the image (about 4 cards)
                  spaceBetween: 25,
                },
                1280: {
                    slidesPerView: 3.8,
                    spaceBetween: 30,
                }
              }}
              className="!pb-20 !px-2"
            >
              {postcards_data.map((card, index) => (
                <SwiperSlide key={index}>
                    <Postcard {...card} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation & Pagination Container */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-6 z-20">
                {/* Prev Button */}
                <button className="swiper-button-prev-custom w-10 h-10 flex items-center justify-center rounded-full bg-[#1E293B] text-white shadow-lg transition-all hover:bg-slate-700 hover:scale-110 focus:outline-none">
                  <ChevronLeft size={20} />
                </button>
                
                {/* Pagination Dots */}
                <div className="swiper-pagination-custom flex items-center justify-center !w-auto !static"></div>

                {/* Next Button */}
                <button className="swiper-button-next-custom w-10 h-10 flex items-center justify-center rounded-full bg-[#1E293B] text-white shadow-lg transition-all hover:bg-slate-700 hover:scale-110 focus:outline-none">
                  <ChevronRight size={20} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PostcardsSection;