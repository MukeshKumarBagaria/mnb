'use client'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    profession: 'Founder, BrightLeaf Studio',
    comment:
      'M&B Strategy completely transformed our email marketing. We went from a 12% open rate to 38% in just three months. Their strategy-first approach made all the difference.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'James Carter',
    profession: 'CEO, Scaleway Digital',
    comment:
      "Their SEO work has been phenomenal. We now rank on page one for 15+ keywords that drive real business. No fluff — just results.",
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    profession: 'Marketing Lead, Oasis Retail',
    comment:
      'The social media content they create is consistently on-brand and engaging. Our follower growth has been organic and meaningful since partnering with M&B.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
  {
    name: 'Tom Richardson',
    profession: 'Co-founder, FreshPack Co.',
    comment:
      "Working with M&B feels like having a dedicated in-house marketing team. They understand our brand deeply and deliver month after month.",
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    profession: 'Director, Horizon Health',
    comment:
      "Their transparent reporting is refreshing. We always know exactly where our marketing budget is going and what results it's driving.",
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'David Chen',
    profession: 'Founder, UrbanCraft',
    comment:
      "M&B helped us build a complete email funnel from scratch. Our welcome sequence alone generates 22% of monthly revenue now. Incredible ROI.",
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
  {
    name: 'Rachel Adams',
    profession: 'Brand Manager, Petal & Bloom',
    comment:
      'What sets M&B apart is they actually listen. They built a strategy around our unique audience, not a cookie-cutter template. Love the results.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Marcus Lee',
    profession: 'CEO, TechNova',
    comment:
      'Our organic traffic tripled in 6 months. The SEO strategy was methodical and the results have been compounding steadily. Highly recommend.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
]

const TestimonialCard = ({
  name,
  profession,
  comment,
  imgSrc,
  rating,
}: {
  name: string
  profession: string
  comment: string
  imgSrc: string
  rating: number
}) => (
  <div className='flex-shrink-0 w-[380px] sm:w-[420px] bg-white rounded-2xl p-7 shadow-md border border-gray-100 mx-3 hover:shadow-xl transition-shadow duration-300'>
    <div className='flex items-center gap-4 mb-5'>
      <Image
        src={imgSrc}
        alt={name}
        width={48}
        height={48}
        className='rounded-full'
      />
      <div>
        <p className='text-base font-semibold text-darkmode'>{name}</p>
        <p className='text-sm text-black/40'>{profession}</p>
      </div>
      <div className='ml-auto flex'>
        {Array.from({ length: 5 }, (_, i) => (
          <Icon
            key={i}
            icon={i < rating ? 'mdi:star' : 'mdi:star-outline'}
            width='16'
            className={i < rating ? 'text-amber-400' : 'text-gray-200'}
          />
        ))}
      </div>
    </div>
    <p className='text-[15px] leading-relaxed text-black/60'>
      &ldquo;{comment}&rdquo;
    </p>
  </div>
)

const Testimonial = () => {
  const row1 = testimonials.slice(0, 4)
  const row2 = testimonials.slice(4, 8)

  return (
    <section
      id='testimonial-section'
      className='overflow-hidden relative'>
      <div className='container mx-auto max-w-7xl px-4 mb-16'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase mb-4'>
            TESTIMONIALS
          </p>
          <h2 className='text-3xl lg:text-4xl mb-4'>
            Trusted by Growing Brands
          </h2>
          <p className='text-lg text-black/50 max-w-2xl mx-auto'>
            Hear from brands that scaled with confidence using our
            strategy-first approach.
          </p>
        </div>
      </div>

      {/* Gradient fades on edges */}
      <div className='pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent'></div>
      <div className='pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent'></div>

      {/* Row 1 — scrolls left */}
      <div className='mb-6'>
        <div className='flex animate-marquee-left'>
          {[...row1, ...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div>
        <div className='flex animate-marquee-right'>
          {[...row2, ...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} {...t} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Testimonial
