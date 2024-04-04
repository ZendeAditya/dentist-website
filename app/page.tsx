import About from "@/Components/About";
import Brands from "@/Components/Brands";
import ClinicOverview from "@/Components/ClinicOverview";
import CTA from "@/Components/CTA";
import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import Insurance from "@/Components/Insurance";
import Nav from "@/Components/Nav";
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Features />
      <Insurance />
      <ClinicOverview />
      <Brands />
      <CTA />
    </main>
  );
}
