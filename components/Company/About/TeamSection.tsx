import Image from "next/image";
import Link from "next/link";
import { FaLinkedin} from "react-icons/fa"; // Or use any icon provider/svg you prefer

const teamMembers = [
  {
    name: "Aakash Roy",
    role: "CO-FOUNDER & TECH LEAD",
    bio: "Aakash oversees the technical architecture and AI engineering, ensuring that every GrowBro agent is powered by cutting-edge large language models.",
    image: "/Team/aakash.jpeg", // Replace with your actual image path in public folder
    linkedinUrl: "https://www.linkedin.com/in/aakash-roy/",
  },
  {
    name: "Jatin Aggarwal",
    role: "CO-FOUNDER & VISIONARY",
    bio: "Jatin leads the strategic direction of GrowBro AI, focusing on the intersection of AI scalability and user-centric design to solve real-world business hurdles.",
    image: "/Team/jatin-profile.jpg", // Replace with your actual image path in public folder
    linkedinUrl: "https://www.linkedin.com/in/jatin-aggarwal-ds/",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#f2fcf7] via-[#eafaf3] to-[#f4fcf8]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Heading & Subtitle */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-3">
          Our Team & Vision
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-16">
          The pioneers behind the intelligence that drives your business forward.
        </p>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-emerald-100/80 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col md:flex-row items-stretch"
            >
              {/* Left Image Space */}
              <div className="relative w-full md:w-1/2 min-h-[280px] bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Right Content Space */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#09a372] uppercase block mb-1">
                    {member.role}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                    {member.name}
                  </h3>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* LinkedIn Link */}
                <div>
                  <Link
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#09a372] hover:text-[#078a61] transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}