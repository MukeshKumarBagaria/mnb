import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Marketing Services | M&B Strategy',
  description: 'Email Marketing designed to drive engagement & revenue. From strategy to automation, we help you turn email into your highest ROI channel.',
}

const features = [
  { icon: 'mdi:strategy', title: 'Strategy & Planning', desc: 'Goals, funnels, content direction, and KPIs mapped before a single email is sent.' },
  { icon: 'mdi:account-filter-outline', title: 'Audience Segmentation', desc: 'Precision targeting so the right message reaches the right person at the right time.' },
  { icon: 'mdi:email-open-outline', title: 'Welcome Sequences', desc: 'Onboarding flows that build trust and convert from the first interaction.' },
  { icon: 'mdi:relation-many-to-many', title: 'Lead Nurturing Flows', desc: 'Automated sequences that move prospects through the funnel without manual effort.' },
  { icon: 'mdi:bullhorn-variant-outline', title: 'Campaign Management', desc: 'Promotional emails and re-engagement campaigns that drive immediate action.' },
  { icon: 'mdi:ab-testing', title: 'A/B Testing', desc: 'Continuous optimisation of subject lines, copy, and CTAs to maximise performance.' },
]

const results = [
  { value: '+147%', label: 'Average ROI vs other channels', icon: 'mdi:trending-up' },
  { value: '38%', label: 'Open rate achieved for clients', icon: 'mdi:email-open-multiple-outline' },
  { value: '22%', label: 'Revenue from email alone', icon: 'mdi:cash-multiple' },
]

export default function EmailMarketingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className='relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16'
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f3ff 50%, #e8edff 100%)' }}>
        <div className='absolute top-0 right-0 w-72 h-72 rounded-full opacity-25 -z-[0]'
          style={{ background: 'radial-gradient(circle, #5170ff 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className='absolute inset-0 opacity-[0.03]'
          style={{ backgroundImage: 'radial-gradient(circle, #282739 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className='container mx-auto max-w-7xl px-4 sm:px-6 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center'>

            {/* Left — Text */}
            <div data-aos='fade-right' data-aos-duration='700'>
              <span className='section-label'>EMAIL MARKETING</span>
              <h1 className='mt-3 mb-5'>
                Email Marketing Designed to Drive{' '}
                <span className='text-primary'>Engagement &amp; Revenue</span>
              </h1>
              <p className='text-darkmode/55 text-sm md:text-lg mb-8 leading-relaxed'>
                From strategy to automation, we help you turn email into your highest ROI
                channel — built around your audience, not generic templates.
              </p>
              <div className='flex flex-col sm:flex-row gap-3'>
                <Link href='/contact'
                  className='inline-flex items-center justify-center gap-2 font-bold text-white rounded-full px-7 py-3.5 text-sm md:text-base transition-all duration-300'
                  style={{ background: 'linear-gradient(135deg, #5170ff 0%, #7c8fff 100%)', boxShadow: '0 8px 24px rgba(81,112,255,0.35)' }}>
                  Get an Email Marketing Audit
                  <Icon icon='tabler:arrow-right' width='16' />
                </Link>
              </div>
            </div>

            {/* Right — Visual */}
            <div data-aos='fade-left' data-aos-duration='700'
              className='flex items-center justify-center'>
              <div className='relative'>
                {/* Main circle */}
                <div className='w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center'
                  style={{ background: 'linear-gradient(135deg, #5170ff18 0%, #5170ff30 100%)', border: '2px dashed #5170ff25' }}>
                  <div className='w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center animate-float-slow'
                    style={{ background: 'linear-gradient(135deg, #5170ff 0%, #7c8fff 100%)', boxShadow: '0 20px 60px rgba(81,112,255,0.4)' }}>
                    <Icon icon='mdi:email-fast-outline' width='64' className='text-white' />
                  </div>
                </div>
                {/* Floating stat 1 */}
                <div className='absolute -top-3 -right-3 sm:-top-4 sm:-right-4 rounded-2xl shadow-xl px-4 py-3 animate-float-medium'
                  style={{ backgroundColor: '#fff', border: '1px solid #eef0ff' }}>
                  <p className='font-extrabold text-darkmode text-base leading-none'>+147%</p>
                  <p className='text-darkmode/40 text-[10px] mt-0.5'>Average ROI</p>
                </div>
                {/* Floating stat 2 */}
                <div className='absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 rounded-2xl shadow-xl px-4 py-3 animate-float-fast'
                  style={{ backgroundColor: '#282739' }}>
                  <p className='font-extrabold text-white text-base leading-none'>38%</p>
                  <p className='text-white/40 text-[10px] mt-0.5'>Open rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results bar ── */}
      <section className='py-0'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='rounded-2xl md:rounded-3xl overflow-hidden -mt-6 md:-mt-8 relative z-10 shadow-xl'
            style={{ background: 'linear-gradient(135deg, #282739 0%, #1a1a2e 100%)' }}
            data-aos='fade-up' data-aos-duration='700'>
            <div className='grid grid-cols-3 divide-x divide-white/10'>
              {results.map((r, i) => (
                <div key={i} className='py-6 md:py-8 px-4 md:px-8 text-center'>
                  <div className='w-8 h-8 rounded-xl flex items-center justify-center mx-auto mb-2'
                    style={{ backgroundColor: '#5170ff25' }}>
                    <Icon icon={r.icon} width='16' className='text-primary' />
                  </div>
                  <p className='font-extrabold text-white text-xl md:text-2xl leading-none mb-1'
                    style={{ color: '#fcbd21' }}>
                    {r.value}
                  </p>
                  <p className='text-white/40 text-[10px] md:text-xs leading-tight'>{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Email ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='max-w-3xl mx-auto' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label'>WHY EMAIL</span>
            <h2 className='mt-3 mb-5'>Why Email Is Still the #1 Channel</h2>
            <p className='text-darkmode/60 text-sm md:text-base mb-4 leading-relaxed'>
              Email marketing is one of the few channels you truly own. No algorithms, no ad spend — just
              a direct line to your audience. At M&amp;B Strategy, we design email systems that nurture
              relationships, build trust, and drive consistent revenue.
            </p>
            <p className='text-darkmode/60 text-sm md:text-base leading-relaxed'>
              We focus on where your audience is in their journey, crafting messages that feel relevant,
              timely, and valuable — never intrusive. Every campaign tied to a clear objective.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className='py-12 md:py-20'
        style={{ background: 'linear-gradient(180deg, #f5f7ff 0%, #eef1ff 100%)' }}>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='text-center mb-10 md:mb-14' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label mx-auto'>SERVICES INCLUDE</span>
            <h2 className='mt-3'>Everything You Get</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
            {features.map((f, i) => (
              <div key={i}
                data-aos='fade-up' data-aos-delay={i * 80} data-aos-duration='600'
                className='bg-white rounded-xl md:rounded-2xl p-5 md:p-7 shadow-sm flex gap-4 items-start'
                style={{ border: '1px solid #eef0ff' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(81,112,255,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '' }}
                style2={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <div className='w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5'
                  style={{ background: 'linear-gradient(135deg, #5170ff 0%, #7c8fff 100%)' }}>
                  <Icon icon={f.icon} width='20' className='text-white' />
                </div>
                <div>
                  <h6 className='font-bold text-darkmode text-sm md:text-base mb-1'>{f.title}</h6>
                  <p className='text-darkmode/55 text-xs md:text-sm leading-relaxed'>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center'>
            <div data-aos='fade-right' data-aos-duration='700'>
              <span className='section-label'>WHO IT&apos;S FOR</span>
              <h2 className='mt-3 mb-5'>Is Email Marketing Right for You?</h2>
              <p className='text-darkmode/60 text-sm md:text-base leading-relaxed'>
                Ideal for brands with an existing email list that isn&apos;t delivering results, or businesses
                looking to turn email into a long-term revenue channel rather than an afterthought.
                Whether you&apos;re starting from zero or optimising an existing program, we build
                systems that scale.
              </p>
            </div>
            <div data-aos='fade-left' data-aos-duration='700'
              className='rounded-2xl md:rounded-3xl p-6 md:p-10'
              style={{ background: 'linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%)', border: '1px solid #d8deff' }}>
              <h5 className='mb-5 text-sm md:text-base'>Results You Can Expect</h5>
              <div className='space-y-4'>
                {['Dramatically higher open and click-through rates', 'Increased customer lifetime value and repeat revenue', 'Consistent revenue from your existing audience', 'Automated funnels that work 24/7 without manual effort'].map((r, i) => (
                  <div key={i} className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'
                      style={{ backgroundColor: '#5170ff15' }}>
                      <Icon icon='mdi:check' width='13' className='text-primary' />
                    </div>
                    <span className='text-darkmode/65 text-sm leading-relaxed'>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='relative rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden'
            data-aos='zoom-in' data-aos-duration='700'
            style={{ background: 'linear-gradient(135deg, #5170ff 0%, #3a54e0 100%)' }}>
            <div className='absolute inset-0 opacity-[0.05]'
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className='relative z-10'>
              <h2 className='text-white mb-4'>Ready to Turn Email Into Your Best Channel?</h2>
              <p className='text-white/75 text-sm md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
                Let&apos;s build an email strategy that nurtures, converts, and drives predictable revenue.
              </p>
              <Link href='/contact'
                className='inline-flex items-center gap-2 font-bold rounded-full px-8 py-4 text-sm md:text-base transition-all duration-300'
                style={{ backgroundColor: '#fcbd21', color: '#282739' }}>
                <Icon icon='mdi:calendar-check' width='18' />
                Book a Free Email Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
