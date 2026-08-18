import Button from '@/components/ui/Button'
import ServicesShowcase from '@/components/ServicesShowcase'
import CTASection from '@/components/CtaSection'
const page = () => {
  return (
    <div className='w-full'>
      <div className="mt-40 flex w-full justify-center px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8 py-6">
              <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-5 text-white">
      
                <h1 className="rounded-full bg-[#6200EE] px-3 py-1.5 text-center font-playfair text-sm font-medium sm:text-base">
                  Our Services
                </h1>
      
                <h3 className="max-w-xl text-center font-playfair text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                  Everything Your Brand Needs to Grow.
                </h3>
      
                <div className=" w-full max-w-3xl ">
                  <p className="text-center font-dmsans text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                    From positioning your brand to reaching customers through SEO, content, social media, and paid campaigns, we create marketing experiences designed to attract attention, generate demand, and drive meaningful results.
                  </p>
                </div>
      
                <div className="pt-2">
                  <Button href="#contact">
                    Book a call
                  </Button>
                </div>
              </div>
            </div>

            <ServicesShowcase/>
            <CTASection/>
    </div>
  )
}

export default page
