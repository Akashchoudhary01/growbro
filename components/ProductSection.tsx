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
  <div className="flex flex-col items-center text-center text-black px-4">
    <h1 className="text-3xl md:text-4xl font-bold mb-3">Live Product Demo</h1>
    <h3 className="max-w-2xl text-base md:text-lg text-slate-600 mb-8">
      Watch our live product demo to discover how you can effortlessly build AI Agents trained on your data, no coding required.
    </h3>

    <section className="w-full max-w-4xl pb-16">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl bg-gray-900 group">
        <video
          className="w-full h-full object-cover"
          src="/video/growbro.mp4"
          controls
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </div>
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