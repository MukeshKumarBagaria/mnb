'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const pillars = [
  { icon: 'mdi:email-fast-outline', label: 'Email Marketing', desc: 'Highest ROI channel' },
  { icon: 'mdi:search-web', label: 'SEO Optimisation', desc: 'Organic, compounding' },
  { icon: 'mdi:bullhorn-outline', label: 'Social Media', desc: 'Brand awareness' },
]

const Digital = () => {
  return (
    <section className='relative overflow-hidden py-16 md:py-24'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
        <div
          className='relative rounded-2xl md:rounded-3xl overflow-hidden'
          data-aos='fade-up'
          data-aos-duration='700'>

          {/* Background */}
          <div className='absolute inset-0'
            style={{ background: 'linear-gradient(135deg, #5170ff 0%, #3a54e0 100%)' }} />
          {/* Dots */}
          <div className='absolute inset-0 opacity-[0.06]'
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          {/* Glow */}
          <div className='absolute top-0 right-0 w-80 h-80 rounded-full opacity-20'
            style={{ background: 'radial-gradient(circle, #fcbd21 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

          {/* Doodle — xl only */}
          <div className='hidden xl:block absolute bottom-0 right-0 pointer-events-none' style={{ width: 440 }}>
            <Image src='/images/digital/girldoodle.svg' alt='' width={440} height={370} />
          </div>

          {/* Content */}
          <div className='relative z-10 grid grid-cols-1 xl:grid-cols-2'>
            <div className='py-10 md:py-14 lg:py-16 px-7 sm:px-10 md:px-14 lg:px-16 text-center xl:text-left'>
              <span className='inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold tracking-[0.12em] uppercase py-2 px-4 rounded-full mb-6'>
                OUR SERVICES
              </span>
              <h2 className='text-white mb-4 leading-tight' style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
                Our Core Growth Services
              </h2>
              <p className='text-white/65 text-sm md:text-base mb-8 max-w-lg mx-auto xl:mx-0 leading-relaxed'>
                We focus on three essential growth pillars that every modern brand
                needs to scale sustainably. Strategy first. Execution second. Results always.
              </p>

              {/* Pillars mini grid */}
              <div className='grid grid-cols-3 gap-3 mb-8 max-w-sm mx-auto xl:mx-0'>
                {pillars.map((p, i) => (
                  <div key={i} className='rounded-xl p-3 text-center' style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                    <Icon icon={p.icon} width='22' className='text-white mx-auto mb-1.5' />
                    <p className='text-white font-bold text-[10px] leading-tight'>{p.label}</p>
                    <p className='text-white/50 text-[9px] mt-0.5'>{p.desc}</p>
                  </div>
                ))}
              </div>

              <Link href='/services'
                className='inline-flex items-center gap-2 font-bold rounded-full px-7 py-3.5 text-sm md:text-base transition-all duration-300'
                style={{ backgroundColor: '#fcbd21', color: '#282739' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#e6a800'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#fcbd21'}>
                Explore Our Services
                <Icon icon='tabler:arrow-right' width='16' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
