'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { motion } from 'framer-motion'

const stats = [
  { value: '150+', label: 'Brands Scaled' },
  { value: '3x', label: 'Avg. ROI' },
  { value: '97%', label: 'Client Retention' },
]

const Hero = () => {
  return (
    <section className='relative overflow-hidden min-h-[90vh] flex items-center'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-white via-[#F0FDFA] to-[#E0F5F0] -z-10'></div>
      {/* Decorative blobs */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10'></div>
      <div className='absolute bottom-10 right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10'></div>

      <div className='container mx-auto max-w-7xl px-4 pt-28 pb-16 lg:pt-20 lg:pb-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          {/* LEFT — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}>
            <div className='inline-flex items-center gap-2 py-2 px-5 bg-primary/10 rounded-full mb-6'>
              <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
              <p className='text-primary text-sm font-bold tracking-wider'>
                STRATEGY-LED GROWTH AGENCY
              </p>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6'>
              Marketing &<br />
              Branding Strategies<br />
              That Drive{' '}
              <span className='relative'>
                <span className='text-primary'>Real Growth</span>
                <svg
                  className='absolute -bottom-2 left-0 w-full'
                  viewBox='0 0 200 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <motion.path
                    d='M2 8C50 2 150 2 198 8'
                    stroke='#0D9488'
                    strokeWidth='3'
                    strokeLinecap='round'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                  />
                </svg>
              </span>
            </h1>

            <p className='text-lg sm:text-xl text-black/55 mb-10 max-w-xl leading-relaxed'>
              We help brands scale through strategic Email Marketing, SEO
              optimisation, and high-performing Social Media management —
              built to convert, not just look good.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 mb-14'>
              <Link href='/contact'>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className='flex items-center justify-center gap-2 bg-primary text-white text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode hover:cursor-pointer transition-colors duration-300 shadow-lg shadow-primary/25 w-full sm:w-auto'>
                  Get a Free Strategy Call
                  <Icon icon='tabler:arrow-right' width='20' height='20' />
                </motion.button>
              </Link>
              <Link href='/services'>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className='flex items-center justify-center gap-2 bg-white text-darkmode text-lg font-semibold py-4 px-10 rounded-full border-2 border-gray-200 hover:border-primary hover:text-primary hover:cursor-pointer transition-all duration-300 w-full sm:w-auto'>
                  View Our Services
                </motion.button>
              </Link>
            </div>

            {/* Stats strip */}
            <div className='flex flex-wrap gap-8 sm:gap-12'>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.15 }}>
                  <p className='text-3xl sm:text-4xl font-extrabold text-darkmode'>
                    {stat.value}
                  </p>
                  <p className='text-sm text-black/40 font-medium mt-1'>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className='relative flex items-center justify-center lg:justify-end'>
            {/* Glow effect behind image */}
            <div className='absolute w-[85%] h-[85%] bg-gradient-to-br from-primary/15 to-[#99F6E4]/20 rounded-full blur-2xl'></div>

            <Image
              src='/images/hero/banner-image.png'
              alt='M&B Strategy — Marketing & Branding'
              width={620}
              height={580}
              priority
              className='relative z-10 drop-shadow-2xl'
            />

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute top-8 right-4 lg:right-0 bg-white rounded-2xl shadow-xl px-5 py-3 z-20 flex items-center gap-3'>
              <div className='w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center'>
                <Icon
                  icon='mdi:email-outline'
                  width='22'
                  height='22'
                  className='text-primary'
                />
              </div>
              <div>
                <p className='text-xs font-bold text-darkmode'>
                  Email Marketing
                </p>
                <p className='text-[10px] text-black/40'>+147% avg ROI</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className='absolute bottom-16 left-0 lg:-left-4 bg-white rounded-2xl shadow-xl px-5 py-3 z-20 flex items-center gap-3'>
              <div className='w-10 h-10 bg-[#FEF3C7] rounded-xl flex items-center justify-center'>
                <Icon
                  icon='mdi:magnify'
                  width='22'
                  height='22'
                  className='text-amber-500'
                />
              </div>
              <div>
                <p className='text-xs font-bold text-darkmode'>
                  SEO Optimisation
                </p>
                <p className='text-[10px] text-black/40'>Page 1 rankings</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className='absolute bottom-4 right-8 lg:right-4 bg-white rounded-2xl shadow-xl px-5 py-3 z-20 flex items-center gap-3'>
              <div className='w-10 h-10 bg-[#FCE7F3] rounded-xl flex items-center justify-center'>
                <Icon
                  icon='mdi:bullhorn-outline'
                  width='22'
                  height='22'
                  className='text-pink-500'
                />
              </div>
              <div>
                <p className='text-xs font-bold text-darkmode'>Social Media</p>
                <p className='text-[10px] text-black/40'>Brand awareness</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
