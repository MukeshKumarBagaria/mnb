'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const services = [
  {
    number: '01',
    title: 'Email Marketing That Converts',
    description:
      'Build relationships, nurture leads, and drive repeat revenue with strategic email campaigns tailored to your audience journey.',
    icon: 'mdi:email-fast-outline',
    href: '/services/email-marketing',
    cta: 'Explore Email Marketing',
    gradient: 'linear-gradient(135deg, #5170ff 0%, #7c8fff 100%)',
    tag: 'Highest ROI Channel',
  },
  {
    number: '02',
    title: 'SEO Built for Long-Term Growth',
    description:
      'Rank higher, attract qualified traffic, and convert organic visitors into customers with search-led strategies that compound over time.',
    icon: 'mdi:search-web',
    href: '/services/seo',
    cta: 'Explore SEO Services',
    gradient: 'linear-gradient(135deg, #fcbd21 0%, #f0a800 100%)',
    tag: 'Compounding Growth',
  },
  {
    number: '03',
    title: 'Social Media That Builds Brands',
    description:
      'Scroll-stopping creatives and consistent management designed to grow awareness, engagement, and trust across key platforms.',
    icon: 'mdi:account-group-outline',
    href: '/services/social-media',
    cta: 'Explore Social Media',
    gradient: 'linear-gradient(135deg, #282739 0%, #3d3c56 100%)',
    tag: 'Brand Awareness',
  },
]

const Featured = () => {
  return (
    <section className='relative overflow-hidden py-16 md:py-24' id='services-section'
      style={{ background: 'linear-gradient(180deg, #f5f7ff 0%, #ffffff 100%)' }}>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6'>

        {/* ── Section header ── */}
        <div className='text-center mb-12 md:mb-16' data-aos='fade-up' data-aos-duration='700'>
          <span className='section-label mx-auto'>WHAT WE DO</span>
          <h2 className='mt-3 mb-4'>Our Core Growth Services</h2>
          <p className='text-darkmode/55 max-w-xl mx-auto leading-relaxed text-sm md:text-base'>
            Three essential pillars every modern brand needs to scale
            sustainably. Strategy first. Results always.
          </p>
        </div>

        {/* ── Service cards ── */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6'>
          {services.map((s, i) => (
            <div
              key={i}
              data-aos='fade-up'
              data-aos-delay={i * 130}
              data-aos-duration='700'
              className='group relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col'
              style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 48px rgba(81,112,255,0.15)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 32px rgba(0,0,0,0.07)' }}
             >

              {/* Coloured header band */}
              <div className='relative h-36 md:h-40 flex items-end p-5 md:p-6'
                style={{ background: s.gradient }}>
                {/* Large bg number */}
                <span className='absolute top-2 right-4 font-extrabold text-white/10 leading-none select-none pointer-events-none'
                  style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}>
                  {s.number}
                </span>
                {/* Icon circle */}
                <div className='w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                  <Icon icon={s.icon} width='28' className='text-white' />
                </div>
                {/* Tag badge */}
                <span className='absolute top-4 right-4 text-[10px] font-bold text-white/90 bg-white/15 rounded-full px-2.5 py-1'>
                  {s.tag}
                </span>
              </div>

              {/* Card body */}
              <div className='bg-white flex-1 flex flex-col p-5 md:p-7'>
                <h4 className='text-lg md:text-xl mb-3 leading-snug'>{s.title}</h4>
                <p className='text-sm text-darkmode/55 leading-relaxed flex-1 mb-5'>
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className='inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300 mt-auto'>
                  {s.cta}
                  <Icon icon='tabler:arrow-right' width='16' />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div
          className='mt-12 md:mt-16 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-5 border border-primary/12'
          data-aos='fade-up'
          data-aos-duration='700'
          style={{ backgroundColor: '#f5f7ff' }}>
          <div>
            <h5 className='mb-1 text-base md:text-lg'>Not sure which service fits you?</h5>
            <p className='text-darkmode/50 text-sm'>Book a free call and we'll map out the best strategy.</p>
          </div>
          <Link href='/contact'
            className='whitespace-nowrap flex items-center gap-2 font-bold text-white rounded-full px-7 py-3 text-sm transition-all duration-300 shadow-lg flex-shrink-0'
            style={{ background: 'linear-gradient(135deg, #5170ff 0%, #7c8fff 100%)', boxShadow: '0 6px 20px rgba(81,112,255,0.35)' }}>
            Get a Free Strategy Call
            <Icon icon='tabler:arrow-right' width='16' />
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Featured
