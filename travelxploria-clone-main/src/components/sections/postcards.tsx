"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Bookmark,
  Share2,
  MessageCircle,
  MapPin,
  Volume2,
  VolumeX,
} from "lucide-react";

// This component needs to be created to handle the font import without styled-jsx.
// In a real project, this would be in the root layout.
const GlobalStyles = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

    .swiper-pagination-bullet {
      background-color: #999999;
      opacity: 1;
      width: 8px;
      height: 8px;
      transition: background-color 0.3s;
    }
    .swiper-pagination-bullet-active {
      background-color: #ef4444 !important;
    }
    .font-pacifico {
      font-family: "Pacifico", cursive;
    }
  `}</style>
);

const postcards_data = [
  {
    name: "Subhodip",
    location: "Turkey",
    videoSrc: "https://travelxploria.com/reels/Subhodip.mp4",
    poster: "/reels/subhodip_poster.jpg",
  },
  {
    name: "Soumee",
    location: "Mauritius",
    videoSrc: "https://travelxploria.com/reels/Soumee.mp4",
    poster: "/reels/soumee_poster.jpg",
  },
  {
    name: "Abhishek",
    location: "Singapore",
    videoSrc: "https://travelxploria.com/reels/Abhishek.mp4",
    poster: "/reels/abhishek_poster.jpg",
  },
  {
    name: "Poushali",
    location: "Vietnam",
    videoSrc: "https://travelxploria.com/reels/Poushali.mp4",
    poster: "/reels/poushali_poster.jpg",
  },
  {
    name: "Subhodip",
    location: "Turkey",
    videoSrc: "https://travelxploria.com/reels/Subhodip.mp4",
    poster: "/reels/subhodip_poster.jpg",
  },
];

const Postcard = ({ name, location, videoSrc, poster }: (typeof postcards_data)[0]) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if(videoRef.current) {
        videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-xl aspect-[9/18.5] bg-neutral-900 group cursor-pointer">
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        loop
        muted
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm p-2 rounded-full text-white z-10"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
        <div className="flex items-center justify-between">
            <div>
                <h3 className="font-bold text-lg">{name}</h3>
                <div className="_flex _items-center _text-sm _text-gray-200">
                    <p className="flex items-center text-sm text-gray-200">
                      <MapPin size={14} className="mr-1.5" />
                      {location}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <button className="flex flex-col items-center"><Heart size={24} /> <span className="text-xs mt-1">1.2k</span></button>
                <button className="flex flex-col items-center"><MessageCircle size={24} /> <span className="text-xs mt-1">102</span></button>
                <button><Bookmark size={24} /></button>
                <button><Share2 size={24} /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

const FloatingEmojis = () => (
    <>
        <span className="absolute top-[10%] left-[5%] text-4xl opacity-50 transform -rotate-12 animate-pulse">✈️</span>
        <span className="absolute top-[20%] right-[8%] text-5xl opacity-40 transform rotate-12 animate-pulse delay-200">🏝️</span>
        <span className="absolute bottom-[15%] left-[2%] text-3xl opacity-60 transform rotate-6 animate-pulse delay-400">😊</span>
        <span className="absolute bottom-[5%] right-[12%] text-6xl opacity-30 transform -rotate-6 animate-pulse delay-600">😍</span>
        <span className="absolute top-[60%] left-[15%] text-2xl opacity-50 animate-pulse">✨</span>
        <span className="absolute top-[80%] right-[3%] text-4xl opacity-40 animate-pulse delay-300">💖</span>
    </>
);

const PostcardsSection = () => {
  return (
    <>
      <GlobalStyles />
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-[#fef9e7] to-[#d4edda] overflow-hidden">
        <FloatingEmojis />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-pacifico text-4xl md:text-5xl lg:text-6xl text-red-500 mb-2">
                Travelxploria's Postcard
              </h2>
              <p className="text-lg md:text-xl text-gray-700 font-semibold">
                A message from the heart ❤️
              </p>
              <p className="mt-4 text-base md:text-lg text-gray-600">
                1000+ happy customers traveled
              </p>
              <p className="mt-1 text-base md:text-lg text-gray-600">
                Let your journeys inspire the world ✨
              </p>
            </div>

            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  el: ".swiper-pagination-custom",
                  clickable: true,
                }}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="!pb-16"
              >
                {postcards_data.map((card, index) => (
                  <SwiperSlide key={index}>
                    <Postcard {...card} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-center justify-center gap-8 mt-6 absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
                <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center rounded-full bg-[#1E3A5F] text-white shadow-lg transition-transform hover:scale-110">
                  <ChevronLeft size={24} />
                </button>
                <div className="swiper-pagination-custom flex items-center gap-2"></div>
                <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center rounded-full bg-[#1E3A5F] text-white shadow-lg transition-transform hover:scale-110">
                  <ChevronRight size={24} />
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