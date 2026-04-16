import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='text-xl md:text-2xl font-extrabold text-darkmode tracking-tight'>
      M&amp;B <span className='text-primary'>Strategy</span>
    </Link>
  )
}

export default Logo
