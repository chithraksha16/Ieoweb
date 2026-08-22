"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import { RiMegaphoneFill,RiSparklingFill,RiSendInsFill,RiPaletteFill,RiMailSendFill  } from "react-icons/ri";
import { PiMonitorFill } from "react-icons/pi";


const services = [
  {
    title: "SEO & GEO",
    description:
      "Boost your visibility across search engines and AI-powered search.",
    icon: FaGlobe,
  },
  {
    title: "Paid Advertising",
    description:
      "Reach the right audience and turn targeted campaigns into measurable growth.",
    icon: RiMegaphoneFill,
  },
  {
    title: "Branding & Creative",
    description:
      "Build a distinctive brand with creative design, content, and AI-powered visuals.",
    icon: RiSparklingFill,
  },
  {
    title: "Social & Creator Marketing",
    description:
      "Build meaningful connections through social media, content, and creators.",
    icon: RiSendInsFill,
  },
  {
    title: "Graphic Design",
    description:
      "Create eye-catching visuals that make your brand stand out.",
    icon: RiPaletteFill,
  },
  {
    title: "Email & Automation",
    description:
      "Build lasting relationships through personalized email, CRM, and automation.",
    icon: RiMailSendFill ,
  },
  {
    title: "UI/UX & Web Development",
    description:
      "Build fast, intuitive websites that turn visitors into customers.",
    icon: PiMonitorFill,
  },
];

function ServiceCard({
  service,
  className = "",
}: {
  service: (typeof services)[number];
  className?: string;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
    mass: 0.5,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
    mass: 0.5,
  });

  const shadowX = useTransform(
    springRotateY,
    [-10, 10],
    [-12, 12]
  );

  const shadowY = useTransform(
    springRotateX,
    [-10, 10],
    [12, -12]
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateYValue =
      ((x - centerX) / centerX) * 7;

    const rotateXValue =
      ((centerY - y) / centerY) * 7;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      className={`group relative ${className}`}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-full min-h-[250px] overflow-hidden rounded-xl border border-[#7E22CE]/15 bg-[#F0E7FF] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.12)] sm:p-7"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
          boxShadow: useTransform(
            [shadowX, shadowY],
            ([x, y]) =>
              `${x}px ${y}px 18px rgba(0,0,0,0.12)`
          ),
        }}
        whileHover={{
          scale: 1.025,
        }}
        transition={{
          scale: {
            duration: 0.25,
          },
        }}
      >
        {/* Purple glow */}
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-44 w-44 rounded-full bg-[#7E22CE]/45 blur-3xl transition-all duration-500 group-hover:bg-[#7E22CE]/60" />

        {/* Extra soft glow */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 bg-[radial-gradient(circle_at_bottom_right,rgba(126,34,206,0.35),transparent_70%)]" />

        {/* Content */}
        <div
          className="relative z-10 flex h-full flex-col"
          style={{
            transform: "translateZ(30px)",
          }}
        >
          {/* Icon */}
          <motion.div
            className="mb-7 flex h-16 w-16 items-center justify-center text-[#7E22CE] sm:h-[72px] sm:w-[72px]"
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Icon
             
              className="h-14 w-14 sm:h-[64px] sm:w-[64px]"
            />
          </motion.div>

          {/* Text */}
          <div className="mt-auto">
            <h3 className="font-dmsans text-lg font-semibold tracking-tight text-black sm:text-xl">
              {service.title}
            </h3>

            <p className="mt-2 max-w-[280px] font-dmsans text-xs leading-5 text-black/65 sm:text-[13px] sm:leading-5">
              {service.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

      <div className="mx-auto w-full max-w-[1120px]">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">

          <p className="font-playfair text-base font-medium  text-[#7E22CE] sm:text-lg">
            What We Do
          </p>

          <h2 className="mt-2 font-dmsans text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-[42px] md:leading-[1.1]">
            Solutions Designed for Growth
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-dmsans text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
            From search visibility to creative campaigns, we combine strategy,
            technology, and creativity to turn your digital presence into
            measurable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">

          {/* Row 1 — 4 Cards */}
          <ServiceCard
            service={services[0]}
            className="lg:col-span-3"
          />

          <ServiceCard
            service={services[1]}
            className="lg:col-span-3"
          />

          <ServiceCard
            service={services[2]}
            className="lg:col-span-3"
          />

          <ServiceCard
            service={services[3]}
            className="lg:col-span-3"
          />

          {/* Row 2 — 3 Cards */}
          <ServiceCard
            service={services[4]}
            className="lg:col-span-4"
          />

          <ServiceCard
            service={services[5]}
            className="lg:col-span-4"
          />

          <ServiceCard
            service={services[6]}
            className="lg:col-span-4"
          />
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center sm:mt-16">
          <a
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-linear-to-br form-50% from-[#7E22CE] to-90%  to-black px-5 py-2.5 font-dmsans text-xs font-medium text-white transition-all duration-300 hover:bg-[#7E22CE] hover:shadow-[0_8px_25px_rgba(126,34,206,0.3)] sm:px-6 sm:py-3 sm:text-sm"
          >
            View All Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}