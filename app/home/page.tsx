import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SpaceParallax from "../components/parallax/SpaceParallax";

export default function Page() {
  return (
    <>
      <HeroSection className="max-w-5xl mx-auto" />
      <SpaceParallax />
      <div className="px-8 max-w-5xl mx-auto">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
