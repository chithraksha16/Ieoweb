import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`relative block h-[45px] w-[140px] ${className}`}
    >
      <Image
        src="/ieoweb-logo2.webp"
        alt="Ieoweb"
        fill
        sizes="140px"
        priority
        className="object-contain object-left"
      />
    </Link>
  );
}