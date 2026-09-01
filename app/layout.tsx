import type { Metadata } from "next";
import { DM_Sans,Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmsans=DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dmsans",
})

const playfairdisplay=Playfair_Display({
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700", "800", "900"],
  variable: "--font-playfairdisplay",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Digital Marketing Agency | SEO, Branding, Ads & Web Development",
    template: "%s | Your Agency Name",
  },

  description:
    "A growth-focused digital marketing agency helping businesses build stronger brands and grow online through SEO, GEO, paid advertising, branding, content, social media, automation, and web development.",

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

  openGraph: {
    title:
      "Digital Marketing Agency | SEO, Branding, Ads & Web Development",

    description:
      "We combine strategy, creativity, technology, and marketing to help businesses build stronger brands and achieve sustainable digital growth.",

    url: "https://yourdomain.com",

    siteName: "Your Agency Name",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Agency Name - Digital Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Marketing Agency | SEO, Branding, Ads & Web Development",

    description:
      "Strategy, branding, SEO, advertising, social media, automation, and web development built around business growth.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://yourdomain.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",

    name: "Your Agency Name",

    url: "https://yourdomain.com",

    logo: "https://yourdomain.com/logo.png",

    image: "https://yourdomain.com/og-image.jpg",

    description:
      "A growth-focused digital marketing agency providing SEO, GEO, paid advertising, branding, content marketing, social media, automation, graphic design, and web development services.",

    areaServed: "Worldwide",

    serviceType: [
      "Digital Marketing",
      "SEO",
      "GEO",
      "Paid Advertising",
      "Performance Marketing",
      "Branding",
      "Content Marketing",
      "Social Media Marketing",
      "Graphic Design",
      "CRM Automation",
      "Web Development",
    ],

    sameAs: [
      "https://www.instagram.com/youragency",
      "https://www.linkedin.com/company/youragency",
    ],
  };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairdisplay.variable} ${playfairdisplay.className} ${dmsans.variable} ${dmsans.className}`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
