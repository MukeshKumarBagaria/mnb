'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const emailFeatures = ['Strategy & Automation', 'Lead Nurturing Flows', 'A/B Testing', '+147% avg ROI']
const socialFeatures = ['Content Strategy', 'Scroll-Stopping Creative', 'Community Management', 'Analytics & Reporting']

const Beliefs = () => {
  return (
    <section className='relative overflow-hidden py-16 md:py-24'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6'>

        {/* ── Section header ── */}
        <div className='text-center mb-10 md:mb-16' data-aos='fade-up' data-aos-duration='700'>
          <span className='section-label mx-auto'>OUR SPECIALITIES</span>
          <h2 className='mt-3'>
            Two Pillars of <span className='text-primary'>Brand Growth</span>
          </h2>
        </div>

        {/* ── Side-by-side panels ── */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7'>

          {/* ── EMAIL & SEO ── dark card */}
          <div
            data-aos='fade-right'
            data-aos-duration='800'
            className='relative rounded-2xl md:rounded-3xl overflow-hidden'
            style={{ background: 'linear-gradient(135deg, #282739 0%, #1e1d30 100%)' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
           >

            {/* Deco element — accent circle top right */}
            <div className='absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-20'
              style={{ background: 'radial-gradient(circle, #5170ff 0%, transparent 70%)' }} />
            <div className='absolute top-4 right-4 w-3 h-3 rounded-full' style={{ backgroundColor: '#fcbd21' }} />

            <div className='relative z-10 p-7 sm:p-10 md:p-12'>
              {/* Icons row */}
              <div className='flex items-center gap-3 mb-7'>
                <div className='w-11 h-11 rounded-2xl flex items-center justify-center' style={{ backgroundColor: '#5170ff25' }}>
                  <Icon icon='mdi:email-fast-outline' width='22' className='text-primary' />
                </div>
                <div className='w-11 h-11 rounded-2xl flex items-center justify-center' style={{ backgroundColor: '#5170ff25' }}>
                  <Icon icon='mdi:search-web' width='22' className='text-primary' />
                </div>
                <span className='text-primary text-xs font-extrabold tracking-[0.14em] uppercase ml-1'>EMAIL &amp; SEO</span>
              </div>

              <h3 className='text-white leading-tight mb-4' style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                Convert &amp; Rank with strategy-led marketing.
              </h3>
              <p className='text-white/50 text-sm md:text-base mb-8 leading-relaxed max-w-sm'>
                Turn email into your highest ROI channel and rank on page one
                for terms your ideal customers search for.
              </p>

              {/* Feature tags */}
              <div className='flex flex-wrap gap-2 mb-8'>
                {emailFeatures.map((f, i) => (
                  <span key={i} className='text-xs font-semibold rounded-full px-3 py-1.5'
                    style={{ backgroundColor: '#5170ff20', color: '#a0aaff' }}>
                    {f}
                  </span>
                ))}
              </div>

              <Link href='/services/email-marketing'
                className='inline-flex items-center gap-2 font-bold text-white rounded-full px-6 py-3 text-sm transition-all duration-300'
                style={{ backgroundColor: '#5170ff' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#3a54e0'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#5170ff'}>
                Explore Email &amp; SEO
                <Icon icon='tabler:arrow-right' width='16' />
              </Link>
            </div>
          </div>

          {/* ── SOCIAL MEDIA ── light card */}
          <div
            data-aos='fade-left'
            data-aos-duration='800'
            className='relative rounded-2xl md:rounded-3xl overflow-hidden'
            style={{ background: 'linear-gradient(135deg, #f0f3ff 0%, #e8edff 100%)', border: '1px solid #d8deff' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
           >

            {/* Deco element */}
            <div className='absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-30'
              style={{ background: 'radial-gradient(circle, #5170ff 0%, transparent 70%)' }} />
            <div className='absolute top-4 right-4 w-3 h-3 rounded-full' style={{ backgroundColor: '#5170ff' }} />

            <div className='relative z-10 p-7 sm:p-10 md:p-12'>
              {/* Icons row */}
              <div className='flex items-center gap-3 mb-7'>
                <div className='w-11 h-11 rounded-2xl flex items-center justify-center' style={{ backgroundColor: '#5170ff18' }}>
                  <Icon icon='mdi:bullhorn-outline' width='22' className='text-primary' />
                </div>
                <div className='w-11 h-11 rounded-2xl flex items-center justify-center' style={{ backgroundColor: '#5170ff18' }}>
                  <Icon icon='mdi:instagram' width='22' className='text-primary' />
                </div>
                <span className='text-primary text-xs font-extrabold tracking-[0.14em] uppercase ml-1'>SOCIAL MEDIA</span>
              </div>

              <h3 className='text-darkmode leading-tight mb-4' style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                Build your brand with scroll-stopping creative.
              </h3>
              <p className='text-darkmode/55 text-sm md:text-base mb-8 leading-relaxed max-w-sm'>
                Consistent management designed to grow awareness, engagement,
                and trust — aligned with your brand strategy.
              </p>

              {/* Feature tags */}
              <div className='flex flex-wrap gap-2 mb-8'>
                {socialFeatures.map((f, i) => (
                  <span key={i} className='text-xs font-semibold rounded-full px-3 py-1.5'
                    style={{ backgroundColor: '#5170ff15', color: '#5170ff' }}>
                    {f}
                  </span>
                ))}
              </div>

              <Link href='/services/social-media'
                className='inline-flex items-center gap-2 font-bold text-white rounded-full px-6 py-3 text-sm transition-all duration-300'
                style={{ backgroundColor: '#5170ff' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#3a54e0'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#5170ff'}>
                Explore Social Media
                <Icon icon='tabler:arrow-right' width='16' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs
