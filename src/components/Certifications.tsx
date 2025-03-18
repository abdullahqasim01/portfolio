

import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Getting started with Flutter Development",
    issuer: "Coursera",
    date: "Nov 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/VEYUV9UCAI4K",
    image: "/assets/flutter.jpg",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
    date: "Oct 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/UBERC9JNUANK",
    image: "/assets/python.jpg",
  },
  {
    title: "Introduction to Graph Theory",
    issuer: "Coursera",
    date: "Mar 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/TTLJ3X2LLCWA",
    image: "/assets/gt.jpg",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
