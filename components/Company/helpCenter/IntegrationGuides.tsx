// import { Link } from "lucide-react";
// import MetaChannels from "@/components/Resource/HowItWork/MetaChannel";
import Image from "next/image";
import Link from "next/link";

const guides = [
  {
    title: "WhatsApp Number Integration Guide",
    description: "Step-by-step process to connect a WhatsApp Business number with GrowBro CRM using Meta Embedded Signup.",
    iconAlt: "Meta Logo",
    iconImage: "/xr/whatsapp.jpeg",
    viewLink: "#",
    downloadLink: "#",
  },
  {
    title: "Instagram & Messenger Integration Guide",
    description: "Connect your Instagram and Messenger accounts to GrowBro CRM so your AI agent can handle DMs automatically.",
    iconAlt: "Meta Logo",
    iconImage: "/xr/Instagram.png",
    viewLink: "#",
    downloadLink: "#",
  },
];

export default function IntegrationGuides() {
  return (
    <div>
      <div className="mb-4">
        <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">
          INTEGRATION GUIDES
        </span>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#d1fae5] flex items-center justify-center mb-5 overflow-hidden">
                <Image 
                  src={guide.iconImage} 
                  alt={guide.iconAlt} 
                  width={30} 
                  height={30} 
                />
              </div>

              <h3 className="font-bold text-[#0f172a] text-base mb-2">
                {guide.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                {guide.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold">
              <a 
                href={guide.viewLink} 
                className="text-[#10b981] hover:text-[#059669] flex items-center gap-1 transition-colors"
              >
                View guide <span className="text-sm">→</span>
              </a>

              <Link
                href={guide.downloadLink} 
                className="text-gray-400 hover:text-gray-600 flex items-center gap-1.5 transition-colors font-normal"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}