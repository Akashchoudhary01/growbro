import React from 'react';
import Image from 'next/image';

// Helper component for the orbiting badges to ensure perfect alignment.
// Positions are expressed as a PERCENTAGE of the container's own size, so the
// whole orbit scales fluidly with the container instead of relying on fixed
// pixel offsets (which broke on narrower screens).
interface OrbitingBadgeProps {
  children: React.ReactNode;
  angle: number; // The angle in degrees (0-360)
  radiusPercent: number; // Distance from center, as % of container width/height
  floatDelay?: number; // Seconds — staggers each badge's float so they don't bob in sync
}

const OrbitingBadge: React.FC<OrbitingBadgeProps> = ({ children, angle, radiusPercent, floatDelay = 0 }) => {
  // Convert polar coordinates to Cartesian (x, y) as percentages
  const radian = (angle - 90) * (Math.PI / 180); // -90deg starts at 12 o'clock
  const x = radiusPercent * Math.cos(radian);
  const y = radiusPercent * Math.sin(radian);

  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        left: `calc(50% + ${x}%)`,
        top: `calc(50% + ${y}%)`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Separate wrapper for the float animation (translateY) — kept on its own
          element so it doesn't clash with the counter-rotate transform below */}
      <div className="animate-float" style={{ animationDelay: `${floatDelay}s` }}>
        {/* Counter-rotates so text stays horizontal while the orbit spins */}
        <div className="animate-counter-rotate bg-white px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-xl shadow-md border border-gray-100 flex items-center space-x-1.5 sm:space-x-2 shrink-0 whitespace-nowrap">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function TechStackHero() {
  // Radius as a % of the container's width/height (was 190px of a 500px box)
  const OUTER_RADIUS_PCT = (190 / 500) * 100; // 38%

  return (
    <section className="w-full bg-gradient-to-br from-emerald-50 via-white to-cyan-50 py-12 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="flex flex-col items-start space-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
            Seamlessly Integrate <br />
            WhatsApp <br />
            <span className="bg-gradient-to-r from-[#10b981] to-[#06b6d4] bg-clip-text text-transparent">
              with your business <br />
              tech stack
            </span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            Enjoy brilliant integrations with your preferred e-commerce platforms, CRMs, e-stores, and more.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button className="px-5 py-3 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all">
              Signup for Free
            </button>
            <button className="px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold transition-all border border-gray-200/60">
              Explore All Apps
            </button>
          </div>
        </div>

        {/* Right Illustration / Orbital Tech Stack UI (responsive) */}
        {/* aspect-square + max-w keeps it a true circle that scales down cleanly on mobile */}
        <div className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[500px] aspect-square mx-auto">

          {/* SVG Background Rings (scales with the container via viewBox) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
            <circle cx="250" cy="250" r="125" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="250" cy="250" r="190" fill="none" stroke="#e5e7eb" strokeWidth="1" />
          </svg>

          {/* Center Main Hub Node — icon only, no label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-float w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center">
            <div className="w-10 h-10 sm:w-22 sm:h-22 relative shrink-0">
              {/* REPLACE WITH YOUR LOGO IMAGE IN public/integration/ */}
              <Image
                src="/integration/GB.png"
                alt="GrowBro Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Orbital Container: This rotates, badges inside counter-rotate. */}
          <div className="absolute inset-0 w-full h-full animate-orbit-slow" style={{ transformOrigin: 'center' }}>

            {/* Top: Zapier (0 deg / 12 o'clock) */}
            <OrbitingBadge angle={0} radiusPercent={OUTER_RADIUS_PCT} floatDelay={0}>
              <div className="w-4 h-4 sm:w-5 sm:h-5 relative shrink-0">
                <Image src="/integration/zaiper.png" alt="Zapier" fill className="object-contain" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-800 pr-0.5">Zapier</span>
            </OrbitingBadge>

            {/* Top-Right: Google Sheets (51 deg) */}
            <OrbitingBadge angle={51} radiusPercent={OUTER_RADIUS_PCT} floatDelay={0.3}>
              <div className="w-4 h-4 sm:w-5 sm:h-5 relative shrink-0">
                <Image src="/integration/sheet.png" alt="Google Sheets" fill className="object-contain" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-800 pr-0.5">Google Sheets</span>
            </OrbitingBadge>

            {/* Bottom-Right: Shopify (128 deg) */}
            <OrbitingBadge angle={128} radiusPercent={OUTER_RADIUS_PCT} floatDelay={0.6}>
              <div className="w-4 h-4 sm:w-5 sm:h-5 relative shrink-0">
                <Image src="/integration/shopify.png" alt="Shopify" fill className="object-contain" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-800 pr-0.5">Shopify</span>
            </OrbitingBadge>

            {/* Bottom: Calendly (180 deg / 6 o'clock) */}
            <OrbitingBadge angle={180} radiusPercent={OUTER_RADIUS_PCT} floatDelay={0.9}>
              <div className="w-4 h-4 sm:w-5 sm:h-5 relative shrink-0">
                <Image src="/integration/calendly.png" alt="Calendly" fill className="object-contain" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-800 pr-0.5">Calendly</span>
            </OrbitingBadge>

            {/* Bottom-Left: Stripe (232 deg) */}
            <OrbitingBadge angle={232} radiusPercent={OUTER_RADIUS_PCT} floatDelay={1.2}>
              <div className="w-4 h-4 sm:w-5 sm:h-5 relative shrink-0">
                <Image src="/integration/stripe.png" alt="Stripe" fill className="object-contain" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-800 pr-0.5">Stripe</span>
            </OrbitingBadge>

            {/* Top-Left: HubSpot (309 deg) */}
            <OrbitingBadge angle={309} radiusPercent={OUTER_RADIUS_PCT} floatDelay={1.5}>
              <div className="w-4 h-4 sm:w-5 sm:h-5 relative shrink-0">
                <Image src="/integration/hubspot.png" alt="HubSpot" fill className="object-contain" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-800 pr-0.5">HubSpot</span>
            </OrbitingBadge>

            {/* Middle-Left: Zoho (270 deg) */}
            <OrbitingBadge angle={270} radiusPercent={OUTER_RADIUS_PCT} floatDelay={1.8}>
              <div className="w-4 h-4 sm:w-5 sm:h-5 relative shrink-0">
                <Image src="/integration/zoho.png" alt="Zoho" fill className="object-contain" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-800 pr-0.5">Zoho</span>
            </OrbitingBadge>

          </div>

        </div>

      </div>
    </section>
  );
}