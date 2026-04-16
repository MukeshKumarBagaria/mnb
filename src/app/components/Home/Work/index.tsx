'use client'
import React from 'react'
import { Icon } from '@iconify/react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep dive into your brand, audience, competitors, and goals to understand the full picture.',
    icon: 'mdi:magnify',
    color: '#5170ff',
  },
  {
    number: '02',
    title: 'Strategise',
    description: 'Build a tailored growth roadmap aligned with your objectives and key performance indicators.',
    icon: 'mdi:map-marker-path',
    color: '#fcbd21',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Launch campaigns with precision and consistency across all chosen channels.',
    icon: 'mdi:rocket-launch-outline',
    color: '#5170ff',
  },
  {
    number: '04',
    title: 'Optimise',
    description: 'Track, test, refine, and scale what works — continuously improving your results.',
    icon: 'mdi:chart-timeline-variant-shimmer',
    color: '#fcbd21',
  },
]

const Work = () => {
  return (
    <section id='Process' className='relative overflow-hidden py-16 md:py-24'
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f5f7ff 100%)' }}>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6'>

        {/* ── Section header ── */}
        <div className='text-center mb-12 md:mb-20' data-aos='fade-up' data-aos-duration='700'>
          <span className='section-label mx-auto'>HOW WE WORK</span>
          <h2 className='mt-3 mb-4'>Our Proven 4-Step Process</h2>
          <p className='text-darkmode/55 max-w-2xl mx-auto text-sm md:text-base leading-relaxed'>
            Every engagement follows our battle-tested framework to ensure
            predictable, scalable growth.
          </p>
        </div>

        {/* ── Steps: desktop timeline, mobile stack ── */}
        <div className='relative'>
          {/* Connecting line — desktop only */}
          <div className='hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-[2px]'
            style={{ background: 'linear-gradient(90deg, #5170ff 0%, #fcbd21 33%, #5170ff 66%, #fcbd21 100%)', opacity: 0.25 }} />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-4'>
            {steps.map((step, i) => (
              <div
                key={i}
                data-aos='fade-up'
                data-aos-delay={i * 120}
                data-aos-duration='700'
                className='group relative'
                onMouseEnter={e => { (e.currentTarget.firstElementChild as HTMLElement).style.transform = 'translateY(-8px)'; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = '0 20px 40px rgba(81,112,255,0.15)' }}
                onMouseLeave={e => { (e.currentTarget.firstElementChild as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}>

                <div className='bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 h-full flex flex-col text-center transition-all duration-300'
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>

                  {/* Step number circle */}
                  <div className='relative mx-auto mb-5'>
                    <div className='w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto transition-all duration-300'
                      style={{ backgroundColor: `${step.color}18`, border: `2px solid ${step.color}30` }}>
                      <Icon icon={step.icon} width='28' style={{ color: step.color }} />
                    </div>
                    {/* Step number badge */}
                    <span className='absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-extrabold'
                      style={{ backgroundColor: step.color }}>
                      {i + 1}
                    </span>
                  </div>

                  {/* Big number watermark */}
                  <div className='text-5xl md:text-6xl font-extrabold leading-none mb-3 select-none'
                    style={{ color: `${step.color}15` }}>
                    {step.number}
                  </div>

                  <h5 className='mb-3 text-base md:text-lg' style={{ color: step.color }}>{step.title}</h5>
                  <p className='text-sm text-darkmode/55 leading-relaxed'>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom note ── */}
        <div className='text-center mt-10 md:mt-14' data-aos='fade-up' data-aos-duration='600'>
          <p className='text-darkmode/40 text-sm'>
            Every client gets a dedicated strategy built from scratch — no cookie-cutter playbooks.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Work
