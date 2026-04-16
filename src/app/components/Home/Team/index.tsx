import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const values = [
  { icon: 'mdi:bullseye-arrow', text: 'Strategy First' },
  { icon: 'mdi:chart-areaspline', text: 'Data-Driven' },
  { icon: 'mdi:handshake-outline', text: 'Transparent' },
  { icon: 'mdi:rocket-launch-outline', text: 'Results-Focused' },
]

const Team = () => {
  return (
    <section className='relative overflow-hidden py-16 md:py-24'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6'>

        {/* ── Header ── */}
        <div className='text-center mb-10 md:mb-14' data-aos='fade-up' data-aos-duration='700'>
          <span className='section-label mx-auto'>OUR PHILOSOPHY</span>
          <h2 className='mt-3 mb-5'>
            Strategy First. Execution Second.{' '}
            <span className='text-primary'>Results Always.</span>
          </h2>
          <p className='text-darkmode/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed'>
            We don&apos;t believe in one-size-fits-all marketing. Every brand
            deserves a strategy that reflects its vision, audience, and stage of
            growth.
          </p>
        </div>

        {/* ── Full-width image with overlaid content ── */}
        <div
          className='relative rounded-2xl md:rounded-3xl overflow-hidden'
          data-aos='zoom-in'
          data-aos-duration='800'>
          <Image
            src='/images/team/team.webp'
            alt='M&B Strategy team at work'
            height={600}
            width={1296}
            className='w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover'
            loading='lazy'
          />

          {/* Gradient overlay */}
          <div className='absolute inset-0'
            style={{ background: 'linear-gradient(to top, rgba(40,39,57,0.9) 0%, rgba(40,39,57,0.4) 50%, transparent 100%)' }} />

          {/* Values bar at bottom */}
          <div className='absolute bottom-0 left-0 right-0 p-5 md:p-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-3xl'>
              {values.map((v, i) => (
                <div key={i} className='flex items-center gap-2.5'>
                  <div className='w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0'
                    style={{ backgroundColor: '#5170ff30', backdropFilter: 'blur(4px)' }}>
                    <Icon icon={v.icon} width='16' className='text-primary' />
                  </div>
                  <span className='text-white font-semibold text-xs md:text-sm'>{v.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accent corner badge */}
          <div className='absolute top-4 right-4 md:top-6 md:right-6 rounded-xl px-4 py-2.5 backdrop-blur-md'
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <p className='text-white font-bold text-xs'>M&amp;B Strategy Team</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
