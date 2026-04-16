'use client'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    profession: 'Founder, BrightLeaf Studio',
    comment: 'M&B Strategy completely transformed our email marketing. We went from a 12% open rate to 38% in just three months. Their strategy-first approach made all the difference.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
    metric: '38% open rate',
  },
  {
    name: 'James Carter',
    profession: 'CEO, Scaleway Digital',
    comment: 'Their SEO work has been phenomenal. We now rank on page one for 15+ keywords that drive real business. No fluff — just results.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
    metric: '15+ page-1 keywords',
  },
  {
    name: 'Priya Sharma',
    profession: 'Marketing Lead, Oasis Retail',
    comment: 'The social media content they create is consistently on-brand and engaging. Our follower growth has been organic and meaningful since partnering with M&B.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
    metric: '3x follower growth',
  },
  {
    name: 'Tom Richardson',
    profession: 'Co-founder, FreshPack Co.',
    comment: 'Working with M&B feels like having a dedicated in-house marketing team. They understand our brand deeply and deliver month after month.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
    metric: 'In-house quality',
  },
  {
    name: 'Emily Watson',
    profession: 'Director, Horizon Health',
    comment: 'Their transparent reporting is refreshing. We always know exactly where our marketing budget is going and what results it\'s driving.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
    metric: 'Full transparency',
  },
  {
    name: 'David Chen',
    profession: 'Founder, UrbanCraft',
    comment: 'M&B helped us build a complete email funnel from scratch. Our welcome sequence alone generates 22% of monthly revenue now. Incredible ROI.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
    metric: '22% revenue from email',
  },
  {
    name: 'Rachel Adams',
    profession: 'Brand Manager, Petal & Bloom',
    comment: 'What sets M&B apart is they actually listen. They built a strategy around our unique audience, not a cookie-cutter template.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
    metric: 'Bespoke strategy',
  },
  {
    name: 'Marcus Lee',
    profession: 'CEO, TechNova',
    comment: 'Our organic traffic tripled in 6 months. The SEO strategy was methodical and the results have been compounding steadily. Highly recommend.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
    metric: '3× organic traffic',
  },
]

const Card = ({ name, profession, comment, imgSrc, rating, metric }: typeof testimonials[0]) => (
  <div className='flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] rounded-2xl p-5 md:p-6 mx-2.5 flex flex-col'
    style={{ backgroundColor: '#fff', border: '1px solid #eef0ff', boxShadow: '0 4px 20px rgba(81,112,255,0.07)' }}>
    {/* Top: stars + metric badge */}
    <div className='flex items-center justify-between mb-4'>
      <div className='flex gap-0.5'>
        {Array.from({ length: 5 }, (_, i) => (
          <Icon key={i} icon={i < rating ? 'mdi:star' : 'mdi:star-outline'} width='14'
            className={i < rating ? 'text-amber-400' : 'text-gray-200'} />
        ))}
      </div>
      <span className='text-[10px] font-bold rounded-full px-2.5 py-1'
        style={{ backgroundColor: '#5170ff12', color: '#5170ff' }}>
        {metric}
      </span>
    </div>

    {/* Comment */}
    <p className='text-sm text-darkmode/60 leading-relaxed flex-1 mb-5'>
      &ldquo;{comment}&rdquo;
    </p>

    {/* Author */}
    <div className='flex items-center gap-3 pt-4 border-t border-gray-50'>
      <Image src={imgSrc} alt={name} width={36} height={36} className='rounded-full flex-shrink-0' />
      <div>
        <p className='text-sm font-bold text-darkmode leading-none'>{name}</p>
        <p className='text-[11px] text-darkmode/40 mt-0.5'>{profession}</p>
      </div>
    </div>
  </div>
)

const Testimonial = () => {
  const row1 = testimonials.slice(0, 4)
  const row2 = testimonials.slice(4, 8)

  return (
    <section id='testimonial-section' className='relative overflow-hidden py-16 md:py-24'
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f5f7ff 100%)' }}>

      {/* ── Header ── */}
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 mb-10 md:mb-14'
        data-aos='fade-up' data-aos-duration='700'>
        <div className='text-center'>
          <span className='section-label mx-auto'>TESTIMONIALS</span>
          <h2 className='mt-3 mb-4'>Trusted by Growing Brands</h2>
          <p className='text-darkmode/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed'>
            Real results, real clients — hear from the brands that scaled with M&amp;B Strategy.
          </p>
        </div>
      </div>

      {/* ── Marquee rows ── */}
      {/* Edge fades */}
      <div className='pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10'
        style={{ background: 'linear-gradient(to right, #f5f7ff, transparent)' }} />
      <div className='pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10'
        style={{ background: 'linear-gradient(to left, #f5f7ff, transparent)' }} />

      {/* Row 1 */}
      <div className='mb-4'>
        <div className='flex animate-marquee-left'>
          {[...row1, ...row1, ...row1].map((t, i) => (
            <Card key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div>
        <div className='flex animate-marquee-right'>
          {[...row2, ...row2, ...row2].map((t, i) => (
            <Card key={`r2-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
