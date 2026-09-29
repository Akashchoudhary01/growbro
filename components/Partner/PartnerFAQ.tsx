'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'How do commissions work?',
    answer: 'You earn 15% monthly commission on all active client subscriptions. Once you cross 50 active users, the rate increases to 20% on ALL active clients from the next billing cycle.',
  },
  {
    question: 'When do I get paid?',
    answer: 'Monthly commissions are released before the 15th of every month. Annual commissions are paid within 15 business days of renewal.',
  },
  {
    question: 'Is there any joining fee?',
    answer: 'No. Joining the GrowBro Partner Program is completely free. There are no hidden charges or upfront costs whatsoever.',
  },
  {
    question: 'Do I get free GrowBro access?',
    answer: 'Yes! As a partner, you get full free access to the GrowBro platform for your own business use from day one.',
  },
  {
    question: 'How is campaign revenue calculated?',
    answer: 'Campaign revenue is earned per message sent through WhatsApp, SMS, or Email. Year 1 rate is ₹0.03/message, and Year 2+ is ₹0.02/message.',
  },
  {
    question: 'What happens after 50 users?',
    answer: 'Once you cross 50 active users, your commission automatically upgrades to 20% on ALL active clients — not just the ones above 50. This applies from the next billing cycle.',
  },
];

export default function PartnerFAQ() {
  // Index of currently open accordion item (defaulting to 0 for the first item as seen in the image)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 block">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Everything you need to know about the GrowBro partner program.
          </p>
        </div>

        {/* FAQ List Container */}
        <div className="w-full flex flex-col space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-3xl border ${
                  isOpen
                    ? 'bg-emerald-50/40 border-emerald-300 shadow-sm'
                    : 'bg-white border-gray-200/80 hover:border-gray-300'
                } overflow-hidden`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold tracking-tight ${isOpen ? 'text-emerald-900' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus / Close Icon Indicator */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                      isOpen ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-600'
                    }`}
                  >
                    {isOpen ? <X className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-600 text-base leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}