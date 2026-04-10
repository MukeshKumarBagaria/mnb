import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Marketing Services | M&B Strategy',
  description:
    'Email Marketing designed to drive engagement & revenue. From strategy to automation, we help you turn email into your highest ROI channel.',
}

const services = [
  'Strategy & planning: goals, funnels, content direction, and KPIs',
  'Audience segmentation & list hygiene',
  'Welcome and onboarding sequences',
  'Lead nurturing flows',
  'Promotional and campaign emails',
  'Abandoned cart & re-engagement emails',
  'Copywriting & visual layout',
  'A/B testing and optimisation',
]

export default function EmailMarketingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='container mx-auto pt-32 max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='py-2 px-5 bg-primary/15 rounded-full w-fit'>
                <p className='text-primary text-lg font-bold'>
                  EMAIL MARKETING
                </p>
              </div>
              <h1 className='mt-6 text-4xl sm:text-5xl lg:text-6xl'>
                Email Marketing Designed to Drive{' '}
                <span className='text-primary'>Engagement & Revenue</span>
              </h1>
              <p className='text-xl text-black/60 mt-6'>
                From strategy to automation, we help you turn email into your
                highest ROI channel — built around your audience, not generic
                templates.
              </p>
              <div className='mt-10'>
                <Link
                  href='/contact'
                  className='inline-block bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode transition-colors duration-300'>
                  Get an Email Marketing Audit
                </Link>
              </div>
            </div>
            <div className='hidden lg:flex items-center justify-center'>
              <div className='relative'>
                <div className='w-72 h-72 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Icon
                    icon='mdi:email-multiple-outline'
                    width='120'
                    height='120'
                    className='text-primary'
                  />
                </div>
                <div className='absolute -top-4 -right-4 bg-white shadow-xl rounded-2xl p-4'>
                  <Icon
                    icon='mdi:chart-line'
                    width='32'
                    height='32'
                    className='text-primary'
                  />
                  <p className='text-xs font-bold text-darkmode mt-1'>
                    +147% ROI
                  </p>
                </div>
                <div className='absolute -bottom-4 -left-4 bg-white shadow-xl rounded-2xl p-4'>
                  <Icon
                    icon='mdi:account-heart-outline'
                    width='32'
                    height='32'
                    className='text-primary'
                  />
                  <p className='text-xs font-bold text-darkmode mt-1'>
                    Nurture Leads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl lg:text-4xl mb-6'>
              Why Email Marketing Matters
            </h2>
            <p className='text-lg text-black/60 mb-6'>
              Email marketing is one of the few channels you truly own. At M&B
              Strategy, we design email systems that nurture relationships,
              build trust, and drive consistent revenue over time.
            </p>
            <p className='text-lg text-black/60'>
              We focus on where your audience is in their journey, crafting
              messages that feel relevant, timely, and valuable — never
              intrusive. Every campaign is tied to a clear objective, whether
              onboarding, conversion, retention, or re-engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Include */}
      <section className='bg-grey'>
        <div className='container mx-auto max-w-7xl px-4'>
          <h3 className='text-3xl lg:text-4xl text-center mb-12'>
            Email Marketing Services Include
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

      {/* Who It's For */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-3xl lg:text-4xl mb-6'>
                Who It&apos;s For
              </h3>
              <p className='text-lg text-black/60'>
                Ideal for brands with an existing email list that isn&apos;t
                delivering results, or businesses looking to turn email into a
                long-term revenue channel rather than an afterthought.
              </p>
            </div>
            <div className='bg-primary/5 rounded-3xl p-10'>
              <h4 className='text-2xl mb-4'>Results You Can Expect</h4>
              <ul className='space-y-4'>
                <li className='flex items-start gap-3'>
                  <Icon
                    icon='mdi:trending-up'
                    width='24'
                    height='24'
                    className='text-primary mt-0.5'
                  />
                  <span className='text-lg text-black/70'>
                    Higher engagement rates
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
                    Increased customer lifetime value
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
                    More consistent revenue from existing audience
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='bg-primary rounded-3xl p-16 text-center'>
            <h3 className='text-white text-3xl lg:text-4xl mb-4'>
              Ready to Turn Email Into Your Best Channel?
            </h3>
            <p className='text-white/80 text-lg mb-8 max-w-2xl mx-auto'>
              Let&apos;s build an email strategy that nurtures, converts, and
              drives predictable revenue.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-white text-primary text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode hover:text-white transition-colors duration-300'>
              Book a Free Email Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
