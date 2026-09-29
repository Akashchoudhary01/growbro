import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import EveryPlanIncludes from "@/components/Pricing/EveryPlanIncludes"
import TalkToUsCTA from "@/components/Pricing/PricingCTA"
import PricingFAQ from "@/components/Pricing/PricingFAQ"
import PricingFeaturesBar from "@/components/Pricing/PricingFeatureBar"
import PricingHeader from "@/components/Pricing/PricingHeader"
import UnderstandingCredits from "@/components/Pricing/UnderstandingCredits"
import PricingSection from "@/components/Pricing/PricingSection"

function page() {
  return (
    <div>
        <Navbar/>
        <PricingHeader/>
        <PricingSection/>
        <PricingFeaturesBar/>
        <EveryPlanIncludes/>
        <UnderstandingCredits/>
        <PricingFAQ/>
        <TalkToUsCTA/>
        <Footer/>
      
    </div>
  )
}

export default page
