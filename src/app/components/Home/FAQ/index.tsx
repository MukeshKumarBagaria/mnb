'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const faqData = [
  {
    question: 'What services does M&B Strategy offer?',
    answer:
      'We specialise in three core growth services: Email Marketing (strategy, automation, and campaigns), SEO Optimisation (audits, keyword research, on-page and content optimisation), and Social Media Creatives & Management (strategy, content creation, and community management). All services are delivered using our strategy-first approach.',
  },
  {
    question: 'How does the strategy-first approach work?',
    answer:
      'We don\'t jump straight into execution. Every engagement starts with our Discover phase — a deep dive into your brand, audience, competitors, and goals. From there, we build a tailored roadmap before launching any campaigns. This ensures every action is intentional, aligned, and measurable.',
  },
  {
    question: 'Who are your ideal clients?',
    answer:
      'We work best with start-ups and scale-ups, SMEs, growing e-commerce brands, service-based businesses, and personal brands or founders who value clarity, consistency, and compounding growth over short-term hacks.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We believe in transparent reporting with no vanity metrics. Depending on the service, we track metrics like email open rates, click-through rates, organic traffic growth, keyword rankings, engagement quality, lead generation, and customer lifetime value. You\'ll always know exactly what\'s working.',
  },
  {
    question: 'Can I start with just one service?',
    answer:
      'Absolutely. Many of our clients start with a single service and expand as they see results. Each service is designed to deliver standalone value, but they work even more powerfully when combined as part of an integrated growth strategy.',
  },
]

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <p className='text-lg font-normal text-white text-center mb-6'>
            FAQ
          </p>
          <h2 className='text-white text-center max-w-3xl mx-auto'>
            Frequently Asked Questions
          </h2>
          <div className='w-full px-4 pt-16'>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                        <span className='text-black'>{faq.question}</span>
                        <div
                          className={`h-5 w-5 transform transition-transform duration-300 ${
                            open ? 'rotate-180' : ''
                          }`}>
                          <Icon
                            icon='lucide:chevron-up'
                            width='20'
                            height='20'
                          />
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className='text-base text-black/50 font-normal text-left pt-4 mt-6 border-t border-border'>
                        <div className='lg:max-w-70%'>{faq.answer}</div>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
