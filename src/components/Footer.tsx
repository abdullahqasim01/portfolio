import React from 'react';
import { Link } from './Link';
import { SocialLinks } from './hero/SocialLinks';
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  );
}

export function Footer() {

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#github', label: 'GitHub' },
    // { href: '#leetcode', label: 'Leetcode' },
    { href: '#badges', label: 'Badges' },
    // { href: '#blogs', label: 'Blogs' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

      <div className="container mx-auto px-6 py-8 relative">
        <div className="flex flex-col items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-4 justify-center">
            {links.map(({ href, label }) => (
              <FooterLink key={href} href={href}>{label}</FooterLink>
            ))}
          </nav>

          {/* Social Links */}
          <div className="scale-90">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            <p>let portfolio = fork(<Link href={'https://github.com/decodewithdeepak/Portfolio'}>Deepak Modi's Portfolio</Link>);</p>

          </div>
        </div>
      </div>
    </footer>
  );
}
