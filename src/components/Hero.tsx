import { ArrowDown } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ActionButtons } from './hero/ActionButtons';
import { ContactInfo } from './hero/ContactInfo';

export function Hero() {
  const roles = [
    "Full-Stack Developer",
    "DSA Enthusiast",
    "Problem Solver",
    "Tech Innovator",
    "Lifelong Learner",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

      <div className="container mx-auto px-4 py-24 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">

          <div className="relative inline-block mb-8 group">
            <img
              src="/assets/profile.png"
              alt="Abdullah Qasim"
              className="relative w-48 h-48 mx-auto rounded-full shadow-xl transition-transform duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/50 dark:border-purple-500/50 animate-pulse-border group-hover:animate-none"></div>
          </div>

          <div className="space-y-4">
            <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-4">
              Hey! <span className="inline-block origin-[70%_70%] animate-wave">👋</span> I'm
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Abdullah Qasim
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              I'm a <TypeWriter words={roles} delay={100} />
            </div>
          </div>

          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            I build elegant, efficient, and scalable web applications. Here's a bit more about me and what I do.
          </p>

          <div className="mt-8">
            <ActionButtons />
          </div>

          <div className="mt-10">
            <ContactInfo />
          </div>

          <div className="mt-12">
            <SocialLinks />
          </div>

        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}