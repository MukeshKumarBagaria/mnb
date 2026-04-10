'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Beliefs = () => {
  return (
    <section className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center mb-16'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase mb-4'>
            OUR SPECIALITIES
          </p>
          <h2 className='text-3xl lg:text-4xl'>
            Two Pillars of <span className='text-primary'>Brand Growth</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* EMAIL & SEO CARD */}
          <div className='relative bg-darkmode rounded-3xl p-10 sm:p-14 overflow-hidden group hover:shadow-2xl transition-shadow duration-500'>
            {/* Decorative circles */}
            <div className='absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full'></div>
            <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full'></div>

            <div className='relative z-10'>
              <div className='flex items-center gap-4 mb-8'>
                <div className='w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center'>
                  <Icon
                    icon='mdi:email-multiple-outline'
                    width='28'
                    height='28'
                    className='text-primary'
                  />
                </div>
                <div className='w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center'>
                  <Icon
                    icon='mdi:magnify'
                    width='28'
                    height='28'
                    className='text-primary'
                  />
                </div>
                <p className='text-primary text-sm font-bold tracking-widest uppercase'>
                  EMAIL & SEO
                </p>
              </div>

              <h3 className='text-white text-3xl lg:text-4xl mb-5 leading-tight'>
                Convert & Rank with strategy-led marketing.
              </h3>
              <p className='text-white/60 text-lg mb-10 max-w-md'>
                Turn email into your highest ROI channel and rank on page one
                for terms your ideal customers are searching for.
              </p>

              <Link
                href='/services/email-marketing'
                className='inline-flex items-center gap-2 text-lg font-semibold text-white bg-primary py-4 px-10 rounded-full hover:bg-white hover:text-darkmode transition-colors duration-300'>
                Explore Email & SEO
                <Icon icon='tabler:arrow-right' width='20' height='20' />
              </Link>
            </div>
          </div>

          {/* SOCIAL MEDIA CARD */}
          <div className='relative bg-[#F0FDF4] rounded-3xl p-10 sm:p-14 overflow-hidden group hover:shadow-2xl transition-shadow duration-500'>
            {/* Decorative circles */}
            <div className='absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full'></div>
            <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full'></div>

            <div className='relative z-10'>
              <div className='flex items-center gap-4 mb-8'>
                <div className='w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center'>
                  <Icon
                    icon='mdi:bullhorn-outline'
                    width='28'
                    height='28'
                    className='text-primary'
                  />
                </div>
                <div className='w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center'>
                  <Icon
                    icon='mdi:instagram'
                    width='28'
                    height='28'
                    className='text-primary'
                  />
                </div>
                <p className='text-primary text-sm font-bold tracking-widest uppercase'>
                  SOCIAL MEDIA
                </p>
              </div>

              <h3 className='text-darkmode text-3xl lg:text-4xl mb-5 leading-tight'>
                Build your brand with scroll-stopping creative.
              </h3>
              <p className='text-black/50 text-lg mb-10 max-w-md'>
                Consistent management designed to grow awareness, engagement,
                and trust — aligned with your brand strategy.
              </p>

              <Link
                href='/services/social-media'
                className='inline-flex items-center gap-2 text-lg font-semibold text-white bg-primary py-4 px-10 rounded-full hover:bg-darkmode transition-colors duration-300'>
                Explore Social Media
                <Icon icon='tabler:arrow-right' width='20' height='20' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs
