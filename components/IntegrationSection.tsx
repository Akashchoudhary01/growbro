'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export type Category = 'CRM' | 'Payment' | 'Messaging' | 'Productivity' | 'Automation';

interface Integration {
  id: string;
  name: string;
  category: Category;
  color: string;
  bgColor: string;
  logoSrc: string;
}

const ALL_INTEGRATIONS: Integration[] = [
  // CRM (6)
  { id: 'hubspot', name: 'HubSpot', category: 'CRM', color: 'text-[#FF7A59]', bgColor: 'bg-[#FF7A59]/10', logoSrc: '/logos/hubspot.svg' },
  { id: 'zoho', name: 'Zoho CRM', category: 'CRM', color: 'text-[#000000]', bgColor: 'bg-red-50', logoSrc: '/logos/zoho.svg' },
  { id: 'salesforce', name: 'Salesforce', category: 'CRM', color: 'text-[#00A1E0]', bgColor: 'bg-[#00A1E0]/10', logoSrc: '/logos/salesforce.svg' },
  { id: 'odoo', name: 'Odoo', category: 'CRM', color: 'text-[#714B67]', bgColor: 'bg-[#714B67]/10', logoSrc: '/logos/odoo.svg' },
  { id: 'indiamart', name: 'IndiaMART', category: 'CRM', color: 'text-[#2E3192]', bgColor: 'bg-[#2E3192]/10', logoSrc: '/logos/indiamart.svg' },
  { id: 'justdial', name: 'JustDial', category: 'CRM', color: 'text-[#FF6600]', bgColor: 'bg-[#FF6600]/10', logoSrc: '/logos/justdial.svg' },

  // Payment (6)
  { id: 'razorpay', name: 'Razorpay', category: 'Payment', color: 'text-[#0C2340]', bgColor: 'bg-blue-50', logoSrc: '/footerLogo/razerpay.jpeg' },
  { id: 'paypal', name: 'PayPal', category: 'Payment', color: 'text-[#003087]', bgColor: 'bg-[#003087]/10', logoSrc: '/footerLogo/razeray.jpeg' },
  { id: 'phonepe', name: 'PhonePe', category: 'Payment', color: 'text-[#5F259F]', bgColor: 'bg-[#5F259F]/10', logoSrc: '/logos/phonepe.svg' },
  { id: 'payu', name: 'PayU', category: 'Payment', color: 'text-[#A0C439]', bgColor: 'bg-[#A0C439]/10', logoSrc: '/logos/payu.svg' },
  { id: 'cashfree', name: 'Cashfree', category: 'Payment', color: 'text-[#000000]', bgColor: 'bg-emerald-50', logoSrc: '/logos/cashfree.svg' },
  { id: 'paytm', name: 'Paytm', category: 'Payment', color: 'text-[#00BAF2]', bgColor: 'bg-[#00BAF2]/10', logoSrc: '/logos/paytm.svg' },

  // Messaging (4)
  { id: 'whatsapp', name: 'WhatsApp', category: 'Messaging', color: 'text-[#25D366]', bgColor: 'bg-[#25D366]/10', logoSrc: '/logos/whatsapp.svg' },
  { id: 'instagram', name: 'Instagram', category: 'Messaging', color: 'text-[#E4405F]', bgColor: 'bg-[#E4405F]/10', logoSrc: '/logos/instagram.svg' },
  { id: 'messenger', name: 'Messenger', category: 'Messaging', color: 'text-[#0084FF]', bgColor: 'bg-[#0084FF]/10', logoSrc: '/logos/messenger.svg' },
  { id: 'telegram', name: 'Telegram', category: 'Messaging', color: 'text-[#229ED9]', bgColor: 'bg-[#229ED9]/10', logoSrc: '/logos/telegram.svg' },

  // Productivity (5)
  { id: 'gsheets', name: 'Google Sheets', category: 'Productivity', color: 'text-[#0F9D58]', bgColor: 'bg-[#0F9D58]/10', logoSrc: '/logos/gsheets.svg' },
  { id: 'gcal', name: 'Google Calendar', category: 'Productivity', color: 'text-[#4285F4]', bgColor: 'bg-[#4285F4]/10', logoSrc: '/logos/gcal.svg' },
  { id: 'calendly', name: 'Calendly', category: 'Productivity', color: 'text-[#006BFF]', bgColor: 'bg-[#006BFF]/10', logoSrc: '/logos/calendly.svg' },
  { id: 'shopify', name: 'Shopify', category: 'Productivity', color: 'text-[#96BF48]', bgColor: 'bg-[#96BF48]/10', logoSrc: '/logos/shopify.svg' },
  { id: 'woocommerce', name: 'WooCommerce', category: 'Productivity', color: 'text-[#96588A]', bgColor: 'bg-[#96588A]/10', logoSrc: '/logos/woocommerce.svg' },

  // Automation (3)
  { id: 'n8n', name: 'n8n', category: 'Automation', color: 'text-[#FF6584]', bgColor: 'bg-[#FF6584]/10', logoSrc: '/logos/n8n.svg' },
  { id: 'make', name: 'Make', category: 'Automation', color: 'text-[#6D28D9]', bgColor: 'bg-[#6D28D9]/10', logoSrc: '/logos/make.svg' },
  { id: 'ordertracker', name: 'Order Tracker', category: 'Automation', color: 'text-[#059669]', bgColor: 'bg-emerald-50', logoSrc: '/logos/ordertracker.svg' },
];

const CATEGORIES: Category[] = ['CRM', 'Payment', 'Messaging', 'Productivity', 'Automation'];
const AUTOPLAY_MS = 2800;

function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function IntegrationsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('CRM');
  const [isPaused, setIsPaused] = useState(false);
  const activeCatRef = useRef<Category>('CRM');

  // 1. Initial State: Fixed deterministic layout to prevent hydration errors, 
  // but explicitly scattered so it doesn't look clumped on the first load.
  const [displayedTenTools, setDisplayedTenTools] = useState<Integration[]>(() => {
    const activeTools = ALL_INTEGRATIONS.filter((item) => item.category === 'CRM');
    const otherTools = ALL_INTEGRATIONS.filter((item) => item.category !== 'CRM');
    
    const initialDisplay = new Array(10).fill(null);
    const fixedIndices = [1, 4, 2, 7, 8, 9, 0, 3, 5, 6]; 
    
    activeTools.forEach((tool, i) => {
      if (i < 10) initialDisplay[fixedIndices[i]] = tool;
    });
    
    let otherIndex = 0;
    for (let i = 0; i < 10; i++) {
      if (initialDisplay[i] === null) {
        initialDisplay[i] = otherTools[otherIndex++];
      }
    }
    
    return initialDisplay;
  });

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 2. Unified Event Handler: Shuffles and randomly disperses the active tools across the 10 slots
  const changeCategory = useCallback((newCat: Category) => {
    activeCatRef.current = newCat;
    setActiveCategory(newCat);

    const activeTools = shuffle(ALL_INTEGRATIONS.filter((item) => item.category === newCat));
    const otherTools = shuffle(ALL_INTEGRATIONS.filter((item) => item.category !== newCat));

    const newDisplay = new Array(10).fill(null);
    const randomIndices = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // Scatter active tools into random empty slots
    activeTools.forEach((tool, i) => {
      if (i < 10) {
        newDisplay[randomIndices[i]] = tool;
      }
    });

    // Backfill the remaining slots with inactive tools
    let otherIndex = 0;
    for (let i = 0; i < 10; i++) {
      if (newDisplay[i] === null && otherIndex < otherTools.length) {
        newDisplay[i] = otherTools[otherIndex++];
      }
    }

    setDisplayedTenTools(newDisplay);
  }, []);

  // 3. Autoplay Timer
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      const currentIndex = CATEGORIES.indexOf(activeCatRef.current);
      const nextIndex = (currentIndex + 1) % CATEGORIES.length;
      changeCategory(CATEGORIES[nextIndex]);
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, changeCategory]);

  const handleTabClick = (category: Category) => {
    changeCategory(category);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), AUTOPLAY_MS * 2);
  };

  return (
    <section className="py-20 bg-[#fafafa] border-y border-gray-100 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Side Context */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0084FF] mb-4 block">
              INTEGRATIONS
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight leading-tight mb-6">
              Works with the tools you already use. <br />
              No rebuild needed.
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-10 leading-relaxed">
              Growbro connects to your CRM, payment gateways, messaging channels, calendar, and automation platforms so your AI agents start with full context.
            </p>
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-bold px-6 py-3 rounded text-sm transition-all shadow-md"
            >
              Browse all 30+ integrations <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Side: Category Tabs + 10-Slot Grid Layout */}
          <div
            className="lg:col-span-7 bg-white p-6 rounded-md shadow-sm border border-gray-100"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            {/* Category Tabs Header matching reference image */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => handleTabClick(category)}
                    className={`flex-1 min-w-[100px] py-3 px-3 text-sm transition-all whitespace-nowrap shrink-0 border ${
                      isActive
                        ? 'bg-[#f4fce3] text-gray-900 border-gray-200 border-l-[4px] border-l-[#bef264]' 
                        : 'bg-[#fcfcfc] text-gray-600 hover:bg-gray-50 border-gray-200 border-l-[1px]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* 3x4 Grid structure */}
            <div className="relative grid grid-cols-3 grid-rows-4 gap-0 border border-gray-100 min-h-[420px]">

              {/* Row 1 */}
              <GridTile key={`0-${displayedTenTools[0]?.id}`} item={displayedTenTools[0]} activeCategory={activeCategory} />
              <GridTile key={`1-${displayedTenTools[1]?.id}`} item={displayedTenTools[1]} activeCategory={activeCategory} />
              <GridTile key={`2-${displayedTenTools[2]?.id}`} item={displayedTenTools[2]} activeCategory={activeCategory} />

              {/* Row 2 */}
              <GridTile key={`3-${displayedTenTools[3]?.id}`} item={displayedTenTools[3]} activeCategory={activeCategory} />

      {/* CENTER HEXAGON */}
<div className="row-span-2 col-start-2 row-start-2 flex items-center justify-center z-10 border border-gray-100 bg-white">
  <div
    className="relative w-28 h-28 shadow-lg flex items-center justify-center overflow-hidden"
    // style={}
  >
    <LogoImage
      src="/ss.png"
      alt="Growbro"
      sizes="112px" // Updated from 60px to match w-28 h-28
      fallback={<span className="text-white font-black text-3xl tracking-tight">GB</span>}
    />
  </div>
</div>
              <GridTile key={`4-${displayedTenTools[4]?.id}`} item={displayedTenTools[4]} activeCategory={activeCategory} />

              {/* Row 3 */}
              <GridTile key={`5-${displayedTenTools[5]?.id}`} item={displayedTenTools[5]} activeCategory={activeCategory} />
              <GridTile key={`6-${displayedTenTools[6]?.id}`} item={displayedTenTools[6]} activeCategory={activeCategory} />

              {/* Row 4 */}
              <GridTile key={`7-${displayedTenTools[7]?.id}`} item={displayedTenTools[7]} activeCategory={activeCategory} />
              <GridTile key={`8-${displayedTenTools[8]?.id}`} item={displayedTenTools[8]} activeCategory={activeCategory} />
              <GridTile key={`9-${displayedTenTools[9]?.id}`} item={displayedTenTools[9]} activeCategory={activeCategory} />

              <ConnectorDots />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

function LogoImage({
  src,
  alt,
  sizes,
  fallback,
}: {
  src: string;
  alt: string;
  sizes: string;
  fallback: React.ReactNode;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) return <>{fallback}</>;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-contain p-1"
      onError={() => setErrored(true)}
    />
  );
}

// Simplified GridTile to only show the logo image and mimic the border-collapse feel
function GridTile({ item, activeCategory }: { item: Integration; activeCategory: Category }) {
  if (!item) return <div className="bg-white border border-gray-100" />;

  const isMatchedCategory = item.category === activeCategory;

  return (
    <div
      className={`border border-gray-100 flex items-center justify-center px-4 py-6 transition-all duration-500 bg-white ${
        isMatchedCategory
          ? 'opacity-100 filter-none'
          : 'opacity-40 grayscale blur-[0.5px] pointer-events-none'
      }`}
    >
      <div className="relative w-full h-10 flex items-center justify-center">
        <LogoImage
          src={item.logoSrc}
          alt={item.name}
          sizes="100%"
          fallback={
            <span className={`text-sm font-bold tracking-tight text-center leading-tight ${isMatchedCategory ? item.color : 'text-gray-400'}`}>
              {item.name}
            </span>
          }
        />
      </div>
    </div>
  );
}

function ConnectorDots() {
  const dotPositions = [
    'top-[25%] left-[33.33%]',
    'top-[25%] left-[66.66%]',
    'top-[50%] left-[33.33%]',
    'top-[50%] left-[66.66%]',
    'top-[75%] left-[33.33%]',
    'top-[75%] left-[66.66%]',
  ];

  return (
    <>
      {dotPositions.map((position, i) => (
        <span
          key={i}
          className={`hidden sm:block absolute w-2 h-2 rounded-sm bg-gray-200 -translate-x-1/2 -translate-y-1/2 rotate-45 ${position}`}
        />
      ))}
    </>
  );
}