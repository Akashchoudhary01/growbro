import React from 'react';
import Image from 'next/image';

export default function AnalyticsSection() {
  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-5 font-sans flex flex-col items-center">
      
      {/* Header Section */}
      <div className="max-w-3xl w-full text-center mb-10">
        <span className="text-[#00A859] font-bold text-[10px] tracking-widest uppercase mb-2 block">
          Analytics
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1A30] mb-3">
          See which channels actually convert.
        </h2>
        <p className="text-slate-500 text-xs md:text-sm font-medium">
          Lead volume, conversion rate, and CPL — compared across every channel in one view.
        </p>
      </div>

      {/* Dashboard Image Container */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 bg-white flex justify-center">
        <Image
          src="/image_c8589b.png"
          alt="Cross-Channel Analytics dashboard showing lead volume, conversions, and CPL"
          width={1200}
          height={750}
          className="w-full h-auto object-contain"
          quality={100}
          priority
        />
      </div>

    </section>
  );
}