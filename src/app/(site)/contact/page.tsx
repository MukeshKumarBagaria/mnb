import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | M&B Strategy',
  description:
    "Ready to scale your brand with confidence? Tell us about your goals and we'll map out the next steps. Book your free strategy call.",
}

const socials = [
  { icon: 'mdi:instagram', href: 'https://instagram.com', label: 'Instagram' },
  { icon: 'mdi:linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'mdi:facebook', href: 'https://facebook.com', label: 'Facebook' },
  { icon: 'mdi:twitter', href: 'https://twitter.com', label: 'Twitter' },
]

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className='relative overflow-hidden pt-24 md:pt-32 pb-8 md:pb-12'>
        <div className='absolute top-0 left-0 w-64 h-64 bg-primary/6 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='text-center max-w-3xl mx-auto' data-aos='fade-up' data-aos-duration='700'>
            <span className='section-label mx-auto'>CONTACT US</span>
            <h1 className='mt-3 mb-5'>
              Let&apos;s Build Your{' '}
              <span className='text-primary'>Growth Strategy</span>
            </h1>
            <p className='text-base md:text-xl text-darkmode/55 max-w-2xl mx-auto leading-relaxed'>
              Ready to scale your brand with confidence? Tell us about your
              goals and we&apos;ll map out the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className='py-10 md:py-16'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>

            {/* Contact Form */}
            <div
              data-aos='fade-right'
              data-aos-duration='700'
              className='bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 order-2 lg:order-1'>
              <h3 className='mb-6 md:mb-8'>Send Us a Message</h3>
              <form className='space-y-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5'>
                  <div>
                    <label htmlFor='firstName' className='block text-sm font-semibold text-darkmode/70 mb-1.5'>
                      First Name
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      className='w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all'
                      placeholder='John'
                    />
                  </div>
                  <div>
                    <label htmlFor='lastName' className='block text-sm font-semibold text-darkmode/70 mb-1.5'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      className='w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all'
                      placeholder='Doe'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-semibold text-darkmode/70 mb-1.5'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all'
                    placeholder='john@example.com'
                  />
                </div>

                <div>
                  <label htmlFor='company' className='block text-sm font-semibold text-darkmode/70 mb-1.5'>
                    Company / Brand Name
                  </label>
                  <input
                    type='text'
                    id='company'
                    className='w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all'
                    placeholder='Your brand name'
                  />
                </div>

                <div>
                  <label htmlFor='service' className='block text-sm font-semibold text-darkmode/70 mb-1.5'>
                    Service Interested In
                  </label>
                  <select
                    id='service'
                    className='w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white'>
                    <option value=''>Select a service</option>
                    <option value='email'>Email Marketing</option>
                    <option value='seo'>SEO Optimisation</option>
                    <option value='social'>Social Media Management</option>
                    <option value='multiple'>Multiple Services</option>
                    <option value='not-sure'>Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-semibold text-darkmode/70 mb-1.5'>
                    Tell Us About Your Goals
                  </label>
                  <textarea
                    id='message'
                    rows={5}
                    className='w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none'
                    placeholder='What are you looking to achieve? What challenges are you facing?'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full btn-primary text-sm md:text-base justify-center'>
                  Book Your Free Strategy Call
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className='space-y-5 md:space-y-6 order-1 lg:order-2' data-aos='fade-left' data-aos-duration='700'>
              {/* Strategy call card */}
              <div className='bg-primary rounded-2xl md:rounded-3xl p-7 md:p-10 text-white'>
                <h3 className='text-white mb-3 text-xl md:text-2xl'>Book a Free Strategy Call</h3>
                <p className='text-white/75 text-sm md:text-base mb-5 leading-relaxed'>
                  Not ready to fill out a form? No problem. Book a call
                  directly and let&apos;s talk about your brand&apos;s growth.
                </p>
                <Link
                  href='#'
                  className='inline-block bg-white text-primary text-sm font-semibold py-3 px-7 rounded-full hover:bg-darkmode hover:text-white transition-colors duration-300'>
                  Schedule a Call
                </Link>
              </div>

              {/* Contact details */}
              <div className='bg-gradient-to-br from-[#F5F7FF] to-[#EEF1FF] rounded-2xl md:rounded-3xl p-7 md:p-10'>
                <h4 className='mb-5 text-lg'>Get in Touch</h4>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <Icon icon='mdi:email-outline' width='20' className='text-primary' />
                    </div>
                    <div>
                      <p className='text-xs text-darkmode/45 mb-0.5'>Email</p>
                      <p className='font-semibold text-sm break-all'>hello@marketingnbrandingstrategy.com</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Icon icon='mdi:web' width='20' className='text-primary' />
                    </div>
                    <div>
                      <p className='text-xs text-darkmode/45 mb-0.5'>Website</p>
                      <p className='font-semibold text-sm'>MarketingNBrandingStrategy.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className='bg-gradient-to-br from-[#F5F7FF] to-[#EEF1FF] rounded-2xl md:rounded-3xl p-7 md:p-10'>
                <h4 className='mb-5 text-lg'>Follow Us</h4>
                <div className='flex flex-wrap gap-3'>
                  {socials.map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      target='_blank'
                      aria-label={social.label}
                      className='w-11 h-11 bg-white rounded-xl flex items-center justify-center hover:bg-primary group transition-colors duration-300 shadow-sm'>
                      <Icon
                        icon={social.icon}
                        width='22'
                        className='text-primary group-hover:text-white transition-colors duration-300'
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
