'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { footerlinks } from '@/app/types/footerlinks'
import { Icon } from '@iconify/react'

const Footer = () => {
  // fetch data
  const [footerlinks, setFooterLinks] = useState<footerlinks[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data.FooterLinksData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='bg-darkmode' id='first-section'>
      <div className='container mx-auto max-w-2xl pt-24 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
          {/* COLUMN-1 */}
          <div className='col-span-4'>
            <h4 className='text-white text-3xl leading-9 mb-4'>
              M&B <span className='text-primary'>Strategy</span>
            </h4>
            <p className='text-white/60 text-base mt-4 mb-8'>
              Strategy-led marketing for modern brands.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-primary text-white text-base font-semibold px-8 py-3 rounded-full hover:bg-deep-slate transition-colors duration-300 mb-8'>
              Free Strategy Call
            </Link>
            <div className='flex items-center gap-4 mt-4'>
              <div className='footer-icons'>
                <Link href='https://facebook.com' target='_blank'>
                  <Icon
                    icon='mdi:facebook'
                    className='text-white hover:text-primary transition-colors'
                    width='24'
                    height='24'
                  />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link href='https://twitter.com' target='_blank'>
                  <Icon
                    icon='mdi:twitter'
                    className='text-white hover:text-primary transition-colors'
                    width='24'
                    height='24'
                  />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link href='https://instagram.com' target='_blank'>
                  <Icon
                    icon='mdi:instagram'
                    className='text-white hover:text-primary transition-colors'
                    width='24'
                    height='24'
                  />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link href='https://linkedin.com' target='_blank'>
                  <Icon
                    icon='mdi:linkedin'
                    className='text-white hover:text-primary transition-colors'
                    width='24'
                    height='24'
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* COLUMNS-2/3/4 */}
          {footerlinks.map((item, i) => (
            <div key={i} className='group relative col-span-2'>
              <p className='text-white text-xl font-extrabold mb-9'>
                {item.section}
              </p>
              <ul>
                {item.links.map((link, j) => (
                  <li key={j} className='mb-5'>
                    <Link
                      href={`${link.href}`}
                      className='text-white/70 text-lg font-normal mb-6 space-links hover:text-white hover:underline transition-colors'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className='mx-auto max-w-2xl lg:max-w-7xl'>
        <div className='pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-t border-white/30'>
          <div className='mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8'>
            <div>
              <p className='text-center md:text-start text-white/60 text-lg'>
                © 2025 M&B Strategy. All Rights Reserved.
              </p>
            </div>
            <div className='flex justify-center md:justify-end'>
              <Link href='/'>
                <p className='text-base text-white/60 pr-6 hover:text-white hover:underline'>
                  Privacy policy
                </p>
              </Link>
              <Link href='/'>
                <p className='text-base text-white/60 pl-6 border-solid border-l border-white/30 hover:text-white hover:underline'>
                  Terms & conditions
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
