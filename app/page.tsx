import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f]">
      <Navbar />
      <SocialSidebar />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <Contact />
      <Footer />
    </div>
  );
}
