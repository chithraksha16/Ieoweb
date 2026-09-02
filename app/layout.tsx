
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ieoweb.com"),

  title: {
    default: "Digital Marketing | Ieoweb",
    template: "%s | Ieoweb",
  },

  description:
    "Ieoweb is a growth-focused digital marketing agency helping businesses grow through SEO, GEO, paid advertising, branding, content marketing, social media, automation, and web development.",

  keywords: [
    "Digital Marketing Agency",
    "Digital Marketing Company",
    "Marketing Agency",
    "Creative Marketing Agency",
    "SEO Agency",
    "SEO Services",
    "GEO Services",
    "Paid Advertising Agency",
    "Performance Marketing",
    "Branding Agency",
    "Content Marketing",
    "Social Media Marketing",
    "Graphic Design Agency",
    "CRM Automation",
    "Web Development Agency",
    "Digital Growth Agency",
    "Marketing Strategy",
  ],

  authors: [
    {
      name: "Ieoweb",
      url: "https://ieoweb.com",
    },
  ],

  creator: "Ieoweb",
  publisher: "Ieoweb",

  openGraph: {
    title: "Digital Marketing Agency | Ieoweb",

    description:
      "Strategy, creativity, technology, and marketing designed to help businesses build stronger brands and achieve sustainable digital growth.",

    url: "https://ieoweb.com",

    siteName: "Ieoweb",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ieoweb - Digital Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Digital Marketing Agency | Ieoweb",

    description:
      "SEO, branding, advertising, content, social media, automation, and web development focused on business growth.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://ieoweb.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
