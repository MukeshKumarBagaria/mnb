'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { footerlinks } from '@/app/types/footerlinks'
import { Icon } from '@iconify/react'

const Footer = () => {
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

  const socials = [
    { icon: 'mdi:facebook', href: 'https://facebook.com', label: 'Facebook' },
    { icon: 'mdi:twitter', href: 'https://twitter.com', label: 'Twitter' },
    { icon: 'mdi:instagram', href: 'https://instagram.com', label: 'Instagram' },
    { icon: 'mdi:linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  return (
    <footer className='bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 pt-16 md:pt-20 pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8'>

          {/* Brand column */}
          <div className='md:col-span-2 lg:col-span-4'>
            <h4 className='text-white text-2xl md:text-3xl font-extrabold mb-3'>
              M&amp;B <span className='text-primary'>Strategy</span>
            </h4>
            <p className='text-white/55 text-sm md:text-base mb-6 max-w-xs'>
              Strategy-led marketing for modern brands. We build systems that
              grow your business, not just campaigns.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300 mb-6 shadow-lg shadow-primary/25'>
              Free Strategy Call
            </Link>
            <div className='flex items-center gap-3 mt-2'>
              {socials.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  target='_blank'
                  aria-label={s.label}
                  className='w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300'>
                  <Icon icon={s.icon} className='text-white' width='18' height='18' />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerlinks.map((item, i) => (
            <div key={i} className='lg:col-span-2'>
              <p className='text-white font-bold text-base mb-5 uppercase tracking-wider'>
                {item.section}
              </p>
              <ul className='space-y-3'>
                {item.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={`${link.href}`}
                      className='text-white/55 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-white/10'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 py-5'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-white/45 text-sm text-center sm:text-left'>
              © 2025 M&amp;B Strategy. All Rights Reserved.
            </p>
            <div className='flex items-center gap-1 text-sm'>
              <Link href='/' className='text-white/45 hover:text-white transition-colors px-3 py-1'>
                Privacy Policy
              </Link>
              <span className='text-white/20'>|</span>
              <Link href='/' className='text-white/45 hover:text-white transition-colors px-3 py-1'>
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
