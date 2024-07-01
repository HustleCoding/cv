"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  CodeIcon,
  BrainIcon,
  GithubIcon,
  SunIcon,
  MoonIcon,
  CalendarIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
}: ProjectCardProps) => (
  <div className="bg-background dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <Image
      src={image}
      alt={title}
      width={500}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground dark:text-gray-300 mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-primary/10 text-primary px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {liveLink && (
          <Link
            href={liveLink}
            className="flex items-center text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon className="w-4 h-4 mr-2" />
            Live Demo
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            className="flex items-center text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-4 h-4 mr-2" />
            GitHub
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default function PortfolioContent() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isDarkMode ? "dark" : ""}`}>
      <ParticleBackground isDarkMode={isDarkMode} />
      <header className="bg-primary/80 backdrop-blur-sm text-primary-foreground py-8 px-4 md:px-6 dark:bg-gray-900/80 dark:text-white relative z-10">
        <div className="container mx-auto flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold">Florin Dobinciuc</h1>
          <p className="text-xl font-medium text-center">
            Frontend Developer & Deep Work Practitioner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="mailto:florin.dobinciuc@learninglab.cloud"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
              prefetch={false}
            >
              <MailIcon className="w-4 h-4" />
              florin.dobinciuc.dev@gmail.com
            </Link>
            <Link
              href="tel:0749641796"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
              prefetch={false}
            >
              <PhoneIcon className="w-4 h-4" />
              0749641796
            </Link>
            <Link
              href="https://www.linkedin.com/in/florin-dobinciuc-558487312/"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
              prefetch={false}
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/FlorinDobinciuc"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
              prefetch={false}
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </Link>
            <Link
              href="https://calendly.com/florin-dobinciuc-dev/15-min"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <CalendarIcon className="w-4 h-4" />
              Schedule a short Meeting
            </Link>
          </div>
          <Button onClick={toggleDarkMode} className="mt-4" variant="outline">
            {isDarkMode ? (
              <SunIcon className="w-4 h-4 mr-2" />
            ) : (
              <MoonIcon className="w-4 h-4 mr-2 text-dark" />
            )}
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </header>
      <main className="flex-1 relative z-10">
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-background/80 backdrop-blur-sm dark:bg-gray-800/80 dark:text-white">
          <div className="container mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-muted-foreground dark:text-gray-300 text-lg">
              I'm a Frontend Developer with 3+ years of experience designing and
              building responsive web applications. I'm proficient with CSS and
              JS Frameworks, particularly React and Next.js. I'm passionate
              about implementing deep work practices in software development to
              boost productivity and code quality.
            </p>
          </div>
        </section>
        <section className="bg-muted/80 backdrop-blur-sm py-12 md:py-16 lg:py-20 px-4 md:px-6 dark:bg-gray-700/80 dark:text-white">
          <div className="container mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold">Skills & Deep Work Practices</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-background rounded-lg p-6 flex flex-col items-center gap-2 dark:bg-gray-600 shadow-lg hover:shadow-xl transition-shadow">
                <CodeIcon className="w-12 h-12 text-primary" />
                <p className="text-lg font-medium">React & Next.js</p>
              </div>
              <div className="bg-background rounded-lg p-6 flex flex-col items-center gap-2 dark:bg-gray-600 shadow-lg hover:shadow-xl transition-shadow">
                <BrainIcon className="w-12 h-12 text-primary" />
                <p className="text-lg font-medium">Deep Work Sessions</p>
              </div>
              <div className="bg-background rounded-lg p-6 flex flex-col items-center gap-2 dark:bg-gray-600 shadow-lg hover:shadow-xl transition-shadow">
                <BrainIcon className="w-12 h-12 text-primary" />
                <p className="text-lg font-medium">Focused Problem Solving</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 dark:bg-gray-800 dark:text-white">
          <div className="container mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold">Frontend Developer</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300">
                  Thinslices, Romania | Nov 2021 - Present
                </p>
                <ul className="list-disc pl-5 mt-2 text-muted-foreground dark:text-gray-300">
                  <li>
                    Rebuilding BMJ journals websites to increase performance
                    using React, Next.js, and TypeScript.
                  </li>
                  <li>
                    Implementing deep work techniques to improve code quality
                    and productivity.
                  </li>
                  <li>
                    Developing a strong understanding of client needs and
                    translating them into technical solutions.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Software Developer (Freelance)
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300">
                  Remote Work | Dec 2020 - Sep 2021
                </p>
                <ul className="list-disc pl-5 mt-2 text-muted-foreground dark:text-gray-300">
                  <li>
                    Mastered computer science fundamentals through focused, deep
                    work sessions.
                  </li>
                  <li>
                    Developed small applications to test and apply knowledge in
                    C#, ASP.NET Core, SQL, Python, and JavaScript.
                  </li>
                  <li>
                    Practiced time-blocking and distraction-free coding to
                    maximize learning and productivity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20 px-4 md:px-6 dark:bg-gray-700 dark:text-white">
          <div className="container mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold">Education & Deep Learning</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Frontend Developer</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300">
                  Wantsome, Romania
                </p>
                <p className="mt-2 text-muted-foreground dark:text-gray-300">
                  Intensive study of HTML, CSS, JavaScript (ES6+), Functional
                  Programming, OOP, TypeScript, and React. Implemented deep work
                  techniques to master complex concepts quickly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Python Developer</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300">
                  Informal School of IT, Romania
                </p>
                <p className="mt-2 text-muted-foreground dark:text-gray-300">
                  Focused on Python fundamentals, OOP, Web Scraping, and Web
                  development with Django. Used deep work strategies to
                  efficiently learn and apply new programming concepts.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-background/80 backdrop-blur-sm dark:bg-gray-800/80 dark:text-white">
          <div className="container mx-auto max-w-5xl space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Custom Suit Store Landing Page"
                description="A responsive landing page for a physical store selling custom-made suits. This project showcases my ability to create visually appealing and conversion-optimized web pages for small businesses."
                image="/louispurple.png"
                technologies={[
                  "React",
                  "Next.js",
                  "TailwindCSS",
                  "Responsive Design",
                ]}
                liveLink="https://www.louispurpleiasi.com/"
                githubLink="https://github.com/HustleCoding/louis-purple"
              />
              <ProjectCard
                title="Event Management Platform (In Progress)"
                description="An ongoing project to develop a comprehensive event creation and management platform. This demonstrates my ability to work on larger, more complex applications and implement user authentication, database management, and real-time updates."
                image="/dashboard.png"
                technologies={[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Prisma",
                  "PostgreSQL",
                  "Auth.js",
                ]}
                githubLink="https://github.com/HustleCoding/evenimentele-tale"
                liveLink="https://evenimentele-tale.vercel.app/"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted/80 backdrop-blur-sm text-muted-foreground py-4 px-4 md:px-6 dark:bg-gray-700/80 dark:text-white relative z-10">
        <div className="container mx-auto flex justify-center text-sm">
          &copy; 2024 Florin Dobinciuc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
