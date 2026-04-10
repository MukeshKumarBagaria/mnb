import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | M&B Strategy',
  description:
    'Explore our core growth services: Email Marketing, SEO Optimisation, and Social Media Creatives & Management. Strategy-led, results-driven.',
}

const services = [
  {
    title: 'Email Marketing That Converts',
    description:
      'Build relationships, nurture leads, and drive repeat revenue with strategic email campaigns. From welcome sequences to re-engagement flows, we design email systems that deliver consistent ROI.',
    icon: 'mdi:email-multiple-outline',
    href: '/services/email-marketing',
    cta: 'Explore Email Marketing',
    features: [
      'Strategy & planning',
      'Audience segmentation',
      'Welcome & onboarding sequences',
      'Lead nurturing flows',
      'Promotional campaigns',
      'A/B testing & optimisation',
    ],
  },
  {
    title: 'SEO Built for Long-Term Growth',
    description:
      'Rank higher, attract qualified traffic, and convert organic visitors into customers. Our SEO approach focuses on sustainable optimisation that compounds over time.',
    icon: 'mdi:search-web',
    href: '/services/seo',
    cta: 'Explore SEO Services',
    features: [
      'SEO audits & technical analysis',
      'Keyword research & intent mapping',
      'On-page optimisation',
      'Content optimisation',
      'Internal linking strategy',
      'Performance tracking',
    ],
  },
  {
    title: 'Social Media That Builds Brands',
    description:
      'Scroll-stopping creatives and consistent management designed to grow awareness, engagement, and trust. We ensure every interaction with your brand is intentional and aligned.',
    icon: 'mdi:account-group-outline',
    href: '/services/social-media',
    cta: 'Explore Social Media',
    features: [
      'Strategy & content planning',
      'Brand-aligned creatives',
      'Captions & storytelling',
      'Content calendars',
      'Community management',
      'Analytics & reporting',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='container mx-auto pt-32 max-w-7xl px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit mx-auto'>
              <p className='text-primary text-lg font-bold'>OUR SERVICES</p>
            </div>
            <h1 className='mt-6 text-5xl sm:text-6xl'>
              Growth Services Built to{' '}
              <span className='text-primary'>Scale Your Brand</span>
            </h1>
            <p className='text-xl text-black/60 mt-6 max-w-3xl mx-auto'>
              We focus on three essential growth pillars that every modern
              brand needs to scale sustainably. All services are delivered
              using a strategy-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy First Banner */}
      <section className='py-12'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='bg-primary/5 rounded-3xl p-10 text-center'>
            <h5 className='text-primary mb-3'>
              Strategy First. Execution Second. Results Always.
            </h5>
            <p className='text-black/60 max-w-3xl mx-auto'>
              We don&apos;t jump straight into execution — we first understand
              your brand, audience behaviour, competitors, and growth
              objectives. This ensures every action is intentional, aligned,
              and measurable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='pt-0'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='space-y-16'>
            {services.map((service, i) => (
              <div
                key={i}
                className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6'>
                    <Icon
                      icon={service.icon}
                      width='32'
                      height='32'
                      className='text-primary'
                    />
                  </div>
                  <h3 className='text-3xl lg:text-4xl mb-4'>
                    {service.title}
                  </h3>
                  <p className='text-lg text-black/60 mb-8'>
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className='inline-block bg-primary text-white text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode transition-colors duration-300'>
                    {service.cta}
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className='bg-grey rounded-3xl p-10'>
                    <h5 className='mb-6'>What&apos;s Included</h5>
                    <ul className='space-y-4'>
                      {service.features.map((feature, j) => (
                        <li key={j} className='flex items-start gap-3'>
                          <Icon
                            icon='mdi:check-circle'
                            width='24'
                            height='24'
                            className='text-primary mt-0.5 flex-shrink-0'
                          />
                          <span className='text-lg text-black/70'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
              Not Sure Which Service You Need?
            </h3>
            <p className='text-white/80 text-lg mb-8 max-w-2xl mx-auto'>
              Book a free strategy call and we&apos;ll help you figure out the
              best growth plan for your brand.
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
