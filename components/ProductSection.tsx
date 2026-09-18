import React from 'react'
import Image from 'next/image';
import { Video } from 'lucide-react';
import ClientsSection from './ClientSection';


// // Brand Logos Data
// const BRAND_LOGOS = [
//   { name: 'Brand 1', src: 'https://via.placeholder.com/120x40?text=Logo+1' },
//   { name: 'Brand 2', src: 'https://via.placeholder.com/120x40?text=Logo+2' },
//   { name: 'Brand 3', src: 'https://via.placeholder.com/120x40?text=Logo+3' },
//   { name: 'Brand 4', src: 'https://via.placeholder.com/120x40?text=Logo+4' },
//   { name: 'Brand 5', src: 'https://via.placeholder.com/120x40?text=Logo+5' },
// ];

// 1. Hero Showcase Image Component
const HeroShowcase = () => (
  <div className="relative max-w-5xl mx-auto my-8 px-4 flex justify-center">
    <Image
      src="/heroo.png"
        width={1600}
  height={900}
      alt="Product Showcase"
      className="w-full h-auto object-contain rounded-xl shadow-lg"
    />
  </div>
);

// // 2. Social Proof & Brand Logos Component
// const SocialProof = () => (
//   <section className="py-12 bg-white text-center">
//     <div className="max-w-4xl mx-auto px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
//         Founders & Marketers Love us
//       </h2>
//       <p className="mt-2 text-sm md:text-base text-gray-500 font-medium">
//         Trusted by 210,000+ Businesses across 80+ Countries.
//       </p>

//       {/* Brand Logos Grid */}
//       <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80 grayscale transition duration-300 hover:grayscale-0">
//         {BRAND_LOGOS.map((brand, index) => (
//           <Image
//             key={index}
//             src={brand.src}
//             alt={brand.name}
//             className="h-8 md:h-10 object-contain"
//           />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// 3. Demo Video Component
export const DemoVideo = () => (
  <section className="max-w-4xl mx-auto px-4 pb-16">
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl bg-gray-900 group">
      {/* HTML5 Video Element */}
      <video
        className="w-full h-full object-cover"
        src="/video/growbro.mp4"        // Change this to match your actual file name in the public folder
        controls               // Adds play, pause, volume, and fullscreen controls
        autoPlay               // Optional: Starts playing automatically
        muted                  // Recommended if autoPlay is used (browsers block unmuted autoplay)
        loop                   // Optional: Loops the video when it ends
        playsInline            // Important for mobile devices to play inline smoothly
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);



// Main Section Wrapper Component
export default function ProductSection() {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-6">
      <HeroShowcase />
      {/* <SocialProof /> */}
            <ClientsSection/>

      <DemoVideo />
    </div>
  );
}