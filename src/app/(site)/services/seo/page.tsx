import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Optimisation Services | M&B Strategy',
  description:
    'SEO optimisation that puts your brand on page one. We help your ideal customers find you organically through search-led strategies.',
}

const services = [
  'SEO audits & technical analysis',
  'Keyword research & intent mapping',
  'On-page optimisation',
  'Content optimisation & SEO copywriting',
  'Internal linking strategy',
  'Site structure & UX alignment',
  'Performance tracking & reporting',
]

export default function SEOPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='container mx-auto pt-32 max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='py-2 px-5 bg-primary/15 rounded-full w-fit'>
                <p className='text-primary text-lg font-bold'>
                  SEO OPTIMISATION
                </p>
              </div>
              <h1 className='mt-6 text-4xl sm:text-5xl lg:text-6xl'>
                SEO Optimisation That Puts Your Brand on{' '}
                <span className='text-primary'>Page One</span>
              </h1>
              <p className='text-xl text-black/60 mt-6'>
                We help your ideal customers find you organically through
                search-led strategies that compound over time.
              </p>
              <div className='mt-10'>
                <Link
                  href='/contact'
                  className='inline-block bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode transition-colors duration-300'>
                  Get a Free SEO Audit
                </Link>
              </div>
            </div>
            <div className='hidden lg:flex items-center justify-center'>
              <div className='relative'>
                <div className='w-72 h-72 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Icon
                    icon='mdi:search-web'
                    width='120'
                    height='120'
                    className='text-primary'
                  />
                </div>
                <div className='absolute -top-4 -right-4 bg-white shadow-xl rounded-2xl p-4'>
                  <Icon
                    icon='mdi:trophy-outline'
                    width='32'
                    height='32'
                    className='text-primary'
                  />
                  <p className='text-xs font-bold text-darkmode mt-1'>
                    Page 1 Rankings
                  </p>
                </div>
                <div className='absolute -bottom-4 -left-4 bg-white shadow-xl rounded-2xl p-4'>
                  <Icon
                    icon='mdi:trending-up'
                    width='32'
                    height='32'
                    className='text-primary'
                  />
                  <p className='text-xs font-bold text-darkmode mt-1'>
                    Organic Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Philosophy */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl lg:text-4xl mb-6'>Our SEO Philosophy</h2>
            <p className='text-lg text-black/60 mb-6'>
              SEO isn&apos;t about chasing algorithms — it&apos;s about
              understanding search intent and aligning your website with what
              your audience is actively searching for.
            </p>
            <p className='text-lg text-black/60'>
              Our approach focuses on sustainable optimisation, ensuring
              rankings, traffic, and conversions grow together. No quick fixes
              or black-hat tactics — just solid, compounding growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Include */}
      <section className='bg-grey'>
        <div className='container mx-auto max-w-7xl px-4'>
          <h3 className='text-3xl lg:text-4xl text-center mb-12'>
            SEO Services Include
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
                  Improved visibility and higher search rankings
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
                  Higher-quality inbound traffic
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
                  Stronger engagement and longer session durations
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
                  Increased lead generation without relying solely on paid ads
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
              Ready to Own Page One?
            </h3>
            <p className='text-white/80 text-lg mb-8 max-w-2xl mx-auto'>
              Let&apos;s build an SEO strategy that drives organic growth and
              compounds over time.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-white text-primary text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode hover:text-white transition-colors duration-300'>
              Schedule Your SEO Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
