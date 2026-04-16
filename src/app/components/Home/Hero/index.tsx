'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

const stats = [
  { value: '150+', label: 'Brands Scaled', icon: 'mdi:briefcase-check-outline' },
  { value: '3×', label: 'Average ROI', icon: 'mdi:trending-up' },
  { value: '97%', label: 'Client Retention', icon: 'mdi:heart-outline' },
]

const Hero = () => {
  return (
    <section className='relative overflow-hidden min-h-screen flex items-center'>
      {/* ── Background ── */}
      <div className='absolute inset-0 -z-10' style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f3ff 45%, #e8edff 100%)'
      }} />
      {/* Geometric blobs */}
      <div className='absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full -z-10 opacity-40'
        style={{ background: 'radial-gradient(circle, #5170ff22 0%, transparent 70%)' }} />
      <div className='absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full -z-10 opacity-30'
        style={{ background: 'radial-gradient(circle, #fcbd2130 0%, transparent 70%)' }} />
      {/* Dot grid pattern */}
      <div className='absolute inset-0 -z-10 opacity-[0.03]'
        style={{ backgroundImage: 'radial-gradient(circle, #282739 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className='container mx-auto max-w-7xl px-4 sm:px-6 w-full pt-24 pb-12 md:pt-28 md:pb-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center'>

          {/* ── LEFT: Content ── */}
          <div className='animate-fade-in-up text-center lg:text-left order-2 lg:order-1'>

            {/* Label pill */}
            <div className='inline-flex items-center gap-2 py-2 px-4 rounded-full mb-5 border border-primary/20'
              style={{ backgroundColor: '#5170ff15' }}>
              <span className='w-2 h-2 rounded-full bg-primary animate-pulse block' />
              <span className='text-primary text-xs font-bold tracking-[0.12em] uppercase'>
                Strategy-Led Growth Agency
              </span>
            </div>

            {/* Main heading */}
            <h1 className='font-extrabold text-darkmode mb-5 leading-[1.1]'
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.75rem)' }}>
              Marketing &amp;&nbsp;Branding{' '}
              <br className='hidden xs:block' />
              Strategies That{' '}
              <span className='relative whitespace-nowrap'>
                <span className='text-primary'>Drive Growth</span>
                {/* Underline with accent */}
                <svg className='absolute -bottom-1 left-0 w-full' height='6' viewBox='0 0 300 6' fill='none' preserveAspectRatio='none'>
                  <path d='M0 3 Q75 0 150 3 Q225 6 300 3' stroke='#fcbd21' strokeWidth='3' strokeLinecap='round' fill='none'
                    className='animate-expand-width' style={{ strokeDasharray: 400, strokeDashoffset: 0 }} />
                </svg>
              </span>
            </h1>

            {/* Sub-copy */}
            <p className='text-darkmode/55 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0'
              style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)' }}>
              We help brands scale through strategic Email Marketing, SEO
              optimisation, and high-performing Social Media — built to
              convert, not just look good.
            </p>

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10'>
              <Link href='/contact'>
                <button className='flex items-center justify-center gap-2 font-bold text-white rounded-full px-7 py-3.5 text-sm md:text-base w-full sm:w-auto transition-all duration-300 shadow-lg'
                  style={{ background: 'linear-gradient(135deg, #5170ff 0%, #7c8fff 100%)', boxShadow: '0 8px 24px rgba(81,112,255,0.35)' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
                  Get a Free Strategy Call
                  <Icon icon='tabler:arrow-right' width='18' />
                </button>
              </Link>
              <Link href='/services'>
                <button className='flex items-center justify-center gap-2 font-bold rounded-full px-7 py-3.5 text-sm md:text-base w-full sm:w-auto transition-all duration-300 border-2 border-gray-200 hover:border-primary hover:text-primary text-darkmode bg-white'>
                  View Our Services
                </button>
              </Link>
            </div>

            {/* Stats strip */}
            <div className='flex items-center justify-around sm:justify-start sm:flex-wrap sm:gap-8 lg:justify-start w-full'>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 sm:gap-2.5 animate-fade-in-up${i > 0 ? ' border-l border-darkmode/10 pl-4 sm:border-l-0 sm:pl-0' : ''}`}
                  style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
                  <div className='w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0'
                    style={{ backgroundColor: '#5170ff15' }}>
                    <Icon icon={stat.icon} width='16' className='text-primary' />
                  </div>
                  <div>
                    <p className='text-base sm:text-2xl font-extrabold text-darkmode leading-none'>{stat.value}</p>
                    <p className='text-[10px] sm:text-xs text-darkmode/40 font-medium mt-0.5'>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Visual ── */}
          <div className='relative flex items-center justify-center order-1 lg:order-2 animate-fade-in-right'>
            {/* Glow ring behind image */}
            <div className='absolute w-[90%] h-[90%] rounded-full opacity-60'
              style={{ background: 'radial-gradient(circle, #5170ff18 0%, #fcbd2110 50%, transparent 80%)' }} />

            {/* Main image */}
            <Image
              src='/images/hero/banner-image.png'
              alt='M&B Strategy'
              width={560}
              height={520}
              priority
              className='relative z-10 drop-shadow-2xl w-[78%] sm:w-[62%] lg:w-full max-w-[420px] lg:max-w-none'
            />

            {/* Floating card — Email */}
            <div className='absolute top-6 right-3 sm:top-10 sm:right-4 lg:-right-2 z-20 flex items-center gap-2.5 rounded-2xl shadow-xl px-3.5 py-2.5 animate-float-slow'
              style={{ backgroundColor: '#fff', border: '1px solid #f0f3ff' }}>
              <div className='w-8 h-8 rounded-xl flex items-center justify-center' style={{ backgroundColor: '#5170ff18' }}>
                <Icon icon='mdi:email-fast-outline' width='16' className='text-primary' />
              </div>
              <div>
                <p className='text-[10px] font-bold text-darkmode leading-none'>Email Marketing</p>
                <p className='text-[9px] text-darkmode/40 mt-0.5 leading-none'>+147% avg ROI</p>
              </div>
            </div>

            {/* Floating card — SEO */}
            <div className='absolute bottom-14 left-0 sm:-left-3 z-20 flex items-center gap-2.5 rounded-2xl shadow-xl px-3.5 py-2.5 animate-float-medium'
              style={{ backgroundColor: '#fff', border: '1px solid #f0f3ff' }}>
              <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-amber-50'>
                <Icon icon='mdi:magnify' width='16' className='text-amber-500' />
              </div>
              <div>
                <p className='text-[10px] font-bold text-darkmode leading-none'>SEO Optimisation</p>
                <p className='text-[9px] text-darkmode/40 mt-0.5 leading-none'>Page 1 rankings</p>
              </div>
            </div>

            {/* Floating card — Social */}
            <div className='absolute bottom-3 right-4 sm:right-6 lg:right-2 z-20 flex items-center gap-2.5 rounded-2xl shadow-xl px-3.5 py-2.5 animate-float-fast'
              style={{ backgroundColor: '#fff', border: '1px solid #f0f3ff' }}>
              <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-pink-50'>
                <Icon icon='mdi:bullhorn-outline' width='16' className='text-pink-500' />
              </div>
              <div>
                <p className='text-[10px] font-bold text-darkmode leading-none'>Social Media</p>
                <p className='text-[9px] text-darkmode/40 mt-0.5 leading-none'>Brand awareness</p>
              </div>
            </div>

            {/* Accent badge — trusted */}
            <div className='absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 z-20 rounded-2xl shadow-xl px-3.5 py-3 animate-float-slow hidden sm:block'
              style={{ backgroundColor: '#282739' }}>
              <p className='text-white font-extrabold text-sm leading-none'>150+</p>
              <p className='text-white/50 text-[9px] mt-0.5'>Brands Scaled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
