'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react/dist/iconify.js'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()

  return (
    <div
      className='relative'
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}>
      <Link
        href={item.href}
        className={`flex items-center gap-0.5 text-sm font-medium transition-colors duration-200 py-1 ${
          path === item.href
            ? 'text-primary'
            : 'text-darkmode/70 hover:text-primary'
        }`}>
        {item.label}
        {item.submenu && (
          <Icon
            icon='mdi:chevron-down'
            width='16'
            height='16'
            className={`transition-transform duration-200 ${submenuOpen ? 'rotate-180' : ''}`}
          />
        )}
      </Link>

      {submenuOpen && item.submenu && (
        <div className='absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50'>
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-3 text-sm transition-colors duration-200 border-b border-gray-50 last:border-0 ${
                path === subItem.href
                  ? 'text-primary bg-primary/5 font-semibold'
                  : 'text-darkmode/70 hover:text-primary hover:bg-primary/5'
              }`}>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderLink
