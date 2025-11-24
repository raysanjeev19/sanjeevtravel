
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Package {
  image: string;
  duration: string;
  title: string;
  location: string;
  price: string;
}

const packages: Package[] = [
  {
    image:"/larki.webp", 
    duration: "5D/4N",
    title: "Mesmerizing Phuket Holiday",
    location: "5D Phuket",
    price: "26300"
  },
  {
    image: "/tajmahal1.webp", 
    duration: "6D/5N",
    title: "Beautiful Taj Mahal Tour",
    location: "2D New Delhi • 1D Agra ...+1",
    price: "16900"
  },
  {
    image:"/bali1.webp", 
    duration: "5D/4N",
    title: "Bali Adventure & Beach Escape",
    location: "5D Kuta",
    price: "25500"
  },
  {
    image: "/vietnam1.webp", 
    duration: "7D/6N",
    title: "Ultimate Vietnam Experience",
    location: "3D Ho Chi Minh • 4D Phu Qu... +1",
    price: "24200"
  }
];

const RecentlyBooked = () => {
  // Helper to highlight duration (e.g., "5D") in red
  const renderLocation = (text: string) => {
    const parts = text.split(/(\d+[DN])/);
    return (
      <>
        {parts.map((part, i) => 
          /^\d+[DN]$/.test(part) ? (
            <span key={i} className="text-[#eb6e55] font-semibold">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <section className="bg-white py-12 md:py-20 font-sans">
      {/* Increased padding (px-6 md:px-16 lg:px-24) to add space from screen sides */}
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        <div className="text-center mb-10">
          <h2 className="font-sans text-3xl md:text-[36px] font-medium text-[#1a1a1a]">
            Recently Booked
          </h2>
          <p className="mt-2 text-sm text-gray-500 tracking-wide font-normal">
            #Customer Choice
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <div key={index} className="relative flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 group border border-gray-100/50">
              {/* Reduced image height to h-[180px] */}
              <div className="relative h-[180px] overflow-hidden">
                <span className="absolute left-3 top-3 z-10 rounded-md bg-[#FEF9C3] px-2.5 py-1 text-[11px] font-bold text-gray-800 shadow-sm border border-yellow-100">
                  {pkg.duration}
                </span>
                
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Reduced padding p-4 */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-sans text-[15px] font-medium text-gray-900 leading-snug line-clamp-2 min-h-[40px]">
                    {pkg.title}
                </h3>
                
                <div className="mt-2 flex items-center gap-2 text-[12px] text-gray-500">
                  <span className="truncate">{renderLocation(pkg.location)}</span>
                </div>
                
                <div className="mt-auto pt-4">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-[10px] font-medium text-gray-500 mb-0.5">Starting From</p>
                            <p className="font-sans text-[16px] font-bold text-[#1a1a1a]">
                                INR {Number(pkg.price).toLocaleString('en-IN')}/-
                            </p>
                        </div>
                        <a
                        href="#"
                        className="rounded-lg bg-[#4CAF50] hover:bg-[#43a047] px-4 py-2 text-[12px] font-medium text-white transition-all shadow-sm hover:shadow-md transform active:scale-95"
                        >
                        View Package
                        </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-white hover:bg-[#162d4a] transition-colors shadow-md">
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex gap-2 items-center px-2">
              <div className="w-8 h-1.5 rounded-full bg-[#eb6e55]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#eb6e55]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#eb6e55]"></div>
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-white hover:bg-[#162d4a] transition-colors shadow-md">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentlyBooked;
