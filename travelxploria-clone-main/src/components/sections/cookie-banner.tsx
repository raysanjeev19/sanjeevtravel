"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

/**
 * Renders a cookie consent banner at the bottom of the page.
 * The banner is displayed only if the user has not previously given consent.
 * Consent is stored in localStorage to persist the user's choice.
 */
const CookieBanner = () => {
  // Initialize visibility to false to prevent server-client hydration mismatch.
  // The banner's visibility will be determined client-side in the useEffect hook.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // On component mount, check if cookie consent has been given.
    // If not, make the banner visible.
    if (localStorage.getItem("cookie_consent") !== "true") {
      setIsVisible(true);
    }
  }, []);

  /**
   * Handles the user's consent action (Accept or Reject).
   * Stores the consent choice in localStorage and hides the banner.
   */
  const handleConsent = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  // Do not render the banner if it's not supposed to be visible.
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full flex-col items-center bg-black p-4 text-white md:flex-row md:justify-between md:p-6 flex">
      <div className="flex w-full items-start space-x-3 md:w-auto md:space-x-4">
        <Cookie
          className="mt-1 h-8 w-8 shrink-0 text-[var(--color-accent-yellow)] md:h-10 md:w-10"
          aria-hidden="true"
        />
        <div className="text-left">
          <h2 className="text-lg font-semibold text-[var(--color-accent-yellow)] md:text-xl">
            Cookie Preferences
          </h2>
          <p className="text-sm text-gray-300 md:text-base">
            We value your privacy. Our website uses cookies to personalize your
            experience, enhance site navigation, and analyze site usage. By
            continuing, you agree to our use of cookies.
          </p>
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col space-y-2 md:mt-0 md:w-auto md:flex-row md:space-y-0 md:space-x-4">
        <button
          onClick={handleConsent}
          className="w-full rounded bg-[var(--color-accent-green)] px-4 py-2 font-semibold text-black md:w-auto"
        >
          Accept
        </button>
        <button
          onClick={handleConsent}
          className="w-full rounded bg-destructive px-4 py-2 font-semibold text-white md:w-auto"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;