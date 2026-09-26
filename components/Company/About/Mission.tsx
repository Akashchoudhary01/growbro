export default function OurMissionSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Mission Content */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Tag Pill / Category */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-[#09a372] uppercase">
              OUR MISSION
            </span>
          </div>
          <div className="w-10 h-0.5 bg-[#09a372] -mt-4"></div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Empowering millions of small and large businesses with AI-driven growth.
          </h2>

          {/* Description Paragraph */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            &quot;We believe that sophisticated technology shouldn&apos;t be reserved for elite corporations. Our mission is to bridge the gap between human interaction and machine intelligence, making professional AI automation accessible, affordable, and effective for every entrepreneur.&quot;
          </p>

        </div>

        {/* Right Side: The Story Card */}
        <div className="lg:col-span-6">
          <div className="bg-[#f8fafc] border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm relative text-left">
            
            <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-6">
              The Story Behind GrowBro
            </h3>

            {/* Quote Box */}
            <blockquote className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-6 border-l-2 border-[#09a372] pl-4">
              &quot;What started as a simple realization that business owners were losing over 40% of leads due to slow response times evolved into GrowBro.&quot;
            </blockquote>

            {/* Paragraph Content */}
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Founded by <strong className="text-gray-900 font-semibold">Aakash Roy</strong> and <strong className="text-gray-900 font-semibold">Jatin Aggarwal</strong>, GrowBro AI was born out of a passion for operational excellence. They saw the struggle of manual CRM updates and the friction in mobile commerce. By combining their expertise in AI and customer experience, they built a platform that doesn&apos;t just chat—it sells, books, and grows.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}