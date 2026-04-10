import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
import Featured from '@/app/components/Home/Featured'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Join from '@/app/components/Home/Joinus'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing & Branding Strategy Agency | M&B Strategy',
  description:
    'M&B Strategy helps brands grow through Email Marketing, SEO optimisation, and Social Media management. Strategy-led, results-driven growth.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Dedicated />
      <Featured />
      <Beliefs />
      <Work />
      <Team />
      <FAQ />
      <Testimonial />
      <Join />
    </main>
  )
}
