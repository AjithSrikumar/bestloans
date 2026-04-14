import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import StickySideForm from "@/components/StickySideForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ExitIntentModal from "@/components/ExitIntentModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <ProcessSection />
        <SocialProof />
        <FAQSection />
      </main>
      <Footer />
      <StickyMobileBar />
      <StickySideForm />
      <FloatingWhatsApp />
      <ExitIntentModal />
    </>
  );
}
