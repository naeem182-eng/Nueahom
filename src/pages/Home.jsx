import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TrustSection from "../components/sections/TrustSection";
import Carousel from "../components/sections/Carousel";

export default function Home() {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Hero />
      <Carousel />
      <TrustSection />
      <Footer />
    </div>
  );
}
