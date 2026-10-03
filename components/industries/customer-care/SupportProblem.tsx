import React from 'react';
import { Star, Phone, Clock, FileText, Users } from 'lucide-react';

export default function SupportProblemSection() {
  return (
    <div className="w-full font-sans">
      
      {/* Top Stats Section */}
      <section className="w-full bg-[#f8f9fa] py-12 px-5 flex justify-center">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <h2 className="text-3xl font-extrabold text-[#00A859] mb-2 tracking-tight">80%</h2>
            <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">Queries resolved without a human</h3>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Leaving your team free for the complex, high-value conversations
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <h2 className="text-3xl font-extrabold text-[#00A859] mb-2 tracking-tight">3 hrs</h2>
            <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">Average handling time reduced</h3>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              From first contact to resolution, including escalated tickets
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <h2 className="text-3xl font-extrabold text-[#00A859] mb-2 tracking-tight flex items-center">
              4.8
              <Star className="w-6 h-6 ml-1 text-[#00A859]" fill="currentColor" strokeWidth={0} />
            </h2>
            <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">Average customer satisfaction</h3>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Post-resolution CSAT across WhatsApp-managed support interactions
            </p>
          </div>

        </div>
      </section>

      {/* The Problem Section */}
      <section className="w-full bg-white py-16 px-5 flex justify-center">
        <div className="max-w-5xl w-full">
          
          {/* Header Section */}
          <div className="mb-10">
            <span className="text-[#FF4545] font-bold text-[10px] tracking-widest uppercase mb-2 block">
              The Problem
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1A30]">
              Why support feels like it can&apos;t keep up
            </h2>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Card 1 */}
            <div className="bg-[#fff5f5] rounded-2px p-5 flex gap-4">
              <div className="bg-white w-8 h-8 rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-red-100">
                <Phone className="w-4 h-4 text-[#FF4545]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">Agents answering the same questions all day</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  Returns policy. Business hours. Order status. These answers never change — but they consume the majority of your team`&apos;`s time.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fff5f5] rounded-2pex p-5 flex gap-4">
              <div className="bg-white w-8 h-8 rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-red-100">
                <Clock className="w-4 h-4 text-[#FF4545]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">No coverage outside business hours</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  Customers contact you when they need help, not when you are staffed. Every after-hours query is a bad experience waiting to happen.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fff5f5] rounded-2xl p-5 flex gap-4">
              <div className="bg-white w-8 h-8 rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-red-100">
                <FileText className="w-4 h-4 text-[#FF4545]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">Support that doesn`&apos;`t scale</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  More customers means more agents means more cost. There is no linear path to improving support quality by adding headcount.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#fff5f5] rounded-2xl p-5 flex gap-4">
              <div className="bg-white w-8 h-8 rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-red-100">
                <Users className="w-4 h-4 text-[#FF4545]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">Customers repeating themselves</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  Transferred between agents. Asked for their order number three times. Told to call back during business hours.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}