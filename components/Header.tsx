"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
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

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -16,
          width: "0%",
        }}
        animate={{
          opacity: 1,
          y: 0,
          width: "100%",
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-10 z-50 mx-auto flex w-[92%] max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-8 py-2 backdrop-blur-xl md:w-[88%] md:px-8"
      >
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-dmsans font-medium text-[15px] text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/#contact">Book a call</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="grid h-9 w-9 place-items-center rounded-full text-white/80 transition-colors hover:text-white md:hidden"
        >
          <HiMenuAlt3 size={22} />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-4 right-4 z-50 flex w-[78%] max-w-sm flex-col rounded-3xl border border-white/10 bg-[#0B0B0E] px-6 py-6 shadow-2xl md:hidden"
            >
              <div className="mb-10 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition-colors hover:text-white"
                >
                  <IoMdClose size={20} />
                </button>
              </div>

              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.35, ease: "easeOut" }}
                    className="border-b border-white/10 py-5 font-dmsans text-lg font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + navLinks.length * 0.06, duration: 0.35, ease: "easeOut" }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 font-dmsans text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
                >
                  Book a call
                  <IoIosArrowRoundForward size={16} />
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;