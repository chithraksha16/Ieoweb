"use client";

import ColorBends from "@/components/ColorBends";
import PortfolioOverview from "@/components/PortfolioOverview";
import ServicesSection from "@/components/ServiceSection";
import Button from "@/components/ui/Button";
import HowItWorks from "@/components/HowItWorks"

export default function Home() {
  return (
    <>
      {/* FIRST SECTION */}
      <main className="relative overflow-hidden bg-black">

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
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-24 pt-35 text-center sm:px-6 sm:pb-28 sm:pt-40 lg:px-8 lg:pb-32 lg:pt-44">

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

            <span className="bg-linear-to-r from-white via-[#C084FC] to-[#7E22CE] bg-clip-text text-transparent">
              Strategic Marketing.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl font-dmsans text-[14px] leading-6 text-white/75 sm:mt-8 sm:text-[16px] sm:leading-7 md:text-[18px]">
            Whether you&apos;re a startup, local business, or growing company,
            we combine branding, websites, SEO, social media, paid
            advertising, and creative content to help your business grow
            faster.
          </p>

          {/* CTA */}
          <div className="mt-9 sm:mt-10">
            <Button href="#contact">
              Book a call
            </Button>
          </div>

        </div>
      </main>

      {/* SECOND SECTION */}
      <section className="relative z-10 min-h-screen w-full bg-white">
        {/* Your next section */}
        <ServicesSection/>
      </section>

      {/* THIRD SECTION */}
      <section className="relative z-10 min-h-screen w-full bg-black">
        {/* Your next section */}
       <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-4 py-5 text-white sm:flex-row sm:items-start sm:gap-8 sm:px-6 lg:px-0">
  <h2 className="shrink-0 text-center font-playfair text-2xl font-medium sm:text-left sm:text-3xl md:text-4xl">
    Overview
  </h2>

  <p className="max-w-xl text-center font-dmsans text-base font-normal leading-relaxed text-white/60 sm:text-right sm:text-lg md:text-xl lg:text-2xl">
    We bring campaigns to life with strategy, creativity, and performance
    data working together.
  </p>
</div>
  <PortfolioOverview variant="dark"/>
  <div className="relative mx-auto w-full max-w-[1120px] overflow-hidden rounded-lg border border-white/15 bg-black px-5 py-12 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:py-18">

  {/* Bottom Purple Glow */}
  <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[75%] -translate-x-1/2 rounded-[50%] bg-[#7E22CE]/80 blur-[70px] sm:-bottom-40 sm:h-72 sm:w-[65%] sm:blur-[90px] md:-bottom-48 md:h-80 md:w-[60%]" />

  {/* Content */}
  <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">

    {/* Eyebrow */}
    <div className="font-dmsans text-[11px] font-medium uppercase tracking-wide text-[#B89AD8] sm:text-xs">
      LET'S WORK TOGETHER
    </div>

    {/* Heading */}
    <div className="mt-4 max-w-[850px] font-playfair text-3xl font-semibold leading-[1.1] text-white sm:mt-5 sm:text-4xl md:text-5xl lg:text-[52px]">
      Ready to make your brand impossible to ignore?
    </div>

    {/* Description */}
    <div className="mt-5 max-w-2xl font-dmsans text-sm leading-6 text-white/55 sm:mt-6 sm:text-base sm:leading-7 md:text-[17px]">
      Tell us where you're headed and we'll show you how strategy, design,
      and execution come together to get you there.
    </div>

    {/* CTA */}
   <Button href="#contact" className="mt-2">Start the conversation</Button>
  </div>
</div>
  </section>

  <section className="relative z-10 min-h-screen w-full bg-white">
        {/* Your next section */}
        <HowItWorks/>
      </section>


    </>
  );
}