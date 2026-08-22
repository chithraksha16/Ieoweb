"use client";

const processSteps = [
  {
    step: "STEP-01",
    title: "DISCOVERY CALL",
    description:
      "First, we learn your business, goals, and current marketing presence to define a clear growth strategy.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <rect
          x="6"
          y="17"
          width="14"
          height="14"
          stroke="currentColor"
          strokeWidth="2"
        />

        <rect
          x="23"
          y="13"
          width="19"
          height="22"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M29 20L36 24L29 28V20Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    step: "STEP-02",
    title: "STRATEGY & AUDIT",
    description:
      "We audit your site, SEO, ads, and competitors to build a data-backed roadmap built around your goals.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <circle
          cx="20"
          cy="20"
          r="13"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M30 30L41 41"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M16 22L19 25L25 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    step: "STEP-03",
    title: "CAMPAIGN EXECUTION",
    description:
      "Our team launches your SEO, paid, social, and content campaigns across every channel that matters.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <circle
          cx="24"
          cy="24"
          r="17"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="24"
          cy="24"
          r="11"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="24"
          cy="24"
          r="4"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    step: "STEP-04",
    title: "OPTIMIZATION",
    description:
      "We test, measure, and refine every campaign continuously using real performance data.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          d="M7 31C7 20.5 14.6 12 24 12C33.4 12 41 20.5 41 31"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M24 29L34 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle
          cx="24"
          cy="29"
          r="2"
          fill="currentColor"
        />

        <path
          d="M11 31H14M34 31H37"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    step: "STEP-05",
    title: "REPORTING & SCALE",
    description:
      "Transparent reporting shows exactly what's working — so we can double down and scale it further.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          d="M24 7C31 10 34 17 34 25C34 32 29 37 24 40C19 37 14 32 14 25C14 17 17 10 24 7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <circle
          cx="24"
          cy="21"
          r="3"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M15 27L9 35L17 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M33 27L39 35L31 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-[1120px]">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">

          <div className="font-playfair text-sm font-medium italic text-[#7E22CE] sm:text-base">
            How It Works
          </div>

          <h2 className="mt-2 font-dmsans text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-[42px] md:leading-[1.1] lg:text-[46px]">
            Our Process For Growing Your Brand
          </h2>

          <p className="mx-auto mt-3 max-w-2xl font-dmsans text-xs leading-5 text-black/50 sm:mt-4 sm:text-sm sm:leading-6">
            A streamlined, five-step process for turning attention into
            customers — from first call to compounding growth.
          </p>
        </div>

        {/* ================= PROCESS GRID ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

          {/* ================= PROCESS CARDS ================= */}
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-lg border border-black/15 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#7E22CE]/40 hover:shadow-[0_12px_35px_rgba(126,34,206,0.08)] sm:min-h-[250px] sm:p-6"
            >

              {/* Step Number */}
              <div className="font-dmsans text-[9px] font-medium tracking-[0.15em] text-[#7E22CE] sm:text-[10px]">
                {item.step}
              </div>

              {/* SVG ICON */}
              <div className="mt-4 flex h-11 w-11 items-center justify-center text-black transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#7E22CE] sm:mt-5 sm:h-12 sm:w-12">
                {item.icon}
              </div>

              {/* Card Content */}
              <div className="mt-auto">

                <h3 className="font-dmsans text-base font-medium uppercase tracking-tight text-black sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[280px] font-dmsans text-[11px] leading-5 text-black/55 sm:text-xs sm:leading-5">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

          {/* ================= CTA CARD ================= */}
          <div className="group relative flex min-h-[230px] items-center justify-center overflow-hidden rounded-lg border border-black/15 bg-white p-5 sm:min-h-[250px] sm:p-6">

            {/* Diagonal Purple Gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_0%,transparent_48%,rgba(255,255,255,0.95)_52%,rgba(126,34,206,0.35)_67%,#7E22CE_100%)] transition-all duration-500 group-hover:scale-105" />

            {/* Purple Glow */}
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#7E22CE]/40 blur-3xl transition-all duration-500 group-hover:bg-[#7E22CE]/70" />

            {/* CTA Button */}
            <div className="relative z-10 cursor-pointer rounded-md bg-black px-4 py-2 font-dmsans text-[9px] font-medium tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#7E22CE] sm:px-5 sm:py-2.5 sm:text-[10px]">
              Book a Call Now
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}