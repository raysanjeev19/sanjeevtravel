import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MessageSquare } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "Faq's", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
    { name: "Terms & Condition", href: "/terms-and-condition" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  const internationalLinks = [
    { name: "Thailand", href: "/thailand-packages" },
    { name: "Bali", href: "/indonesia-packages" },
    { name: "Maldives", href: "/maldives-packages" },
    { name: "Switzerland", href: "/switzerland-packages" },
    { name: "Vietnam", href: "/vietnam-packages" },
    { name: "Dubai", href: "/dubai-packages" },
    { name: "Eastern Europe", href: "/eastern-europe-packages" },
  ];

  const domesticLinks = [
    { name: "Andaman", href: "/andaman-packages" },
    { name: "Rajasthan", href: "/rajasthan-packages" },
    { name: "Uttarakhand", href: "/uttarakhand-packages" },
    { name: "Himachal", href: "/himachal-packages" },
    { name: "Goa", href: "/goa-packages" },
    { name: "Kerala", href: "/kerala-packages" },
    { name: "Kashmir", href: "/kashmir-packages" },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: "https://www.facebook.com/travelxploria/" },
    { name: 'Twitter', icon: Twitter, href: "https://twitter.com/travelxploria" },
    { name: 'Instagram', icon: Instagram, href: "https://www.instagram.com/travelxploria/" },
    { name: 'YouTube', icon: Youtube, href: "https://www.youtube.com/@Travelxploria" },
    { name: 'WhatsApp', icon: MessageSquare, href: "https://wa.me/919831393561" },
  ];

  return (
    <footer style={{ fontFamily: 'var(--font-body)' }} className="bg-[#0a192f] text-white">
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3ffab2e4-062a-4652-a86b-9337d72a2416-travelxploria-com/assets/icons/1-1.png"
                alt="Travelxploria Logo"
                width={160}
                height={34}
                className="h-auto"
              />
            </Link>
            <p className="mt-6 text-sm text-gray-300 leading-relaxed">
              Sumitra Abadhan, No. 255, Barrackpore Trunk Rd, behind Himalaya Optical, Kolkata, West Bengal, 700036
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition hover:text-white"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 transition hover:text-white hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-semibold">International</h3>
            <ul className="mt-4 space-y-3">
              {internationalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 transition hover:text-white hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-semibold">Domestic</h3>
            <ul className="mt-4 space-y-3">
              {domesticLinks.map((link) => (
                <li key={link.name}>
                   <Link href={link.href} className="text-sm text-gray-300 transition hover:text-white hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col-reverse items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-gray-400">© 2025 Travelxploria. All rights reserved.</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <a href="mailto:contactus@travelxploria.in" className="text-sm text-gray-400 transition hover:text-white">
                contactus@travelxploria.in
              </a>
              <a href="tel:+919831393561" className="text-sm text-gray-400 transition hover:text-white">
                +91 98313 93561
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;