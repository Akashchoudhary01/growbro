'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 px-3.5 py-1 rounded-full text-xs sm:text-sm font-medium mb-6 shadow-sm">
          <span>🐝</span>
          <span>— AI Powered - Customer Growth Platform</span>
        </div>

        {/* Clean Hero Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-snug mb-5">
          <span className="text-[#10B981]">Customers ask. Growbro gets it done.</span>
          <br className="hidden sm:inline" />
          <span className="text-gray-900 sm:mt-1 inline-block"> Turn Customer Conversations Into Business.</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          Growbro is an AI-powered customer conversation platform that helps businesses 
          capture leads, sell, support customers, recover lost revenue and automate follow-ups 
          across the channels they choose.
        </p>

        {/* Channel Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs font-semibold text-gray-700">
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-md">WhatsApp</span>
          <span className="bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-md">Instagram</span>
          <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-md">Messenger</span>
          <span className="bg-gray-100 text-gray-800 border border-gray-200 px-3 py-1 rounded-md">Website</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
          <button className="w-full sm:w-auto bg-[#10B981] hover:bg-[#059669] text-white font-bold px-6 py-3 rounded-lg text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
            Start Free Now <ArrowRight className="w-4 h-4" />
          </button>

          <button className="w-full sm:w-auto border border-gray-900 hover:bg-gray-50 text-gray-900 font-bold px-6 py-3 rounded-lg text-sm transition-all flex items-center justify-center gap-2">
            Book Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            <span>Set up in minutes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            <span>WhatsApp + Instagram + Website</span>
          </div>
        </div>

      </div>
    </section>
  );
}