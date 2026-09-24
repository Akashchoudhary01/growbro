import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';
import ProductFeature from '@/components/ProductFeature';
import FeaturesMarquee from '@/components/FeaturesMarquee';
import CustomerReviews from '@/components/CustomerReviews';
import FinalCTA from '@/components/FinalCTA';
import ComplianceSection from '@/components/ComplianceSection';
import CReview from '@/components/CReview';
import IntegrationsSection from '@/components/IntegrationSection';
// import ClientsSection from '@/components/ClientSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProductSection/>
      <ProductFeature/>
      <FeaturesMarquee/>
      {/* <CustomerReviews/> */}
      <IntegrationsSection/>
      <CReview/>
      <ComplianceSection/>
      <FinalCTA/>
      <Footer/>
  
    </main>
  );
}