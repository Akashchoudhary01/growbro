import Footer from "@/components/Footer"
import AutomatedSupportSection from "@/components/industries/customer-care/AutomateSupportSection"
import ResolvingQueriesCTA from "@/components/industries/customer-care/CTA"
import PerformanceSection from "@/components/industries/customer-care/PerformanceSection"
import SupportHero from "@/components/industries/customer-care/SupportHero"
import SupportProblemSection from "@/components/industries/customer-care/SupportProblem"
import HowItWorksSection from "@/components/industries/Marketing/HowItWorks"
import Navbar from "@/components/Navbar"

function page() {
  return (
    <div>
        <Navbar/>
        <SupportHero/>
        <SupportProblemSection/>
         <AutomatedSupportSection/>
        <HowItWorksSection/>
        {/* <PerformanceSection/> */}
        <ResolvingQueriesCTA/>
        <Footer/>
      
    </div>
  )
}

export default page
