'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import AboutSkeleton from '../../Skeleton/AboutUs'

const highlights = [
  { value: '150+', label: 'Brands Scaled', suffix: '' },
  { value: '3', label: 'Average ROI', suffix: 'x' },
  { value: '97', label: 'Client Retention', suffix: '%' },
  { value: '5+', label: 'Years Experience', suffix: '' },
]

const Aboutus = () => {
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='About' className='overflow-hidden py-16 md:py-24'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6'>

        {/* ── Stats bar ── */}
        <div
          className='rounded-2xl md:rounded-3xl mb-14 md:mb-20 overflow-hidden'
          style={{ background: 'linear-gradient(135deg, #282739 0%, #1a1a2e 100%)' }}
          data-aos='fade-up' data-aos-duration='700'>
          <div className='grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10'>
            {highlights.map((h, i) => (
              <div key={i} className='py-8 md:py-10 px-6 md:px-10 text-center'>
                <p className='font-extrabold text-white mb-1 leading-none'
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {h.value}<span style={{ color: '#fcbd21' }}>{h.suffix}</span>
                </p>
                <p className='text-white/45 text-xs md:text-sm font-medium uppercase tracking-wider'>
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section Header ── */}
        <div className='text-center mb-12 md:mb-16' data-aos='fade-up' data-aos-duration='700'>
          <span className='section-label mx-auto'>WHY CHOOSE US</span>
          <h2 className='mt-3 mb-4'>Why Brands Choose M&amp;B Strategy</h2>
          <p className='text-darkmode/55 max-w-2xl mx-auto leading-relaxed'
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
            Every strategy we build is rooted in audience insights, brand positioning,
            and performance data — no guesswork, no generic tactics.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <AboutSkeleton key={i} />)
            : about.map((item, i) => {
                const accents = [
                  { bg: '#5170ff', light: '#5170ff12', hover: '#EFF6FF' },
                  { bg: '#fcbd21', light: '#fcbd2112', hover: '#FFFBEB' },
                  { bg: '#5170ff', light: '#5170ff12', hover: '#EFF6FF' },
                ]
                const acc = accents[i % 3]
                return (
                  <div
                    key={i}
                    data-aos='fade-up'
                    data-aos-delay={i * 120}
                    data-aos-duration='700'
                    className='group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-300 overflow-hidden cursor-pointer'
                    style={{ '--hover-bg': acc.hover } as any}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(81,112,255,0.14)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)' }}>

                    {/* Top accent strip */}
                    <div className='absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      style={{ backgroundColor: acc.bg }} />

                    {/* Icon bg */}
                    <div className='w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-5'
                      style={{ backgroundColor: acc.light }}>
                      <Image src={item.imgSrc} alt={item.heading} width={28} height={28} />
                    </div>

                    {/* Content */}
                    <h5 className='mb-3 group-hover:text-primary transition-colors duration-300'>{item.heading}</h5>
                    <p className='text-darkmode/55 text-sm leading-relaxed mb-5'>{item.paragraph}</p>

                    <Link href='/about'
                      className='inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300'>
                      {item.link}
                      <Icon icon='tabler:chevron-right' width='16' />
                    </Link>
                  </div>
                )
              })}
        </div>
      </div>
    </section>
  )
}

export default Aboutus
