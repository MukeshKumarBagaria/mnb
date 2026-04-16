import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | M&B Strategy',
  description:
    'Strategic marketing built for sustainable growth. M&B Strategy exists to help brands cut through the noise with clarity and purpose.',
}

const values = [
  {
    title: 'Strategy First',
    description:
      'Every engagement starts with deep research and a tailored roadmap. We never jump into execution without understanding the full picture.',
    icon: 'mdi:lightbulb-outline',
  },
  {
    title: 'Data-Driven Decisions',
    description:
      'We analyse audience behaviour, market trends, and campaign performance. No guesswork — just informed, measurable strategies.',
    icon: 'mdi:chart-box-outline',
  },
  {
    title: 'Transparent Partnership',
    description:
      'Clear communication, honest reporting, and no hidden agendas. We believe in building long-term relationships based on trust.',
    icon: 'mdi:handshake-outline',
  },
  {
    title: 'Compounding Growth',
    description:
      'We focus on strategies that compound over time, not short-term hacks. Sustainable growth is always the goal.',
    icon: 'mdi:chart-timeline-variant-shimmer',
  },
]

const clients = [
  { label: 'Start-ups & Scale-ups', icon: 'mdi:rocket-launch-outline' },
  { label: 'SMEs & E-commerce', icon: 'mdi:store-outline' },
  { label: 'Service-Based Businesses', icon: 'mdi:briefcase-outline' },
  { label: 'Personal Brands & Founders', icon: 'mdi:account-star-outline' },
]

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className='relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16'>
        {/* Bg blob */}
        <div className='absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/6 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3'></div>

        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='text-center max-w-3xl mx-auto' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label mx-auto'>ABOUT US</span>
            <h1 className='mt-3 mb-5'>
              Strategic Marketing Built for{' '}
              <span className='text-primary'>Sustainable Growth</span>
            </h1>
            <p className='text-base md:text-xl text-darkmode/55 max-w-2xl mx-auto leading-relaxed'>
              M&amp;B Strategy exists to help brands cut through the noise with
              clarity and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
            <div data-aos='fade-right' data-aos-duration='700'>
              <span className='section-label'>OUR STORY</span>
              <h2 className='mt-2 mb-5'>Built Around What Works</h2>
              <p className='text-sm md:text-base text-darkmode/60 mb-4 leading-relaxed'>
                We don&apos;t believe in one-size-fits-all marketing. Every
                brand deserves a strategy that reflects its vision, audience,
                and stage of growth.
              </p>
              <p className='text-sm md:text-base text-darkmode/60 mb-4 leading-relaxed'>
                Our approach blends creativity with performance, ensuring
                every campaign has a clear objective and measurable impact.
              </p>
              <p className='text-sm md:text-base text-darkmode/60 leading-relaxed'>
                We partner with brands that value clarity, consistency, and
                compounding growth — not short-term hacks or vanity metrics.
              </p>
            </div>
            <div data-aos='fade-left' data-aos-duration='700'>
              <Image
                src='/images/team/team.webp'
                alt='M&B Strategy team'
                width={648}
                height={400}
                className='rounded-2xl md:rounded-3xl shadow-xl w-full h-auto'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Promise ── */}
      <section className='py-12 md:py-16 bg-primary'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 text-center' data-aos='fade-up' data-aos-duration='700'>
          <h2 className='text-white max-w-3xl mx-auto mb-5 leading-tight'>
            &ldquo;We don&apos;t just market brands — we build systems that grow
            them.&rdquo;
          </h2>
          <p className='text-white/70 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed'>
            At M&amp;B Strategy, we believe marketing should be intentional,
            measurable, and scalable. Every strategy we build is rooted in
            audience insights, brand positioning, and performance data.
          </p>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='text-center mb-10 md:mb-14' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label mx-auto'>OUR VALUES</span>
            <h2 className='mt-2'>What Drives Us</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto'>
            {values.map((value, i) => (
              <div
                key={i}
                data-aos='fade-up'
                data-aos-delay={i * 100}
                data-aos-duration='700'
                className='card-hover bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg group'>
                <div className='w-11 h-11 md:w-14 md:h-14 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300'>
                  <Icon
                    icon={value.icon}
                    width='24'
                    height='24'
                    className='text-primary group-hover:text-white transition-colors duration-300'
                  />
                </div>
                <h5 className='mb-2'>{value.title}</h5>
                <p className='text-sm text-darkmode/60 leading-relaxed'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Work With ── */}
      <section className='py-12 md:py-20 bg-gradient-to-br from-[#F5F7FF] to-[#EEF1FF]'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='text-center mb-10 md:mb-14' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label mx-auto'>OUR CLIENTS</span>
            <h2 className='mt-2'>Who We Work With</h2>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto'>
            {clients.map((client, i) => (
              <div
                key={i}
                data-aos='fade-up'
                data-aos-delay={i * 80}
                data-aos-duration='700'
                className='card-hover bg-white rounded-xl md:rounded-2xl p-5 md:p-8 text-center shadow-md'>
                <Icon
                  icon={client.icon}
                  width='40'
                  height='40'
                  className='text-primary mx-auto mb-3'
                />
                <p className='font-semibold text-darkmode text-sm md:text-base'>{client.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div
            className='bg-primary rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 text-center'
            data-aos='zoom-in'
            data-aos-duration='700'>
            <h2 className='text-white mb-4'>Let&apos;s Grow Your Brand Together</h2>
            <p className='text-white/80 text-sm md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
              Ready to work with a team that puts strategy first? Let&apos;s
              build something great.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-white text-primary text-sm md:text-lg font-semibold py-3.5 md:py-4 px-8 md:px-10 rounded-full hover:bg-darkmode hover:text-white transition-colors duration-300'>
              Book Your Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
