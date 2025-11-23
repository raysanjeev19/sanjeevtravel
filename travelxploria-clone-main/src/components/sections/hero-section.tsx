"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// --- Custom Icons (Modified to inherit color and size) ---

const JapanIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1,10 H23" />
        <path d="M4 10V22" />
        <path d="M20 10V22" />
        <path d="M12 2.5V22" />
        <path d="M4.82 5.25 C8 3, 16 3, 19.18 5.25" />
    </svg>
);

const ItalyIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" >
        <path d="M6 19v-5a3 3 0 0 1 3-3h6a3 3 0 0 1 3-3v5" />
        <path d="M4 19h16" />
        <path d="M7 11V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
        <path d="M12 6V4" />
        <path d="M9 11v-1" /><path d="M15 11v-1" />
    </svg>
);

const AmsterdamIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v8" /><path d="M12 2l6 4" /><path d="M12 2l-6 4" />
        <path d="M12 10l6 4" /><path d="M12 10l-6 4" />
        <path d="M12 10l0 12" />
        <path d="M8 22h8" />
        <path d="M6 22l-2-4" /><path d="M18 22l2-4" />
    </svg>
);

const DubaiIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L12 22" />
        <path d="M12 14c-4-1-8-4-8-8" />
        <path d="M12 14c4-1 8-4 8-8" />
        <path d="M12 22c-4-1-8-4-8-8" />
        <path d="M12 22c4-1 8-4 8-8" />
        <path d="M6 14h12" />
    </svg>
);

const BaliIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20" />
        <path d="M11 22V10L3 2h8v8" />
        <path d="M13 22V10L21 2h-8v8" />
        <path d="M9 14h6" />
    </svg>
);

const VietnamIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12l10-9 10 9" />
        <path d="M4 12v1a8 8 0 0 0 16 0v-1" />
    </svg>
);

const ThailandIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18" />
        <path d="M5 22V12h14v10" />
        <path d="M12 12V6l-2 3" />
        <path d="M12 6l2 3" />
        <path d="M8 12h8" />
        <path d="M12 6c_2-4_6-4_8-2" />
        <path d="M12 6C10 2 6 2 4 4" />
    </svg>
);

const SingaporeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4C8 4 6 7 6 9c0 4 6 8 6 8s6-4 6-8c0-2-2-5-6-5z" />
        <path d="M12 17c-3 0-5 2-5 5h10c0-3-2-5-5-5z" />
        <path d="M10 12c.3-1 .4-2-1-2" /><path d="M18 9s-1-2-4-2" />
    </svg>
);

// Reusing icons for extended list to maintain visual consistency
const destinations = [
    { name: "Dubai", Icon: DubaiIcon, href: "/dubai" },
    { name: "Bali", Icon: BaliIcon, href: "/bali" },
    { name: "Vietnam", Icon: VietnamIcon, href: "/vietnam" },
    { name: "Thailand", Icon: ThailandIcon, href: "/thailand" },
    { name: "Singapore", Icon: SingaporeIcon, href: "/singapore" },
    { name: "Japan", Icon: JapanIcon, href: "/japan" },
    { name: "Italy", Icon: ItalyIcon, href: "/italy" },
    { name: "Amsterdam", Icon: AmsterdamIcon, href: "/amsterdam" },
    { name: "Maldives", Icon: BaliIcon, href: "/maldives" },
    { name: "Switzerland", Icon: ItalyIcon, href: "/switzerland" },
    { name: "Paris", Icon: DubaiIcon, href: "/paris" },
    { name: "London", Icon: AmsterdamIcon, href: "/london" },
    { name: "New York", Icon: SingaporeIcon, href: "/new-york" },
    { name: "Sydney", Icon: VietnamIcon, href: "/sydney" },
    { name: "Greece", Icon: ItalyIcon, href: "/greece" },
    { name: "Egypt", Icon: DubaiIcon, href: "/egypt" },
    { name: "Turkey", Icon: ThailandIcon, href: "/turkey" },
    { name: "Spain", Icon: ItalyIcon, href: "/spain" },
    { name: "Malaysia", Icon: DubaiIcon, href: "/malaysia" },
    { name: "Sri Lanka", Icon: BaliIcon, href: "/sri-lanka" },
];

const DestinationItem = ({ name, Icon, href }: { name: string; Icon: React.FC<{ className?: string }>; href: string }) => (
    <a href={href} className="flex flex-col items-center group text-center cursor-pointer">
        {/* Removed Circle Wrapper, added Golden Color */}
        <div className="transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
            <Icon className="w-10 h-10 text-[#cca352] drop-shadow-sm transition-colors duration-300 group-hover:text-[#eebb55]" />
        </div>
        <span className="mt-2 text-white text-sm font-medium tracking-wide drop-shadow-md group-hover:text-[#cca352] transition-colors duration-300">
            {name}
        </span>
    </a>
);

const HeroSection = () => {
    return (
        <section className="relative w-full h-[450px] max-[450px]:h-[450px] sm:h-[500px] md:h-[580px] lg:h-[800px] xl:h-[730px]">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-[-1]">
                <video
                    src="https://travelxploria.com/hero-video.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>
            
            {/* Overlays */}
            <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-black/60 to-transparent z-[1] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black via-black/70 to-transparent z-[1] pointer-events-none"></div>

            {/* Content & Swiper */}
            {/* Increased side padding (px-10 md:px-20 lg:px-32) to add more gap from screen edges */}
            <div className="relative z-[2] container mx-auto h-full flex flex-col items-center justify-end pb-6 px-10 md:px-20 lg:px-32">
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        speed={5000} // Slower speed for smooth linear effect
                        autoplay={{ 
                            delay: 0, 
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true 
                        }}
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 3, spaceBetween: 15 },
                            480: { slidesPerView: 4, spaceBetween: 20 },
                            640: { slidesPerView: 5, spaceBetween: 25 },
                            768: { slidesPerView: 6, spaceBetween: 30 },
                            1024: { slidesPerView: 7, spaceBetween: 40 }, // Reduced count slightly to account for larger gap
                            1280: { slidesPerView: 8, spaceBetween: 40 },
                        }}
                        className="!pb-2 linear-swiper"
                    >
                        {destinations.map((dest, index) => (
                            <SwiperSlide key={index}>
                                <DestinationItem name={dest.name} Icon={dest.Icon} href={dest.href} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Add CSS for linear transition to make it smooth continuous flow */}
                    <style>{`
                        .linear-swiper .swiper-wrapper {
                            transition-timing-function: linear !important;
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;