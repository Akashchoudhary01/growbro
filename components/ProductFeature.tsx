'use client';

import { useEffect, useRef, useState, type ComponentType } from 'react';
import { Check, CreditCard, Globe, LayoutDashboard } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ChannelIcon = ComponentType<{ size?: number; className?: string }>;

interface Channel {
  id: string;
  label: string;
  icon: ChannelIcon;
  eyebrow: string;
  heading: string;
  description: string;
  bullets: string[];
  videoSrc: string; // path in /public
  poster?: string; // optional thumbnail in /public
}

// ---------------------------------------------------------------------------
// Layout constants — NAV_GAP_PX set to 0 for zero gap below the navbar.
// ---------------------------------------------------------------------------

const NAVBAR_HEIGHT_PX = 110; // Combined height of announcement bar + main navbar in px
const NAV_GAP_PX = 0; // Exactly 0px gap between navbar and the sticky channel-nav banner
const BANNER_HEIGHT_PX = 64; // approx height of the channel-nav banner row

// ---------------------------------------------------------------------------
// Content — one section per channel, all rendered and visible on scroll.
// ---------------------------------------------------------------------------

const CHANNELS: Channel[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: FaWhatsapp,
    eyebrow: 'Agentic WhatsApp',
    heading: 'Every WhatsApp chat answered in seconds',
    description:
      'Growbro reads incoming WhatsApp messages the moment they land, qualifies the lead, and replies with context from your catalog and CRM — no agent has to pick up first.',
    bullets: [
      'Instant reply, day or night',
      'Smart product recommendations from your catalogue',
      'Appointment booking with calendar sync',
    ],
    videoSrc: '/video/whatsapp.mp4',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: FaInstagram,
    eyebrow: 'COMMENT TO CONVERSATION',
    heading: 'Turn Instagram DMs and comments into conversations',
    description:
      'Growbro monitors comments and DMs, replies publicly to keep engagement up, and quietly moves interested buyers into a private thread ready to close.',
    bullets: [
      'Auto-replies to comments on ads and posts',
      'Moves hot leads from comment to DM',
      'Keeps your brand voice on every reply',
    ],
    videoSrc: '/video/instagram.mp4',
  },
  {
    id: 'payments',
    label: 'Payment Gateway',
    icon: CreditCard,
    eyebrow: 'Payment Gateway',
    heading: 'Collect payments without leaving the conversation',
    description:
      'Growbro generates payment links, shares them inline, and confirms the order automatically once payment lands — synced straight to your CRM.',
    bullets: [
      'One-tap payment links inside WhatsApp or Instagram',
      'Auto order confirmation on successful payment',
      'Works with Razorpay and other major gateways',
    ],
    videoSrc: '/video/razorpay.mp4',
  },
  {
    id: 'crm',
    label: 'CRM & Dashboard',
    icon: LayoutDashboard,
    eyebrow: 'CRM & Dashboard',
    heading: 'Nothing falls through the cracks',
    description:
      'Every conversation, order and payment updates your CRM automatically — no manual logging, no lost leads between tools.',
    bullets: [
      'Unified inbox across every channel',
      'Auto-tagging and lead scoring',
      'Sync to Sheets, HubSpot or your own CRM',
    ],
    videoSrc: '/video/crm.mp4',
  },
  {
    id: 'website',
    label: 'Website',
    icon: Globe,
    eyebrow: 'Website Chat + Checkout',
    heading: 'Turn website traffic into booked meetings',
    description:
      'A Growbro widget greets visitors, qualifies intent, and books a demo or hands off warm leads to sales — synced with the same CRM as your other channels.',
    bullets: [
      'On-site widget qualifies visitors in real time',
      'Books meetings straight onto your calendar',
      'Every lead lands in one shared pipeline',
    ],
    videoSrc: '/video/website.mp4',
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ProductFeature() {
  const [activeId, setActiveId] = useState<string>(CHANNELS[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="w-full bg-white py-10 sm:py-8">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section intro */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
             AI agents on <span className="text-emerald-500">Every Channel.</span>{' '}
          </h2>
         
          <p className="mt-4 mb-5 text-base leading-relaxed text-black">
            Give every customer an instant first response, guided qualification, and a clear next step, whether they message, call, comment, or visit your website.
          </p>
        </div>

        {/*
          Nav banner — sticky exactly NAV_GAP_PX (0px) below the combined navbar height.
          Changed to flex row with horizontal scroll on mobile, and standard grid on sm+ screens.
        */}
        <div
          style={{ top: `${NAVBAR_HEIGHT_PX + NAV_GAP_PX}px` }}
          className="sticky z-40 mt-0 flex overflow-x-auto divide-x divide-slate-200 overflow-hidden rounded-2xl border border-y-emerald-500 bg-white shadow-md sm:grid sm:grid-cols-5 sm:divide-y-0 scrollbar-none"
        >
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            const isActive = channel.id === activeId;
            return (
              <button
                key={channel.id}
                onClick={() => scrollToSection(channel.id)}
                className={`flex shrink-0 grow basis-0 items-center justify-center gap-2 border-b-2 px-4 py-4 text-sm font-medium transition-colors sm:text-base ${
                  isActive
                    ? 'border-emerald-500 bg-emerald-50 font-semibold text-emerald-700'
                    : 'border-transparent bg-white text-slate-500 hover:bg-emerald-50/40 hover:text-emerald-700'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-emerald-600' : 'text-slate-400'} />
                <span className="hidden sm:inline">{channel.label}</span>
              </button>
            );
          })}
        </div>

        {/* All channel sections, stacked, alternating content/video sides */}
        <div className="mt-20 space-y-24">
          {CHANNELS.map((channel, index) => {
            const reversed = index % 2 === 1; // odd sections flip: video left, content right
            return (
              <div
                key={channel.id}
                id={channel.id}
                ref={(el) => {
                  sectionRefs.current[channel.id] = el;
                }}
                style={{
                  scrollMarginTop: `${NAVBAR_HEIGHT_PX + NAV_GAP_PX + BANNER_HEIGHT_PX + 20}px`,
                }}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={`order-1 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {channel.eyebrow.toUpperCase()}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {channel.heading}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {channel.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {channel.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 border-l-2 border-emerald-400 pl-3 text-sm text-slate-700 sm:text-base"
                      >
                        <Check size={14} className="mt-1 shrink-0 text-emerald-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`order-2 flex justify-center ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <VideoPlayer src={channel.videoSrc} poster={channel.poster} label={channel.label} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Video player — plays the file straight from /public using 'object-contain'
// so the video is fully zoomed out and never cropped.
// ---------------------------------------------------------------------------

function VideoPlayer({ src, poster, label }: { src: string; poster?: string; label: string }) {
  return (
    <div className="mx-auto w-full max-w-[260px]">
      {/* Phone bezel */}
      <div className="overflow-hidden rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 shadow-xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="aspect-11/20 w-full rounded-[1.75rem] object-cover bg-slate-950"
          preload="metadata"
          aria-label={`${label} walkthrough video`}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}