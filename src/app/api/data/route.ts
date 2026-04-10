import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      { label: 'Email Marketing', href: '/services/email-marketing' },
      { label: 'SEO Optimisation', href: '/services/seo' },
      { label: 'Social Media', href: '/services/social-media' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

// about / trust signals data
const Aboutdata: aboutdata[] = [
  {
    heading: 'Data-Driven Strategies',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Every decision is backed by data. We analyse audience behaviour, market trends, and campaign performance to craft strategies that deliver measurable growth.',
    link: 'Learn more',
  },
  {
    heading: 'Conversion-Focused Execution',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'We don\'t just drive traffic — we turn visitors into customers. Every campaign is designed with conversion at its core, from email flows to SEO landing pages.',
    link: 'Learn more',
  },
  {
    heading: 'Transparent Reporting',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'No vanity metrics. We provide clear, honest reporting that shows real impact — so you always know exactly what\'s working and where your investment is going.',
    link: 'Learn more',
  },
]

// plans data
const PlansData = [
  {
    heading: 'Email Marketing',
    plans: [
      {
        name: 'Starter',
        price: '750',
        features: [
          'Email strategy & planning',
          'Audience segmentation',
          'Welcome sequences',
          'Monthly campaign emails',
          'Basic A/B testing',
          'Monthly reporting',
        ],
      },
      {
        name: 'Growth',
        price: '1,200',
        popular: true,
        features: [
          'Everything in Starter',
          'Lead nurturing flows',
          'Promotional campaigns',
          'Abandoned cart emails',
          'Copywriting & design',
          'Advanced A/B testing',
          'Bi-weekly reporting',
        ],
      },
      {
        name: 'Scale',
        price: '1,800+',
        features: [
          'Everything in Growth',
          'Full email automation',
          'Re-engagement flows',
          'Custom visual layouts',
          'Multi-segment targeting',
          'Weekly reporting',
          'Dedicated strategist',
        ],
      },
    ],
  },
  {
    heading: 'SEO Optimisation',
    plans: [
      {
        name: 'Foundation',
        price: '800',
        features: [
          'SEO audit & analysis',
          'Keyword research',
          'On-page optimisation',
          'Technical SEO fixes',
          'Monthly reporting',
          'Content recommendations',
        ],
      },
      {
        name: 'Growth',
        price: '1,300',
        popular: true,
        features: [
          'Everything in Foundation',
          'Content optimisation',
          'SEO copywriting',
          'Internal linking strategy',
          'Competitor analysis',
          'Bi-weekly reporting',
          'Site structure review',
        ],
      },
      {
        name: 'Authority',
        price: '2,000+',
        features: [
          'Everything in Growth',
          'Full content strategy',
          'Link building outreach',
          'UX alignment',
          'Advanced analytics',
          'Weekly reporting',
          'Dedicated SEO strategist',
        ],
      },
    ],
  },
  {
    heading: 'Social Media',
    plans: [
      {
        name: 'Essentials',
        price: '700',
        features: [
          'Strategy & planning',
          'Content calendar',
          '8 posts per month',
          'Captions & hashtags',
          'Basic community mgmt',
          'Monthly reporting',
        ],
      },
      {
        name: 'Growth',
        price: '1,200',
        popular: true,
        features: [
          'Everything in Essentials',
          '16 posts per month',
          'Brand-aligned creatives',
          'Storytelling captions',
          'Platform optimisation',
          'Community management',
          'Bi-weekly reporting',
        ],
      },
      {
        name: 'Brand Authority',
        price: '1,800+',
        features: [
          'Everything in Growth',
          '24+ posts per month',
          'Video content creation',
          'Multi-platform strategy',
          'Advanced analytics',
          'Weekly reporting',
          'Dedicated social manager',
        ],
      },
    ],
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Sarah Mitchell',
    profession: 'Founder, Bloom Skincare',
    comment:
      'M&B Strategy transformed our email marketing completely. Our open rates doubled and we saw a 40% increase in repeat purchases within three months.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'James Thornton',
    profession: 'CEO, TechScale Solutions',
    comment:
      'Their SEO strategy put us on page one for our key terms. The organic traffic growth has been incredible — we\'ve reduced our ad spend by 60%.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    profession: 'Director, Urban Eats Co.',
    comment:
      'The social media management from M&B is outstanding. Our engagement has tripled and we\'re consistently getting quality leads through Instagram alone.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
  {
    name: 'Daniel Cooper',
    profession: 'Founder, Cooper & Co. Law',
    comment:
      'What sets M&B apart is their strategic approach. They didn\'t just jump into tactics — they built a proper roadmap first. The results speak for themselves.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Emma Richardson',
    profession: 'CMO, FreshStart Fitness',
    comment:
      'We went from inconsistent posting to a fully managed, brand-aligned social presence. M&B Strategy genuinely understands what modern brands need.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Marcus Lee',
    profession: 'CEO, Elevate Digital',
    comment:
      'Transparent reporting, clear communication, and real results. M&B Strategy has become an essential part of our growth team.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
]

// article data
const ArticlesData: articles[] = [
  {
    time: '6 min',
    heading: 'Why Email Marketing',
    heading2: 'Is Still Your Best ROI Channel',
    name: 'M&B Strategy',
    date: 'March 15, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '8 min',
    heading: 'SEO in 2025:',
    heading2: 'What Actually Moves the Needle',
    name: 'M&B Strategy',
    date: 'March 22, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'Social Media Strategy',
    heading2: 'Beyond Vanity Metrics',
    name: 'M&B Strategy',
    date: 'April 1, 2025',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '7 min',
    heading: 'The Strategy-First',
    heading2: 'Approach to Brand Growth',
    name: 'M&B Strategy',
    date: 'April 5, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '4 min',
    heading: 'Building a Brand',
    heading2: 'That Compounds Over Time',
    name: 'M&B Strategy',
    date: 'April 8, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '6 min',
    heading: 'From Leads to Loyal',
    heading2: 'Customers: A Nurture Guide',
    name: 'M&B Strategy',
    date: 'April 10, 2025',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    section: 'Services',
    links: [
      { label: 'Email Marketing', href: '/services/email-marketing' },
      { label: 'SEO Optimisation', href: '/services/seo' },
      { label: 'Social Media', href: '/services/social-media' },
    ],
  },
  {
    section: 'Resources',
    links: [
      { label: 'Blog', href: '#Blog' },
      { label: 'FAQ', href: '#FAQ' },
      { label: 'Free Strategy Call', href: '/contact' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
