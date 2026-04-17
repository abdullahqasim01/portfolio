import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'Python Developer',
    company: 'Freelance (Fiverr)',
    period: 'Jan 2023 - Oct 2025',
    description: 'Developed softwares and scripts for clients using Python. Worked on web scraping, automation, and data analysis projects.',
  },
  {
    title: 'Frontend Developer',
    company: 'WaveTech IOT',
    period: 'Feb 2025 - Present',
    description: 'Maintained and developed new features for the company\'s dashboard using React, Material UI, Redux and Apex Charts.',
  },
  {
    title: 'Junior Web Developer',
    company: 'Infinitiv.ai',
    period: 'Oct 2025 - Present',
    description: 'Building and maintaining web applications using modern technologies. Collaborating with the team to develop features, optimize performance, and implement best practices in web development.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}