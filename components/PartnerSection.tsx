import Image from "next/image";

const partners = [
  {
    title: "Meta Tech Partner",
    description: "WhatsApp · Instagram · Messenger",
    logoAlt: "Meta Logo",
    image: "/footerLogo/meta.png",
  },
  {
    title: "Google Cloud Partner",
    description: "Calendar · Ads · Workspace",
    logoAlt: "Google Cloud Logo",
    image: "/footerLogo/google.jpeg",
  },
  {
    title: "Razorpay Partner",
    description: "Payments · Subscriptions · Payouts",
    logoAlt: "Razorpay Logo",
    image: "/footerLogo/razerpay.jpeg",
  },
  {
    title: "WhatsApp BSP",
    description: "Official Business Solution Provider",
    logoAlt: "WhatsApp BSP Logo",
    image: "/xr/whatsapp.jpeg",
  },
  {
    title: "Shopify",
    description: "E-commerce Integration",
    logoAlt: "Shopify Logo",
    image: "/xr/shopify.png",
  },
  {
    title: "HubSpot",
    description: "CRM & marketing sync",
    logoAlt: "HubSpot Logo",
    image: "/xr/hs.png",
  },
];

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden py-24 px-4 bg-linear-to-b from-[#f2fcf7] via-[#eefbf4] to-[#f4fcf8]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Top Badge Pill */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#e1f7ec] border border-[#bbf3d6] text-[#0f763e] text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
          OFFICIAL TECHNOLOGY PARTNERS
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight max-w-3xl mx-auto leading-tight">
          Built on the platforms your customers <br />
          <span className="text-[#10b981]">already trust</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Growbro is a verified partner with the world&apos;s largest messaging, cloud, and payment providers — so every integration is direct, secure, and approved.
        </p>

        {/* Partners Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#d1fae5] shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:border-[#10b981]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  {/* LOGO SPACE with subtle zoom effect on hover */}
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Image 
                      src={partner.image} 
                      alt={partner.logoAlt} 
                      width={32} 
                      height={32} 
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0f172a] text-base group-hover:text-[#10b981] transition-colors duration-200">
                      {partner.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Pill Footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-end">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f0fdf4] border border-[#bbf3d6] text-[#15803d] text-[10px] font-bold tracking-wider shadow-xs">
                  <svg className="w-3 h-3 text-[#16a34a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}