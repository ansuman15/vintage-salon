import { HeroSection } from "@/components/HeroSection";
import { MarqueePartners } from "@/components/MarqueePartners";
import { AboutSection } from "@/components/AboutSection";
import { ServicesInteractive } from "@/components/ServicesInteractive";
import { WhyChooseUsGrid } from "@/components/WhyChooseUsGrid";
import { SpecialCollections } from "@/components/SpecialCollections";
import { TeamSpecialists } from "@/components/TeamSpecialists";
import { ScrollingFeatures } from "@/components/ScrollingFeatures";
import { MomentsGallery } from "@/components/MomentsGallery";
import { FAQSection } from "@/components/FAQSection";
import { ClientStories } from "@/components/ClientStories";
import { BeautyInsights } from "@/components/BeautyInsights";
import { InstagramCarousel } from "@/components/InstagramCarousel";
import { ElevateCTA } from "@/components/ElevateCTA";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDF7F2] selection:bg-[#1C1C1C] selection:text-white">
      <HeroSection />
      <MarqueePartners />
      <AboutSection />
      <ServicesInteractive />
      <WhyChooseUsGrid />
      <SpecialCollections />
      <TeamSpecialists />
      <ScrollingFeatures />
      <MomentsGallery />
      <FAQSection />
      <ClientStories />
      <BeautyInsights />
      <InstagramCarousel />
      <ElevateCTA />
      <SiteFooter />
    </main>
  );
}
