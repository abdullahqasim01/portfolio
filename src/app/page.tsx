"use client";
import Image from "next/image";
import { About } from "../components/About";
import { Badges } from "../components/Badges";
import { Blogs } from "../components/Blogs";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { GitHub } from "../components/GitHub";
import { Hero } from "../components/Hero";
import { LoadingScreen } from "../components/loading/LoadingScreen";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { CustomCursor } from "../components/ui/CustomCursor";
import { useLoading } from "../hooks/useLoading";


export default function Home() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        {/* <Leetcode /> */}
        <Badges />
        {/* <Blogs /> */}
        <Experience />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
        {/* <Analytics /> */}
      </div>
    </>
  );
}
