import setupImage from '@/assets/setup.png'
import type { NavItem, SiteConfig } from '@/lib/types'

export const SITE: SiteConfig = {
  website: 'https://rajeshdas.dev',
  author: 'Rajesh',
  repo: 'https://github.com/HYP3R00T/rajeshdas.dev',
  title: 'Rajesh Das',
  description:
    "A portfolio and blog showcasing Rajesh's skills in DevOps, Python, and Cloud.",
  image: setupImage,
  imageAlt: 'Check out rajeshdas.dev',
  contentType: 'Portfolio',
  twitterHandle: '@HYP3R00T',
  pageSize: 10,
  lang: 'en',
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Blog' },
  // { href: "https://hyperoot.dev/", label: "Projects", blank: true },
  { href: '/', label: 'Projects' },
  { href: '/components', label: 'Components' },
  { href: '/', label: 'About' },
]

export const SOCIAL_LINKS = [
  {
    name: 'github',
    href: 'https://github.com/HYP3R00T/',
    linkTitle: `Checkout my GitHub profile`,
    active: true,
  },
]

// Footer navigation items
export const footerNavigation = [
  // { href: "#skills", label: "Skills" },
  // { href: "#projects", label: "Projects" },
  { href: '/post/', label: 'Blog' },
  // { href: "#contact", label: "Contact" },
]

// Footer social links
export const footerSocialLinks = [
  {
    name: 'github',
    href: 'https://github.com/HYP3R00T',
    label: 'GitHub',
    linkTitle: 'Visit my GitHub profile',
  },
  {
    name: 'linkedin',
    href: 'https://linkedin.com/in/rajesh-kumar-das',
    label: 'LinkedIn',
    linkTitle: 'Connect with me on LinkedIn',
  },
  {
    name: 'mail',
    href: 'mailto:hello@rajeshdas.dev',
    label: 'Email',
    linkTitle: 'Send me an email',
  },
]
