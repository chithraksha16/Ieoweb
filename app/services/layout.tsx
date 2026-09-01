import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | SEO, Ads, Branding & Web Development",

  description:
    "Explore our digital marketing services including SEO, GEO, paid advertising, branding, content marketing, social media, graphic design, CRM automation, and web development.",

  keywords: [
    "Digital Marketing Services",
    "SEO Services",
    "GEO Services",
    "Paid Advertising",
    "Performance Marketing",
    "Branding Services",
    "Content Marketing",
    "Social Media Marketing",
    "Graphic Design Services",
    "CRM Automation",
    "Web Development",
    "Digital Marketing Agency",
  ],

  openGraph: {
    title: "Digital Marketing Services | SEO, Ads, Branding & Web Development",
    description:
      "Grow your business with our full range of digital marketing, branding, advertising, automation, and web development services.",
    type: "website",
    locale: "en_IN",
    siteName: "Ieoweb",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | Ieoweb",
    description:
      "SEO, paid advertising, branding, social media, web development, automation and more — built around business growth.",
  },

  alternates: {
    canonical: "https://ieoweb.com/services",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}