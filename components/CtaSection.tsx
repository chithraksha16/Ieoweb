"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section
            className="
        relative
        w-full
        overflow-hidden
        bg-black
        px-5
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
        "
        >
        
        <div
            className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-[230px]
            opacity-90
            bg-[radial-gradient(ellipse_at_left_top,rgba(126,34,206,0.20)_0%,transparent_50%),radial-gradient(ellipse_at_right_top,rgba(126,34,206,0.45)_0%,rgba(126,34,206,0.14)_35%,transparent_62%)]
            blur-[25px]
            "
        />


            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
            max-w-3xl
            font-playfair
            text-[24px]
            font-medium
            leading-[1.2]
            tracking-[-0.015em]
            text-[#F5F1EA]
            sm:text-[30px]
            md:text-[36px]
            lg:text-[40px]
          "
                >
                    Ready to Accelerate Your{" "}
                    <span className="bg-linear-to-r from-2% from-white via-[#7E22CE] to-[#7E22CE] bg-clip-text text-transparent">
                        Business Growth
                    </span>{" "}
                    and
                    <br className="hidden sm:block" />
                    Outperform the Competition?
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
            mt-4
            max-w-2xl
            font-dmsans
            text-[12px]
            leading-[1.55]
            text-white/65
            sm:text-[13px]
            md:text-[14px]
          "
                >
                    Let's transform your ideas into a powerful brand with marketing
                    strategies that attract, convert,
                    <br className="hidden sm:block" />
                    and grow your business.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-7 flex flex-col items-center gap-3 sm:flex-row"
                >
                    {/* Primary */}
                    <Link
                        href="/contact"
                        className="
              inline-flex
              h-9
              items-center
              justify-center
              rounded-md
              bg-gradient-to-r
              from-white
              via-white
              to-[#7E22CE]
              px-7
              font-dmsans
              text-[12px]
              font-medium
              text-black
              shadow-[0_0_18px_rgba(126,34,206,0.3)]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_0_25px_rgba(126,34,206,0.45)]
              sm:h-10
              sm:px-8
            "
                    >
                        Book a call
                    </Link>

                    {/* Secondary */}
                    <Link
                        href="/services"
                        className="
              inline-flex
              h-9
              items-center
              justify-center
              rounded-md
              border
              border-[#7E22CE]
              bg-black/20
              px-4
              font-dmsans
              text-[12px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#7E22CE]/10
              hover:shadow-[0_0_18px_rgba(126,34,206,0.2)]
              sm:h-10
              sm:px-5
            "
                    >
                        Explore Services
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}