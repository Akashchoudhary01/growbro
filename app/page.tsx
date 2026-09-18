import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
// import ClientsSection from '@/components/ClientSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProductSection/>
    </main>
  );
}