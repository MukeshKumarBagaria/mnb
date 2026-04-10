import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='text-3xl font-semibold'>
      M&B <span className='text-primary'>Strategy</span>
    </Link>
  )
}

export default Logo
