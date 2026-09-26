import Navbar from "@/components/Navbar";
import Header from "@/components/Company/helpCenter/Header";
import IntegrationGuides from "@/components/Company/helpCenter/IntegrationGuides";
import SupportBanner from "@/components/Company/helpCenter/SupportBanner";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-linear-to-b from-[#f2fcf7] via-[#eefbf4] to-[#f4fcf8]">
        <div className="py-20 px-4 max-w-4xl mx-auto space-y-12">
          <Header />
          <IntegrationGuides />
          <SupportBanner />
        </div>
      </main>

      <Footer />
    </>
  );
}