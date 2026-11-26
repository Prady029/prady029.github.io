import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen">
      <StructuredData />
      <Background />
      <Navbar />
      <main className="relative z-10 max-w-editorial mx-auto px-5 sm:px-8">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
}
