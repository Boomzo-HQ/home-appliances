import Footer from "@/components/general/Footer";
import Hero from "@/components/general/Hero";
import Navbar from "@/components/general/Navbar";
import Services from "@/components/general/Services";
import Testimonials from "@/components/general/Testimonials";
import UtilityBar from "@/components/general/UtilityBar";

export default function Home() {
  return (
    <main>
      <UtilityBar />
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
