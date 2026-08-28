"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: (
      <>
        Data-Driven
        <br />
        Strategy
      </>
    ),
    description:
      "Research-driven strategies delivering smarter decisions and measurable business growth.",
    image: "/services/whychooseus-image1.webp",
    type: "wide",
  },
  {
    title: "Creativity & Innovation",
    description:
      "Blending creativity, technology, and AI to help your brand stand out.",
    image: "/services/whychooseus-image2.webp",
    type: "small",
  },
  {
    title: "Results-Focused Approach",
    description:
      "Driving more traffic, quality leads, and measurable business growth.",
    image: "/services/whychooseus-image3.webp",
    type: "small",
  },
  {
    title: (
      <>
        Long-Term
        <br />
        Partnership
      </>
    ),
    description:
      "Your dedicated growth partner with transparent communication and ongoing support.",
    image: "/services/whychooseus-image4.webp",
    type: "wide",
  },
];

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen w-full bg-white">

      {/* ================================
          WHY CHOOSE US
      ================================= */}

      <section className="flex w-full justify-center px-4 py-20 sm:px-6 md:py-28">

        <div className="w-full max-w-[920px]">

          {/* ================================
              HEADING
          ================================= */}

          <div className="mx-auto max-w-[850px] text-center">

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                font-playfair
                font-medium
                text-[17px]
                text-[#69468B]
              "
            >
              Why Choose Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                mt-4
                font-playfair
                text-[28px]
                font-medium
                leading-tight
                text-[#202020]
                sm:text-[32px]
              "
            >
              The Right Strategy. The Right Team. The Right Results.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                mx-auto
                mt-6
                max-w-[760px]
                font-dmsans
                text-[13px]
                leading-[20px]
                text-[#777]
                sm:text-[14px]
              "
            >
              Choosing the right marketing partner can make all the difference.
              At Ieoweb, we combine strategic thinking, creative excellence, and
              data-driven execution to help businesses grow with confidence.
              Every solution we deliver is tailored to your goals, ensuring
              measurable results and long-term success.
            </motion.p>

          </div>


          {/* ================================
            DESKTOP CARDS
          ================================= */}

          <div className="mx-auto mt-16 hidden w-full max-w-[900px] md:block">

            {/* ROW 1 */}

            <div className="grid grid-cols-[1.53fr_1fr] gap-5">

              <WideCard
                card={cards[0]}
                index={0}
              />

              <SmallCard
                card={cards[1]}
                index={1}
              />

            </div>


            {/* ROW 2 */}

            <div className="mt-5 grid grid-cols-[1fr_1.53fr] gap-5">

              <SmallCard
                card={cards[2]}
                index={2}
              />

              <WideCard
                card={cards[3]}
                index={3}
              />

            </div>

          </div>


          {/* ================================
              MOBILE CARDS
          ================================= */}

          <div className="mx-auto mt-12 grid max-w-[500px] grid-cols-1 gap-4 md:hidden">

            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                {card.type === "wide" ? (
                  <WideCard
                    card={card}
                    index={index}
                    mobile
                  />
                ) : (
                  <SmallCard
                    card={card}
                    index={index}
                    mobile
                  />
                )}
              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}


/* ============================================================
   WIDE CARD
   Data Driven / Long Term
============================================================ */

function WideCard({
  card,
  index,
  mobile = false,
}: {
  card: (typeof cards)[number];
  index: number;
  mobile?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[12px]
        bg-black
        ${mobile ? "h-[230px]" : "h-[276px]"}
      `}
    >

      {/* PURPLE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[100px]
          right-[-80px]
          h-[280px]
          w-[340px]
          rounded-full
          bg-[#7E22CE]/70
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-40px]
          right-[20%]
          h-[130px]
          w-[180px]
          rounded-full
          bg-[#7E22CE]/25
          blur-[65px]
        "
      />


      {/* CONTENT */}

      <div className="relative z-10 flex h-full items-center">

        {/* IMAGE */}

        <div
          className={`
            relative
            shrink-0
            ${mobile
              ? "ml-5 h-[150px] w-[150px]"
              : "ml-7 h-[225px] w-[235px]"
            }
          `}
        >
          <Image
            src={card.image}
            alt=""
            fill
            priority={index === 0}
            className="
              object-contain
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
            sizes="240px"
          />
        </div>


        {/* TEXT */}

        <div
          className={`
            relative
            z-20
            ${mobile
              ? "ml-2 mr-4"
              : "ml-3 mr-8"
            }
          `}
        >

          <h2
            className={`
              font-dmsans
              font-semibold
              leading-[1.25]
              text-white
              ${mobile
                ? "text-[19px]"
                : "text-[28px]"
              }
            `}
          >
            {card.title}
          </h2>

          <p
            className={`
              font-dmsans
              text-white/70
              ${mobile
                ? "mt-3 text-[11px] leading-[17px]"
                : "mt-4 text-[16px] leading-[23px]"
              }
            `}
          >
            {card.description}
          </p>

        </div>

      </div>

    </motion.article>
  );
}


/* ============================================================
   SMALL CARD
   Creativity / Results
============================================================ */

function SmallCard({
  card,
  index,
  mobile = false,
}: {
  card: (typeof cards)[number];
  index: number;
  mobile?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[12px]
        bg-black
        ${mobile ? "h-[230px]" : "h-[276px]"}
      `}
    >

      {/* PURPLE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[100px]
          right-[-80px]
          h-[260px]
          w-[300px]
          rounded-full
          bg-[#7E22CE]/55
          blur-[90px]
        "
      />


      {/* CONTENT */}

      <div
        className={`
          relative
          z-10
          flex
          h-full
          flex-col
          justify-between
          ${mobile ? "p-5" : "p-7"}
        `}
      >

        {/* IMAGE */}

        <div
          className={`
            relative
            shrink-0
            ${mobile
              ? "h-[100px] w-[110px]"
              : "h-[125px] w-[140px]"
            }
          `}
        >
          <Image
            src={card.image}
            alt=""
            fill
            className="
              object-contain
              object-left
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
            sizes="140px"
          />
        </div>


        {/* TEXT */}

        <div className="relative z-20">

          <h2
            className={`
              font-dmsans
              font-semibold
              leading-[1.3]
              text-white
              ${mobile
                ? "text-[17px]"
                : "text-[21px]"
              }
            `}
          >
            {card.title}
          </h2>

          <p
            className={`
              max-w-[310px]
              font-dmsans
              text-white/70
              ${mobile
                ? "mt-2 text-[11px] leading-[17px]"
                : "mt-3 text-[15px] leading-[22px]"
              }
            `}
          >
            {card.description}
          </p>

        </div>

      </div>

    </motion.article>
  );
}