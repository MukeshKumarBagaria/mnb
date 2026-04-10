'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const services = [
  {
    title: 'Email Marketing That Converts',
    description:
      'Build relationships, nurture leads, and drive repeat revenue with strategic email campaigns tailored to your audience journey.',
    icon: 'mdi:email-multiple-outline',
    href: '/services/email-marketing',
    cta: 'Explore Email Marketing',
  },
  {
    title: 'SEO Built for Long-Term Growth',
    description:
      'Rank higher, attract qualified traffic, and convert organic visitors into customers with search-led strategies that compound over time.',
    icon: 'mdi:search-web',
    href: '/services/seo',
    cta: 'Explore SEO Services',
  },
  {
    title: 'Social Media That Builds Brands',
    description:
      'Scroll-stopping creatives and consistent management designed to grow awareness, engagement, and trust across key platforms.',
    icon: 'mdi:account-group-outline',
    href: '/services/social-media',
    cta: 'Explore Social Media',
  },
]

const Featured = () => {
  return (
    <section className='relative overflow-hidden' id='services-section'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center overflow-hidden mb-16'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase mb-4'>
            WHAT WE DO
          </p>
          <h3 className='my-5'>Our Core Growth Services</h3>
          <p className='text-lg text-black/60 max-w-2xl mx-auto'>
            We focus on three essential growth pillars that every modern brand
            needs to scale sustainably.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, i) => (
            <div
              key={i}
              className='bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-primary/20'>
              <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300'>
                <Icon
                  icon={service.icon}
                  width='32'
                  height='32'
                  className='text-primary group-hover:text-white transition-colors duration-300'
                />
              </div>
              <h4 className='mb-4 text-2xl'>{service.title}</h4>
              <p className='text-base text-black/60 mb-8'>
                {service.description}
              </p>
              <Link
                href={service.href}
                className='text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300'>
                {service.cta}
                <Icon icon='tabler:chevron-right' width='20' height='20' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Featured
