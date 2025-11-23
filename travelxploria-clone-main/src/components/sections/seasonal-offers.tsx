import React from 'react';

const SeasonalOffers = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#e8f5e9] to-[#fffbea]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A5F] font-display">
            Our Seasonal Offers
          </h2>
          <p className="text-gray-600 mt-2">Book & Get Upto 40% Off</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-10 flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-gray-800 font-display">
              Tropical Delight
            </h3>
            <p className="mt-2 text-gray-600">Exclusive deals just for you!</p>
            <a
              href="#!"
              className="mt-6 inline-block bg-[#10B981] text-white font-semibold rounded-full px-7 py-2.5 transition-all duration-300 hover:brightness-110"
            >
              View Offer
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-10 flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-gray-800 font-display">
              Winter Wanderlust
            </h3>
            <p className="mt-2 text-gray-600">Exclusive deals just for you!</p>
            <a
              href="#!"
              className="mt-6 inline-block bg-[#10B981] text-white font-semibold rounded-full px-7 py-2.5 transition-all duration-300 hover:brightness-110"
            >
              View Offer
            </a>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-4 mt-12">
          <button aria-label="Previous offer" className="w-10 h-10 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center transition hover:bg-opacity-80 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A5F]/20"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A5F]/20"></span>
          </div>
          <button aria-label="Next offer" className="w-10 h-10 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center transition hover:bg-opacity-80 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeasonalOffers;