export default function Header() {
  return (
    <div className="text-center">
      {/* Top Icon Badge */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#e1f7ec] border border-[#bbf3d6] flex items-center justify-center shadow-xs text-[#10b981]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
          </svg>
        </div>
      </div>

      {/* Heading & Subtitle */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-3">
        Help Center
      </h2>
      <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
        Setup guides and documentation to help you get the most out of GrowBro. More guides are added regularly as new features and integrations ship.
      </p>
    </div>
  );
}