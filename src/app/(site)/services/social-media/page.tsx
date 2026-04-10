import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Creatives & Management | M&B Strategy',
  description:
    'Social media that builds trust, not just likes. We manage your social presence with clarity, consistency, and creativity.',
}

const services = [
  'Strategy & content planning',
  'Brand-aligned creative design',
  'Captions & storytelling',
  'Content calendars',
  'Platform optimisation',
  'Community management',
  'Analytics & reporting',
]

const platforms = [
  { name: 'Instagram', icon: 'mdi:instagram' },
  { name: 'LinkedIn', icon: 'mdi:linkedin' },
  { name: 'Facebook', icon: 'mdi:facebook' },
  { name: 'X (Twitter)', icon: 'mdi:twitter' },
  { name: 'TikTok', icon: 'ic:baseline-tiktok' },
]

export default function SocialMediaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='container mx-auto pt-32 max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='py-2 px-5 bg-primary/15 rounded-full w-fit'>
                <p className='text-primary text-lg font-bold'>SOCIAL MEDIA</p>
              </div>
              <h1 className='mt-6 text-4xl sm:text-5xl lg:text-6xl'>
                Social Media That Builds{' '}
                <span className='text-primary'>Trust, Not Just Likes</span>
              </h1>
              <p className='text-xl text-black/60 mt-6'>
                We manage your social presence with clarity, consistency, and
                creativity — aligned with your brand strategy.
              </p>
              <div className='mt-10'>
                <Link
                  href='/contact'
                  className='inline-block bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode transition-colors duration-300'>
                  Get a Social Media Strategy Review
                </Link>
              </div>
            </div>
            <div className='hidden lg:flex items-center justify-center'>
              <div className='relative'>
                <div className='w-72 h-72 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Icon
                    icon='mdi:account-group-outline'
                    width='120'
                    height='120'
                    className='text-primary'
                  />
                </div>
                <div className='absolute -top-4 -right-4 bg-white shadow-xl rounded-2xl p-4'>
                  <Icon
                    icon='mdi:heart-multiple-outline'
                    width='32'
                    height='32'
                    className='text-primary'
                  />
                  <p className='text-xs font-bold text-darkmode mt-1'>
                    Build Trust
                  </p>
                </div>
                <div className='absolute -bottom-4 -left-4 bg-white shadow-xl rounded-2xl p-4'>
                  <Icon
                    icon='mdi:eye-outline'
                    width='32'
                    height='32'
                    className='text-primary'
                  />
                  <p className='text-xs font-bold text-darkmode mt-1'>
                    Brand Awareness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl lg:text-4xl mb-6'>What We Handle</h2>
            <p className='text-lg text-black/60 mb-6'>
              Social media is often the first interaction someone has with your
              brand. We ensure that interaction is intentional, professional,
              and aligned with your long-term positioning.
            </p>
            <p className='text-lg text-black/60'>
              From strategy and content creation to community management and
              analytics — we handle every aspect of your social media
              presence so you can focus on running your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Include */}
      <section className='bg-grey'>
        <div className='container mx-auto max-w-7xl px-4'>
          <h3 className='text-3xl lg:text-4xl text-center mb-12'>
            Social Media Services Include
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {services.map((service, i) => (
              <div
                key={i}
                className='flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300'>
                <Icon
                  icon='mdi:check-circle'
                  width='28'
                  height='28'
                  className='text-primary mt-0.5 flex-shrink-0'
                />
                <span className='text-lg text-black/70'>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <h3 className='text-3xl lg:text-4xl text-center mb-12'>
            Platforms We Work With
          </h3>
          <div className='flex flex-wrap justify-center gap-8 max-w-3xl mx-auto'>
            {platforms.map((platform, i) => (
              <div
                key={i}
                className='flex flex-col items-center gap-3 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 min-w-[120px]'>
                <Icon
                  icon={platform.icon}
                  width='48'
                  height='48'
                  className='text-primary'
                />
                <span className='text-sm font-semibold text-darkmode'>
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
          <p className='text-center text-sm text-black/40 mt-6'>
            TikTok — strategy-led only
          </p>
        </div>
      </section>

      {/* Results */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='bg-primary/5 rounded-3xl p-12 max-w-4xl mx-auto'>
            <h3 className='text-3xl lg:text-4xl mb-6'>
              Results You Can Expect
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <Icon
                  icon='mdi:trending-up'
                  width='24'
                  height='24'
                  className='text-primary mt-0.5'
                />
                <span className='text-lg text-black/70'>
                  Stronger brand recall and recognition
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <Icon
                  icon='mdi:trending-up'
                  width='24'
                  height='24'
                  className='text-primary mt-0.5'
                />
                <span className='text-lg text-black/70'>
                  Improved engagement quality (not just vanity metrics)
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <Icon
                  icon='mdi:trending-up'
                  width='24'
                  height='24'
                  className='text-primary mt-0.5'
                />
                <span className='text-lg text-black/70'>
                  A consistent online presence that supports credibility and growth
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='bg-primary rounded-3xl p-16 text-center'>
            <h3 className='text-white text-3xl lg:text-4xl mb-4'>
              Ready to Elevate Your Social Presence?
            </h3>
            <p className='text-white/80 text-lg mb-8 max-w-2xl mx-auto'>
              Let&apos;s create a social media strategy that builds genuine
              brand trust and drives meaningful engagement.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-white text-primary text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode hover:text-white transition-colors duration-300'>
              Book a Free Social Media Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
