'use client'
import React from 'react'
import Link from 'next/link'

const Join = () => {
  return (
    <section className='overflow-hidden bg-joinus'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            LET&apos;S GROW TOGETHER
          </p>
          <h2 className='my-6'>
            Ready to Build a Marketing Strategy That{' '}
            <span className='text-primary'>Actually Works?</span>
          </h2>
          <p className='text-black/50 text-lg font-normal max-w-3xl mx-auto'>
            Let&apos;s turn your marketing into a predictable growth engine.
            Book a free strategy call and discover how M&B Strategy can help
            your brand scale with confidence.
          </p>
        </div>

        <div className='mx-auto max-w-xl pt-10 text-center'>
          <Link
            href='/contact'
            className='inline-block text-xl text-white font-semibold rounded-full bg-primary py-5 px-16 hover:bg-darkmode duration-300 transition-colors'>
            Book Your Free Strategy Call
          </Link>
          <p className='text-sm text-black/40 mt-4'>
            No commitment required. Let&apos;s just talk strategy.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Join
