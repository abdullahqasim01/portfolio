import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'BS Computer Science',
    institution: 'Superior University, Lahore',
    period: '2023 - 2027',
  },
  {
    degree: 'ICS',
    institution: 'Govt. Shah Hussain Degree and Associate College, Chung, Lahore',
    period: '2021 - 2023',
  },
  {
    degree: 'Matric (Computer Science)',
    institution: 'New Friends Public High School, Chung, Lahore',
    period: '2019 - 2021',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}