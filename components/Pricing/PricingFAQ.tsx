'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'What exactly is an "AI" in my plan?',
    answer: 'Each AI is a dedicated, configurable WhatsApp agent. Free includes 1 AI, Pro includes 3, and Scale includes 5. Starter is for campaign sending and does not include an AI agent.',
  },
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Yes. Upgrade instantly — you are charged the prorated difference. Downgrade takes effect at the next billing cycle. No penalty.',
  },
  {
    question: 'What happens if I exceed my monthly credits?',
    answer: 'Pro and Scale can top up wallet credits for additional usage. Starter includes unlimited campaign sends with no campaign usage credit requirement.',
  },
  {
    question: 'Do unused credits roll over to the next month?',
    answer: 'Monthly plans reset each billing cycle. On 6-month and 12-month plans, your full credit allocation is granted upfront and can be used any time within that period.',
  },
  {
    question: 'Do I need my own WhatsApp Business API account?',
    answer: 'No. GrowBro is an official Meta Tech Partner — we handle WhatsApp Cloud API setup and green-tick verification for you as part of onboarding.',
  },
  {
    question: 'Is there a setup fee or long-term contract?',
    answer: 'No setup fee on any plan. Monthly billing has no lock-in — cancel anytime. 6 and 12-month plans are prepaid at a discounted rate but are not auto-renewing contracts.',
  },
  {
    question: 'Can I add more AI agents than my plan includes?',
    answer: 'Additional AI agents are available on eligible AI plans. Starter does not support AI agent add-ons; choose Pro or Scale for AI agents.',
  },
  {
    question: 'Is GST included in the pricing?',
    answer: 'The main prices exclude 18% GST.',
  },
  {
    question: 'Do you offer a startup or NGO discount?',
    answer: 'Yes. Early-stage startups (< 1 year old) and registered NGOs qualify for 30% off any plan. Contact hello@growbro.ai with proof of registration.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Credit card, debit card, UPI, net banking, and NEFT. Annual plans can also be paid via cheque or bank transfer — contact us for details.',
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Everything you need to know about plans, credits, and billing.
          </p>
        </div>

        {/* FAQ List Container */}
        <div className="w-full flex flex-col space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-2xl border ${
                  isOpen
                    ? 'bg-emerald-50/30 border-emerald-300 shadow-sm'
                    : 'bg-white border-gray-200/80 hover:border-gray-300'
                } overflow-hidden`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold tracking-tight ${isOpen ? 'text-emerald-950' : 'text-gray-900'}`}>
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
                  <div className="px-6 pb-6 pt-1 text-gray-600 text-base leading-relaxed">
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