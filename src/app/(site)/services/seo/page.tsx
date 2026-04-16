import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Optimisation Services | M&B Strategy',
  description: 'SEO optimisation that puts your brand on page one. We help your ideal customers find you organically through search-led strategies.',
}

const features = [
  { icon: 'mdi:magnify-scan', title: 'SEO Audits', desc: 'Deep technical analysis to identify what\'s holding your rankings back.' },
  { icon: 'mdi:text-search', title: 'Keyword Research', desc: 'Intent-led keyword mapping to attract visitors ready to convert.' },
  { icon: 'mdi:file-document-edit-outline', title: 'On-Page Optimisation', desc: 'Optimise every page element — titles, meta, headings, structure.' },
  { icon: 'mdi:pencil-outline', title: 'Content Optimisation', desc: 'SEO copywriting that ranks and converts simultaneously.' },
  { icon: 'mdi:link-variant', title: 'Internal Linking', desc: 'Strategic link architecture to distribute authority across your site.' },
  { icon: 'mdi:chart-bar', title: 'Performance Tracking', desc: 'Clear, actionable reports showing exactly what\'s improving and why.' },
]

const results = [
  { value: '15+', label: 'Page 1 keywords for clients', icon: 'mdi:trophy-outline' },
  { value: '3×', label: 'Organic traffic growth avg.', icon: 'mdi:trending-up' },
  { value: '6mo', label: 'Avg. time to measurable results', icon: 'mdi:clock-fast' },
]

export default function SEOPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className='relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16'
        style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef9e7 50%, #ffffff 100%)' }}>
        <div className='absolute top-0 left-0 w-72 h-72 rounded-full opacity-30 -z-[0]'
          style={{ background: 'radial-gradient(circle, #fcbd21 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
        <div className='absolute inset-0 opacity-[0.03]'
          style={{ backgroundImage: 'radial-gradient(circle, #282739 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className='container mx-auto max-w-7xl px-4 sm:px-6 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center'>

            {/* Left */}
            <div data-aos='fade-right' data-aos-duration='700'>
              <span className='section-label' style={{ backgroundColor: '#fcbd2115', color: '#9a6f00' }}>SEO OPTIMISATION</span>
              <h1 className='mt-3 mb-5'>
                SEO That Puts Your Brand on{' '}
                <span style={{ color: '#f0a800' }}>Page One</span>
              </h1>
              <p className='text-darkmode/55 text-sm md:text-lg mb-8 leading-relaxed'>
                We help your ideal customers find you organically through search-led strategies
                that compound over time — no shortcuts, no black-hat tactics.
              </p>
              <Link href='/contact'
                className='inline-flex items-center gap-2 font-bold text-darkmode rounded-full px-7 py-3.5 text-sm md:text-base transition-all duration-300 shadow-lg'
                style={{ background: 'linear-gradient(135deg, #fcbd21 0%, #f0a800 100%)', boxShadow: '0 8px 24px rgba(252,189,33,0.4)' }}>
                Get a Free SEO Audit
                <Icon icon='tabler:arrow-right' width='16' />
              </Link>
            </div>

            {/* Right — Visual */}
            <div data-aos='fade-left' data-aos-duration='700'
              className='flex items-center justify-center'>
              <div className='relative'>
                <div className='w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center'
                  style={{ background: 'linear-gradient(135deg, #fcbd2118 0%, #fcbd2130 100%)', border: '2px dashed #fcbd2130' }}>
                  <div className='w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center animate-float-slow'
                    style={{ background: 'linear-gradient(135deg, #fcbd21 0%, #f0a800 100%)', boxShadow: '0 20px 60px rgba(252,189,33,0.5)' }}>
                    <Icon icon='mdi:search-web' width='64' className='text-white' />
                  </div>
                </div>
                <div className='absolute -top-3 -right-3 sm:-top-4 sm:-right-4 rounded-2xl shadow-xl px-4 py-3 animate-float-medium'
                  style={{ backgroundColor: '#fff', border: '1px solid #fff3d0' }}>
                  <p className='font-extrabold text-darkmode text-base leading-none'>15+</p>
                  <p className='text-darkmode/40 text-[10px] mt-0.5'>Page 1 keywords</p>
                </div>
                <div className='absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 rounded-2xl shadow-xl px-4 py-3 animate-float-fast'
                  style={{ backgroundColor: '#282739' }}>
                  <p className='font-extrabold text-white text-base leading-none'>3×</p>
                  <p className='text-white/40 text-[10px] mt-0.5'>Traffic growth</p>
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
                    style={{ backgroundColor: '#fcbd2120' }}>
                    <Icon icon={r.icon} width='16' style={{ color: '#fcbd21' }} />
                  </div>
                  <p className='font-extrabold text-xl md:text-2xl leading-none mb-1' style={{ color: '#fcbd21' }}>
                    {r.value}
                  </p>
                  <p className='text-white/40 text-[10px] md:text-xs leading-tight'>{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='max-w-3xl mx-auto' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label' style={{ backgroundColor: '#fcbd2115', color: '#9a6f00' }}>OUR PHILOSOPHY</span>
            <h2 className='mt-3 mb-5'>SEO Built for the Long Game</h2>
            <p className='text-darkmode/60 text-sm md:text-base mb-4 leading-relaxed'>
              SEO isn&apos;t about chasing algorithms — it&apos;s about understanding search intent and aligning
              your website with what your audience is actively searching for.
            </p>
            <p className='text-darkmode/60 text-sm md:text-base leading-relaxed'>
              Our approach focuses on sustainable optimisation, ensuring rankings, traffic, and conversions
              grow together. No quick fixes — just compounding growth that strengthens month after month.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className='py-12 md:py-20' style={{ backgroundColor: '#fffbeb' }}>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='text-center mb-10 md:mb-14' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label mx-auto' style={{ backgroundColor: '#fcbd2115', color: '#9a6f00' }}>SERVICES INCLUDE</span>
            <h2 className='mt-3'>Everything You Get</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
            {features.map((f, i) => (
              <div key={i}
                data-aos='fade-up' data-aos-delay={i * 80} data-aos-duration='600'
                className='bg-white rounded-xl md:rounded-2xl p-5 md:p-7 shadow-sm flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(252,189,33,0.15)]'
                style={{ border: '1px solid #fff3d0' }}>
                <div className='w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5'
                  style={{ background: 'linear-gradient(135deg, #fcbd21 0%, #f0a800 100%)' }}>
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

      {/* ── Results card ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='rounded-2xl md:rounded-3xl p-7 md:p-12 max-w-4xl mx-auto'
            data-aos='zoom-in' data-aos-duration='700'
            style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)', border: '1px solid #fde68a' }}>
            <h2 className='mb-7' style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Results You Can Expect</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {['Improved visibility and higher search rankings',
                'Higher-quality inbound traffic that converts',
                'Stronger engagement and longer session durations',
                'Increased leads without relying solely on paid ads',
              ].map((r, i) => (
                <div key={i} className='flex items-start gap-3'>
                  <div className='w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'
                    style={{ backgroundColor: '#fcbd2125' }}>
                    <Icon icon='mdi:trending-up' width='14' style={{ color: '#f0a800' }} />
                  </div>
                  <span className='text-darkmode/70 text-sm leading-relaxed'>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='relative rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden'
            data-aos='zoom-in' data-aos-duration='700'
            style={{ background: 'linear-gradient(135deg, #282739 0%, #1a1a2e 100%)' }}>
            <div className='absolute inset-0 opacity-[0.05]'
              style={{ backgroundImage: 'radial-gradient(circle, #fcbd21 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className='relative z-10'>
              <h2 className='text-white mb-4'>Ready to Own Page One?</h2>
              <p className='text-white/70 text-sm md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
                Let&apos;s build an SEO strategy that drives organic growth and compounds over time.
              </p>
              <Link href='/contact'
                className='inline-flex items-center gap-2 font-bold rounded-full px-8 py-4 text-sm md:text-base transition-all duration-300'
                style={{ backgroundColor: '#fcbd21', color: '#282739' }}>
                <Icon icon='mdi:calendar-check' width='18' />
                Schedule Your SEO Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
