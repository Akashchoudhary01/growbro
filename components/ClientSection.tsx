import React from 'react';
import Image from 'next/image';

export interface ClientItem {
  id?: string | number;
  name: string;
  logo: string; // Image URL from your CMS backend
}

interface ClientMarqueeProps {
  clients?: ClientItem[];
}

export default function ClientSection({ clients }: ClientMarqueeProps) {
  
  // Default list using your uploaded paths
  const defaultClients: ClientItem[] = [
    { name: 'Client 1', logo: '/clientLogo1.png' },
    { name: 'Accurate Ampere', logo: '/clientLogo2.png' },
    { name: 'Achivia', logo: '/clientLogo3.png' },
    { name: 'Client 4', logo: '/clientLogo4.png' },
    { name: 'Bharat Marble', logo: '/clientLogo5.png' },
    { name: 'Client 6', logo: '/clientLogo6.png' },
    { name: 'Divine Talk', logo: '/clientLogo7.webp' },
    { name: 'ELT Corporate', logo: '/clientLogo8.png' },
    { name: 'INFLYIX', logo: '/clientLogo9.webp' },
    { name: 'Kamkus College', logo: '/clientLogo10.webp' },
    { name: 'Client 10', logo: '/clientLogo11.png' },
    { name: 'Laxsho', logo: '/clientLogo12.png' },
    { name: 'IHM Rohtak', logo: '/clientLogo13.png' },
    { name: 'Mythri Tours', logo: '/clientLogo14.png' },
    { name: 'NUBRA', logo: '/clientLogo15.png' },
    { name: 'Prochem', logo: '/clientLogo16.jpeg' },
    { name: 'Reverse Thought', logo: '/clientLogo17.png' },
    { name: 'Curecabin', logo: '/clientLogo18.jpg' },
  ];

  const clientList = clients && clients.length > 0 ? clients : defaultClients;

  // Duplicate the list to create a seamless infinite marquee loop
  const duplicatedClients = [...clientList, ...clientList];

  return (
    <section className="bg-white py-16 overflow-hidden w-full">
      
      {/* Container restricted to max-w-6xl to match your upper header element width */}
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-xs md:text-sm font-bold tracking-widest text-gray-800 uppercase mb-2">
            OUR CLIENTS
          </h3>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Trusted by Growing businesses
          </h2>
        </div>

        {/* Bounded Infinite Scrolling Track */}
        <div className="relative w-full overflow-hidden flex">
          
          {/* Left & Right Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track with full color images */}
          <div className="animate-marquee flex items-center space-x-12 py-4">
            {duplicatedClients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-12 w-28 flex-shrink-0 relative"
              >
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}