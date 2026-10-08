import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/ui/PageLoader";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Profile } from "@/components/sections/Profile";
import { Experiences } from "@/components/sections/Experiences";
import { Pathway } from "@/components/sections/Pathway";
import { Skills } from "@/components/sections/Skills";
import { Quote } from "@/components/sections/Quote";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="site-shell">
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Profile />
        <Experiences />
        <Pathway />
        <Skills />
        <Quote />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
