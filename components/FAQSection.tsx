"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is GrowBro and how is it different from other WhatsApp tools?",
    answer: "GrowBro is an AI agent platform — not just a messaging tool. While tools like AiSensy and WATI help you send bulk messages, GrowBro's agents actually complete transactions inside the conversation: taking orders, booking appointments, collecting payments via UPI/Razorpay, and updating your CRM automatically."
  },
  {
    question: "Do I need coding skills or a developer to set up GrowBro?",
    answer: "Zero. GrowBro is 100% no-code. Upload your business information, connect your WhatsApp number, and your AI agent is live in under 5 minutes. No developer, no API calls, no technical setup."
  },
  {
    question: "Which channels does GrowBro work on?",
    answer: "GrowBro works across the full Meta suite: WhatsApp Business, Instagram DMs, Facebook Messenger, and your website chatbot. One AI agent handles all four simultaneously from a single dashboard."
  },
  {
    question: "Does GrowBro charge extra for WhatsApp messages?",
    answer: "No. GrowBro charges zero markup on Meta message costs. You pay Meta directly at their standard rates."
  },
  {
    question: "Can GrowBro collect payments inside WhatsApp?",
    answer: "Yes. GrowBro integrates with Razorpay, UPI, and PayTM. Your customer receives a payment link inside the WhatsApp conversation and can pay without leaving the chat. Payment status updates your CRM automatically."
  },
  {
    question: "What CRMs does GrowBro integrate with?",
    answer: "GrowBro integrates natively with Zoho CRM, HubSpot, and Google Sheets. Custom webhook support is available on the Scale plan for any CRM with an API."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes — Free Forever, our Free plan is available forever, with no credit card required. Your AI assistant is ready to use from day one."
  },
  {
    question: "Does GrowBro support Hindi and regional Indian languages?",
    answer: "Yes. GrowBro understands and responds in Hindi, Hinglish, and 10+ Indian regional languages. The AI handles multi-language conversations automatically, even within the same chat thread."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white text-[#111827]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Everything You&apos;re Wondering About GrowBro
        </h2>
        
        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none hover:text-gray-600 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-sm md:text-base">
                  {faq.question}
                </span>
                <span className="ml-6 shrink-0 text-gray-400 text-2xl font-light leading-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}