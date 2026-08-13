"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16,width:0 }}
      animate={{ opacity: 1, y: 0,width: "100%" }}
      transition={{ duration: 1, delay:0.2, ease: "easeOut" }}
      className="fixed inset-x-0 top-10 z-50 mx-auto flex w-[92%] max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-2 backdrop-blur-xl md:w-[88%] md:px-8"
    >
      <Logo/>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[15px] text-white/70 transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="group flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
      >
        Book a call
        <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </a>
    </motion.header>
  );
};

export default Header;