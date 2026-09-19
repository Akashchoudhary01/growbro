import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { FaLinkedin, FaXTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import Image from 'next/image';

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'AI Sales Agent', href: '/product/ai-sales-agent' },
      { label: 'Customer Service', href: '/product/customer-service' },
      { label: 'Use Cases', href: '/use-cases' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Inbound Messaging', href: '/solutions/inbound-messaging' },
      { label: 'Outbound Messaging', href: '/solutions/outbound-messaging' },
      { label: 'Instagram & Messenger', href: '/solutions/instagram-messenger' },
      { label: 'AI Creatives Studio', href: '/solutions/ai-creatives-studio' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Blog', href: '/blog' },
      { label: 'Integrations', href: '/integrations' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy-policy' },
      { label: 'Terms of Service', href: '/legal/terms-of-service' },
      { label: 'Data Deletion', href: '/legal/data-deletion' },
      { label: 'Security', href: '/legal/security' },
    ],
  },
];

const CONTACT_DETAILS = [
  { icon: Phone, text: '+91 8929281726' },
  { icon: Mail, text: 'conversation@growbro.ai' },
  { icon: MapPin, text: 'Delhi, India' },
];

const TRUSTED_PARTNERS = [
  { name: 'Meta', subtitle: 'Business Partner', logo: '/footerLogo/metaa.jpeg' },
  { name: 'Google', subtitle: 'Verified Partner', logo: '/footerLogo/google.jpeg' },
  { name: 'Razorpay', subtitle: 'Payments Partner', logo: '/footerLogo/razerpay.jpeg' },
];

const SOCIAL_LINKS = [
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://twitter.com', label: 'X (Twitter)' },
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0F0D] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
        
        {/* Top: Brand block + Compact link columns */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start">
          
          {/* Brand & Tagline */}
          <div className="lg:w-[45%] max-w-xl">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center shrink-0 bg-white p-2 rounded-xl hover:-rotate-8">
                <Image
                  src="/logooo.png"
                  alt="Growbro Logo Icon"
                  width={40}
                  height={40}
                  priority
                  className="h-8 w-8 object-contain "
                />
              </div>
              <span className="text-3xl sm:text-7xl font-black text-[#00D084] tracking-tight whitespace-nowrap">
                growbro<span className="text-[#3D4F63]">.ai</span>
              </span>
            </div>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              Build AI agents trained on your data, no coding required.
            </p>
          </div>

          {/* Link columns */}
          <div className="lg:w-[55%] grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:flex lg:justify-between lg:gap-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="text-left">
                <h3 className="text-[11px] font-semibold tracking-wider text-slate-400">
                  {column.title.toUpperCase()}
                </h3>
                <ul className="mt-2 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-slate-400 transition-colors hover:text-emerald-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact column */}
            <div className="text-left">
              <h3 className="text-[11px] font-semibold tracking-wider text-slate-400">CONTACT</h3>
              <ul className="mt-2 space-y-2">
                {CONTACT_DETAILS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Icon size={13} className="shrink-0 text-emerald-400" />
                    <span className="truncate">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Middle: Trusted partners with logos + social icons */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-wider text-slate-400">TRUSTED PARTNER OF</p>
            <div className="mt-2.5 flex flex-wrap gap-2.5">
              {TRUSTED_PARTNERS.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center gap-2.5 rounded-lg border border-white/10 px-3 py-2 bg-black/20"
                >
                  <div className="relative h-6 w-6 shrink-0 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="leading-tight">
                    <p className="text-xs font-semibold text-white">{partner.name}</p>
                    <p className="text-[10px] text-emerald-400">{partner.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-wider text-slate-400 sm:text-right">FOLLOW US</p>
            <div className="mt-2.5 flex gap-2.5 sm:justify-end">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => {
                const isWhatsapp = label === 'WhatsApp';
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                      isWhatsapp
                        ? 'border-emerald-400/60 text-emerald-400 hover:bg-emerald-400/10'
                        : 'border-white/10 text-slate-300 hover:border-emerald-400/50 hover:text-emerald-400'
                    }`}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>
              © 2026 growbro.ai — a product of GrowBro AI Solutions Private Limited. All rights reserved.
            </p>
            <p className="mt-0.5 text-[10px]">
              CIN: U72200DC2026PTC471127 · Registered office: A-3/135, First Floor, Rohini Sector 8, A3/138, Rohini Sector 5, New Delhi 110085, Delhi, India
            </p>
          </div>
          <p className="flex items-center gap-1 whitespace-nowrap text-emerald-400">
            Made with <Heart size={11} className="fill-red-500 text-red-600" /> in India
          </p>
        </div>

      </div>
    </footer>
  );
}