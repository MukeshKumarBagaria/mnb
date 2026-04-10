'use client'
import React from 'react'
import { Icon } from '@iconify/react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Deep dive into your brand, audience, competitors, and goals to understand the full picture.',
    icon: 'mdi:magnify',
  },
  {
    number: '02',
    title: 'Strategise',
    description:
      'Build a tailored growth roadmap aligned with your objectives and key performance indicators.',
    icon: 'mdi:map-marker-path',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Launch campaigns with precision and consistency across all chosen channels.',
    icon: 'mdi:rocket-launch-outline',
  },
  {
    number: '04',
    title: 'Optimise',
    description:
      'Track, test, refine, and scale what works — continuously improving your results.',
    icon: 'mdi:chart-timeline-variant-shimmer',
  },
]

const Work = () => {
  return (
    <section id='Process' className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center overflow-hidden'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase mb-4'>
            HOW WE WORK
          </p>
          <h3 className='text-black my-5'>Our Proven 4-Step Process</h3>
          <p className='text-lg text-black/60 max-w-2xl mx-auto mb-16'>
            Every engagement follows our battle-tested framework to ensure
            your marketing delivers predictable, scalable growth.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, i) => (
            <div
              key={i}
              className='bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 group'>
              <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300'>
                <Icon
                  icon={step.icon}
                  width='32'
                  height='32'
                  className='text-primary group-hover:text-white transition-colors duration-300'
                />
              </div>
              <p className='text-primary text-4xl font-bold mb-2'>
                {step.number}
              </p>
              <h5 className='mb-4'>{step.title}</h5>
              <p className='text-base text-black/60'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Work
