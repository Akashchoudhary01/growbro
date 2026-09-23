import React from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  imageBg: string; // Background color for the circular avatar backdrop
  imageSrc: string;
  quote: string;
}

export default function CReview() {
  const reviews: Testimonial[] = [
    {
      name: "Priyal Ostwal",
      role: "Marketing Manager",
      company: "Bharat Marbal ",
      imageBg: "bg-emerald-300",
      imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      quote: "Growbro team has shown exceptional professionalism, reliability and a true commitment to customer satisfaction."
    },
    {
      name: "Akash Jain",
      role: "Business Executive",
      company: "InFLYIX",
      imageBg: "bg-amber-400",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      quote: "Growbro helped us increase our customer engagement. Our customer engagement increased from 35% to 90% with Growbro's Smart Retargeting feature."
    },
    {
      name: "Achina Mayya",
      role: "Founder & CEO",
      company: "DivineTalk",
      imageBg: "bg-indigo-300",
      imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
      quote: "Growbro has been pivotal for us. The personalised interactions and instant responses greatly improved our engagement rates, and more importantly our sales!"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Customer Success
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Loved by Fast-Growing Businesses
          </h2>
          <p className="mt-4 text-gray-600">
            See how founders and marketing leaders are scaling revenue effortlessly with Growbro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {/* Circular Avatar with Colored Background */}
              <div className={`w-24 h-24 rounded-full ${review.imageBg} p-1 mb-6 overflow-hidden relative shadow-inner`}>
                <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                  <Image 
                    src={review.imageSrc} 
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="font-bold text-lg text-gray-900">{review.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                {review.role}, <span className="font-medium text-gray-700">{review.company}</span>
              </p>

              {/* Divider / Spacer */}
              <div className="w-12 h-0.5 bg-gray-100 my-5"></div>

              {/* Quote Text */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {review.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}