import React from 'react';
import { UploadCloud } from 'lucide-react';

export default function TrainAiAgent() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Illustration / Mockup (Knowledge Base UI) */}
        <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative order-2 lg:order-1">
          
          {/* Window Header */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <span className="text-xs font-medium text-gray-400 tracking-wide">Knowledge Base</span>
            <div className="w-10"></div> {/* Spacer for symmetry */}
          </div>

          {/* Content Area */}
          <div className="relative h-72 md:h-80 flex flex-col items-center justify-center p-6 bg-linear-to-b from-white to-gray-50/50">
            
            {/* Drag & Drop Box */}
            <div className="w-full max-w-sm border-2 border-dashed border-emerald-300 bg-emerald-50/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#10b981] flex items-center justify-center mb-2">
                <UploadCloud className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-gray-700">
                Drag &amp; drop company PDFs
              </p>
            </div>

            {/* AI Status Badge */}
            <div className="mt-6 flex flex-col items-center space-y-1.5">
              <div className="w-10 h-10 rounded-xl bg-[#10b981] flex items-center justify-center text-white font-bold text-xs shadow-md shadow-emerald-500/20">
                AI
              </div>
              <span className="text-xs font-medium text-gray-500">
                Learning your business...
              </span>
            </div>

          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start space-y-4 order-1 lg:order-2">
          <div className="flex items-center space-x-2 text-[#10b981] font-semibold text-sm tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#10b981]"></span>
            <span>Step 2</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Train Your AI Agent
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Upload PDFs, input website URLs, or paste FAQs. Our advanced RAG AI instantly learns your business logic and brand voice—no coding required.
          </p>
        </div>

      </div>
    </section>
  );
}