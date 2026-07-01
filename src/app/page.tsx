import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import Challenge from "@/components/Challenge";
import Services from "@/components/Services";
import { Comparison, Results } from "@/components/ComparisonResults";
import Products from "@/components/Products";
import Method from "@/components/Method";
import { WhyVisura, About } from "@/components/WhyAbout";
import Faq from "@/components/Faq";
import DiagnosticForm from "@/components/DiagnosticForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientsMarquee />
        <Challenge />
        <Services />
        <Comparison />
        <Results />
        <Products />
        <Method />
        <WhyVisura />
        <About />
        <Faq />
        <DiagnosticForm />
      </main>
      <Footer />
    </>
  );
}
