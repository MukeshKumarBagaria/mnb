'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'
import { Icon } from '@iconify/react/dist/iconify.js'

const MobileHeaderLink: React.FC<{ item: HeaderItem; onClick?: () => void }> = ({
  item,
  onClick,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const handleToggle = () => {
    if (item.submenu) {
      setSubmenuOpen(!submenuOpen)
    }
  }

  return (
    <div className='w-full border-b border-white/10 last:border-0'>
      <button
        onClick={item.submenu ? handleToggle : undefined}
        className='w-full flex items-center justify-between py-3.5 px-2 text-left focus:outline-none'>
        {item.submenu ? (
          <span className='text-white/90 font-medium text-base'>{item.label}</span>
        ) : (
          <Link
            href={item.href}
            onClick={onClick}
            className='text-white/90 font-medium text-base w-full block'>
            {item.label}
          </Link>
        )}
        {item.submenu && (
          <Icon
            icon='mdi:chevron-down'
            width='20'
            height='20'
            className={`text-white/60 transition-transform duration-200 ${submenuOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {submenuOpen && item.submenu && (
        <div className='bg-white/5 rounded-xl mx-2 mb-3 overflow-hidden'>
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={onClick}
              className='block px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm border-b border-white/5 last:border-0'>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileHeaderLink
