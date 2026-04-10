import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <p className='text-center text-primary text-lg tracking-widest uppercase mb-4'>
          OUR PHILOSOPHY
        </p>
        <h2 className='text-center max-w-5xl mx-auto'>
          Strategy First. Execution Second.{' '}
          <span className='text-primary'>Results Always.</span>
        </h2>
        <h5 className='font-medium text-center pt-10 text-black/50 max-w-3xl mx-auto'>
          We don't believe in one-size-fits-all marketing. Every brand
          deserves a strategy that reflects its vision, audience, and stage of
          growth. Our approach blends creativity with performance, ensuring
          every campaign has a clear objective and measurable impact.
        </h5>
        <div className='grid grid-cols-1 mt-16'>
          <Image
            src='/images/team/team.webp'
            alt='M&B Strategy team at work'
            height={684}
            width={1296}
            className='relative z-1 rounded-3xl'
          />
        </div>
      </div>
    </section>
  )
}

export default Team
