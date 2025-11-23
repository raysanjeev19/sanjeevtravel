
import React from 'react';

interface BudgetPackage {
  title: string;
  duration: string;
  cities: string;
  price: number;
  image: string;
}

const budgetPackagesData: BudgetPackage[] = [
  {
    title: "Golden Triangle Tour Pack...",
    duration: "7D / 6N",
    cities: "New Delhi • Agra +1",
    price: 17500,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_2.png" // Taj Mahal
  },
  {
    title: "Grand European Discovery",
    duration: "16D / 15N",
    cities: "Paris • Lyon +7",
    price: 215800,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_17.png" // Colosseum/Italy
  },
  {
    title: "Majestic Europe Holiday",
    duration: "15D / 14N",
    cities: "London • Paris +7",
    price: 278200,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_18.png" // Tower Bridge/UK
  },
  {
    title: "Scenic European Journey",
    duration: "16D / 15N",
    cities: "Rome • Florence +8",
    price: 232500,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_16.png" // France/Europe placeholder
  },
  {
    title: "Timeless European Tale",
    duration: "14D / 13N",
    cities: "Berlin • Hanover +8",
    price: 192600,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_20.png" // Spain/Europe generic
  },
  {
    title: "Canals, Cobblestones & Be...",
    duration: "9D / 8N",
    cities: "Amsterdam • Frankfurt +1",
    price: 107000,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/images/images_19.png" // Tulips/Europe
  },
];

const BudgetPackages = () => {
  return (
    <section className="bg-[#fffff0] py-16 font-sans">
      {/* Container with similar padding logic to other sections */}
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-[32px] font-medium text-[#1a1a1a]">
            Budget Packages
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgetPackagesData.map((pkg, index) => (
            <div 
                key={index} 
                className="bg-white rounded-[20px] shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 flex overflow-hidden h-[160px] border border-gray-100"
            >
              {/* Image Section (Left) - Approx 40% width */}
              <div className="w-[40%] relative h-full">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Content Section (Right) - Approx 60% width */}
              <div className="w-[60%] p-4 flex flex-col justify-between">
                <div>
                    <h3 className="text-[15px] font-semibold text-gray-800 leading-tight mb-1 line-clamp-2">
                        {pkg.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 font-medium mt-1">
                        {pkg.duration}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                        {pkg.cities}
                    </p>
                </div>
                
                <div className="mt-2">
                  <p className="text-[15px] font-bold text-gray-900 mb-2">
                    INR {new Intl.NumberFormat('en-IN').format(pkg.price)}/-
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#48bb78] hover:bg-[#38a169] text-white text-[11px] font-semibold py-1.5 px-5 rounded-full shadow-sm transition-colors"
                  >
                    View Packages
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BudgetPackages;
