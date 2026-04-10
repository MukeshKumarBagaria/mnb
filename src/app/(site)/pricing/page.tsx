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
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='container mx-auto pt-32 max-w-7xl px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit mx-auto'>
              <p className='text-primary text-lg font-bold'>PRICING</p>
            </div>
            <h1 className='mt-6 text-4xl sm:text-5xl lg:text-6xl'>
              Simple, Transparent Pricing Built Around{' '}
              <span className='text-primary'>Growth</span>
            </h1>
            <p className='text-xl text-black/60 mt-6 max-w-3xl mx-auto'>
              Our pricing reflects the level of strategy, execution, and
              accountability we bring to every engagement. All packages are
              flexible and can be tailored to your business stage, goals, and
              workload.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Sections */}
      {loading ? (
        <section>
          <div className='container mx-auto max-w-7xl px-4 text-center'>
            <p className='text-lg text-black/50'>Loading pricing...</p>
          </div>
        </section>
      ) : (
        plansData.map((category, catIndex) => (
          <section
            key={catIndex}
            className={catIndex % 2 === 1 ? 'bg-grey' : ''}>
            <div className='container mx-auto max-w-7xl px-4'>
              <h2 className='text-3xl lg:text-4xl text-center mb-12'>
                {category.heading} Pricing
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                {category.plans.map((plan: any, planIndex: number) => (
                  <div
                    key={planIndex}
                    className={`rounded-3xl p-10 text-center transition-shadow duration-300 ${
                      plan.popular
                        ? 'bg-primary text-white shadow-2xl scale-105'
                        : 'bg-white shadow-xl border border-border hover:shadow-2xl'
                    }`}>
                    {plan.popular && (
                      <div className='bg-white/20 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4'>
                        MOST POPULAR
                      </div>
                    )}
                    <h4
                      className={`text-2xl mb-3 ${
                        plan.popular ? 'text-white' : ''
                      }`}>
                      {plan.name}
                    </h4>
                    <p
                      className={`text-5xl font-extrabold mb-2 ${
                        plan.popular ? 'text-white' : ''
                      }`}>
                      £{plan.price}
                    </p>
                    <p
                      className={`text-sm font-medium mb-8 ${
                        plan.popular ? 'text-white/70' : 'text-black/50'
                      }`}>
                      per month
                    </p>
                    <ul className='space-y-3 text-left mb-8'>
                      {plan.features.map(
                        (feature: string, featIndex: number) => (
                          <li
                            key={featIndex}
                            className='flex items-start gap-3'>
                            <Icon
                              icon='mdi:check-circle'
                              width='20'
                              height='20'
                              className={`mt-0.5 flex-shrink-0 ${
                                plan.popular
                                  ? 'text-white/80'
                                  : 'text-primary'
                              }`}
                            />
                            <span
                              className={`text-sm ${
                                plan.popular
                                  ? 'text-white/90'
                                  : 'text-black/60'
                              }`}>
                              {feature}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <Link
                      href='/contact'
                      className={`inline-block w-full text-center py-3 px-8 rounded-full font-semibold transition-colors duration-300 ${
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

      {/* CTA */}
      <section>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='bg-primary rounded-3xl p-16 text-center'>
            <h3 className='text-white text-3xl lg:text-4xl mb-4'>
              Not Sure Which Plan Fits Your Brand?
            </h3>
            <p className='text-white/80 text-lg mb-8 max-w-2xl mx-auto'>
              Book a free strategy call and we&apos;ll recommend the right
              package based on your goals and growth stage.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-white text-primary text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode hover:text-white transition-colors duration-300'>
              Book Your Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
