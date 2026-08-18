import PortfolioOverview from '@/components/PortfolioOverview'
import Button from '@/components/ui/Button'
const page = () => {
  return (
    <div className='w-full'>
      <div className="mt-40 flex w-full justify-center px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8 py-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-5 text-white">

          {/* Label */}
          <h1 className="rounded-full bg-[#6200EE] px-3 py-1.5 text-center font-playfair text-sm font-medium sm:text-base">
            About us
          </h1>

          {/* Heading */}
          <h3 className="max-w-xl text-center font-playfair text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            We Don't Just Market Brands — We Build Businesses That Lead.
          </h3>

          {/* Paragraphs */}
          <div className="flex w-full max-w-3xl flex-col gap-4">
            <p className="text-center font-dmsans text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              Every successful brand starts with a clear strategy. At Ieoweb, we
              help businesses increase their online visibility, attract qualified
              customers, and achieve sustainable growth through intelligent digital
              marketing.
            </p>

            <p className="text-center font-dmsans text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              Our approach combines creativity, data, and technology to create
              marketing campaigns that don't just generate clicks—they generate
              measurable business results. Whether you're launching a startup,
              growing a local business, or scaling an established company, we become
              an extension of your team, focused on helping you succeed.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Button href="#contact">
              Book a call
            </Button>
          </div>
        </div>
      </div>
      

        <div className='w-full bg-white py-10'>
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-5 text-white">
                <h2 className="rounded-full text-[#6200EE]  text-center font-playfair text-sm font-medium sm:text-base">
                  The Work Behind The Work
                </h2>
                <h3 className=" text-black max-w-xl  text-center font-dmsans text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                  Behind the Work That Moves Brands Forward
                </h3>
            </div>

            <PortfolioOverview variant="light"/>

            </div>
        </div>
  )
}

export default page
