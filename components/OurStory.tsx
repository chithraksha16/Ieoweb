"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";


const PURPLE = "#7E22CE";
const PURPLE_LIGHT = "#B072F0";
const PURPLE_DEEP = "#3B0764";

const noiseSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`;
const NOISE_URL = `data:image/svg+xml;utf8,${encodeURIComponent(noiseSvg)}`;


function Grain() {
    return (
        <div
            className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{ backgroundImage: `url("${NOISE_URL}")` }}
        />
    );
}

// function SectionLabel({ children }: { children: ReactNode }) {
//     return (
//         <div className="mb-7 flex items-center gap-4">
//             <span className="h-px w-9 bg-white/20" />
//             <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-white/45">
//                 {children}
//             </span>
//         </div>
//     );
// }

function GradientWord({ children }: { children: ReactNode }) {
    return (
        <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(100deg, ${PURPLE_LIGHT}, ${PURPLE})` }}
        >
            {children}
        </span>
    );
}




/*     glow, gradient stroke instead of flat purple.                  */
/* ================================================================== */

function GrowthChart() {
    const guessworkPath =
        "M 10 150 C 60 130, 100 165, 150 145 C 175 138, 185 150, 190 150";
    const dataPath =
        "M 190 150 C 230 145, 250 90, 290 70 C 330 50, 350 40, 390 20";

    return (
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-b from-[#0d0a10] to-black p-9">
            <div
                className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full blur-[110px]"
                style={{ backgroundColor: `${PURPLE}18` }}
            />
            <svg viewBox="0 0 400 220" fill="none" className="relative w-full">
                <defs>
                    <linearGradient id="strokeGrad" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor={PURPLE_DEEP} />
                        <stop offset="100%" stopColor={PURPLE_LIGHT} />
                    </linearGradient>
                    <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={PURPLE} stopOpacity="0.28" />
                        <stop offset="100%" stopColor={PURPLE} stopOpacity="0" />
                    </linearGradient>
                </defs>

                {[0, 1, 2, 3].map((i) => (
                    <line key={i} x1="0" y1={40 + i * 45} x2="400" y2={40 + i * 45} stroke="white" strokeOpacity="0.04" />
                ))}

                <motion.path
                    d={guessworkPath}
                    stroke="rgba(255,255,255,0.28)"
                    strokeWidth="1.5"
                    strokeDasharray="1 7"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />

                <motion.path
                    d={dataPath}
                    stroke="url(#strokeGrad)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.9, ease: "easeInOut" }}
                />

                <motion.path
                    d={`${dataPath} L 390 220 L 190 220 Z`}
                    fill="url(#growthFill)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                />

                <motion.line
                    x1="190" y1="20" x2="190" y2="200"
                    stroke="white" strokeOpacity="0.12" strokeDasharray="2 6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                />
                <motion.circle
                    cx="190" cy="150" r="3.5" fill={PURPLE_LIGHT}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.85, duration: 0.4, type: "spring" }}
                />
                <motion.circle
                    cx="190" cy="150" r="8" fill="none" stroke={PURPLE_LIGHT} strokeWidth="1"
                    initial={{ scale: 0.6, opacity: 0.6 }}
                    animate={{ scale: [0.6, 1.5], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
                />
            </svg>

            <div className="relative mt-6 flex items-center justify-between border-t border-white/8 pt-6 text-xs sm:gap-1 gap-3">
                <span className="font-dmsans sm:text-sm text-[10px] uppercase tracking-[0.25em] text-white/35">Guesswork</span>
                <span className={`font-dmsans text-sm italic text-white/70`}>  Ieoweb</span>
                <span className="font-dmsans text-[10px] sm:text-xs uppercase tracking-[0.25em]" style={{ color: PURPLE_LIGHT }}>
                    Data-Driven Growth
                </span>
            </div>
            <p className="relative mt-4 text-center text-[11px] italic text-white/30">
                Illustrative trajectory — not client-specific data.
            </p>
        </div>
    );
}





export default function OurStory() {
    return (
        <div className="bg-black">
            {/* ---------- Our Story ---------- */}
            <section className="relative px-6 py-32">
                <Grain />
                <div className="relative mx-auto grid max-w-6xl items-center gap-20 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className=" font-dmsans font-weight sm:text-[20px] text-[16px] text-[#6200EE] px-1"> Our Story</div>
                        <h2
                            className={` font-playfair text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl`}
                        >
                            From Vision to <GradientWord>Measurable Growth</GradientWord>
                        </h2>

                        <div className="relative mt-10 max-w-lg">
                            <span className={`absolute -left-2 -top-6 text-7xl text-white/10`}>“</span>
                            <p className="relative text-xl font-light leading-relaxed text-white/85">
                                Great marketing isn't about spending more —{" "}
                                <span className="font-medium text-white">
                                    it's about making smarter decisions.
                                </span>
                            </p>
                        </div>

                        <div className="mt-8 max-w-md space-y-5 text-[15px] leading-relaxed text-white/45">
                            <p>
                                Too many businesses invest in marketing without seeing real
                                returns. We created Ieoweb to change that.
                            </p>
                            <p>
                                Instead of relying on guesswork, we build data-driven
                                strategies that connect businesses with the right audience,
                                increase conversions, and create long-term growth.
                            </p>
                            <p>
                                Every website we design, every SEO strategy we implement, and
                                every campaign we launch is built with one goal —
                            </p>
                        </div>

                        <p className={`mt-6 text-2xl italic`}>
                            <GradientWord>Helping your business grow consistently.</GradientWord>
                        </p>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <GrowthChart />
                    </motion.div>
                </div>
            </section>

        </div>
    );
}