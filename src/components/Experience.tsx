import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'Python Developer',
    company: 'Freelance (Fiverr)',
    period: 'Jan 2023 - Present',
    description: 'Developed softwares and scripts for clients using Python. Worked on web scraping, automation, and data analysis projects.',
  },
  {
    title: 'Frontend Developer',
    company: 'WaveTech IOT',
    period: 'Feb 2025 - Present',
    description: 'Maintained and developed new features for the company\'s dashboard using React, Material UI, Redux and Apex Charts.',
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