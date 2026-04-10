'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  return (
    <section className='relative overflow-hidden z-1'>
      <div className='container mx-auto pt-24 max-w-7xl px-4'>
        <div className='grid grid-cols-12 justify-center items-center'>
          <div className='col-span-12 xl:col-span-7 lg:col-span-8 md:col-span-12 sm:col-span-12'>
            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit'>
              <p className='text-primary text-lg font-bold'>
                STRATEGY-LED GROWTH AGENCY
              </p>
            </div>
            <h1 className='mt-6'>
              Marketing & Branding Strategies That Drive{' '}
              <span className='text-primary'>Real Growth</span>
            </h1>
            <p className='text-xl text-black/60 mt-6 max-w-2xl'>
              We help brands scale through strategic Email Marketing, SEO
              optimisation, and high-performing Social Media management — built
              to convert, not just look good.
            </p>
            <div className='flex flex-wrap gap-4 mt-10'>
              <Link href='/contact'>
                <button className='bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode hover:cursor-pointer transition-colors duration-300'>
                  Get a Free Strategy Call
                </button>
              </Link>
              <Link href='/services'>
                <button className='bg-transparent text-darkmode text-xl font-semibold py-5 px-12 rounded-full border-2 border-darkmode hover:bg-darkmode hover:text-white hover:cursor-pointer transition-colors duration-300'>
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
          <div className='xl:col-span-5 lg:col-span-4 lg:block hidden'>
            <div className='relative flex items-center justify-center'>
              {/* Decorative elements */}
              <div className='absolute w-80 h-80 bg-primary/10 rounded-full -top-10 -right-10'></div>
              <div className='absolute w-60 h-60 bg-primary/5 rounded-full top-20 right-20'></div>
              <div className='relative z-10 grid grid-cols-2 gap-6 p-8'>
                <div className='bg-white rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300'>
                  <Icon
                    icon='mdi:email-outline'
                    className='text-primary mx-auto'
                    width='48'
                    height='48'
                  />
                  <p className='mt-3 font-bold text-darkmode text-sm'>
                    Email Marketing
                  </p>
                </div>
                <div className='bg-white rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 mt-8'>
                  <Icon
                    icon='mdi:magnify'
                    className='text-primary mx-auto'
                    width='48'
                    height='48'
                  />
                  <p className='mt-3 font-bold text-darkmode text-sm'>
                    SEO Optimisation
                  </p>
                </div>
                <div className='bg-white rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300'>
                  <Icon
                    icon='mdi:bullhorn-outline'
                    className='text-primary mx-auto'
                    width='48'
                    height='48'
                  />
                  <p className='mt-3 font-bold text-darkmode text-sm'>
                    Social Media
                  </p>
                </div>
                <div className='bg-primary rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 mt-8'>
                  <Icon
                    icon='mdi:chart-line'
                    className='text-white mx-auto'
                    width='48'
                    height='48'
                  />
                  <p className='mt-3 font-bold text-white text-sm'>
                    Real Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
