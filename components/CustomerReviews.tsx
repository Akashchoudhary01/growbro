'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Quote } from 'lucide-react';

interface Review {
  id: string;
  companyName: string;
  companyLogo: string;
  quote: string;
  authorName: string;
  authorRole: string;
  stats: { value: string; label: string }[];
  image: string;
}

const reviewsData: Review[] = [
  {
    id: 'pickyourtrail',
    companyName: 'pickyourtrail',
    companyLogo: 'PickYourTrail',
    quote:
      "Growbro has transformed the way we interact with our prospects and customers. From capturing leads to using tailored solutions to engage with users to qualifying leads using advanced chatbot capabilities to even managing travel bookings on WhatsApp, Growbro's platform has helped us boost our business growth and team productivity tremendously.",
    authorName: 'Hari Ganapathy',
    authorRole: 'Co-founder and CEO of Pickyourtrail',
    stats: [
      { value: '77%', label: 'Increase in lead generation' },
      { value: '70%', label: 'Business growth impact' },
      { value: '40%', label: 'Higher team productivity' },
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'sothebys',
    companyName: 'Sotheby\'s',
    companyLogo: 'Sotheby\'s',
    quote:
      'With Growbro, automating customer inquiries across WhatsApp and Instagram reduced our response times by 85%. Our sales team now spends time exclusively on high-value qualified buyer conversations.',
    authorName: 'Elena Rostova',
    authorRole: 'Head of Growth at Sotheby\'s Realty',
    stats: [
      { value: '85%', label: 'Faster response times' },
      { value: '3.5x', label: 'More booked viewings' },
      { value: '95%', label: 'Customer satisfaction score' },
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'bluemagic',
    companyName: 'BlueMagic',
    companyLogo: 'BlueMagic',
    quote:
      'Managing automated support workflows without coding knowledge was effortless. Growbro helped us scale our patient appointment bookings seamlessly across multiple messaging channels.',
    authorName: 'Dr. Aaron Smith',
    authorRole: 'Operations Manager at BlueMagic',
    stats: [
      { value: '60%', label: 'Reduction in support tickets' },
      { value: '2.8x', label: 'More appointments booked' },
      { value: '24/7', label: 'Automated query handling' },
    ],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'gostudy',
    companyName: 'Gostudy',
    companyLogo: 'Gostudy',
    quote:
      'Our lead qualification process completely shifted from manual follow-ups to instant AI conversations on WhatsApp. Students get answers instantly and conversion rates doubled.',
    authorName: 'Ananya Sharma',
    authorRole: 'Chief Marketing Officer at Gostudy',
    stats: [
      { value: '2x', label: 'Higher conversion rates' },
      { value: '10k+', label: 'Monthly AI conversations' },
      { value: '50%', label: 'Cost per acquisition drop' },
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
];

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance loop every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const activeReview = reviewsData[activeIndex];

  return (
    <section className="py-20 bg-white select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Hear from the power users of Growbro
          </h2>
          <button className="inline-flex items-center gap-1.5 bg-[#3B82F6] hover:bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors shrink-0 self-start sm:self-auto">
            Read all customer stories <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Moving Auto-Cycle Company Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200 mb-8 bg-gray-50/50 overflow-hidden">
          {reviewsData.map((review, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={review.id}
                onClick={() => setActiveIndex(index)}
                className={`py-5 px-6 flex items-center justify-center font-bold text-lg transition-colors relative overflow-hidden ${
                  isActive
                    ? 'bg-white text-emerald-600 shadow-xs'
                    : 'text-gray-400 hover:text-gray-700 bg-gray-50'
                }`}
              >
                {/* Animated Top Progress Bar */}
                {isActive && (
                  <span className="absolute top-0 left-0 bottom-0 right-0 h-1 bg-gray-100">
                    <span className="block h-full bg-[#10B981] animate-progress" />
                  </span>
                )}
                {review.companyLogo}
              </button>
            );
          })}
        </div>

        {/* Review Card with Fade Animation */}
        <div
          key={activeReview.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-gray-100 p-6 sm:p-10 rounded-xl shadow-xs animate-fadeIn"
        >
          {/* Left Side Content */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <Quote className="w-10 h-10 text-gray-900 fill-gray-900 mb-4 rotate-180" />

              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 font-medium min-h-[100px]">
                {activeReview.quote}
              </p>

              <div className="mb-8">
                <h4 className="text-base font-bold text-gray-900">{activeReview.authorName}</h4>
                <p className="text-xs sm:text-sm text-gray-500">{activeReview.authorRole}</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div>
              <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6 mb-6">
                {activeReview.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <button className="bg-black hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2.5 rounded flex items-center gap-1.5 transition-colors">
                Read story <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="lg:col-span-5 h-full">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <img
                src={activeReview.image}
                alt={activeReview.authorName}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}