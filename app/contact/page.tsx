"use client"
import {motion} from 'framer-motion'
import { MdOutlineEmail,MdOutlineLocalPhone } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const page = () => {
  const contactDetails = [
  {
    icon: MdOutlineEmail,
    label: "Email",
    value: "ieoweb111@gmail.com",
    href: "ieoweb111@gmail.com",
    note: "We typically respond within one business day.",
  },
  {
    icon:MdOutlineLocalPhone,
    label: "Phone",
    value: "+91 9148520240", 
    href: "tel:+919148520240",
    note: "Monday – Friday • 9:00 AM – 6:00 PM IST",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Udupi, Karnataka, India",
    note: "Working with clients worldwide.",
  },
];
  return (
    <div className='w-full'>
      <div className="mt-40 flex w-full justify-center px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8 sm:py-10 py-6">
                    <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-5 text-white">
            
                      <h1 className="rounded-full bg-[#6200EE] px-3 py-1.5 text-center font-playfair text-sm font-medium sm:text-base">
                        Contact Us
                      </h1>
            
                      <h3 className="max-w-xl text-center font-playfair text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                        Let's Start Growing Your Business.
                      </h3>
            
                      <div className=" w-full max-w-3xl ">
                        <p className="text-center font-dmsans text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                          Whether you're looking to increase traffic, generate qualified leads, build a stronger brand, or launch your next digital project, we're here to help. Tell us about your goals, and we'll create a strategy tailored to your business.
                        </p>
                      </div>
                    </div>
                  </div>

            <section
      className="relative w-full overflow-hidden bg-black px-6 py-20 sm:py-28 lg:px-12 font-dmsans"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 1400px 500px at 0% 0%, #3F1167 0%, rgba(63,17,103,0.5) 30%, rgba(63,17,103,0.15) 55%, rgba(0,0,0,0) 80%)",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* subtle bottom glow for depth */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-95 w-95 rounded-full opacity-20 blur-[120px]"
        style={{ background: "#5B1699" }}
        aria-hidden="true"
      />
 
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Left column — info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Get in Touch
          </p>
          <h2 className="mt-3 font-dmsans text-3xl italic leading-snug text-white sm:text-4xl">
            Have a question{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #B385E0, #7E22CE)",
              }}
            >
              or a project in mind?
            </span>
          </h2>
 
          <div className="mt-12 space-y-10">
            {contactDetails.map(({ icon: Icon, label, value, href, note }) => (
              <div key={label} className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(126, 34, 206, 0.15)",
                    boxShadow: "0 0 0 1px rgba(126, 34, 206, 0.35)",
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#B385E0" }} />
                </span>
                <div>
                  <p className="text-sm text-white/50">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block text-lg font-medium text-white underline decoration-white/20 underline-offset-4 transition hover:decoration-white/60"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-medium text-white">
                      {value}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-white/40">{note}</p>
                </div>
              </div>
            ))}
          </div>
 
          <div className="mt-14 text-center sm:text-left">
            <h3 className="font-dmsans text-lg italic text-white">
              Prefer a Quick Conversation?
            </h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-white/50 sm:mx-0">
              Skip the back-and-forth emails and book a free 30-minute
              strategy call with our team.
            </p>
            <Link href={'/#contact'}>
            <button
              type="button"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full px-6 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
              style={{
                background: "linear-gradient(90deg, #ffffff ,#7E22CE)",
                boxShadow: "0 0 24px rgba(126,34,206,0.4)",
              }}
            >
              Book a call
            </button>
            </Link>
          </div>
        </motion.div>
 
        {/* Right column — form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative rounded-2xl border border-white/10 bg-linear-to-b from-[#7E22CE]/10 to-black/2 p-6 backdrop-blur-sm sm:p-8"
          style={{
            boxShadow:
              "0 0 0 1px rgba(126,34,206,0.08), 0 30px 60px -20px rgba(126,34,206,0.25)",
          }}
        >
          <div className="text-center">
            <h3 className="font-dmsans text-xl italic text-white sm:text-2xl">
              Tell Us About Your Project
            </h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-white/45">
              Complete the form below, and we&apos;ll get back to you with the
              next steps.
            </p>
          </div>
 
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm text-white/70"
              >
                Full name :
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[#7E22CE] focus:ring-1 focus:ring-[#7E22CE]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-white/70"
              >
                Email :
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[#7E22CE] focus:ring-1 focus:ring-[#7E22CE]"
              />
            </div>
 
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-white/70"
              >
                Your message :
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[#7E22CE] focus:ring-1 focus:ring-[#7E22CE]"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/4 py-3.5 text-sm font-medium text-white transition hover:bg-white/8"
            >
              Submit
              <FaArrowRight  className="h-4 w-4 -rotate-45" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default page
