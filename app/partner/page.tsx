import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PartnerHero from "@/components/Partner/hero"
// import ChannelPartner from "@/components/Partner/hero"
import HowItWorks from "@/components/Partner/HowItWorks"
import PartnerCTA from "@/components/Partner/PartnerCTA"
import PartnerEarningsStructure from "@/components/Partner/PartnerEarningsStructure"
import PartnerFAQ from "@/components/Partner/PartnerFAQ"
import PartnershipBenefits from "@/components/Partner/PartnershipBenefits"
import ReliablePayments from "@/components/Partner/ReliablePayments"
import WhatsIncluded from "@/components/Partner/WhatItIncludes"

function page() {
  return (
    <div>
        <Navbar/>
        <PartnerHero/>
        <PartnershipBenefits/>
        <PartnerEarningsStructure/>
        <HowItWorks/>
        <WhatsIncluded/>
        <ReliablePayments/>
        <PartnerFAQ/>
        <PartnerCTA/>
        <Footer/>
      
    </div>
  )
}

export default page
