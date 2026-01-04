import { AboutSection } from "../components/AboutSection.jsx"
import { ContactSection } from "../components/ContactSection.jsx"
import { Footer } from "../components/Footer.jsx"
import { HeroSection } from "../components/HeroSection.jsx"
import { Navbar } from "../components/Navbar.jsx"
import { ProjectsSection } from "../components/ProjectsSection.jsx"
import { SkillSection } from "../components/SkillSection.jsx"
import { StarBackground } from "../components/StarBackfround.jsx"
import { ThemeToggle } from "../components/ThemeToggle.jsx"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle*/ }
        <ThemeToggle/>
        {/*Backfround Effects*/ }
        <StarBackground />

        {/*Navbar*/ }
        <Navbar />

        {/*Main Content*/ }

        <main>
            <HeroSection/>
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/*Footer*/ }
        <Footer />


    </div>
}