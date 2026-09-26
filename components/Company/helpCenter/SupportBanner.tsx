export default function SupportBanner() {
  return (
    <div className="bg-[#0b1329] rounded-2xl p-8 md:p-10 text-center text-white relative overflow-hidden shadow-lg">
      <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2">
        Can&apos;t find what you&apos;re looking for?
      </h3>
      <p className="text-gray-400 text-xs md:text-sm mb-6">
        Our team is happy to help you get set up.
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white text-sm font-semibold shadow-md transition-all hover:scale-[1.02]"
      >
        Contact Support
        <span>→</span>
      </a>
    </div>
  );
}