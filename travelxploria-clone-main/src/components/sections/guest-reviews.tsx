"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviewsData = [
  {
    initials: "SA",
    name: "Shane A Dsouza",
    review: "it was an excellent trip to Vietnam very well coordinated by Bikram and team. Great Logistics even accommodating and making my trip memorable Great ho...",
    avatarColor: "bg-[#8B0000]",
  },
  {
    initials: "SE",
    name: "SUTAPAR EATERY",
    review: "We recently had the pleasure of travelling to Singapore with the expert guidance of Travelxploria and it was an absolutely delight! from planning to e...",
    avatarColor: "bg-purple-700",
  },
  {
    initials: "BC",
    name: "Bhaskar Chakraborty",
    review: "10th October 2024 we went on a trip to Meghalaya and Shillong which was arranged by Travel Exploria . All the beautiful places on our itinerary were w...",
    avatarColor: "bg-purple-700",
  },
];

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex items-center">
    {Array(rating)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="h-4 w-4 text-[#FFC107] fill-[#FFC107]" />
      ))}
  </div>
);

const GuestReviews = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black font-display">
            The Ultimate Guide To Guest Reviews
          </h2>
          <p className="mt-2 text-gray-500 md:text-lg font-body">
            Discover What Our Guests Really Think About Their Stay
          </p>
        </div>

        <div className="relative lg:px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".review-swiper-button-next",
              prevEl: ".review-swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".review-swiper-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!pb-16
                       [&_.swiper-pagination-bullet]:w-2.5
                       [&_.swiper-pagination-bullet]:h-2.5
                       [&_.swiper-pagination-bullet]:bg-gray-300
                       [&_.swiper-pagination-bullet-active]:bg-[#EF4444]"
          >
            {reviewsData.map((review, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 h-full min-h-[240px]">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center ${review.avatarColor}`}
                    >
                      <span className="text-white font-bold text-xl font-display">{review.initials}</span>
                    </div>
                    <div className="flex flex-col pt-1">
                      <StarRating />
                      <h3 className="font-semibold text-gray-800 mt-1 font-display">{review.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">
                    {review.review}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            aria-label="Previous review"
            className="review-swiper-button-prev absolute top-1/2 left-0 transform -translate-y-[calc(50%+2rem)] cursor-pointer bg-[#1E3A5F] text-white rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-80 transition-opacity max-lg:hidden"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Next review"
            className="review-swiper-button-next absolute top-1/2 right-0 transform -translate-y-[calc(50%+2rem)] cursor-pointer bg-[#1E3A5F] text-white rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-80 transition-opacity max-lg:hidden"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="review-swiper-pagination flex justify-center gap-2 mt-8 absolute bottom-4 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;