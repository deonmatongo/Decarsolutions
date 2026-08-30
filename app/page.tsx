import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import ClientMarquee from "@/components/ClientMarquee";
import ValueStatement from "@/components/ValueStatement";
import Services from "@/components/Services";
import FlowSection from "@/components/FlowSection";
import TailoredSolutions from "@/components/TailoredSolutions";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Showreel />
      <ClientMarquee />
      <ValueStatement />
      <Services />
      <FlowSection />
      <TailoredSolutions />
      <Benefits />
      <Process />
      <Work />
      <Team />
      <Faq />
      <FinalCta />
    </>
  );
}
