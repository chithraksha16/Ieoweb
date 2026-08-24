"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What services do you offer?",
    a: "We provide end-to-end digital marketing solutions, including branding, website design and development, SEO, social media marketing, paid advertising, content creation, email marketing, and marketing automation.",
  },
  {
    q: "How do I know which service is right for my business?",
    a: "Every business has different goals. We first understand your business, audience, competitors, and current marketing efforts, then recommend the services that will have the greatest impact.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Yes. We work with startups, small businesses, and growing brands. Our strategies are designed around your current stage, goals, and available budget.",
  },
  {
    q: "Do you offer ongoing marketing support?",
    a: "Yes. We offer ongoing marketing support through monthly strategies, campaign management, content, SEO, paid advertising, analytics, and continuous optimization.",
  },
  {
    q: "Can you manage our social media accounts?",
    a: "Yes. We can handle the complete social media process, including strategy, content planning, creative design, copywriting, publishing, community engagement, and performance tracking.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the scope, goals, and services required. After understanding your requirements, we provide a clear proposal based on the work involved.",
  },
];

function FAQRow({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof FAQS)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative border-b border-[#D9CBE8]">
      {/* =====================================================
          ACTIVE PURPLE LINE
          Stays visible for the entire opened FAQ
      ====================================================== */}

      <motion.div
        className="
          absolute
          left-0
          top-0
          z-20
          h-full
          w-[2px]
          origin-top
         bg-[#A855F7]
        "
        initial={false}
        animate={{
          scaleY: open ? 1 : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
      />

      {/* =====================================================
          QUESTION
      ====================================================== */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="
          relative
          z-10
          flex
          w-full
          items-center
          justify-between
          gap-3
          px-3
          py-4
          text-left
          sm:gap-4
          sm:px-4
          sm:py-5
          md:py-6
        "
      >
        {/* Question content */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          {/* Number */}
          <span
            className="
              w-5
              shrink-0
              font-mono
              text-[9px]
              font-medium
              tabular-nums
              text-[#8B5CF6]
              sm:w-6
              sm:text-[10px]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Question */}
          <span
            className="
              min-w-0
              text-[13px]
              font-dmsans
              font-medium
              leading-[1.35]
              tracking-[-0.02em]
              text-[#18151B]
              sm:text-[14px]
              md:text-[15px]
              lg:text-[16px]
            "
          >
            {item.q}
          </span>
        </div>

        {/* Plus / X */}
        <motion.span
          className="
            relative
            z-20
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            font-dmsans
            text-[16px]
            font-light
            leading-none
            text-[#8B5CF6]
            sm:h-6
            sm:w-6
            sm:text-[18px]
          "
          animate={{
            rotate: open ? 45 : 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          +
        </motion.span>
      </button>

      {/* =====================================================
          ANSWER
      ====================================================== */}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              },
              opacity: {
                duration: 0.2,
              },
            }}
            className="relative z-10 overflow-hidden"
          >
            <p
              className="
                max-w-[600px]
                px-3
                pb-4
                pl-11
                pr-7
                font-dmsans
                text-[10px]
                leading-[1.6]
                text-[#858085]
                sm:px-4
                sm:pb-5
                sm:pl-[52px]
                sm:pr-8
                sm:text-[11px]
                md:text-[12px]
              "
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSimple() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-12
        sm:px-6
        sm:py-16
        md:px-8
        md:py-20
        lg:px-10
        lg:py-24
      "
    >
      {/* =====================================================
          TOP PURPLE SHADOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-0
          h-[105px]
          w-full
          overflow-hidden
          sm:h-[125px]
          md:h-[145px]
          lg:h-[160px]
        "
      >
        {/* Main purple shadow */}
        <div
          className="
            absolute
            -left-[12%]
            -top-[75%]
            h-[240px]
            w-[88%]
            rotate-[-8deg]
            bg-[radial-gradient(ellipse_at_15%_35%,#7E22CE_0%,#8B3DDB_18%,#A855F7_34%,#C084FC_48%,rgba(216,180,254,0.45)_62%,rgba(255,255,255,0)_78%)]
            blur-[10px]
            sm:h-[270px]
            md:h-[300px]
            lg:h-[320px]
          "
        />

        {/* Soft purple haze */}
        <div
          className="
            absolute
            -left-[8%]
            -top-[55%]
            h-[215px]
            w-[82%]
            rotate-[-7deg]
            bg-[radial-gradient(ellipse_at_18%_40%,rgba(126,34,206,0.65)_0%,rgba(168,85,247,0.4)_30%,rgba(216,180,254,0.2)_52%,transparent_75%)]
            blur-[26px]
            sm:h-[240px]
            md:h-[270px]
            lg:h-[290px]
          "
        />

        {/* White fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[70px]
            bg-gradient-to-b
            from-transparent
            via-white/75
            to-white
            sm:h-[82px]
            md:h-[95px]
            lg:h-[105px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[680px]
        "
      >
        {/* Heading */}
        <div
          className="
            mb-8
            text-center
            sm:mb-10
            md:mb-12
            lg:mb-14
          "
        >
          <p
            className="
              mb-1.5
              font-playfair
              text-[11px]
              font-medium
              tracking-tight
              text-[#9B73C6]
              sm:mb-2
              sm:text-[12px]
              md:text-[13px]
            "
          >
            FAQ
          </p>

          <h2
            className="
              font-dmsans
              text-[25px]
              font-medium
              leading-[1.1]
              tracking-[-0.045em]
              text-[#171419]
              sm:text-[28px]
              md:text-[30px]
              lg:text-[32px]
            "
          >
            Common questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full">
          {FAQS.map((item, index) => (
            <FAQRow
              key={item.q}
              item={item}
              index={index}
              open={openIdx === index}
              onToggle={() =>
                setOpenIdx(openIdx === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}