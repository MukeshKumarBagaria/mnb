import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | M&B Strategy',
  description:
    "Ready to scale your brand with confidence? Tell us about your goals and we'll map out the next steps. Book your free strategy call.",
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='container mx-auto pt-32 max-w-7xl px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit mx-auto'>
              <p className='text-primary text-lg font-bold'>CONTACT US</p>
            </div>
            <h1 className='mt-6 text-4xl sm:text-5xl lg:text-6xl'>
              Let&apos;s Build Your{' '}
              <span className='text-primary'>Growth Strategy</span>
            </h1>
            <p className='text-xl text-black/60 mt-6 max-w-3xl mx-auto'>
              Ready to scale your brand with confidence? Tell us about your
              goals and we&apos;ll map out the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className='pt-0'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='bg-white rounded-3xl shadow-xl p-10'>
              <h3 className='text-2xl lg:text-3xl mb-8'>Send Us a Message</h3>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-semibold text-black/70 mb-2'>
                      First Name
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      className='w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors'
                      placeholder='John'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-semibold text-black/70 mb-2'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      className='w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors'
                      placeholder='Doe'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold text-black/70 mb-2'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors'
                    placeholder='john@example.com'
                  />
                </div>
                <div>
                  <label
                    htmlFor='company'
                    className='block text-sm font-semibold text-black/70 mb-2'>
                    Company / Brand Name
                  </label>
                  <input
                    type='text'
                    id='company'
                    className='w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors'
                    placeholder='Your brand name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='service'
                    className='block text-sm font-semibold text-black/70 mb-2'>
                    Service Interested In
                  </label>
                  <select
                    id='service'
                    className='w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-white'>
                    <option value=''>Select a service</option>
                    <option value='email'>Email Marketing</option>
                    <option value='seo'>SEO Optimisation</option>
                    <option value='social'>Social Media Management</option>
                    <option value='multiple'>Multiple Services</option>
                    <option value='not-sure'>Not Sure Yet</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold text-black/70 mb-2'>
                    Tell Us About Your Goals
                  </label>
                  <textarea
                    id='message'
                    rows={5}
                    className='w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none'
                    placeholder='What are you looking to achieve? What challenges are you facing?'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-primary text-white text-lg font-semibold py-4 rounded-full hover:bg-darkmode transition-colors duration-300 hover:cursor-pointer'>
                  Book Your Free Strategy Call
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className='space-y-8'>
              <div className='bg-primary rounded-3xl p-10 text-white'>
                <h3 className='text-2xl lg:text-3xl mb-4 text-white'>
                  Book a Free Strategy Call
                </h3>
                <p className='text-white/80 text-lg mb-6'>
                  Not ready to fill out a form? No problem. Book a call
                  directly and let&apos;s have a conversation about your
                  brand&apos;s growth.
                </p>
                <Link
                  href='#'
                  className='inline-block bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-darkmode hover:text-white transition-colors duration-300'>
                  Schedule a Call
                </Link>
              </div>

              <div className='bg-grey rounded-3xl p-10'>
                <h4 className='text-xl mb-6'>Get in Touch</h4>
                <div className='space-y-5'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center'>
                      <Icon
                        icon='mdi:email-outline'
                        width='24'
                        height='24'
                        className='text-primary'
                      />
                    </div>
                    <div>
                      <p className='text-sm text-black/50'>Email</p>
                      <p className='font-semibold'>
                        hello@marketingnbrandingstrategy.com
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center'>
                      <Icon
                        icon='mdi:web'
                        width='24'
                        height='24'
                        className='text-primary'
                      />
                    </div>
                    <div>
                      <p className='text-sm text-black/50'>Website</p>
                      <p className='font-semibold'>
                        MarketingNBrandingStrategy.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-grey rounded-3xl p-10'>
                <h4 className='text-xl mb-6'>Follow Us</h4>
                <div className='flex gap-4'>
                  {[
                    { icon: 'mdi:instagram', href: 'https://instagram.com' },
                    { icon: 'mdi:linkedin', href: 'https://linkedin.com' },
                    { icon: 'mdi:facebook', href: 'https://facebook.com' },
                    { icon: 'mdi:twitter', href: 'https://twitter.com' },
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      target='_blank'
                      className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary group transition-colors duration-300'>
                      <Icon
                        icon={social.icon}
                        width='24'
                        height='24'
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
