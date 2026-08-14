"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import Button from "./ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];


const Header = () => {
  return (
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
      className="fixed inset-x-0 top-10 z-50 mx-auto flex w-[92%] max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-2 backdrop-blur-xl md:w-[88%] md:px-8"
    >
      <Logo/>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className=" font-dmsans font-medium text-[15px] text-white/70 transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <Button href='#contact'>
      Book a call
      </Button>
    </motion.header>
  );
};

export default Header;