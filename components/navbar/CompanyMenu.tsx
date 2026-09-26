'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface CompanyMenuProps {
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function CompanyMenu({ onClose, onMouseEnter, onMouseLeave }: CompanyMenuProps) {
  const aboutItems = [
    { title: 'About Us', desc: 'Our mission and team', href: '/company/about' },
    { title: 'Contact', desc: 'Get in touch with us', href: '/company/contact' },
    {
  title: 'Help Center',
  desc: 'Guides and documentation',
  href: '/company/help-center'
},
    { title: 'QR Code Generator', desc: 'Create permanent WhatsApp QR codes', href: '/company/qr-generator' },
  ];

  return (
    <div 
      className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bg-white rounded-2xl border border-gray-200/80 shadow-2xl p-6 grid grid-cols-12 gap-6 z-50 animate-fadeIn text-left"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Pointer Arrow pointing to Company link */}
      <div className="absolute -top-2 left-[60%] w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45" />

      {/* Left 8 Columns: About Items */}
      <div className="col-span-8">
        <h5 className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-4">
          ABOUT
        </h5>
        <div className="grid grid-cols-3 gap-4">
          {aboutItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={onClose}
              className="group block p-2 rounded-lg hover:bg-emerald-50/50 transition-colors"
            >
              <div className="font-bold text-gray-900 text-sm group-hover:text-[#09A372]">
                {item.title}
              </div>
              <p className="text-xs text-gray-500 font-normal mt-0.5">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Right 4 Columns: Featured Container */}
      <div className="col-span-4 bg-gray-50/80 rounded-xl border border-gray-200/60 p-4 flex flex-col justify-between">
        <div>
          <h5 className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-3">
            FEATURED
          </h5>

          <div className="bg-[#09A372] h-28 rounded-lg p-3 relative overflow-hidden mb-3 flex items-start">
            <span className="bg-white text-emerald-800 font-bold text-[10px] px-2 py-0.5 rounded uppercase shadow-xs">
              SUPPORT
            </span>
          </div>

          <h4 className="font-bold text-gray-900 text-sm mb-1">
            Contact Sales
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Ready to transform your customer engagement? Talk to our experts.
          </p>
        </div>

        <Link
          href="/company/contact"
          onClick={onClose}
          className="text-xs font-bold text-gray-900 hover:text-[#09A372] inline-flex items-center gap-1"
        >
          Contact us <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}