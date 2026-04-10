'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import AboutSkeleton from '../../Skeleton/AboutUs'

const Aboutus = () => {
  // fetch about data
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
    <section id='About' className=' bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='p-12 bg-grey rounded-3xl'>
          <p className='text-center text-primary text-lg tracking-widest uppercase mt-10'>
            WHY CHOOSE US
          </p>
          <h2 className='text-center pb-6'>Why Brands Choose M&B Strategy</h2>
          <p className='text-center text-lg text-black/60 max-w-3xl mx-auto pb-12'>
            At M&B Strategy, we believe marketing should be intentional,
            measurable, and scalable. Every strategy we build is rooted in
            audience insights, brand positioning, and performance data — no
            guesswork, no generic tactics.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => {
                  const pastelColors = [
                    'hover:bg-[#EFF6FF]', // light pastel blue
                    'hover:bg-[#FDF2FF]', // light pastel pink
                    'hover:bg-[#FFF7ED]', // light pastel peach
                  ]
                  return (
                    <div
                      key={i}
                      className={`${pastelColors[i % 3]} bg-white rounded-3xl p-8 shadow-xl group transition-colors duration-300`}>
                      <h5 className='group-hover:text-darkmode mb-5'>
                        {item.heading}
                      </h5>
                      <Image
                        src={item.imgSrc}
                        alt={item.heading}
                        width={100}
                        height={100}
                        className='mb-5'
                      />
                      <p className='text-lg font-normal text-black/70 group-hover:text-black mb-5'>
                        {item.paragraph}
                      </p>
                      <Link
                        href='/about'
                        className='text-18 font-semibold text-primary hover-underline flex items-center'>
                        {item.link}
                        <Icon
                          icon='tabler:chevron-right'
                          width='20'
                          height='20'
                        />
                      </Link>
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
