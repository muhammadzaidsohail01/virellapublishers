import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Stats } from "@/components/Stats";
import { Genres } from "@/components/Genres";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { MidCTA } from "@/components/MidCTA";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";
import { SocialRail } from "@/components/SocialRail";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Pricing />
        <Stats />
        <Genres />
        <Process />
        <Portfolio />
        <MidCTA />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <SocialRail />
      <FloatingWhatsApp />
    </>
  );
}
