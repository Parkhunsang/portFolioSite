import "./styles/app.css";

import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="portfolio-page">
      <Header />

      <main className="site-main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
