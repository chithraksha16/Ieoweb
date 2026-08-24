"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Walked in with three reference photos and a half-formed idea. Walked out with a piece that fits better than what I asked for.",
    name: "Shabaza. T",
    detail: "Founder,Trek",
  },
  {
    quote:
      "First tattoo, and they talked me through every step before it started. Zero regrets, already planning the next one.",
    name: "Aravind K.",
    detail: "First session",
  },
  {
    quote:
      "Covered up a bad stick-and-poke from years ago. You genuinely cannot tell there was ever anything underneath.",
    name: "Meera S.",
    detail: "Cover-up",
  },
  {
    quote:
      "Booked a full-day session for a backpiece and the pacing was perfect — breaks exactly when I needed them.",
    name: "Rohan D.",
    detail: "Full-day session",
  },
  {
    quote:
      "Sent a rough reference board and they turned it into something that actually feels like mine.",
    name: "Ishita V.",
    detail: "Custom linework",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-[9px] font-medium text-white">
      {initials}
    </div>
  );
}

function TopCard({
  item,
  onSwiped,
}: {
  item: (typeof TESTIMONIALS)[number];
  onSwiped: (direction: number) => void;
}) {
  const x = useMotionValue(0);

  const rotate = useTransform(x, [-250, 250], [-10, 10]);

  const opacity = useTransform(
    x,
    [-260, -150, 0, 150, 260],
    [0, 1, 1, 1, 0]
  );

  return (
    <motion.div
      className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing"
      style={{
        x,
        rotate,
        opacity,
      }}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      dragElastic={0.95}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 100) {
          onSwiped(info.offset.x > 0 ? 1 : -1);
        }
      }}
      initial={{
        scale: 0.96,
        y: 10,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        y: 0,
        opacity: 1,
      }}
      exit={{
        x: 500,
        opacity: 0,
        rotate: 12,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      transition={{
        duration: 0.35,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      <div
        className="
          relative
          flex
          h-full
          w-full
          flex-col
          justify-between
          overflow-hidden
          rounded-[11px]
          border
          border-[#B56BFF]/70
          bg-black
          px-5
          py-6
          sm:px-6
          sm:py-7
        "
      >
        {/* Bottom-right purple glow */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -right-16
            h-40
            w-40
            rounded-full
            bg-[#7E22CE]
            opacity-70
            blur-[55px]
          "
        />

        {/* Extra glow */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-8
            right-0
            h-24
            w-24
            rounded-full
            bg-[#A855F7]
            opacity-30
            blur-[35px]
          "
        />

        {/* Quote */}
        <p
          className="
            relative
            z-10
            mx-auto
            mt-3
            max-w-[285px]
            text-center
            text-[14px]
            font-medium
            leading-[1.55]
            tracking-[-0.01em]
            text-white
            sm:max-w-[310px]
            sm:text-[15px]
          "
        >
          {item.quote}
        </p>

        {/* Client */}
        <div className="relative z-10 mt-7 flex items-center justify-center gap-2">
          <Avatar name={item.name} />

          <div className="text-left">
            <p className="text-[11px] font-medium leading-tight text-white sm:text-xs">
              {item.name}
            </p>

            <p className="mt-[2px] text-[8px] leading-tight text-white/40 sm:text-[9px]">
              {item.detail}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsDeck() {
  const [order, setOrder] = useState(() =>
    TESTIMONIALS.map((_, index) => index)
  );

  const cycle = (direction: number) => {
    setOrder((previous) => {
      const next = [...previous];

      if (direction === 1) {
        const first = next.shift();

        if (first !== undefined) {
          next.push(first);
        }
      } else {
        const last = next.pop();

        if (last !== undefined) {
          next.unshift(last);
        }
      }

      return next;
    });
  };

  const visible = order.slice(0, 3);

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
      "
    >
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7E22CE]
          opacity-[0.025]
          blur-[150px]
        "
      />

      <div className="relative z-10 w-full max-w-[430px]">
        {/* Heading */}
        <div className="mb-16 text-center sm:mb-[68px]">
          <p
            className="
              mb-2
              font-serif
              text-[12px]
              tracking-tight
              text-[#7E22CE]
              sm:text-[13px]
            "
          >
            Testimonials
          </p>

          <h2
            className="
              text-[25px]
              font-normal
              leading-none
              tracking-[-0.04em]
              text-white
              sm:text-[27px]
            "
          >
            Swipe through
          </h2>
        </div>

        {/* Card deck */}
        <div
          className="
            relative
            mx-auto
            h-[225px]
            w-[335px]
            max-w-full
            sm:h-[250px]
            sm:w-[370px]
          "
        >
          {/* Back card 2 */}
          <motion.div
            className="
              absolute
              inset-x-[15px]
              top-[26px]
              h-full
              rounded-[11px]
              border
              border-[#A855F7]/60
              bg-black
            "
            animate={{
              scale: 0.96,
            }}
          >
            <div
              className="
                pointer-events-none
                absolute
                -bottom-8
                right-2
                h-16
                w-20
                rounded-full
                bg-[#7E22CE]
                opacity-50
                blur-[25px]
              "
            />
          </motion.div>

          {/* Back card 1 */}
          <motion.div
            className="
              absolute
              inset-x-[7px]
              top-[13px]
              h-full
              rounded-[11px]
              border
              border-[#A855F7]/70
              bg-black
            "
            animate={{
              scale: 0.98,
            }}
          >
            <div
              className="
                pointer-events-none
                absolute
                -bottom-8
                right-3
                h-20
                w-24
                rounded-full
                bg-[#7E22CE]
                opacity-60
                blur-[30px]
              "
            />
          </motion.div>

          {/* Front card */}
          <AnimatePresence initial={false} mode="sync">
            <TopCard
              key={visible[0]}
              item={TESTIMONIALS[visible[0]]}
              onSwiped={cycle}
            />
          </AnimatePresence>
        </div>

        {/* Bottom controls */}
        <div
          className="
            mt-16
            flex
            items-center
            justify-center
            gap-3
            text-[9px]
            sm:mt-[60px]
            sm:text-[10px]
          "
        >
          <button
            type="button"
            onClick={() => cycle(-1)}
            aria-label="Previous testimonial"
            className="
              cursor-pointer
              text-white/40
              transition
              duration-200
              hover:text-white
            "
          >
            ←
          </button>

          <span className="text-white/40">
            drag or tap
          </span>

          <button
            type="button"
            onClick={() => cycle(1)}
            aria-label="Next testimonial"
            className="
              cursor-pointer
              text-white/40
              transition
              duration-200
              hover:text-white
            "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}