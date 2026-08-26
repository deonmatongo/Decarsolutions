import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import FlowSection from "@/components/FlowSection";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyDecar from "@/components/WhyDecar";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Showreel />
      <FlowSection />
      <Stats />
      <Services />
      <WhyDecar />
      <Process />
      <Work />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </>
  );
}
