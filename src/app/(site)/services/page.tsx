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
    number: '01',
    title: 'Email Marketing That Converts',
    description:
      'Build relationships, nurture leads, and drive repeat revenue with strategic email campaigns. From welcome sequences to re-engagement flows, we design email systems that deliver consistent ROI.',
    icon: 'mdi:email-fast-outline',
    href: '/services/email-marketing',
    cta: 'Explore Email Marketing',
    gradient: 'linear-gradient(135deg, #5170ff 0%, #7c8fff 100%)',
    features: ['Strategy & planning', 'Audience segmentation', 'Welcome & onboarding sequences', 'Lead nurturing flows', 'Promotional campaigns', 'A/B testing & optimisation'],
    metric: '+147% avg ROI',
  },
  {
    number: '02',
    title: 'SEO Built for Long-Term Growth',
    description:
      'Rank higher, attract qualified traffic, and convert organic visitors into customers. Our SEO approach focuses on sustainable optimisation that compounds over time.',
    icon: 'mdi:search-web',
    href: '/services/seo',
    cta: 'Explore SEO Services',
    gradient: 'linear-gradient(135deg, #fcbd21 0%, #f0a800 100%)',
    features: ['SEO audits & technical analysis', 'Keyword research & intent mapping', 'On-page optimisation', 'Content optimisation', 'Internal linking strategy', 'Performance tracking'],
    metric: 'Page 1 rankings',
  },
  {
    number: '03',
    title: 'Social Media That Builds Brands',
    description:
      'Scroll-stopping creatives and consistent management designed to grow awareness, engagement, and trust. We ensure every interaction with your brand is intentional and aligned.',
    icon: 'mdi:account-group-outline',
    href: '/services/social-media',
    cta: 'Explore Social Media',
    gradient: 'linear-gradient(135deg, #282739 0%, #3d3c56 100%)',
    features: ['Strategy & content planning', 'Brand-aligned creatives', 'Captions & storytelling', 'Content calendars', 'Community management', 'Analytics & reporting'],
    metric: '3× avg engagement',
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className='relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16'
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f3ff 50%, #e8edff 100%)' }}>
        {/* Bg blobs */}
        <div className='absolute top-0 right-0 w-80 h-80 rounded-full -z-[0] opacity-30'
          style={{ background: 'radial-gradient(circle, #5170ff 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className='absolute inset-0 opacity-[0.03]'
          style={{ backgroundImage: 'radial-gradient(circle, #282739 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className='container mx-auto max-w-7xl px-4 sm:px-6 relative z-10'>
          <div className='max-w-3xl mx-auto text-center' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label mx-auto'>OUR SERVICES</span>
            <h1 className='mt-3 mb-5'>
              Growth Services Built to{' '}
              <span className='text-primary'>Scale Your Brand</span>
            </h1>
            <p className='text-darkmode/55 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg'>
              Three essential growth pillars — each delivered with a strategy-first
              approach that ensures every action is intentional and measurable.
            </p>
            {/* Quick stats */}
            <div className='flex flex-wrap items-center justify-center gap-6 mt-8'>
              {[
                { icon: 'mdi:briefcase-check-outline', value: '150+', label: 'Brands Scaled' },
                { icon: 'mdi:trending-up', value: '3×', label: 'Average ROI' },
                { icon: 'mdi:heart-outline', value: '97%', label: 'Retention Rate' },
              ].map((s, i) => (
                <div key={i} className='flex items-center gap-2' data-aos='fade-up' data-aos-delay={i * 100} data-aos-duration='600'>
                  <div className='w-8 h-8 rounded-xl flex items-center justify-center' style={{ backgroundColor: '#5170ff15' }}>
                    <Icon icon={s.icon} width='16' className='text-primary' />
                  </div>
                  <div className='text-left'>
                    <p className='font-extrabold text-darkmode text-base leading-none'>{s.value}</p>
                    <p className='text-darkmode/40 text-[11px]'>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Strategy-First Banner ── */}
      <section className='py-8 md:py-12'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div
            className='relative rounded-2xl md:rounded-3xl p-6 md:p-10 overflow-hidden text-center border border-primary/10'
            style={{ background: 'linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%)' }}
            data-aos='fade-up' data-aos-duration='700'>
            <div className='relative z-10'>
              <div className='w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4' style={{ backgroundColor: '#5170ff15' }}>
                <Icon icon='mdi:lightbulb-on-outline' width='24' className='text-primary' />
              </div>
              <h5 className='text-primary mb-2 text-base md:text-lg'>Strategy First. Execution Second. Results Always.</h5>
              <p className='text-darkmode/55 text-sm md:text-base max-w-3xl mx-auto leading-relaxed'>
                We don&apos;t jump straight into execution — we first understand your brand, audience behaviour,
                competitors, and growth objectives. Every action is intentional, aligned, and measurable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services — alternating layout ── */}
      <section className='py-10 md:py-16'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='space-y-16 md:space-y-24'>
            {services.map((s, i) => (
              <div
                key={i}
                data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-duration='800'
                className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>

                {/* ── Text side ── */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  {/* Service badge */}
                  <div className='flex items-center gap-3 mb-5'>
                    <div className='w-10 h-10 rounded-2xl flex items-center justify-center' style={{ background: s.gradient }}>
                      <Icon icon={s.icon} width='20' className='text-white' />
                    </div>
                    <span className='text-xs font-extrabold tracking-[0.12em] uppercase text-primary'>
                      Service {s.number}
                    </span>
                  </div>

                  <h2 className='mb-4' style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>{s.title}</h2>
                  <p className='text-darkmode/55 text-sm md:text-base mb-7 leading-relaxed'>{s.description}</p>

                  {/* Metric callout */}
                  <div className='inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7 text-sm font-bold'
                    style={{ backgroundColor: '#5170ff12', color: '#5170ff' }}>
                    <Icon icon='mdi:trending-up' width='16' />
                    {s.metric}
                  </div>

                  <div className='block'>
                    <Link href={s.href}
                      className='inline-flex items-center gap-2 font-bold text-white rounded-full px-7 py-3.5 text-sm transition-all duration-300'
                      style={{ background: s.gradient, boxShadow: '0 8px 24px rgba(81,112,255,0.3)' }}>
                      {s.cta}
                      <Icon icon='tabler:arrow-right' width='16' />
                    </Link>
                  </div>
                </div>

                {/* ── Features card ── */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className='rounded-2xl md:rounded-3xl overflow-hidden shadow-lg'
                    style={{ border: '1px solid #eef0ff' }}>
                    {/* Card header band */}
                    <div className='h-2' style={{ background: s.gradient }} />
                    <div className='p-6 md:p-8' style={{ backgroundColor: '#fafbff' }}>
                      <h5 className='mb-5 text-sm md:text-base'>What&apos;s Included</h5>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        {s.features.map((f, j) => (
                          <div key={j} className='flex items-start gap-2.5'>
                            <div className='w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'
                              style={{ backgroundColor: '#5170ff15' }}>
                              <Icon icon='mdi:check' width='11' className='text-primary' />
                            </div>
                            <span className='text-sm text-darkmode/65 leading-snug'>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div
            className='relative rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden'
            data-aos='zoom-in' data-aos-duration='700'
            style={{ background: 'linear-gradient(135deg, #5170ff 0%, #3a54e0 100%)' }}>
            <div className='absolute inset-0 opacity-[0.05]'
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className='relative z-10'>
              <h2 className='text-white mb-4'>Not Sure Which Service You Need?</h2>
              <p className='text-white/75 text-sm md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
                Book a free strategy call and we&apos;ll help you figure out the best growth plan for your brand.
              </p>
              <Link href='/contact'
                className='inline-flex items-center gap-2 font-bold rounded-full px-8 py-4 text-sm md:text-base transition-all duration-300'
                style={{ backgroundColor: '#fcbd21', color: '#282739' }}>
                <Icon icon='mdi:calendar-check' width='18' />
                Book Your Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
