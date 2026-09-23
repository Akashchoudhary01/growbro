'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProductMenuProps {
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function ProductMenu({ onClose, onMouseEnter, onMouseLeave }: ProductMenuProps) {
  const channelItems = [
    { title: 'WhatsApp Sales Agent', desc: 'Convert leads 24/7 on WhatsApp', href: '/product/whatsapp-sales' },
    { title: 'WhatsApp Customer Care', desc: 'Automate support at scale', href: '/product/customer-care', badge: 'MOST POPULAR' },
    { title: 'Website Chat Widget', desc: 'Engage visitors instantly', href: '/product/website-widget' },
    { title: 'Instagram & Messenger AI', desc: 'Automate DMs and comments', href: '/product/instagram-messenger' },
  ];

  const capabilityItems = [
    { title: 'Omni-Channel AI Agent', desc: 'One brain across every channel', href: '/product/omni-channel' },
    { title: 'Outbound Broadcasts', desc: 'Personalized campaigns at scale', href: '/product/outbound-broadcasts' },
    { title: 'AI Creatives Studio', desc: 'Brand-aware marketing visuals', href: '/product/creatives-studio', badge: 'NEW LAUNCH' },
  ];

  return (
    <div 
      className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bg-white rounded-2xl border border-gray-200/80 shadow-2xl p-6 grid grid-cols-12 gap-6 z-50 animate-fadeIn text-left"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Pointer Arrow pointing to Product link */}
      <div className="absolute -top-2 left-[31%] w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45" />

      {/* Left 8 Columns: Channels & Capabilities */}
      <div className="col-span-8 space-y-6">
        
        {/* CHANNELS Section */}
        <div>
          <h5 className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-3">
            CHANNELS
          </h5>
          <div className="grid grid-cols-2 gap-3">
            {channelItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="group block p-2 rounded-lg hover:bg-emerald-50/50 transition-colors"
              >
                <div className="flex items-center gap-2 font-bold text-gray-900 text-sm group-hover:text-[#09A372]">
                  {item.title}
                  {item.badge && (
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 font-normal mt-0.5">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CAPABILITIES Section */}
        <div>
          <h5 className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-3">
            CAPABILITIES
          </h5>
          <div className="grid grid-cols-2 gap-3">
            {capabilityItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="group block p-2 rounded-lg hover:bg-emerald-50/50 transition-colors"
              >
                <div className="flex items-center gap-2 font-bold text-gray-900 text-sm group-hover:text-[#09A372]">
                  {item.title}
                  {item.badge && (
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 font-normal mt-0.5">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Right 4 Columns: Featured Container */}
      <div className="col-span-4 bg-gray-50/80 rounded-xl border border-gray-200/60 p-4 flex flex-col justify-between">
        <div>
          <h5 className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-3">
            FEATURED
          </h5>

          <div className="bg-[#09A372] h-24 rounded-lg p-3 relative overflow-hidden mb-3">
            <span className="bg-white text-emerald-800 font-bold text-[10px] px-2 py-0.5 rounded uppercase shadow-xs">
              NEW LAUNCH
            </span>
          </div>

          <h4 className="font-bold text-gray-900 text-sm mb-1">
            AI Creatives Studio
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Generate on-brand campaign visuals in seconds — no designer needed.
          </p>
        </div>

        <Link
          href="/product/creatives-studio"
          onClick={onClose}
          className="text-xs font-bold text-gray-900 hover:text-[#09A372] inline-flex items-center gap-1"
        >
          Try it now <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}