"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";


const IMAGES = {
  seo: "/services/seo.webp",
  ads: "/services/ads.webp",
  brand: "/services/branding.webp",
  social: "/services/social.webp",
  design: "/services/design.webp",
  email: "/services/crm.webp",
  web: "/services/web-development.webp",
} as const;

type ImageKey = keyof typeof IMAGES;


interface Service {
  number: string;
  imgKey: ImageKey;
  eyebrow: string;
  headline: string;
  body: string;
  cta: string;
  href: string;
}



const SERVICES: Service[] = [
  {
    number: "01",
    imgKey: "seo",
    eyebrow: "Search Engine & AI Visibility",
    headline: "Be Found Where Your Customers Search",
    body: "We build search strategies that improve your visibility across Google, Bing, local search, and AI-powered platforms. From technical SEO to GEO, we help the right people discover your brand at the right moment.",
    cta: "Explore SEO & GEO",
    href: "/services/seo-geo",
  },

  {
    number: "02",
    imgKey: "ads",
    eyebrow: "Paid Advertising & Performance",
    headline: "Turn Attention Into Measurable Growth",
    body: "We create targeted advertising campaigns designed to reach high-intent audiences and drive meaningful action. From campaign strategy to creative testing and optimization, every decision is focused on better performance.",
    cta: "Explore Paid Advertising",
    href: "/services/paid-advertising",
  },

  {
    number: "03",
    imgKey: "brand",
    eyebrow: "Branding & Creative",
    headline: "Make Your Brand Impossible to Ignore",
    body: "We shape distinctive brands through strategic positioning, visual storytelling, and meaningful design. From identity to creative direction, we create experiences that help your business communicate with clarity, confidence, and consistency.",
    cta: "Explore Branding",
    href: "/services/branding-content",
  },

  {
    number: "04",
    imgKey: "social",
    eyebrow: "Social & Creator Marketing",
    headline: "Create Connections That Go Beyond the Feed",
    body: "We create social strategies and creator-led campaigns that make your brand more relevant, relatable, and engaging. From content to collaborations, we help you build an audience that connects with what you do.",
    cta: "Explore Social Marketing",
    href: "/services/social-creator-marketing",
  },

  {
    number: "05",
    imgKey: "design",
    eyebrow: "Graphic Design & Visual Content",
    headline: "Make Every Visual Count",
    body: "We create purposeful visuals that communicate your message clearly and make your brand stand out across digital and marketing channels. From social creatives to campaigns, every design is built with your brand in mind.",
    cta: "Explore Graphic Design",
    href: "/services/graphic-design",
  },

  {
    number: "06",
    imgKey: "email",
    eyebrow: "Email, CRM & Marketing Automation",
    headline: "Turn Leads Into Lasting Relationships",
    body: "We build personalized email, CRM, and automation systems that keep your audience engaged beyond the first interaction. From nurturing leads to retaining customers, we help your marketing work smarter.",
    cta: "Explore CRM & Automation",
    href: "/services/crm-automation",
  },

  {
    number: "07",
    imgKey: "web",
    eyebrow: "UI/UX & Web Development",
    headline: "Turn Your Website Into a Growth Engine",
    body: "We design and develop fast, intuitive digital experiences that look great and make taking action effortless. From landing pages to complete websites, we combine thoughtful UX with high-performance development.",
    cta: "Explore Web Development",
    href: "/services/web-development",
  },
];



function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return isDesktop;
}



interface PanelProps {
  index: string;
  imgKey: ImageKey;
  alt: string;
}



function Panel({
  index,
  imgKey,
  alt,
}: PanelProps): React.ReactElement {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const [failed, setFailed] = useState<boolean>(false);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.97,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        w-full
        overflow-hidden
        rounded-xs
        border
        border-white/10
        bg-[#131015]
        aspect-4/5
      "
    >
      {!failed ? (
        <Image
          src={IMAGES[imgKey]}
          alt={alt}
          fill
          sizes="
            (max-width: 767px) 100vw,
            42vw
          "
          className="
            object-cover
            grayscale-35
            contrast-[1.05]
          "
          priority={index === "01"}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(120%_120%_at_20%_15%,rgba(126,34,206,0.28)_0%,rgba(10,10,12,0)_55%),linear-gradient(160deg,#1a1620_0%,#0A0A0C_75%)]
          "
        />
      )}

      {/* Purple overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(160deg,rgba(126,34,206,0.28)_0%,rgba(10,10,12,0.15)_45%,rgba(10,10,12,0.55)_100%)]
          mix-blend-multiply
        "
      />

      {/* Bottom gradient */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(0deg,rgba(10,10,12,0.65)_0%,rgba(10,10,12,0)_40%)]
        "
      />

      {/* Number */}

      <div
        className="
          absolute
          bottom-4
          right-5
          select-none
          font-mono
          text-[11px]
          leading-none
          tracking-[0.12em]
          text-white/60
        "
      >
        {index}
      </div>
    </motion.div>
  );
}



interface ServiceRowProps extends Service {
  reversed?: boolean;
}



function ServiceRow({
  number,
  imgKey,
  eyebrow,
  headline,
  body,
  cta,
  href,
  reversed = false,
}: ServiceRowProps): React.ReactElement {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  const isDesktop = useIsDesktop();

  return (
    <div
      ref={ref}
      className="
        flex
        w-full
        flex-col
        gap-8
        border-t
        border-white/10
        py-14

        md:items-center
        md:gap-14
        md:py-20
      "
      style={{
        flexDirection: isDesktop
          ? reversed
            ? "row-reverse"
            : "row"
          : "column",
      }}
    >
      {/* IMAGE */}

      <div
        className="w-full shrink-0 md:w-[42%]"
      >
        <Panel
          index={number}
          imgKey={imgKey}
          alt={`${headline} - Ieoweb`}
        />
      </div>

      {/* CONTENT */}

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
        className="
          flex
          w-full
          flex-col
          justify-center

          md:w-[58%]
        "
      >
        {/* CATEGORY */}

        <div
          className="
            mb-5
            flex
            items-center
            gap-3
            font-dmsans
          "
        >
          <span
            className="
              text-xs
              tracking-[0.14em]
              text-[#B98AE8]
            "
          >
            {number}
          </span>

          <span
            className="
              inline-block
              h-px
              w-6
              bg-white/25
            "
          />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-white/55

              sm:text-[11px]
            "
          >
            {eyebrow}
          </span>
        </div>

        {/* HEADING */}

        <h3
          className="
            mb-4.5
            max-w-115
            font-playfair
            text-[26px]
            font-medium
            leading-[1.15]
            tracking-[-0.01em]
            text-[#F5F1EA]
            sm:text-[32px]
            lg:text-[38px]
          "
        >
          {headline}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mb-7
            max-w-110
            font-dmsans
            text-[15px]
            leading-[1.7]
            text-white/60
            sm:text-[15.5px]
          "
        >
          {body}
        </p>

        {/* CTA */}

        <Link
          href={href}
          className="
            group
            inline-flex
            w-fit
            items-center
            gap-2
            font-dmsans
            text-[13.5px]
            font-medium
            tracking-[0.02em]
            text-[#F5F1EA]
          "
        >
          <span
            className="
              border-b
              border-white/30
              pb-0.75
              transition-colors
              duration-300
              group-hover:border-[#B98AE8]
            "
          >
            {cta}
          </span>

          <motion.span
            className="text-[#B98AE8]"
            initial={{
              x: 0,
            }}
            whileHover={{
              x: 4,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}

export default function ServicesShowcase(): React.ReactElement {
  return (
    <section
      id="services"
      className="
        w-full
        bg-[#000000]
        px-0
        py-24
        text-[#F5F1EA]

        sm:py-28

        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          px-5

          sm:px-6

          lg:px-8
        "
      >
        {/* SECTION HEADER */}

        <div
          className="
            mb-16
            w-full

            sm:mb-18
          "
        >
          {/* EYEBROW */}

          <div
            className="
              mb-4.5
              font-dmsans
              font-medium
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-[#7E22CE]
              text-center
              sm:text-[18px]
            "
          >
            WHAT WE DO
          </div>

          {/* HEADING */}

          <h2
            className="
              m-0
              font-serif
              text-[34px]
              text-center
              font-medium
              font-playfair
              leading-[1.08]
              tracking-[-0.01em]
              text-[#F5F1EA]

              sm:text-[44px]

              md:text-[52px]

              lg:text-[58px]
            "
          >
           Growth-Driven Services
          </h2>

          {/* DESCRIPTION */}

          {/* <p
            className="
              mt-6
              max-w-[600px]
              font-sans
              text-[15px]
              leading-[1.7]
              text-white/55

              sm:text-base
            "
          >
            From strategy and branding to SEO, content, and performance
            marketing, we build powerful digital experiences that attract
            the right audience and drive measurable growth.
          </p> */}
        </div>

        {/* SERVICES */}

        <div className="w-full">
          {SERVICES.map((service, index) => (
            <ServiceRow
              key={service.number}
              {...service}
              reversed={index % 2 === 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
