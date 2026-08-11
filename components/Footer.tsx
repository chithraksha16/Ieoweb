import Image from "next/image";
import Link from "next/link";
import { FaceAngry } from "lucide-react";
 
const services = [
  { label: "SEO & GEO", href: "/services/seo-geo" },
  { label: "Paid Advertising", href: "/services/paid-advertising" },
  { label: "Content Marketing", href: "/services/content-marketing" },
  { label: "Branding", href: "/services/branding" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "Web Development", href: "/services/web-development" },
];
 
const company = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
 
const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: FaceAngry },
  { label: "X", href: "https://x.com", icon: FaceAngry },
  { label: "Instagram", href: "https://instagram.com", icon: FaceAngry },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaceAngry },
];
 
export default function Footer() {
  return (
    <footer className="relative  overflow-hidden bg-black">
      {/* ambient purple glow, bottom center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 [background:radial-gradient(60%_100%_at_50%_100%,rgba(126,34,206,0.55)_0%,rgba(126,34,206,0.12)_45%,transparent_75%)]"
      />
 
      <div className="relative bottom-0 mx-auto max-w-6xl px-6 pb-16 pt-20 sm:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_0.9fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/ieoweb-logo.webp"
                alt="Ieoweb"
                width={320}
                height={136}
                className="h-20 w-auto"
                priority
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm font-dmsans font-medium leading-relaxed text-neutral-400">
              We create digital strategies that attract customers, build
              trust, and accelerate business growth.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
 
          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-[18px] font-dmsans font-semibold text-white">Services</h3>
            <ul className="mt-5 space-y-3.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-dmsans text-neutral-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
 
          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-[18px] font-dmsans font-semibold text-white">Company</h3>
            <ul className="mt-5 space-y-3.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-dmsans text-neutral-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[18px] font-dmsans font-semibold text-white">Contact</h3>
            <ul className="mt-5 space-y-3.5 text-sm font-dmsans text-neutral-400">
              <li>
                <a
                  href="mailto:contact@ieo.com"
                  className="transition-colors hover:text-white"
                >
                  contact@ieoweb.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918105280460"
                  className="transition-colors hover:text-white"
                >
                  +91 8105280460
                </a>
              </li>
            </ul>
          </div>
        </div>
 
        {/* Divider + bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs font-dmsans text-neutral-500">
            © {new Date().getFullYear()} Ieoweb. Designed for growth. Built
            for impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
 