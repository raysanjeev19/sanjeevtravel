'use client';

import { useState, useEffect } from 'react';
import CookieBanner from '@/components/sections/cookie-banner';
import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero-section';
import PopularDestinations from '@/components/sections/popular-destinations';
import IndiaCulturalJourneys from '@/components/sections/india-cultural-journeys';
import EscapeExploreEurope from '@/components/sections/escape-explore-europe';
import DubaiAbudhabi from '@/components/sections/dubai-abudhabi';
import SoutheastAsiaSection from '@/components/sections/southeast-asia';
import RecentlyBooked from '@/components/sections/recently-booked';
import MysticHimalayas from '@/components/sections/mystic-himalayas';
import TravelVibeSection from '@/components/sections/travel-vibe';
import HighlightsHiddenGems from '@/components/sections/highlights-hidden-gems';
import BeyondTheBlue from '@/components/sections/beyond-the-blue';
import BudgetPackages from '@/components/sections/budget-packages';
import TopDestinations from '@/components/sections/top-destinations';
import PostcardsSection from '@/components/sections/postcards';
import BudgetCta from '@/components/sections/budget-cta';
import ContactForm from '@/components/sections/contact-form';
import SeasonalOffers from '@/components/sections/seasonal-offers';
import GuestReviews from '@/components/sections/guest-reviews';
import NewsInsight from '@/components/sections/news-insight';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen w-full">
      <CookieBanner />
      <Header />
      
      <main className="w-full">
        <HeroSection />
        
        <div className="w-full space-y-0">
          <PopularDestinations />
          <IndiaCulturalJourneys />
          <EscapeExploreEurope />
          <DubaiAbudhabi />
          <SoutheastAsiaSection />
          <RecentlyBooked />
          <MysticHimalayas />
          <TravelVibeSection />
          <HighlightsHiddenGems />
          <BeyondTheBlue />
          <BudgetPackages />
          <TopDestinations />
          <PostcardsSection />
          <BudgetCta />
          <ContactForm />
         
        </div>
      </main>
      
      <Footer />
    </div>
  );
}