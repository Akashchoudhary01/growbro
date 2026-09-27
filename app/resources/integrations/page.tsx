import Footer from "@/components/Footer"
import IntegrationsSection from "@/components/IntegrationSection"
import Navbar from "@/components/Navbar"
import CustomWebhookSection from "@/components/Resource/Integration/CustumWebhook"
import TechStackHero from "@/components/Resource/Integration/Hero"
import Integrations from "@/components/Resource/Integration/Integration"
import IntegrationGrid from "@/components/Resource/Integration/IntegrationGrid"

function page() {
  return (
    <div>
        <Navbar/>
        <TechStackHero/>
        <IntegrationGrid/>
        <Integrations/>
        <CustomWebhookSection/>
        <Footer/>
      
    </div>
  )
}

export default page
