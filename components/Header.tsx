
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

import Logo from "./Logo";
import Button from "./ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed left-1/2 top-8 z-50
          w-[92%] max-w-6xl
          -translate-x-1/2
          md:w-[88%]
        "
      >
        <div
          className="
            flex h-14.5
            items-center justify-between
            rounded-full
            border border-white/9
            bg-black/45
            px-5
            backdrop-blur-xl
            md:px-6
          "
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative py-2 font-dmsans text-[14px] font-medium"
                >
                  <span
                    className={`
                      transition-colors duration-300
                      ${
                        active
                          ? "text-white"
                          : "text-white/55 group-hover:text-white"
                      }
                    `}
                  >
                    {link.label}
                  </span>

                  {/* Active dot */}
                  {active && (
                    <motion.span
                      layoutId="active-dot"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className="
                        absolute
                        -bottom-0.5
                        left-1/2
                        h-1 w-1
                        -translate-x-1/2
                        rounded-full
                        bg-[#A855F7]
                        shadow-[0_0_8px_rgba(168,85,247,0.8)]
                      "
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href="/#contact">Book a call</Button>
          </div>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              text-white/70
              transition-colors
              hover:text-white
              md:hidden
            "
          >
            <HiMenuAlt3 size={21} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="
                fixed inset-0 z-60
                bg-black/60
                backdrop-blur-sm
                md:hidden
              "
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed right-4 top-4 bottom-4
                z-70
                w-[82%] max-w-sm
                rounded-[28px]
                border border-white/8
                bg-[#08080A]
                p-6
                shadow-2xl
                md:hidden
              "
            >
              {/* Close */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    text-white/60
                    transition
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  <IoMdClose size={20} />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-12 flex flex-col">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.08 + index * 0.06,
                        duration: 0.35,
                      }}
                      className="
                        group
                        flex items-center justify-between
                        border-b border-white/[0.07]
                        py-5
                        font-dmsans
                        text-xl
                      "
                    >
                      <span
                        className={
                          active
                            ? "text-white"
                            : "text-white/50 group-hover:text-white"
                        }
                      >
                        {link.label}
                      </span>

                      {active ? (
                        <span
                          className="
                            h-1.5 w-1.5
                            rounded-full
                            bg-[#A855F7]
                            shadow-[0_0_8px_rgba(168,85,247,0.8)]
                          "
                        />
                      ) : (
                        <IoIosArrowRoundForward
                          size={21}
                          className="
                            text-white/20
                            transition-transform
                            group-hover:translate-x-1
                            group-hover:text-white/60
                          "
                        />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* CTA */}
              <motion.a
                href="/#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                className="
                  absolute bottom-6 left-6 right-6
                  flex items-center justify-center
                  gap-2
                  rounded-full
                  bg-white
                  py-3
                  font-dmsans
                  text-sm
                  font-semibold
                  text-black
                  transition-transform
                  hover:scale-[1.02]
                "
              >
                Book a call
                <IoIosArrowRoundForward size={17} />
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

