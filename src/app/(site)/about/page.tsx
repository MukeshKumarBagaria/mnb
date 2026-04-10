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

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='container mx-auto pt-32 max-w-7xl px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit mx-auto'>
              <p className='text-primary text-lg font-bold'>ABOUT US</p>
            </div>
            <h1 className='mt-6 text-4xl sm:text-5xl lg:text-6xl'>
              Strategic Marketing Built for{' '}
              <span className='text-primary'>Sustainable Growth</span>
            </h1>
            <p className='text-xl text-black/60 mt-6 max-w-3xl mx-auto'>
              M&B Strategy exists to help brands cut through the noise with
              clarity and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl lg:text-4xl mb-6'>Our Story</h2>
              <p className='text-lg text-black/60 mb-6'>
                We don&apos;t believe in one-size-fits-all marketing. Every
                brand deserves a strategy that reflects its vision, audience,
                and stage of growth.
              </p>
              <p className='text-lg text-black/60 mb-6'>
                Our approach blends creativity with performance, ensuring
                every campaign has a clear objective and measurable impact.
              </p>
              <p className='text-lg text-black/60'>
                We partner with brands that value clarity, consistency, and
                compounding growth — not short-term hacks or vanity metrics.
              </p>
            </div>
            <div>
              <Image
                src='/images/team/team.webp'
                alt='M&B Strategy team'
                width={648}
                height={400}
                className='rounded-3xl shadow-xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className='bg-primary'>
        <div className='container mx-auto max-w-7xl px-4 text-center'>
          <h3 className='text-white text-3xl lg:text-4xl max-w-3xl mx-auto mb-6'>
            &quot;We don&apos;t just market brands — we build systems that grow
            them.&quot;
          </h3>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            At M&B Strategy, we believe marketing should be intentional,
            measurable, and scalable. Every strategy we build is rooted in
            audience insights, brand positioning, and performance data.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='text-center mb-16'>
            <p className='text-primary text-lg tracking-widest uppercase mb-4'>
              OUR VALUES
            </p>
            <h2 className='text-3xl lg:text-4xl'>What Drives Us</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {values.map((value, i) => (
              <div
                key={i}
                className='bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 group'>
                <div className='w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300'>
                  <Icon
                    icon={value.icon}
                    width='28'
                    height='28'
                    className='text-primary group-hover:text-white transition-colors duration-300'
                  />
                </div>
                <h5 className='mb-3'>{value.title}</h5>
                <p className='text-base text-black/60'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Clients */}
      <section className='bg-grey'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl'>Who We Work With</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto'>
            {[
              { label: 'Start-ups & Scale-ups', icon: 'mdi:rocket-launch-outline' },
              { label: 'SMEs & E-commerce', icon: 'mdi:store-outline' },
              { label: 'Service-Based Businesses', icon: 'mdi:briefcase-outline' },
              { label: 'Personal Brands & Founders', icon: 'mdi:account-star-outline' },
            ].map((client, i) => (
              <div
                key={i}
                className='bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300'>
                <Icon
                  icon={client.icon}
                  width='48'
                  height='48'
                  className='text-primary mx-auto mb-4'
                />
                <p className='font-semibold text-darkmode'>{client.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='bg-primary rounded-3xl p-16 text-center'>
            <h3 className='text-white text-3xl lg:text-4xl mb-4'>
              Let&apos;s Grow Your Brand Together
            </h3>
            <p className='text-white/80 text-lg mb-8 max-w-2xl mx-auto'>
              Ready to work with a team that puts strategy first? Let&apos;s
              build something great.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-white text-primary text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode hover:text-white transition-colors duration-300'>
              Book Your Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
