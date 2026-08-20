"use client";

import ColorBends from "@/components/ColorBends";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* FIRST SECTION */}
      <main className="relative  overflow-hidden bg-black">

        {/* ColorBends ONLY inside this section */}
        <div className="absolute inset-0 z-0">
          <ColorBends
            colors={["#7E22CE"]}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.05}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={6}
            transparent
            autoRotate={0}
          />
        </div>

        {/* Home content */}
<div className="relative z-10 mx-auto mt-35 flex min-h-[calc(100vh-120px)] w-full max-w-6xl flex-col items-center px-5 text-center sm:px-6 lg:px-8">

  {/* Badge */}
  <div className="mb-7 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 font-dmsans text-[11px] font-medium text-white/90 backdrop-blur-md sm:mb-8 sm:px-5 sm:text-xs">
    ✦ Strategy-first marketing, built to convert ✦
  </div>

  {/* Heading */}
  <h1 className="max-w-5xl font-playfair text-[38px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[48px] md:text-[58px] lg:text-[58px] xl:text-[64px]">
    We Build Brands, Generate Leads
    <br className="hidden sm:block" />
    <span className="text-white">
      & Scale Businesses Through
    </span>
    <br className="hidden sm:block" />
    <span className="bg-gradient-to-r from-white via-[#C084FC] to-[#7E22CE] bg-clip-text text-transparent">
      Strategic Marketing.
    </span>
  </h1>

  {/* Description */}
  <p className="mt-7 max-w-3xl font-dmsans text-[14px] leading-6 text-white/75 sm:mt-8 sm:text-[16px] sm:leading-7 md:text-[18px]">
    Whether you&apos;re a startup, local business, or growing company, we
    combine branding, websites, SEO, social media, paid advertising, and
    creative content to help your business grow faster.
  </p>

  {/* CTA */}
  <div className="mt-9 sm:mt-10">
    <Button href="#contact">Book a call</Button>
  </div>

</div>

      </main>

      {/* SECOND SECTION */}
      <section className="relative z-10 h-screen w-full bg-white">
        {/* Your next section */}
      </section>
    </>
  );
}