'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const pillars = [
  { icon: 'mdi:lightbulb-on-outline', text: 'Strategy-led from day one' },
  { icon: 'mdi:chart-box-outline', text: 'Data-backed every step' },
  { icon: 'mdi:bullseye-arrow', text: 'Measurable, scalable results' },
]

const Dedicated = () => {
  return (
    <section className='relative overflow-hidden py-16 md:py-24'>
      {/* Bg decoration */}
      <div className='absolute inset-0 -z-10' style={{
        background: 'linear-gradient(135deg, #f5f7ff 0%, #ffffff 60%)'
      }} />
      <div className='absolute top-0 right-0 w-[300px] h-[300px] rounded-full -z-10 opacity-30'
        style={{ background: 'radial-gradient(circle, #fcbd2130 0%, transparent 70%)' }} />

      <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>

          {/* ── Left: Image with overlaid badge ── */}
          <div
            className='relative flex items-center justify-center order-2 lg:order-1'
            data-aos='fade-right'
            data-aos-duration='800'>
            {/* Decorative ring */}
            <div className='absolute w-[85%] h-[85%] rounded-full border-2 border-dashed border-primary/15 animate-[spin_25s_linear_infinite]' />

            <Image
              src='/images/dedicated/man.svg'
              alt='Strategy illustration'
              width={420}
              height={530}
              className='w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-none relative z-10 drop-shadow-xl'
              loading='lazy'
            />

            {/* Floating achievement card */}
            <div className='absolute bottom-6 -right-2 sm:right-4 z-20 rounded-2xl shadow-xl p-3.5 flex items-center gap-3 animate-float-medium'
              style={{ backgroundColor: '#282739', maxWidth: 200 }}>
              <div className='w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0'
                style={{ backgroundColor: '#fcbd2120' }}>
                <Icon icon='mdi:trophy-outline' width='18' style={{ color: '#fcbd21' }} />
              </div>
              <div>
                <p className='text-white font-bold text-xs leading-none'>Strategy First</p>
                <p className='text-white/40 text-[10px] mt-0.5'>Always execution second</p>
              </div>
            </div>
          </div>

          {/* ── Right: Quote + pillars ── */}
          <div
            className='text-center lg:text-left order-1 lg:order-2'
            data-aos='fade-left'
            data-aos-duration='800'>

            <span className='section-label inline-flex mx-auto lg:mx-0 mb-4'>OUR PROMISE</span>

            {/* Large blockquote */}
            <blockquote className='font-extrabold text-darkmode leading-tight mb-6'
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
              &ldquo;We don&apos;t just market brands —{' '}
              <span className='text-primary'>we build systems</span>{' '}
              that grow them.&rdquo;
            </blockquote>

            <p className='text-darkmode/55 text-sm md:text-base mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed'>
              Every strategy we build is rooted in audience insights, brand
              positioning, and performance data. We partner with brands that
              value clarity, consistency, and compounding growth.
            </p>

            {/* Pillars */}
            <div className='flex flex-col gap-3 mb-8'>
              {pillars.map((p, i) => (
                <div key={i} className='flex items-center gap-3 justify-center lg:justify-start'>
                  <div className='w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'
                    style={{ backgroundColor: '#5170ff15' }}>
                    <Icon icon={p.icon} width='16' className='text-primary' />
                  </div>
                  <span className='text-sm font-semibold text-darkmode/80'>{p.text}</span>
                </div>
              ))}
            </div>

            {/* Attribution */}
            <div className='flex items-center gap-3 justify-center lg:justify-start'>
              <div className='w-10 h-[2px] rounded-full' style={{ backgroundColor: '#fcbd21' }} />
              <span className='font-extrabold text-darkmode text-sm'>M&amp;B Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dedicated
