import AboutHeroSection from "@/components/Company/About/AboutHeroSection";
import ScaleBannerSection from "@/components/Company/About/Banner";
import LetGrowSection from "@/components/Company/About/CTA";
import OurMissionSection from "@/components/Company/About/Mission";
import TeamSection from "@/components/Company/About/TeamSection";
import WhatWeOfferSection from "@/components/Company/About/WhatWeOffer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <div>
        <Navbar/>
        <AboutHeroSection/>
        <OurMissionSection/>
        <WhatWeOfferSection/>
        <ScaleBannerSection/>
        <TeamSection/>
        <LetGrowSection/>
        <Footer/>
      
    </div>
  )
}
export default page;


