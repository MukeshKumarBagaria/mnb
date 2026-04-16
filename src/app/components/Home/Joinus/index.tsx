'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const benefits = [
  { icon: 'mdi:clock-fast', text: 'Setup within 48 hours' },
  { icon: 'mdi:shield-check-outline', text: 'No long-term lock-in' },
  { icon: 'mdi:chart-timeline-variant-shimmer', text: 'Measurable results' },
]

const Join = () => {
  return (
    <section className='relative overflow-hidden py-16 md:py-24'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'
        style={{ background: 'linear-gradient(135deg, #5170ff 0%, #3a54e0 50%, #282739 100%)' }} />
      {/* Pattern overlay */}
      <div className='absolute inset-0 -z-10 opacity-[0.05]'
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      {/* Glow blobs */}
      <div className='absolute top-0 right-0 w-96 h-96 rounded-full -z-10 opacity-20'
        style={{ background: 'radial-gradient(circle, #fcbd21 0%, transparent 70%)', transform: 'translate(40%, -40%)' }} />
      <div className='absolute bottom-0 left-0 w-64 h-64 rounded-full -z-10 opacity-15'
        style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      <div className='container mx-auto max-w-5xl px-4 sm:px-6 text-center'
        data-aos='fade-up' data-aos-duration='700'>

        {/* Label */}
        <span className='inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold tracking-[0.12em] uppercase py-2 px-4 rounded-full mb-6'>
          <Icon icon='mdi:rocket-launch-outline' width='14' />
          LET&apos;S GROW TOGETHER
        </span>

        {/* Heading */}
        <h2 className='text-white mb-5 leading-tight' style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)' }}>
          Ready to Build a Marketing Strategy<br className='hidden sm:block' />
          That <span style={{ color: '#fcbd21' }}>Actually Works?</span>
        </h2>

        <p className='text-white/65 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed'>
          Let&apos;s turn your marketing into a predictable growth engine.
          Book a free strategy call and discover exactly how we&apos;ll scale
          your brand with confidence.
        </p>

        {/* Benefits row */}
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10'>
          {benefits.map((b, i) => (
            <div key={i} className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full flex items-center justify-center bg-white/15'>
                <Icon icon={b.icon} width='14' className='text-white' />
              </div>
              <span className='text-white/75 text-xs md:text-sm font-medium'>{b.text}</span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <Link href='/contact'
          className='inline-flex items-center gap-3 font-bold rounded-full px-8 md:px-10 py-4 md:py-4.5 text-sm md:text-base transition-all duration-300 shadow-2xl'
          style={{ backgroundColor: '#fcbd21', color: '#282739', boxShadow: '0 12px 32px rgba(252,189,33,0.4)' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 18px 40px rgba(252,189,33,0.5)' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 12px 32px rgba(252,189,33,0.4)' }}>
          <Icon icon='mdi:calendar-check' width='20' />
          Book Your Free Strategy Call
          <Icon icon='tabler:arrow-right' width='18' />
        </Link>

        <p className='text-white/35 text-xs mt-5'>
          No commitment required. 30-minute call. Real strategy, not a sales pitch.
        </p>
      </div>
    </section>
  )
}
export default Join
