import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import TeamExpertise from "@/components/TeamExpertise";
import Testimonials from "@/components/Testimonials";
import HappyClients from "@/components/HappyClients";
import SecurityCompliance from "@/components/SecurityCompliance";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Process />
      <Industries />
      <CaseStudies />
      <TeamExpertise />
      <Testimonials />
      <HappyClients />
      <SecurityCompliance />
      <CTABanner />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;