import Footer from "@/components/general/Footer";
import Hero from "@/components/general/Hero";
import Navbar from "@/components/general/Navbar";
import Services from "@/components/general/Services";
import Testimonials from "@/components/general/Testimonials";

export default function Home() {
  return (
    <main>
      {/* <UtilityBasr /> */}
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
