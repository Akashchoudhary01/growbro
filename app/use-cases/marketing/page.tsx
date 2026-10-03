import Footer from "@/components/Footer"
import BroadcastsHero from "@/components/industries/Marketing/Broadcast/BroadcastsHero"
import CampaignFunnel from "@/components/industries/Marketing/CampaignFunnel"
import FeaturesSection from "@/components/industries/Marketing/FeatureMarketing"
import HowItWorksSection from "@/components/industries/Marketing/HowItWorks"
import ProblemSection from "@/components/industries/Marketing/ProblemSection"
import RetargetingAndCTA from "@/components/industries/Marketing/RetargetingAndCTA"
import StatsSection from "@/components/industries/Marketing/StatusSection"
import Navbar from "@/components/Navbar"

function page() {
  return (
    <div>
        <Navbar/>
        <BroadcastsHero/>
        <StatsSection/>
        <ProblemSection/>
        <FeaturesSection/>
        <CampaignFunnel/>
        <HowItWorksSection/>
        <RetargetingAndCTA/>

        <Footer/>
      
    </div>
  )
}

export default page
