'use client';

import React from 'react';

export default function CustomWebhookSection() {
  return (
    <section className="w-full bg-[#EDFBF4] py-16 sm:py-24 px-4 sm:px-6 md:px-10 flex items-center justify-center relative overflow-hidden">
      {/* Background radial glow matching design */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Mock Code Editor Window */}
        <div className="w-full bg-[#0B132A] rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-800 font-mono text-sm leading-relaxed text-slate-100">
          
          {/* Mac-style Window Controls */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
          </div>

          {/* Clean Syntax Highlighted JSON */}
          <pre className="overflow-x-auto text-xs sm:text-sm font-medium">
            <code>
              <span className="text-slate-100">{`{`}</span>{'\n'}
              <span className="text-slate-100">{`  `}</span>
              <span className="text-white font-semibold">&quot;event&quot;</span>
              <span className="text-slate-100">: </span>
              <span className="text-emerald-400">&quot;appointment_booked&quot;</span>
              <span className="text-slate-100">,</span>{'\n'}

              <span className="text-slate-100">{`  `}</span>
              <span className="text-white font-semibold">&quot;lead&quot;</span>
              <span className="text-slate-100">{`: {`}</span>{'\n'}
              <span className="text-slate-100">{`    `}</span>
              <span className="text-white font-semibold">&quot;name&quot;</span>
              <span className="text-slate-100">: </span>
              <span className="text-emerald-400">&quot;Alex Rivera&quot;</span>
              <span className="text-slate-100">,</span>{'\n'}
              <span className="text-slate-100">{`    `}</span>
              <span className="text-white font-semibold">&quot;phone&quot;</span>
              <span className="text-slate-100">: </span>
              <span className="text-emerald-400">&quot;+91 98765 43210&quot;</span>{'\n'}
              <span className="text-slate-100">{`  },`}</span>{'\n'}

              <span className="text-slate-100">{`  `}</span>
              <span className="text-white font-semibold">&quot;appointment&quot;</span>
              <span className="text-slate-100">{`: {`}</span>{'\n'}
              <span className="text-slate-100">{`    `}</span>
              <span className="text-white font-semibold">&quot;service&quot;</span>
              <span className="text-slate-100">: </span>
              <span className="text-emerald-400">&quot;Business Audit&quot;</span>
              <span className="text-slate-100">,</span>{'\n'}
              <span className="text-slate-100">{`    `}</span>
              <span className="text-white font-semibold">&quot;time&quot;</span>
              <span className="text-slate-100">: </span>
              <span className="text-emerald-400">&quot;2026-06-15T14:30:00Z&quot;</span>{'\n'}
              <span className="text-slate-100">{`  }`}</span>{'\n'}
              <span className="text-slate-100">{`}`}</span>
              
              {/* Green Cursor */}
              <span className="inline-block w-2 h-4 bg-[#10B981] ml-1.5 align-middle animate-pulse" />
            </code>
          </pre>
        </div>

        {/* Right Side: Copy & Content */}
        <div className="flex flex-col items-start space-y-6">
          {/* Badge */}
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100/80 text-[#0E9F6E] border border-emerald-200">
            DEVELOPERS API
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#0B132A] tracking-tight leading-[1.12]">
            Custom Webhook — For Developers
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg font-normal leading-relaxed">
            Not on our integration list? No problem. GrowBro&apos;s Scale plan
            includes a full webhook system. Every conversation event — new
            lead, payment completed, appointment booked, conversation closed —
            fires a real-time webhook to any URL you specify. Connect any CRM,
            any database, any internal tool.
          </p>

          {/* Link CTA */}
          <a
            href="#webhook-setup"
            className="inline-flex items-center gap-2 text-[#10B981] font-bold text-base hover:text-[#0E9F6E] transition-colors group pt-2"
          >
            Ask our team about webhook setup
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}