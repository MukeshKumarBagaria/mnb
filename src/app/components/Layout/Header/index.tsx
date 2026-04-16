'use client'
import { Key, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '@/app/types/menu'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [navbarOpen])

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? 'hidden' : ''
  }, [navbarOpen])

  const [headerData, setHeaderData] = useState<HeaderItem[]>([])
  useEffect(() => {
    fetch('/api/data')
      .then((r) => r.json())
      .then((d) => setHeaderData(d.headerData))
      .catch(console.error)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          sticky
            ? 'bg-white shadow-lg shadow-black/5 border-b border-black/8'
            : 'bg-white/90 backdrop-blur-md border-b border-black/5'
        }`}>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='flex items-center justify-between h-16 md:h-20'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Logo />
            </div>

            {/* Desktop Nav */}
            <nav className='hidden lg:flex items-center gap-6 xl:gap-8'>
              {headerData.map((item, index) => (
                <HeaderLink key={index} item={item} />
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className='hidden lg:flex items-center gap-3'>
              <Link
                href='/contact'
                className='bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#3a54e0] transition-all duration-300 shadow-lg shadow-primary/30'>
                Free Strategy Call
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors'
              aria-label='Toggle mobile menu'>
              <span
                className={`block w-6 h-[2px] bg-[#282739] rounded-full transition-all duration-300 ${navbarOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-6 h-[2px] bg-[#282739] rounded-full transition-all duration-300 ${navbarOpen ? 'opacity-0 scale-x-0' : ''}`}
              />
              <span
                className={`block w-6 h-[2px] bg-[#282739] rounded-full transition-all duration-300 ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay */}
      <div
        onClick={() => setNavbarOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          navbarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Drawer — solid background using inline style to guarantee visibility */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-[82%] max-w-[320px] z-50 flex flex-col transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#282739' }}>
        {/* Drawer header */}
        <div className='flex items-center justify-between px-5 py-5 border-b border-white/10'>
          <span className='text-xl font-extrabold text-white tracking-tight'>
            M&amp;B <span style={{ color: '#5170ff' }}>Strategy</span>
          </span>
          <button
            onClick={() => setNavbarOpen(false)}
            className='w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors'
            aria-label='Close menu'>
            <Icon icon='mdi:close' width='20' className='text-white' />
          </button>
        </div>

        {/* Nav links */}
        <nav className='flex-1 overflow-y-auto px-4 py-3'>
          {headerData.map((item: HeaderItem, index: Key | null | undefined) => (
            <MobileHeaderLink
              key={index}
              item={item}
              onClick={() => setNavbarOpen(false)}
            />
          ))}
        </nav>

        {/* CTA */}
        <div className='px-5 py-6 border-t border-white/10'>
          <Link
            href='/contact'
            onClick={() => setNavbarOpen(false)}
            className='flex items-center justify-center gap-2 w-full font-bold text-white py-3.5 rounded-full text-sm transition-all duration-300'
            style={{ backgroundColor: '#5170ff' }}>
            <Icon icon='mdi:calendar-check' width='18' />
            Free Strategy Call
          </Link>
          <p className='text-center text-white/40 text-xs mt-3'>No commitment required</p>
        </div>
      </div>
    </>
  )
}

export default Header
