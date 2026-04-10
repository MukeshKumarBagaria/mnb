'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className="rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top lg:pb-60 pb-32 relative">
          <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='pt-24 lg:pl-24 px-8'>
              <p className='text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5'>
                OUR SERVICES
              </p>
              <h2 className='text-white mb-8 leading-tight text-center lg:text-start lg:w-full'>
                Our Core Growth Services
              </h2>
              <p className='text-lg text-white/80 mb-8 text-center lg:text-start max-w-xl'>
                We focus on three essential growth pillars that every modern
                brand needs to scale sustainably. Strategy first. Execution
                second. Results always.
              </p>
              <div className='text-center lg:text-start'>
                <Link
                  href='/services'
                  className='text-xl font-semibold text-white bg-deep-slate/80 hover:bg-deep-slate py-4 px-12 rounded-full transition-colors duration-300'>
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
          {/* COLUMN-2 */}
          <div className='absolute -bottom-16 -right-20 xl:block hidden'>
            <Image
              src='/images/digital/girldoodle.svg'
              alt='doodle'
              width={815}
              height={691}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
