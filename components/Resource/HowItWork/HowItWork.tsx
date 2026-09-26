import AutomateConversations from "./AutomateConversation";
import NurtureAndConvert from "./LastSection";
import MetaChannels from "./MetaChannel";
import TrainAiAgent from "./TrainAiAgents";

export default function AutomateStepsSection() {
 
  return (
    <section className="relative overflow-hidden py-24 px-4 bg-linear-to-b from-[#f2fcf7] via-[#eafaf3] to-[#f4fcf8]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-[#09a372] uppercase block mb-3">
            THE PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Automate your business in 4 simple steps
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            No coding required. A seamless setup process designed to get your Meta Automation Suite running instantly.
          </p>
        </div>

        {/* Steps List */}
        <div >
        <MetaChannels/>
        <TrainAiAgent/>
        <AutomateConversations/>
        <NurtureAndConvert/>
              
        </div>

      </div>
    </section>
  );
}