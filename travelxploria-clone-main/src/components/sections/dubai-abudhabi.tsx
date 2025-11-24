import React from 'react';

interface Destination {
  name: string;
  className: string;
  imgSrc: string;
  isLarge?: boolean;
}

const destinations: Destination[] = [
  // LEFT COLUMN
  // Top: Landscape
  {
    name: "Abu Dhabi Skyline",
    className: "col-span-2 md:col-start-1 md:col-span-2 md:row-start-1 aspect-[2/1]",
    // Blue hour skyline
    imgSrc: "/dubai image2.webp",
  },
  // Bottom: 2 Portraits
  {
    name: "Burj Khalifa",
    className: "col-span-1 md:col-start-1 md:row-start-2 aspect-square",
    // Looking up at Khalifa with sun
    imgSrc: "/dubai image5.webp",
  },
  {
    name: "Desert Safari",
    className: "col-span-1 md:col-start-2 md:row-start-2 aspect-square",
    // Camels in desert
    imgSrc: "/dubai image3.webp",
  },

  // CENTER COLUMN
  {
    name: "Sheikh Zayed Grand Mosque",
    className: "col-span-2 md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-2 aspect-square",
    // Mosque at dusk/night reflection
    imgSrc: "/dubai image .webp",
    isLarge: true,
  },

  // RIGHT COLUMN
  // Top: 2 Portraits
  {
    name: "Burj Al Arab",
    className: "col-span-1 md:col-start-5 md:row-start-1 aspect-square",
    // Burj Al Arab from beach
    imgSrc: "/dubai image2.webp",
  },
  {
    name: "Skydiving in Dubai",
    className: "col-span-1 md:col-start-6 md:row-start-1 aspect-square",
    // Skydiving over Palm
    imgSrc: "/dubai image6.webp",
  },
  // Bottom: Landscape
  {
    name: "Museum of the Future",
    className: "col-span-2 md:col-start-5 md:col-span-2 md:row-start-2 aspect-[2/1]",
    // Museum with light trails
    imgSrc: "/dubai image1.webp",
  },
];

const GridItem = ({ name, className, imgSrc, isLarge = false }: Destination) => (
  <a href="#" className={`group relative block overflow-hidden rounded-2xl ${className} shadow-sm hover:shadow-xl transition-all duration-500`}>
    <img
      src={imgSrc}
      alt={name}
      className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      loading="lazy"
    />
    
    {/* Overlay Gradient */}
    <div className={`absolute inset-0 transition-opacity duration-300 ${isLarge ? 'bg-black/30' : 'bg-black/20 group-hover:bg-black/40'}`} />

    {/* Content */}
    {isLarge ? (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
         
        </div>
      </div>
    ) : (
       <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
            <p className="text-white font-semibold text-xs md:text-sm drop-shadow-md text-center bg-black/40 backdrop-blur-sm py-1.5 px-3 rounded-lg border border-white/20">
              {name}
            </p>
         </div>
       </div>
    )}
  </a>
);

const DubaiAbudhabi: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      {/* Container with significant horizontal padding for the 'centered' look */}
      <div className="container mx-auto px-8 md:px-16 lg:px-32 max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-3">
            Explore Dubai & Abu Dhabi
          </h2>
          <p className="font-sans text-xs md:text-sm font-semibold text-[#ff6b6b] uppercase tracking-[0.2em]">
            #Customer Choice
          </p>
        </div>

        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-2 gap-3 md:gap-4">
          {destinations.map((dest) => (
            <GridItem key={dest.name} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DubaiAbudhabi;
