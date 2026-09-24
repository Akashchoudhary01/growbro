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
  const activeCatRef = useRef<Category>('CRM'); // Holds current category strictly for the interval timer

  // 1. Initial State: Deterministic (Unshuffled) to avoid Server/Client Hydration Error
  const [displayedTenTools, setDisplayedTenTools] = useState<Integration[]>(() => {
    const activeTools = ALL_INTEGRATIONS.filter((item) => item.category === 'CRM');
    const otherTools = ALL_INTEGRATIONS.filter((item) => item.category !== 'CRM');
    return [...activeTools, ...otherTools].slice(0, 10);
  });

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 2. Unified Event Handler: Updates Category AND the shuffled grid together
  const changeCategory = useCallback((newCat: Category) => {
    activeCatRef.current = newCat;
    setActiveCategory(newCat);

    const activeTools = shuffle(ALL_INTEGRATIONS.filter((item) => item.category === newCat));
    const otherTools = shuffle(ALL_INTEGRATIONS.filter((item) => item.category !== newCat));

    setDisplayedTenTools([...activeTools, ...otherTools].slice(0, 10));
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

  // Tab Click Handler
  const handleTabClick = (category: Category) => {
    changeCategory(category);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), AUTOPLAY_MS * 2);
  };

  return (
    <section className="py-20 bg-white border-y border-gray-100 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Side Context */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#09A372] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-4">
              Integrations Hub
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Works with the tools you already use. <br />
              <span className="text-gray-400">No rebuild needed.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
              Growbro connects to your CRM, payment gateways, messaging channels, calendar, and automation platforms so your AI agents start with full context.
            </p>
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-lg text-sm transition-all shadow-md"
            >
              Browse all 30+ integrations <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Side: Category Tabs + 10-Slot Grid Layout */}
          <div
            className="lg:col-span-7 bg-gray-50/60 p-6 rounded-3xl border border-gray-200/80 shadow-xs"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            {/* Category Tabs Header */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar border-b border-gray-200">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => handleTabClick(category)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#DCFCE7] text-[#09A372] border-t-2 border-[#09A372] shadow-2xs'
                        : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200/80'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* 3x4 Grid (10 outer slots surrounding Growbro center hex) */}
            <div className="relative grid grid-cols-3 grid-rows-4 gap-3.5 min-h-[380px]">

              {/* Row 1 */}
              <GridTile key={displayedTenTools[0]?.id ?? 'a'} item={displayedTenTools[0]} activeCategory={activeCategory} />
              <GridTile key={displayedTenTools[1]?.id ?? 'b'} item={displayedTenTools[1]} activeCategory={activeCategory} />
              <GridTile key={displayedTenTools[2]?.id ?? 'c'} item={displayedTenTools[2]} activeCategory={activeCategory} />

              {/* Row 2: left tile, CENTER HEX (spans 2 rows), right tile */}
              <GridTile key={displayedTenTools[3]?.id ?? 'd'} item={displayedTenTools[3]} activeCategory={activeCategory} />

              {/* CENTER HEXAGON — Growbro mark. Add your logo file at /public/logo-mark.svg and it appears automatically. */}
              <div className="row-span-2 col-start-2 row-start-2 flex items-center justify-center z-10">
                <div
                  className="relative w-24 h-24 bg-[#09A372] shadow-xl flex items-center justify-center overflow-hidden"
                  style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                >
                  <LogoImage
                    src="/logo-mark.svg"
                    alt="Growbro"
                    sizes="40px"
                    fallback={<span className="text-white font-black text-2xl tracking-tight">GB</span>}
                  />
                </div>
              </div>

              <GridTile key={displayedTenTools[4]?.id ?? 'e'} item={displayedTenTools[4]} activeCategory={activeCategory} />

              {/* Row 3 */}
              <GridTile key={displayedTenTools[5]?.id ?? 'f'} item={displayedTenTools[5]} activeCategory={activeCategory} />
              <GridTile key={displayedTenTools[6]?.id ?? 'g'} item={displayedTenTools[6]} activeCategory={activeCategory} />

              {/* Row 4 */}
              <GridTile key={displayedTenTools[7]?.id ?? 'h'} item={displayedTenTools[7]} activeCategory={activeCategory} />
              <GridTile key={displayedTenTools[8]?.id ?? 'i'} item={displayedTenTools[8]} activeCategory={activeCategory} />
              <GridTile key={displayedTenTools[9]?.id ?? 'j'} item={displayedTenTools[9]} activeCategory={activeCategory} />

              <ConnectorDots />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// Renders the logo if the file exists at logoSrc, otherwise falls back to initial node
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

// Sub-component for rendering each grid tile: a logo slot (next/image) + name
function GridTile({ item, activeCategory }: { item: Integration; activeCategory: Category }) {
  if (!item) return <div className="bg-white/40 rounded-xl border border-gray-100" />;

  const isMatchedCategory = item.category === activeCategory;

  return (
    <div
      className={`rounded-xl border flex items-center justify-center px-3 py-3 transition-all duration-300 ${
        isMatchedCategory
          ? 'bg-white border-gray-200 shadow-sm opacity-100 filter-none scale-100'
          : 'bg-gray-100/60 border-gray-200/50 opacity-30 grayscale blur-[0.8px] scale-95 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-2 min-w-0">
        <div
          className={`relative w-7 h-7 shrink-0 rounded-md flex items-center justify-center overflow-hidden ${
            isMatchedCategory ? item.bgColor : 'bg-gray-200'
          }`}
        >
          <LogoImage
            src={item.logoSrc}
            alt={item.name}
            sizes="28px"
            fallback={
              <span className={`text-[10px] font-bold ${isMatchedCategory ? item.color : 'text-gray-400'}`}>
                {item.name.charAt(0)}
              </span>
            }
          />
        </div>
        <span className={`text-xs font-bold tracking-tight truncate ${isMatchedCategory ? 'text-gray-900' : 'text-gray-500'}`}>
          {item.name}
        </span>
      </div>
    </div>
  );
}

// Small decorative dots sitting in the gaps between grid cells
function ConnectorDots() {
  const dotPositions = [
    'top-[24.5%] left-[33%]',
    'top-[24.5%] left-[67%]',
    'top-[49.5%] left-[33%]',
    'top-[49.5%] left-[67%]',
    'top-[74.5%] left-[33%]',
    'top-[74.5%] left-[67%]',
  ];

  return (
    <>
      {dotPositions.map((position, i) => (
        <span
          key={i}
          className={`hidden sm:block absolute w-1.5 h-1.5 rounded-full bg-gray-300 -translate-x-1/2 -translate-y-1/2 ${position}`}
        />
      ))}
    </>
  );
}