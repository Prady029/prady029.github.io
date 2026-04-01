import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Fixed animated background */}
      <Background />

      {/* Sticky nav */}
      <Navbar />

      {/* Page sections */}
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  );
}
