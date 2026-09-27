'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';

// ---------- Types ----------

type Category =
  | 'All'
  | 'CRM'
  | 'Messaging'
  | 'Productivity'
  | 'Payments'
  | 'Automation'
  | 'Logistics'
  | 'Ecommerce';

type Status = 'not_connected' | 'available' | 'connected';

interface IntegrationLink {
  label: string;
  href: string;
}

interface Integration {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: Exclude<Category, 'All'>;
  status: Status;
  logo: string; // filename under /public/integrations/
  links?: IntegrationLink[];
}

// ---------- Category color mapping ----------

const CATEGORY_STYLES: Record<
  Exclude<Category, 'All'>,
  { badge: string; pillActive: string }
> = {
  CRM: {
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    pillActive: 'bg-orange-600 text-white border-orange-600',
  },
  Messaging: {
    badge: 'bg-emerald-100/70 text-emerald-800 border-emerald-200',
    pillActive: 'bg-emerald-600 text-white border-emerald-600',
  },
  Productivity: {
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    pillActive: 'bg-blue-600 text-white border-blue-600',
  },
  Payments: {
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    pillActive: 'bg-purple-600 text-white border-purple-600',
  },
  Automation: {
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    pillActive: 'bg-rose-600 text-white border-rose-600',
  },
  Logistics: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    pillActive: 'bg-amber-600 text-white border-amber-600',
  },
  Ecommerce: {
    badge: 'bg-teal-50 text-teal-700 border-teal-200',
    pillActive: 'bg-teal-600 text-white border-teal-600',
  },
};

const CATEGORIES: Category[] = [
  'All',
  'CRM',
  'Messaging',
  'Productivity',
  'Payments',
  'Automation',
  'Logistics',
  'Ecommerce',
];

// ---------- Data ----------

const INTEGRATIONS: Integration[] = [
  // CRM
  {
    id: 'hubspot',
    name: 'HubSpot',
    subtitle: 'CRM Integration',
    description: 'Sync leads you capture in GrowBro directly into your HubSpot CRM.',
    category: 'CRM',
    status: 'not_connected',
    logo: 'hubspot.png',
  },
  {
    id: 'zoho',
    name: 'Zoho',
    subtitle: 'CRM Bidirectional Sync',
    description: 'Sync leads and contacts bidirectionally between GrowBro and Zoho CRM.',
    category: 'CRM',
    status: 'not_connected',
    logo: 'zoho.png',
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    subtitle: 'CRM Sync',
    description: 'Sync GrowBro leads and contacts bidirectionally with your Salesforce CRM automatically.',
    category: 'CRM',
    status: 'not_connected',
    logo: 'salesforce.png',
  },
  {
    id: 'odoo',
    name: 'Odoo',
    subtitle: 'CRM Bidirectional Sync',
    description: 'Sync CRM leads and contacts bidirectionally between GrowBro and Odoo.',
    category: 'CRM',
    status: 'not_connected',
    logo: 'oodo.png',
  },
  {
    id: 'indiamart',
    name: 'IndiaMART',
    subtitle: 'Lead Manager Sync',
    description: 'Automatically import leads from your IndiaMART Lead Manager into GrowBro.',
    category: 'CRM',
    status: 'not_connected',
    logo: 'indiamart.jpeg',
  },
  {
    id: 'justdial',
    name: 'JustDial',
    subtitle: 'Leads via Webhook',
    description: 'Automatically import leads pushed from your JustDial account via webhook.',
    category: 'CRM',
    status: 'not_connected',
    logo: 'jd.png',
  },

  // Messaging
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    subtitle: 'Business Messaging',
    description: 'Connect your WhatsApp Business number via Meta Embedded Signup.',
    category: 'Messaging',
    status: 'not_connected',
    logo: 'whatsapp.jpeg',
    links: [{ label: 'WhatsApp Number Integration Guide', href: '#' }],
  },
  {
    id: 'instagram-messenger',
    name: 'Instagram & Messenger',
    subtitle: 'AI-Powered Conversations',
    description: 'Let AI agents handle Instagram DMs and Messenger conversations automatically.',
    category: 'Messaging',
    status: 'not_connected',
    logo: 'meta.png',
    links: [
      { label: 'Instagram & Messenger Integration Guide', href: '#' },
      { label: 'Connect Instagram to a Facebook Page', href: '#' },
    ],
  },
  {
    id: 'telegram',
    name: 'Telegram',
    subtitle: 'Business Messaging',
    description:
      'Connect Telegram Business to let your AI reply to customers as you — they see your name, not a bot.',
    category: 'Messaging',
    status: 'not_connected',
    logo: 'tg.png',
  },

  // Productivity
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    subtitle: 'Sales Lead Tracking',
    description: 'Automatically sync captured leads as rows in your Google Sheet.',
    category: 'Productivity',
    status: 'not_connected',
    logo: 'sheet.png',
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    subtitle: 'Booking Sync',
    description: 'Sync confirmed bookings to your Google Calendar automatically.',
    category: 'Productivity',
    status: 'not_connected',
    logo: 'gCalander.png',
  },
  {
    id: 'calendly',
    name: 'Calendly',
    subtitle: 'Meeting Bookings → Leads',
    description: 'Every Calendly booking automatically becomes a lead in GrowBro.',
    category: 'Productivity',
    status: 'not_connected',
    logo: 'calendly.png',
  },

  // Payments
  {
    id: 'razorpay',
    name: 'Razorpay',
    subtitle: 'Payment Links',
    description: 'Let AI agents create payment links and collect payments automatically.',
    category: 'Payments',
    status: 'not_connected',
    logo: 'razerpay.jpeg',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    subtitle: 'Payment Links',
    description: 'Connect PayPal to let your AI agents create payment links and collect payments automatically.',
    category: 'Payments',
    status: 'not_connected',
    logo: 'pp.png',
  },
  {
    id: 'phonepe',
    name: 'PhonePe',
    subtitle: 'Payment Links',
    description: 'Connect PhonePe to let your AI agents create payment links and collect payments via UPI instantly.',
    category: 'Payments',
    status: 'not_connected',
    logo: 'phonepe.png',
  },
  {
    id: 'payu',
    name: 'PayU',
    subtitle: 'Payment Links',
    description:
      'Connect PayU to let your AI agents create payment links and collect payments via UPI, cards, and netbanking.',
    category: 'Payments',
    status: 'not_connected',
    logo: 'payu.png',
  },
  {
    id: 'cashfree',
    name: 'Cashfree',
    subtitle: 'Payment Links',
    description: 'Connect Cashfree to let your AI agents create payment links and collect payments in India.',
    category: 'Payments',
    status: 'not_connected',
    logo: 'cashfree.png',
  },
  {
    id: 'paytm',
    name: 'Paytm',
    subtitle: 'Payment Links',
    description: 'Connect Paytm to let your AI agents create payment links and collect payments via UPI, cards, wallets.',
    category: 'Payments',
    status: 'not_connected',
    logo: 'paytm.png',
  },

  // Automation
  {
    id: 'n8n',
    name: 'n8n',
    subtitle: 'Workflow Automation',
    description: 'Build custom automations with the official n8n community node.',
    category: 'Automation',
    status: 'available',
    logo: 'n8n.png',
  },
  {
    id: 'make',
    name: 'Make',
    subtitle: 'Workflow Automation',
    description: 'Connect GrowBro to 3,000+ apps via Make scenarios using webhooks.',
    category: 'Automation',
    status: 'not_connected',
    logo: 'make.png',
  },

  // Logistics
  {
    id: 'order-tracking',
    name: 'Order Tracking',
    subtitle: 'Shiprocket',
    description: 'AI answers "where is my order?" by tracking deliveries across couriers.',
    category: 'Logistics',
    status: 'not_connected',
    logo: 'order.png',
  },

  // Ecommerce
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    subtitle: 'Orders & Customers',
    description: 'Sync WooCommerce customers and orders so your AI can answer order queries automatically.',
    category: 'Ecommerce',
    status: 'not_connected',
    logo: 'wc.jpeg',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    subtitle: 'Orders & Customers',
    description: 'Sync Shopify customers and orders so your AI can answer order queries and support customers automatically.',
    category: 'Ecommerce',
    status: 'not_connected',
    logo: 'shopify.png',
  },
];

// ---------- Card Sub-Components ----------

function StatusPill({ status }: { status: Status }) {
  const label =
    status === 'available'
      ? 'Available'
      : status === 'connected'
      ? 'Connected'
      : 'Not connected';

  const classes =
    status === 'available'
      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
      : status === 'connected'
      ? 'bg-blue-100 text-blue-800 border-blue-300'
      : 'bg-gray-100/80 text-gray-600 border-gray-200';

  return (
    <span
      className={`shrink-0 text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${classes}`}
    >
      {status === 'available' && (
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5 align-middle" />
      )}
      {label}
    </span>
  );
}

function IntegrationCard({ item }: { item: Integration }) {
  const style = CATEGORY_STYLES[item.category];
  const actionLabel =
    item.status === 'available' || item.status === 'connected'
      ? 'Manage'
      : 'Connect';

  return (
    <div className="flex flex-col bg-white border border-emerald-900/10 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-emerald-900/20 transition-all">
      <div className="flex items-start justify-between mb-3 gap-2">
        <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden relative shrink-0">
          <Image
            src={`/integration/${item.logo}`}
            alt={item.name}
            fill
            className="object-contain p-1.5"
          />
        </div>
        <StatusPill status={item.status} />
      </div>

      <h3 className="text-gray-900 font-semibold text-base leading-tight">
        {item.name}
      </h3>
      <p className="text-gray-500 text-xs mt-0.5 mb-2 font-medium">
        {item.subtitle}
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        {item.description}
      </p>

      {item.links && item.links.length > 0 && (
        <div className="flex flex-col gap-1 mb-4">
          {item.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-emerald-700 hover:text-emerald-800 hover:underline w-fit font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
        <span
          className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md border ${style.badge}`}
        >
          {item.category}
        </span>
        <button className="text-emerald-600 text-sm font-semibold hover:text-emerald-700 flex items-center gap-1 transition-colors">
          {actionLabel}
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}

// ---------- Main Section ----------

export default function Integrations() {
  const [active, setActive] = useState<Category>('All');

  const counts = useMemo(() => {
    const map: Record<Exclude<Category, 'All'>, number> = {
      CRM: 0,
      Messaging: 0,
      Productivity: 0,
      Payments: 0,
      Automation: 0,
      Logistics: 0,
      Ecommerce: 0,
    };
    INTEGRATIONS.forEach((i) => {
      map[i.category] += 1;
    });
    return map;
  }, []);

  const filtered =
    active === 'All'
      ? INTEGRATIONS
      : INTEGRATIONS.filter((i) => i.category === active);

  return (
    <section className="w-full bg-[#EDFBF4] py-10 px-4 sm:px-6 md:px-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B132A] tracking-tight mb-4">
            GrowBro Plugs Into the{' '}
            <span className="text-[#10B981]">Tools You Already Use.</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-medium">
            No ripping out your existing stack. GrowBro connects to your CRM, payment
            gateway, calendar, and marketing tools in minutes. Everything stays in sync
            — automatically.
          </p>
         
        </div>
        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            const count = cat === 'All' ? INTEGRATIONS.length : counts[cat];
            const activeClasses =
              cat === 'All'
                ? 'bg-emerald-900 text-white border-emerald-900 shadow-xs'
                : `${CATEGORY_STYLES[cat].pillActive} shadow-xs`;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  isActive
                    ? activeClasses
                    : 'bg-white/80 backdrop-blur-xs text-gray-700 border-emerald-900/10 hover:bg-white hover:text-gray-900'
                }`}
              >
                {cat}
                <span
                  className={`text-[10px] leading-none px-1.5 py-0.5 rounded-full font-semibold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-emerald-100 text-emerald-900'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <IntegrationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}