import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Digital Marketing & Creative Agency",

  description:
    "Learn about our digital marketing agency helping ambitious businesses grow through SEO, paid advertising, branding, content, social media, web development, and digital strategy.",

  keywords: [
    "Digital Marketing Agency",
    "Marketing Agency",
    "Digital Marketing Company",
    "Creative Marketing Agency",
    "SEO Agency",
    "SEO Services",
    "GEO Services",
    "Paid Advertising Agency",
    "Branding Agency",
    "Content Marketing Agency",
    "Social Media Marketing Agency",
    "Web Development Agency",
    "Performance Marketing Agency",
    "Digital Growth Agency",
    "Marketing Strategy",
  ],

  openGraph: {
    title: "About Us | Digital Marketing & Creative Agency",
    description:
      "Meet the team behind our growth-focused digital marketing agency. We combine strategy, creativity, technology, and marketing to help businesses grow.",
    type: "website",
    locale: "en_IN",
    siteName: "Ieoweb",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Digital Marketing & Creative Agency",
    description:
      "Discover how our marketing agency combines strategy, creativity, and technology to build brands and drive measurable growth.",
  },

  alternates: {
    canonical: "https://ieoweb.com/about",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}