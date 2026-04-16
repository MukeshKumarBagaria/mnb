import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Creatives & Management | M&B Strategy',
  description: 'Social media that builds trust, not just likes. We manage your social presence with clarity, consistency, and creativity.',
}

const features = [
  { icon: 'mdi:map-legend', title: 'Strategy & Content Planning', desc: 'A tailored roadmap covering platform priorities, content pillars, and posting cadence.' },
  { icon: 'mdi:palette-outline', title: 'Brand-Aligned Creatives', desc: 'Scroll-stopping visuals designed to match your brand identity and capture attention.' },
  { icon: 'mdi:pencil-ruler-outline', title: 'Captions & Storytelling', desc: 'Compelling copy that converts followers into fans and fans into customers.' },
  { icon: 'mdi:calendar-month-outline', title: 'Content Calendars', desc: 'Organised, planned content schedules that keep you consistently visible.' },
  { icon: 'mdi:account-voice', title: 'Community Management', desc: 'Active engagement with your audience to build relationships and trust.' },
  { icon: 'mdi:chart-line-variant', title: 'Analytics & Reporting', desc: 'Clear performance reports with actionable insights to keep improving.' },
]

const platforms = [
  { name: 'Instagram', icon: 'mdi:instagram', color: '#E1306C' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', color: '#0077B5' },
  { name: 'Facebook', icon: 'mdi:facebook', color: '#1877F2' },
  { name: 'X / Twitter', icon: 'mdi:twitter', color: '#1DA1F2' },
  { name: 'TikTok*', icon: 'ic:baseline-tiktok', color: '#282739' },
]

const results = [
  { value: '3×', label: 'Average follower growth', icon: 'mdi:account-multiple-plus-outline' },
  { value: '8×', label: 'Avg. engagement vs industry', icon: 'mdi:heart-pulse' },
  { value: '100%', label: 'Brand consistency guarantee', icon: 'mdi:shield-check-outline' },
]

export default function SocialMediaPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className='relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16'
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f5f0ff 50%, #ede8ff 100%)' }}>
        <div className='absolute top-0 right-0 w-72 h-72 rounded-full opacity-25 -z-[0]'
          style={{ background: 'radial-gradient(circle, #9b59b6 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className='absolute inset-0 opacity-[0.03]'
          style={{ backgroundImage: 'radial-gradient(circle, #282739 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className='container mx-auto max-w-7xl px-4 sm:px-6 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center'>

            {/* Left */}
            <div data-aos='fade-right' data-aos-duration='700'>
              <span className='section-label' style={{ backgroundColor: '#282739', color: '#fff' }}>SOCIAL MEDIA</span>
              <h1 className='mt-3 mb-5'>
                Social Media That Builds{' '}
                <span style={{ color: '#5170ff' }}>Trust, Not Just Likes</span>
              </h1>
              <p className='text-darkmode/55 text-sm md:text-lg mb-8 leading-relaxed'>
                We manage your social presence with clarity, consistency, and creativity — fully
                aligned with your brand strategy and long-term positioning.
              </p>
              <Link href='/contact'
                className='inline-flex items-center gap-2 font-bold text-white rounded-full px-7 py-3.5 text-sm md:text-base transition-all duration-300 shadow-lg'
                style={{ background: 'linear-gradient(135deg, #282739 0%, #3d3c56 100%)', boxShadow: '0 8px 24px rgba(40,39,57,0.35)' }}>
                Get a Social Media Strategy Review
                <Icon icon='tabler:arrow-right' width='16' />
              </Link>
            </div>

            {/* Right — Visual */}
            <div data-aos='fade-left' data-aos-duration='700'
              className='flex items-center justify-center'>
              <div className='relative'>
                <div className='w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center'
                  style={{ background: 'linear-gradient(135deg, #28273918 0%, #28273930 100%)', border: '2px dashed #28273925' }}>
                  <div className='w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center animate-float-slow'
                    style={{ background: 'linear-gradient(135deg, #282739 0%, #3d3c56 100%)', boxShadow: '0 20px 60px rgba(40,39,57,0.4)' }}>
                    <Icon icon='mdi:account-group-outline' width='64' className='text-white' />
                  </div>
                </div>
                <div className='absolute -top-3 -right-3 sm:-top-4 sm:-right-4 rounded-2xl shadow-xl px-4 py-3 animate-float-medium'
                  style={{ backgroundColor: '#fff', border: '1px solid #eee' }}>
                  <p className='font-extrabold text-darkmode text-base leading-none'>3×</p>
                  <p className='text-darkmode/40 text-[10px] mt-0.5'>Follower growth</p>
                </div>
                <div className='absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 rounded-2xl shadow-xl px-4 py-3 animate-float-fast'
                  style={{ backgroundColor: '#5170ff' }}>
                  <p className='font-extrabold text-white text-base leading-none'>8×</p>
                  <p className='text-white/60 text-[10px] mt-0.5'>Engagement</p>
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

      {/* ── What We Handle ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='max-w-3xl mx-auto' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label' style={{ backgroundColor: '#28273910', color: '#282739' }}>WHAT WE HANDLE</span>
            <h2 className='mt-3 mb-5'>End-to-End Social Media Management</h2>
            <p className='text-darkmode/60 text-sm md:text-base mb-4 leading-relaxed'>
              Social media is often the first interaction someone has with your brand. We ensure that
              interaction is intentional, professional, and aligned with your long-term positioning.
            </p>
            <p className='text-darkmode/60 text-sm md:text-base leading-relaxed'>
              From strategy and content creation to community management and analytics — we handle every
              aspect of your social media presence so you can focus on running your business.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className='py-12 md:py-20' style={{ backgroundColor: '#f8f7ff' }}>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='text-center mb-10 md:mb-14' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label mx-auto' style={{ backgroundColor: '#28273910', color: '#282739' }}>SERVICES INCLUDE</span>
            <h2 className='mt-3'>Everything You Get</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
            {features.map((f, i) => (
              <div key={i}
                data-aos='fade-up' data-aos-delay={i * 80} data-aos-duration='600'
                className='bg-white rounded-xl md:rounded-2xl p-5 md:p-7 shadow-sm flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(40,39,57,0.1)]'
                style={{ border: '1px solid #eeecff' }}>
                <div className='w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5'
                  style={{ background: 'linear-gradient(135deg, #282739 0%, #3d3c56 100%)' }}>
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

      {/* ── Platforms ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='text-center mb-10 md:mb-14' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label mx-auto'>PLATFORMS</span>
            <h2 className='mt-3'>Platforms We Work With</h2>
          </div>
          <div className='flex flex-wrap justify-center gap-4 md:gap-5 max-w-2xl mx-auto'>
            {platforms.map((p, i) => (
              <div key={i}
                data-aos='fade-up' data-aos-delay={i * 80} data-aos-duration='600'
                className='flex flex-col items-center gap-2.5 bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-md transition-all duration-300 hover:-translate-y-1'
                style={{ border: '1px solid #eee', minWidth: 100 }}>
                <Icon icon={p.icon} width='36' style={{ color: p.color }} />
                <span className='text-xs md:text-sm font-bold text-darkmode'>{p.name}</span>
              </div>
            ))}
          </div>
          <p className='text-center text-xs text-darkmode/30 mt-5'>*TikTok — strategy-led only</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='relative rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden'
            data-aos='zoom-in' data-aos-duration='700'
            style={{ background: 'linear-gradient(135deg, #282739 0%, #1a1a2e 100%)' }}>
            <div className='absolute inset-0 opacity-[0.05]'
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className='relative z-10'>
              <h2 className='text-white mb-4'>Ready to Elevate Your Social Presence?</h2>
              <p className='text-white/70 text-sm md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
                Let&apos;s create a social media strategy that builds genuine brand trust and drives meaningful engagement.
              </p>
              <Link href='/contact'
                className='inline-flex items-center gap-2 font-bold rounded-full px-8 py-4 text-sm md:text-base transition-all duration-300'
                style={{ backgroundColor: '#fcbd21', color: '#282739' }}>
                <Icon icon='mdi:calendar-check' width='18' />
                Book a Free Social Media Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
