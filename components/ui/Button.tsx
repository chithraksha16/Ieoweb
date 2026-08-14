import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function Button({
  children,
  href,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-dmsans font-medium text-black transition-transform duration-300 hover:scale-[1.03] ${className}`}
    >
      {children}

      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 -rotate-45">
        <FaArrowRight size={12} />
      </span>
    </Link>
  );
}