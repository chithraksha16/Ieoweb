import Link from "next/link";
import { FaFacebookF,FaInstagram,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

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
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Ambient purple glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-48 sm:h-56 lg:h-72
          [background:radial-gradient(60%_100%_at_50%_100%,rgba(126,34,206,0.55)_0%,rgba(126,34,206,0.12)_45%,transparent_75%)]
        "
      />

      <div
        className="
          relative mx-auto
          w-full max-w-6xl
          px-4 py-14
          sm:px-8 sm:py-16
          lg:px-10 lg:pb-16 lg:pt-20
        "
      >
        {/* Main footer grid */}
        <div
          className="
            grid
            grid-cols-2
            gap-x-8 gap-y-12

            sm:grid-cols-2
            sm:gap-x-12
            sm:gap-y-14

            lg:grid-cols-[1.4fr_1fr_0.8fr_0.9fr]
            lg:gap-x-10
            lg:gap-y-0
          "
        >
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Logo />

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                font-dmsans
                font-medium
                leading-relaxed
                text-neutral-400
              "
            >
              We create digital strategies that attract customers, build
              trust, and accelerate business growth.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap items-center gap-5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    flex
                    items-center
                    justify-center
                  text-white
                    transition-transform
                    duration-200
                    hover:scale-105
                  "
                >
                  <Icon
                    className="h-5 w-5"
                    strokeWidth={2}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav
            aria-label="Services"
            className="col-span-1"
          >
            <h3 className="text-base font-dmsans font-semibold text-white sm:text-[18px]">
              Services
            </h3>

            <ul className="mt-5 space-y-3.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      text-sm
                      font-dmsans
                      leading-relaxed
                      text-neutral-400
                      transition-colors
                      hover:text-white
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav
            aria-label="Company"
            className="col-span-1"
          >
            <h3 className="text-base font-dmsans font-semibold text-white sm:text-[18px]">
              Company
            </h3>

            <ul className="mt-5 space-y-3.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      text-sm
                      font-dmsans
                      leading-relaxed
                      text-neutral-400
                      transition-colors
                      hover:text-white
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-base font-dmsans font-semibold text-white sm:text-[18px]">
              Contact
            </h3>

            <ul
              className="
                mt-5
                space-y-3.5
                text-sm
                font-dmsans
                text-neutral-400
              "
            >
              <li className="min-w-0">
                <a
                  href="mailto:contact@ieoweb.com"
                  className="
                    block
                    break-words
                    transition-colors
                    hover:text-white
                  "
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

        {/* Divider + Bottom bar */}
        <div
          className="
            mt-12
            border-t border-white/10
            pt-6
            sm:mt-14 sm:pt-7
            lg:mt-16 lg:pt-8
          "
        >
          <p
            className="
              text-center
              text-[11px]
              font-dmsans
              leading-relaxed
              text-neutral-500
              sm:text-xs
            "
          >
            © {new Date().getFullYear()} Ieoweb. Designed for growth. Built
            for impact.
          </p>
        </div>
      </div>
    </footer>
  );
}