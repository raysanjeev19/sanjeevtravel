"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  onClose: () => void;
}

const mainNavItems = [
  { label: "Popular Destination", href: null },
  { label: "Around The World", href: null },
  { label: "Domestic Tours", href: null },
  { label: "Packages by Season", href: null },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const contentItems: { [key: string]: string[] } = {
  "Island Escape": ["Thailand", "Bali", "Maldives", "Sri Lanka", "Mauritius", "Greece"],
  "Urban Oasis": ["Dubai", "Vietnam", "Malaysia", "Singapore", "Australia", "Japan"],
  "Timeless Trails": ["Switzerland", "France", "Italy", "Eastern Europe", "Egypt", "Kenya"],
};

const toSlug = (str: string) => str.toLowerCase().replace(/\s+/g, '-');

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const [activeCategory, setActiveCategory] = useState("Popular Destination");

  const NavItem = ({ item }: { item: typeof mainNavItems[0] }) => {
    const isLink = item.href !== null;
    const commonClasses = cn(
      "flex w-full items-center justify-between border-b border-neutral-200 p-4 text-left",
      activeCategory === item.label
        ? "bg-white font-semibold text-black"
        : "bg-secondary font-normal text-neutral-800"
    );

    if (isLink) {
      return (
        <Link href={item.href!} key={item.label} className={commonClasses} onClick={onClose}>
          {item.label}
        </Link>
      );
    }

    return (
      <button key={item.label} onClick={() => setActiveCategory(item.label)} className={commonClasses}>
        {item.label}
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-white">
      <div className="flex h-full flex-col">
        <header className="fixed top-0 left-0 z-50 flex h-[60px] w-full items-center justify-between border-b border-neutral-200 bg-white px-4">
          <Link href="/" onClick={onClose}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/icons/1-1.png"
              alt="TravelXploria Logo"
              width={160}
              height={60}
              className="h-[60px] w-auto"
            />
          </Link>
          <div className="flex cursor-pointer items-center gap-2" onClick={onClose}>
            <span className="font-bold text-destructive">Close</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-destructive text-white">
              <X size={18} />
            </div>
          </div>
        </header>

        <main className="flex h-full w-full pt-[60px]">
          <aside className="relative h-full w-[40%] animate-in slide-in-from-left-full duration-300 overflow-y-auto bg-secondary">
            {mainNavItems.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
            <div className="absolute bottom-[20px] left-0 w-full p-2">
              <div className="relative mx-auto w-[150px]">
                <button className="absolute top-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white">
                  <X size={18} />
                </button>
                <div className="h-[220px] w-[150px] rounded-xl bg-neutral-300 object-cover" />
              </div>
            </div>
          </aside>

          <section className="h-full w-[60%] animate-in fade-in-50 duration-500 overflow-y-auto p-4 pb-40">
            {activeCategory === 'Popular Destination' && Object.entries(contentItems).map(([category, items]) => (
              <div key={category} className="mb-5">
                <h3 className="pb-2 text-xl font-bold uppercase text-destructive">
                  {category}
                </h3>
                <ul>
                  {items.map((item) => (
                    <li key={item} className="border-b border-neutral-200 text-base">
                      <Link
                        href={`/${toSlug(item)}`}
                        className="block cursor-pointer p-2 font-normal text-muted-foreground duration-300 hover:text-black"
                        onClick={onClose}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default MobileMenu;