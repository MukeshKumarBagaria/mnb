'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const faqData = [
  {
    question: 'What services does M&B Strategy offer?',
    answer:
      'We specialise in three core growth services: Email Marketing (strategy, automation, and campaigns), SEO Optimisation (audits, keyword research, on-page and content optimisation), and Social Media Creatives & Management. All services are delivered using our strategy-first approach.',
  },
  {
    question: 'How does the strategy-first approach work?',
    answer:
      "We don't jump straight into execution. Every engagement starts with our Discover phase — a deep dive into your brand, audience, competitors, and goals. From there, we build a tailored roadmap before launching any campaigns. This ensures every action is intentional, aligned, and measurable.",
  },
  {
    question: 'Who are your ideal clients?',
    answer:
      'We work best with start-ups and scale-ups, SMEs, growing e-commerce brands, service-based businesses, and personal brands or founders who value clarity, consistency, and compounding growth over short-term hacks.',
  },
  {
    question: 'How do you measure success?',
    answer:
      "We believe in transparent reporting with no vanity metrics. Depending on the service, we track email open rates, click-through rates, organic traffic growth, keyword rankings, engagement quality, lead generation, and customer lifetime value. You'll always know exactly what's working.",
  },
  {
    question: 'Can I start with just one service?',
    answer:
      'Absolutely. Many of our clients start with a single service and expand as they see results. Each service is designed to deliver standalone value, but they work even more powerfully when combined as part of an integrated growth strategy.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id='FAQ' className='relative overflow-hidden py-16 md:py-24'
      style={{ background: 'linear-gradient(135deg, #282739 0%, #1a1a2e 100%)' }}>

      {/* Bg decorations */}
      <div className='absolute top-0 left-0 w-64 h-64 rounded-full -z-[0] opacity-10'
        style={{ background: 'radial-gradient(circle, #5170ff 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
      <div className='absolute bottom-0 right-0 w-96 h-96 rounded-full -z-[0] opacity-10'
        style={{ background: 'radial-gradient(circle, #fcbd21 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />
      {/* Dot grid */}
      <div className='absolute inset-0 opacity-[0.04]'
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className='container mx-auto max-w-7xl px-4 sm:px-6 relative z-10'>

        {/* ── Two-column layout ── */}
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start'>

          {/* Left: Label + heading + CTA */}
          <div className='lg:col-span-2' data-aos='fade-right' data-aos-duration='800'>
            <span className='inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold tracking-[0.12em] uppercase py-2 px-4 rounded-full mb-5'>
              <Icon icon='mdi:help-circle-outline' width='14' />
              FAQ
            </span>
            <h2 className='text-white mb-5' style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
              Frequently Asked Questions
            </h2>
            <p className='text-white/45 text-sm md:text-base mb-8 leading-relaxed'>
              Everything you need to know about working with M&amp;B Strategy.
              Can&apos;t find your answer? Book a call.
            </p>
            <Link href='/contact'
              className='inline-flex items-center gap-2 font-bold text-darkmode rounded-full px-6 py-3 text-sm transition-all duration-300'
              style={{ backgroundColor: '#fcbd21' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#e6a800'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#fcbd21'}>
              <Icon icon='mdi:calendar-check' width='16' />
              Book a Free Call
            </Link>
          </div>

          {/* Right: Accordion */}
          <div className='lg:col-span-3 space-y-3' data-aos='fade-left' data-aos-duration='800'>
            {faqData.map((faq, i) => (
              <div
                key={i}
                className='rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300'
                style={{
                  backgroundColor: openIndex === i ? '#fff' : 'rgba(255,255,255,0.06)',
                  border: openIndex === i ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)'
                }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className='w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left focus:outline-none cursor-pointer'>
                  <span className={`font-semibold text-sm md:text-base leading-snug transition-colors duration-200 ${openIndex === i ? 'text-darkmode' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div
                    className='w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300'
                    style={{
                      backgroundColor: openIndex === i ? '#5170ff' : 'rgba(255,255,255,0.12)',
                      transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)'
                    }}>
                    <Icon icon='mdi:plus' width='14' className={openIndex === i ? 'text-white' : 'text-white'} />
                  </div>
                </button>

                {openIndex === i && (
                  <div className='px-4 md:px-5 pb-4 md:pb-5'>
                    <div className='border-t border-gray-100 pt-4'>
                      <p className='text-darkmode/60 text-sm leading-relaxed'>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
