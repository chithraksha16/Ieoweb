"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Team Members" },
  { value: "30+", label: "Projects Completed" },
  { value: "4+", label: "Years of Experience" },
];

const marqueeItems = [
  "SEO & GEO",
  "Paid Advertising & Performance",
  "Branding & Creative",
  "Social & Creator Marketing",
  "Graphic Design & Visual Content",
  "Email, CRM & Automation",
  "UI/UX & Web Development",
];

const theme = {
  light: {
    section: "bg-white",
    number: "text-black",
    label: "text-black/50",
    divider: "border-black/10",
    card: "bg-white border border-black/10",
    cardHeading: "text-black",
    cardText: "text-black/55",
    badge: "text-brand",
    marqueeBg: "bg-white",
    marqueeText: "text-black/70",
    marqueeSep: "text-brand",
    marqueeEdge: "from-white via-white",
    backing: "bg-black/[0.03] border border-black/10",
  },

  dark: {
    section: "bg-black",
    number: "text-white",
    label: "text-white/50",
    divider: "border-white/10",
    card: "bg-white/5 border border-white/10",
    cardHeading: "text-white",
    cardText: "text-white/55",
    badge: "text-brand",
    marqueeBg: "bg-black",
    marqueeText: "text-white/70",
    marqueeSep: "text-brand",
    marqueeEdge: "from-black via-black",
    backing: "bg-white/[0.04] border border-white/10",
  },
};

function GalleryPlaceholder({
  image,
  label,
  className = "",
  padded = false,
  backing = "",
}: {
  image: string;
  label: string;
  className?: string;
  padded?: boolean;
  backing?: string;
}) {
  if (padded) {
    return (
      <div
        className={`
          relative
          overflow-hidden
          rounded-2xl
          px-3
          py-4
          sm:px-4
          sm:py-5
          md:px-5
          md:py-6
          ${backing}
          ${className}
        `}
      >
        <div className="relative h-full min-h-[180px] w-full overflow-hidden rounded-lg sm:min-h-[220px] md:min-h-0">
          <Image
            src={image}
            alt={label}
            fill
            priority={false}
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-black/5" />

          <div className="absolute inset-0 flex items-end p-3">
            <span className="rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm sm:text-[11px]">
              {label}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        relative
        min-h-[220px]
        overflow-hidden
        rounded-2xl
        sm:min-h-[260px]
        md:min-h-0
        ${className}
      `}
    >
      <Image
        src={image}
        alt={label}
        fill
        priority={false}
        className="object-cover transition-transform duration-700 hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <div className="absolute inset-0 bg-black/5" />

      <div className="absolute inset-0 flex items-end p-3 sm:p-4">
        <span className="rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm sm:px-3 sm:text-xs">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function PortfolioOverview({
  variant = "dark",
}: {
  variant?: "light" | "dark";
}) {
  const t = theme[variant];

  return (
    <section
      className={`
        w-full
        overflow-hidden
        ${t.section}
        px-4
        py-14
        transition-colors
        sm:px-6
        sm:py-16
        md:py-20
        lg:px-8
        lg:py-24
      `}
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* ================= STATS ================= */}

        <div className="grid grid-cols-3 gap-3 text-center sm:gap-8 md:gap-10">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="min-w-0"
            >
              <p
                className={`
                  font-serif
                  text-xl
                  font-bold
                  sm:text-2xl
                  md:text-3xl
                  ${t.number}
                `}
              >
                {s.value}
              </p>

              <p
                className={`
                  mt-1
                  max-w-[100px]
                  text-[10px]
                  leading-tight
                  sm:max-w-none
                  sm:text-xs
                  md:text-sm
                  ${t.label}
                `}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= DIVIDER ================= */}

        <div className={`mt-6 border-t sm:mt-8 ${t.divider}`} />

        {/* ================= GALLERY ================= */}

        <div
          className="
            mt-7
            grid
            grid-cols-1
            gap-3
            sm:mt-8
            sm:grid-cols-2
            sm:gap-4
            md:mt-10
            md:grid-cols-3
            md:grid-rows-2
            md:gap-5
          "
        >

          {/* ================= LEFT IMAGE ================= */}

          <GalleryPlaceholder
            image="/services/about-image1.webp"
            label="Brand campaign"
            className="
              sm:col-span-2
              md:col-span-1
              md:col-start-1
              md:row-span-2
              md:row-start-1
            "
          />

          {/* ================= TOP MIDDLE IMAGE ================= */}

          <GalleryPlaceholder
            image="/services/about-image2.webp"
            label="Product shoot"
            className="
              sm:col-span-1
              md:col-start-2
              md:row-start-1
            "
            backing={t.backing}
          />

          {/* ================= INFO CARD ================= */}

          <div
            className={`
              rounded-2xl
              p-4
              sm:p-5
              md:col-start-2
              md:row-start-2
              ${t.card}
            `}
          >
            <p
              className={`
                font-serif
                text-2xl
                font-bold
                sm:text-3xl
                ${t.cardHeading}
              `}
            >
              24
              <sup className="text-xs font-semibold sm:text-sm">
                HR
              </sup>
            </p>

            <p
              className={`
                mt-1
                text-xs
                font-medium
                sm:text-sm
                ${t.cardHeading}
              `}
            >
              Discovery Response
            </p>

            <p
              className={`
                mt-2
                text-[11px]
                leading-relaxed
                sm:text-xs
                ${t.cardText}
              `}
            >
              Every inquiry gets a reply within one business day — no
              queues, no account-manager handoffs.
            </p>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <GalleryPlaceholder
            image="/services/about-image3.webp"
            label="Product ad"
            className="
              sm:col-span-1
              md:col-start-3
              md:row-span-2
              md:row-start-1
            "
          />
        </div>

        {/* ================= DIVIDER ================= */}

        <div className={`mt-8 border-t sm:mt-10 ${t.divider}`} />

        {/* ================= MARQUEE ================= */}

        <div
          className={`
            relative
            mt-5
            w-full
            overflow-hidden
            sm:mt-7
            ${t.marqueeBg}
          `}
        >

          {/* Left fade */}

          <div
            className={`
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10
              w-8
              bg-gradient-to-r
              ${t.marqueeEdge}
              to-transparent
              sm:w-12
              md:w-16
            `}
          />

          {/* Right fade */}

          <div
            className={`
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-10
              w-8
              bg-gradient-to-l
              ${t.marqueeEdge}
              to-transparent
              sm:w-12
              md:w-16
            `}
          />

          {/* Marquee */}

          <motion.div
            className="
              flex
              w-max
              gap-2.5
              whitespace-nowrap
              py-3
              text-[11px]
              font-medium
              sm:gap-3
              sm:py-4
              sm:text-sm
              md:text-base
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(2)].map((_, loopIdx) => (
              <div
                key={loopIdx}
                className="flex items-center gap-2.5 sm:gap-3"
              >
                {marqueeItems.map((item) => (
                  <span
                    key={`${loopIdx}-${item}`}
                    className="flex items-center gap-2.5 sm:gap-3"
                  >
                    <span className={t.marqueeText}>
                      {item}
                    </span>

                    <span className={t.marqueeSep}>
                      &#10022;
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}