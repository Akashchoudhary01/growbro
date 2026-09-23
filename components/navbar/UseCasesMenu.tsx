'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface UseCasesMenuProps {
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function UseCasesMenu({ onClose, onMouseEnter, onMouseLeave }: UseCasesMenuProps) {
  const teamItems = [
    { title: 'Sales', desc: 'Qualify and close faster', href: '/use-cases/sales' },
    { title: 'Customer Support', desc: 'Resolve queries 24/7', href: '/use-cases/support' },
    { title: 'Marketing', desc: 'Broadcast & retarget', href: '/use-cases/marketing' },
  ];

  const industryItems = [
    { title: 'E-commerce & Retail', desc: 'Boost sales and support', href: '/use-cases/ecommerce' },
    { title: 'Education & EdTech', desc: 'Automate enrollments', href: '/use-cases/education' },
    { title: 'Real Estate', desc: 'Qualify property leads', href: '/use-cases/real-estate' },
    { title: 'Healthcare & Clinics', desc: 'Manage appointments', href: '/use-cases/healthcare' },
    { title: 'Financial Services', desc: 'Secure client support', href: '/use-cases/finance' },
    { title: 'Travel & Hospitality', desc: '24/7 booking help', href: '/use-cases/travel' },
    { title: 'Agencies & Marketing', desc: 'Scale client campaigns', href: '/use-cases/agencies' },
    { title: 'Automobile Dealerships', desc: 'Book test drives & share EMIs', href: '/use-cases/automobile' },
  ];

  return (
    <div 
      className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bg-white rounded-2xl border border-gray-200/80 shadow-2xl p-6 grid grid-cols-12 gap-6 z-50 animate-fadeIn text-left"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Pointer Arrow pointing to Use Cases link */}
      <div className="absolute -top-2 left-[39%] w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45" />

      {/* Left 8 Columns: Team & Industry */}
      <div className="col-span-8 space-y-6">
        
        {/* BY TEAM Section */}
        <div>
          <h5 className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-3">
            BY TEAM
          </h5>
          <div className="grid grid-cols-3 gap-3">
            {teamItems.map((item, idx) => (
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

        {/* BY INDUSTRY Section */}
        <div>
          <h5 className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-3">
            BY INDUSTRY
          </h5>
          <div className="grid grid-cols-3 gap-3">
            {industryItems.map((item, idx) => (
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

      </div>

      {/* Right 4 Columns: Featured Container */}
      <div className="col-span-4 bg-gray-50/80 rounded-xl border border-gray-200/60 p-4 flex flex-col justify-between">
        <div>
          <h5 className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-3">
            FEATURED
          </h5>

          <div className="bg-[#09A372] h-28 rounded-lg p-3 relative overflow-hidden mb-3 flex items-start">
            <span className="bg-white text-emerald-800 font-bold text-[10px] px-2 py-0.5 rounded uppercase shadow-xs">
              EXPLORE
            </span>
          </div>

          <h4 className="font-bold text-gray-900 text-sm mb-1">
            All Industries
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            See how businesses like yours deploy Growbro across use cases.
          </p>
        </div>

        <Link
          href="/use-cases"
          onClick={onClose}
          className="text-xs font-bold text-gray-900 hover:text-[#09A372] inline-flex items-center gap-1"
        >
          View all <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}