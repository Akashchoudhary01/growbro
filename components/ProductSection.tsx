import React from 'react'
// import Image from 'next/image';
// import { Video } from 'lucide-react';
import ClientsSection from './ClientSection';
// import AgentDemo from './AgentDemo/AgentDemo';
import AgentDemo from './AgentDemo/AgentDemo';




// // 1. Hero Showcase Image Component
// const HeroShowcase = () => (
//   <div className="relative max-w-5xl mx-auto my-8 px-4 flex justify-center">
//     <Image
//       src="/heroo.png"
//         width={1600}
//   height={900}
//       alt="Product Showcase"
//       className="w-full h-auto object-contain rounded-xl shadow-lg"
//     />
//   </div>
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
      {/* <HeroShowcase /> */}
      <AgentDemo logoSrc="/logooo.png" logoAlt="Your brand" />;

      
      {/* <SocialProof /> */}
            <ClientsSection/>

      <DemoVideo />
    </div>
  );
}