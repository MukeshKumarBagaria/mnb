'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function PricingPage() {
  const [plansData, setPlansData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlansData(data.PlansData)
      } catch (error) {
        console.error('Error fetching pricing:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <main>
      {/* ── Hero ── */}
      <section className='relative overflow-hidden pt-24 md:pt-32 pb-10 md:pb-16'>
        <div className='absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/6 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='text-center max-w-3xl mx-auto' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label mx-auto'>PRICING</span>
            <h1 className='mt-3 mb-5'>
              Simple, Transparent Pricing Built Around{' '}
              <span className='text-primary'>Growth</span>
            </h1>
            <p className='text-base md:text-xl text-darkmode/55 max-w-3xl mx-auto leading-relaxed'>
              Our pricing reflects the level of strategy, execution, and
              accountability we bring to every engagement. All packages are
              flexible and can be tailored to your business stage, goals, and
              workload.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pricing Sections ── */}
      {loading ? (
        <section className='py-12'>
          <div className='container mx-auto max-w-7xl px-4 sm:px-6 text-center'>
            <div className='flex flex-col items-center gap-3'>
              <div className='w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin'></div>
              <p className='text-sm text-darkmode/45'>Loading pricing...</p>
            </div>
          </div>
        </section>
      ) : (
        plansData.map((category, catIndex) => (
          <section
            key={catIndex}
            className={`py-12 md:py-20 ${catIndex % 2 === 1 ? 'bg-gradient-to-br from-[#F5F7FF] to-[#EEF1FF]' : ''}`}>
            <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
              <h2 className='text-center mb-10 md:mb-14' data-aos='fade-up' data-aos-duration='700'>
                {category.heading} Pricing
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto'>
                {category.plans.map((plan: any, planIndex: number) => (
                  <div
                    key={planIndex}
                    data-aos='fade-up'
                    data-aos-delay={planIndex * 100}
                    data-aos-duration='700'
                    className={`rounded-2xl md:rounded-3xl p-7 md:p-10 text-center transition-all duration-300 relative ${
                      plan.popular
                        ? 'bg-primary text-white shadow-2xl shadow-primary/20 scale-105'
                        : 'bg-white shadow-lg border border-border hover:shadow-xl card-hover'
                    }`}>
                    {plan.popular && (
                      <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                        <span className='bg-accent text-darkmode text-xs font-bold py-1.5 px-4 rounded-full whitespace-nowrap'>
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    <h4
                      className={`text-xl md:text-2xl mb-3 ${
                        plan.popular ? 'text-white' : ''
                      }`}>
                      {plan.name}
                    </h4>
                    <div className='flex items-end justify-center gap-1 mb-1'>
                      <span className={`text-4xl md:text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-darkmode'}`}>
                        £{plan.price}
                      </span>
                    </div>
                    <p className={`text-xs font-medium mb-7 ${plan.popular ? 'text-white/65' : 'text-darkmode/45'}`}>
                      per month
                    </p>

                    <ul className='space-y-3 text-left mb-8'>
                      {plan.features.map((feature: string, featIndex: number) => (
                        <li key={featIndex} className='flex items-start gap-2.5'>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? 'bg-white/20' : 'bg-primary/10'}`}>
                            <Icon
                              icon='mdi:check'
                              width='12'
                              className={plan.popular ? 'text-white' : 'text-primary'}
                            />
                          </div>
                          <span className={`text-xs md:text-sm ${plan.popular ? 'text-white/85' : 'text-darkmode/60'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href='/contact'
                      className={`block w-full text-center py-3 px-6 rounded-full text-sm font-semibold transition-colors duration-300 ${
                        plan.popular
                          ? 'bg-white text-primary hover:bg-darkmode hover:text-white'
                          : 'bg-primary text-white hover:bg-darkmode'
                      }`}>
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))
      )}

      {/* ── CTA ── */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div
            className='bg-primary rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 text-center'
            data-aos='zoom-in'
            data-aos-duration='700'>
            <h2 className='text-white mb-4'>Not Sure Which Plan Fits Your Brand?</h2>
            <p className='text-white/80 text-sm md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
              Book a free strategy call and we&apos;ll recommend the right
              package based on your goals and growth stage.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-white text-primary text-sm md:text-lg font-semibold py-3.5 md:py-4 px-8 md:px-10 rounded-full hover:bg-darkmode hover:text-white transition-colors duration-300'>
              Book Your Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
