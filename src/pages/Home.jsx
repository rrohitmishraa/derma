import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Seo from "../components/Seo";
import { siteConfig } from "../config/site";
import Doctor from "../components/Doctor";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import FloatingCall from "../components/FloatingCall";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import Footer from "../components/Footer";
import MobileContactBar from "../components/MobileContactBar";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />

      <Seo
        title={siteConfig.seo.title}
        description={siteConfig.seo.description}
      />

      <Navbar />

      <main className="pt-20">
        <Hero />
        <Services />
        <Doctor />
        <Contact />
        <Reviews />
        <Gallery />
      </main>

      <Footer />
      <FloatingCall />
      <MobileContactBar />
    </>
  );
}
