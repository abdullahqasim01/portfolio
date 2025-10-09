"use client";
import { About } from "../components/About";
import { Badges } from "../components/Badges";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { GitHub } from "../components/GitHub";
import { LoadingScreen } from "../components/loading/LoadingScreen";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { CustomCursor } from "../components/ui/CustomCursor";
import { useLoading } from "../hooks/useLoading";
import { Header } from "../components/Header";


export default function Home() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <Header />
        <main>
          <About />
          <Skills />
          <Projects />
          <GitHub />
          <Badges />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}