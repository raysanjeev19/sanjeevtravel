import React, { useState, useEffect } from "react";
import { Menu, Search, X, ChevronDown, Phone } from "lucide-react";

// --- Helper Components ---

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('Popular Destination');

  const tabs = [
    'Popular Destination',
    'Around The World',
    'Domestic Tours',
    'Packages by Season',
    'About Us',
    'Blog',
    'Contact Us',
  ];

  const subMenuContent: { [key: string]: { title: string; items: string[] }[] } = {
    'Popular Destination': [
      { title: "Island Escape", items: ["Thailand", "Bali", "Maldives", "Sri Lanka", "Mauritius", "Greece"] },
      { title: "Urban Oasis", items: ["Dubai", "Vietnam", "Malaysia", "Singapore", "Australia", "Japan"] },
      { title: "Timeless Trails", items: ["Switzerland", "France", "Italy", "Eastern Europe", "Egypt", "Kenya"] },
    ],
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm">
      <div className="bg-white h-full w-[85%] max-w-[400px] flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b h-[70px] px-4 shrink-0 bg-white">
          <div className="flex items-center gap-2">
             <img
              alt="TravelXploria Logo"
              className="h-[32px] w-auto object-contain"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/icons/1-1.png"
            />
          </div>
          <div className="flex items-center gap-2 cursor-pointer group" onClick={onClose}>
            <span className="font-bold text-red-500 text-sm group-hover:text-red-600">Close</span>
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white group-hover:bg-red-600 transition-colors">
              <X size={16} />
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="flex grow overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-2/5 bg-gray-50 border-r overflow-y-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full p-4 text-left text-[13px] border-b transition-colors leading-tight ${
                  activeTab === tab
                    ? "bg-white text-black font-bold border-l-4 border-l-red-500"
                    : "bg-transparent text-gray-500 font-medium hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Right Content */}
          <div className="w-3/5 p-4 overflow-y-auto bg-white">
            {subMenuContent[activeTab] ? (
              subMenuContent[activeTab].map((category) => (
                <div key={category.title} className="mb-6">
                  <h4 className="text-red-500 font-bold text-sm mb-2 uppercase tracking-wide">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-600 text-sm hover:text-black hover:translate-x-1 block transition-transform">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
               <div className="flex flex-col items-center justify-center h-full text-center">
                 <p className="text-gray-400 text-sm">Detailed menu for {activeTab} is coming soon.</p>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Header Component ---

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Search Animation State
  const [searchPlaceholder, setSearchPlaceholder] = useState("Maldives");
  const [isAnimating, setIsAnimating] = useState(false);

  const destinations = ["Maldives", "Dubai", "Bali", "Switzerland", "Paris", "Tokyo"];

  // Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show background after scrolling a bit
      setIsScrolled(currentScrollY > 20);
      
      // Hide header when scrolling down significantly, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Search Text Animation Logic
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setIsAnimating(true); // Start fade out
      
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % destinations.length;
        setSearchPlaceholder(destinations[currentIndex]);
        setIsAnimating(false); // Start fade in
      }, 300); // Wait for fade out to complete before switching text
      
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <>
      {/* Header Container */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-500 ease-in-out ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Global Gradient Overlay (Only visible when NOT scrolled/at top) */}
        <div 
            className={`absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent transition-opacity duration-500 pointer-events-none ${
                isScrolled ? 'opacity-0' : 'opacity-100'
            }`} 
        />

        {/* Top Row: Logo | Search | Contact */}
        {/* This part gets the 80% black background when scrolled. border-b creates "the line" */}
        <div className={`relative transition-all duration-300 border-white/10 ${
            isScrolled ? 'bg-black/80 backdrop-blur-md shadow-sm border-b' : 'bg-transparent border-b'
        }`}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 py-3">
            <div className="flex items-center justify-between">
            
              {/* Mobile Hamburger */}
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>

              {/* Logo Area */}
              <a href="/" className="flex items-center shrink-0">
                <div className="flex items-center gap-2">
                 
                  <div className="hidden xl:block">
                      <span className="text-[#f0bf4c] text-xl font-bold tracking-tight">Travel</span>
                      <span className="text-white text-xl font-light tracking-widest">sanjeev</span>
                  </div>
                </div>
              </a>

              {/* Center Search Bar */}
              <div className="hidden lg:flex flex-1 justify-center px-8">
                <div className="relative w-full max-w-[380px] group">
                  <div className="bg-white rounded-full h-[42px] w-full flex items-center px-2 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      
                      {/* Search Icon */}
                      <div className="w-[32px] h-[32px] bg-gray-100 rounded-full flex items-center justify-center shrink-0 text-gray-500">
                          <Search size={16} />
                      </div>

                      {/* Input Area */}
                      <div className="flex-1 flex items-center ml-3 overflow-hidden h-full cursor-text">
                         <span className="text-gray-500 whitespace-nowrap text-sm select-none">
                           Explore & Discover
                         </span>
                         
                         {/* Animated Destination Name */}
                         <span 
                            className={`ml-1.5 font-bold text-black text-sm whitespace-nowrap transition-all duration-300 transform ${
                              isAnimating 
                                ? 'opacity-0 translate-y-2' 
                                : 'opacity-100 translate-y-0'
                            }`}
                          >
                            {searchPlaceholder}
                         </span>
                      </div>

                      <input 
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                          type="text" 
                          aria-label="Search destination"
                      />
                  </div>
                </div>
              </div>

              {/* Right Side: Contact */}
              <div className="flex items-center shrink-0 gap-4">
                 <a href="tel:+919831393561" className="hidden md:flex items-center gap-2 bg-[#d4f58d] text-[#1a3305] hover:bg-[#c2e873] transition-colors px-5 py-2 rounded-full font-bold text-[13px] shadow-lg transform active:scale-95">
                    <Phone size={14} className="fill-current" />
                    <span>+91 98313 93500</span>
                 </a>
                 <button className="lg:hidden text-white p-2">
                   <Search size={24} />
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Navigation (Desktop Only) */}
        {/* Completely transparent, no border (border is on top row now), no background. */}
        <nav className={`relative hidden lg:block transition-all duration-300 ${
           isScrolled ? 'pt-1 pb-1' : 'pt-2 pb-3'
        }`}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex items-center justify-center gap-8">
                {/* Popular Destination Button */}
                <div className="relative group">
                    <button className="flex items-center gap-2 bg-[#b89e5e] hover:bg-[#c9ad66] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide shadow-md transition-all duration-300">
                        Popular Destination
                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left scale-95 group-hover:scale-100">
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#b89e5e]">International</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#b89e5e]">Domestic</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#b89e5e]">Honeymoon</a>
                        </div>
                    </div>
                </div>

                {/* Standard Links - Removed shadow-sm for cleaner "floating" look */}
                {[
                  'Around The World', 
                  'Domestic Tours', 
                  'Packages By Season', 
                  'About Us', 
                  'Blog', 
                  'Contact Us'
                ].map((link) => (
                    <a 
                        key={link} 
                        href="#" 
                        className="text-[13px] font-semibold text-white/90 hover:text-white relative py-2 group transition-colors"
                    >
                        {link}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b89e5e] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>
          </div>
        </nav>

      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}