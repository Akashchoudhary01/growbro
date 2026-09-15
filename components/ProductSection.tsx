'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function ProductSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Product Preview / Video Container */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-gray-50 group">
          {!isPlaying ? (
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/product-hero.png" // Replace with image path or keep placeholder
                alt="Growbro Product Demo"
                fill
                priority
                className="object-cover object-top"
              />

              {/* Video Play Overlay Button */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all group-hover:bg-black/30">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-110"
                  aria-label="Play Product Video"
                >
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </button>
              </div>
            </div>
          ) : (
            /* Embedded Video Container */
            <div className="relative w-full aspect-[16/9]">
              <iframe
                className="w-full h-full"
                // src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1" 
             src="https://www.youtube.com/embed/Qn8aYSQe-_4?autoplay=1"
                title="Growbro Product Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Trusted Growing Businesses / Logo Cloud Section */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted by fast-growing businesses
          </p>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="h-8 flex items-center justify-center font-bold text-gray-400 text-xl">Shopify</div>
            <div className="h-8 flex items-center justify-center font-bold text-gray-400 text-xl">Razorpay</div>
            <div className="h-8 flex items-center justify-center font-bold text-gray-400 text-xl">Meta</div>
            <div className="h-8 flex items-center justify-center font-bold text-gray-400 text-xl">WooCommerce</div>
            <div className="h-8 flex items-center justify-center font-bold text-gray-400 text-xl col-span-2 sm:col-span-1">Stripe</div>
          </div>
        </div>

      </div>
    </section>
  );
}