import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Digital Marketing Agency",

  description:
    "Ready to grow your business? Contact our digital marketing agency to discuss SEO, advertising, branding, social media, web development, and digital growth strategies.",

  keywords: [
    "Contact Digital Marketing Agency",
    "Marketing Agency Contact",
    "Digital Marketing Consultation",
    "SEO Consultation",
    "Marketing Strategy Consultation",
    "Digital Growth Agency",
    "Web Development Agency",
  ],

  openGraph: {
    title: "Contact Us | Digital Marketing Agency",
    description:
      "Have a project in mind? Get in touch with our team and let's build a strategy for your next stage of growth.",
    type: "website",
    locale: "en_IN",
    siteName: "Ieoweb",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Ieoweb",
    description:
      "Let's talk about your business, your goals, and how we can help you grow.",
  },

  alternates: {
    canonical: "https://ieoweb.com/contact",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}