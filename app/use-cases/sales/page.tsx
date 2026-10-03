import Footer from '@/components/Footer'
import ConsolidationStatsSection from '@/components/industries/sales/ConsolidationStatsSection'
import MultiChannelProblemSection from '@/components/industries/sales/MultiChannelProblemSection'
import OmnichannelCTA from '@/components/industries/sales/OmniChannelCTA'
import OmnichannelFeaturesSection from '@/components/industries/sales/OmnichannelFeaturesSection'
import OmniChannelHero from '@/components/industries/sales/OmniChannelHero'
import OmnichannelTimelineSection from '@/components/industries/sales/OmnichannelTimelineSection'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <OmniChannelHero/>
        <ConsolidationStatsSection/>
        <MultiChannelProblemSection/>
        <OmnichannelFeaturesSection/>
        <OmnichannelTimelineSection/>
        <OmnichannelCTA/>
        <Footer/>
      
    </div>
  )
}

export default page
