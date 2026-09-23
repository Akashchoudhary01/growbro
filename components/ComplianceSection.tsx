'use client';

import Image from 'next/image';
import { ShieldCheck, Lock, CheckCircle, Server } from 'lucide-react';

export default function ComplianceSection() {
  const securityFeatures = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Official Meta Partner',
      description: 'Built on Meta’s Official WhatsApp Cloud API with guaranteed 99.9% uptime.',
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-600" />,
      title: 'GDPR Compliant',
      description: 'Strict privacy controls ensuring customer data is encrypted and secure.',
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-600" />,
      title: 'End-to-End Encryption',
      description: 'Transmitted over enterprise TLS 1.3 security protocols.',
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
      title: 'Green Tick Assistance',
      description: 'Full support to verify your business brand with the official Green Tick.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Grid: Left Content + Features, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Header & Security Grid */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-3">
                Trust & Compliance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                Enterprise-Grade Security & Compliance
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Trusted by growing businesses. Built with high-standard data safety protocols at the core.
              </p>
            </div>

            {/* Features 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityFeatures.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs hover:border-emerald-200 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image Card */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <Image
                src="/CTA.png" // Update to your image path in public folder
                alt="Growbro Compliance & Security Dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}