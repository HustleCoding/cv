"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  GithubIcon,
  CodeIcon,
  BrainIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isDarkMode ? "dark" : ""}`}>
      <header className="bg-primary text-primary-foreground py-8 px-4 md:px-6 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold">Florin Dobinciuc</h1>
          <p className="text-lg font-medium text-center">
            Frontend Developer & Deep Work Practitioner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="mailto:florin.dobinciuc@learninglab.cloud"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <MailIcon className="w-4 h-4" />
              florin.dobinciuc.dev@gmail.com
            </Link>
            <Link
              href="tel:0749641796"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <PhoneIcon className="w-4 h-4" />
              0749641796
            </Link>
            <Link
              href="https://www.linkedin.com/in/florin-dobinciuc-558487312/"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/FlorinDobinciuc"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </Link>
          </div>
          <Button onClick={toggleDarkMode} className="mt-4">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 dark:bg-gray-800 dark:text-white">
          <div className="container mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-muted-foreground dark:text-gray-300">
              I'm a Frontend Developer with 3+ years of experience designing and
              building responsive web applications. I'm proficient with CSS and
              JS Frameworks, particularly React and Next.js. I'm passionate
              about implementing deep work practices in software development to
              boost productivity and code quality.
            </p>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20 px-4 md:px-6 dark:bg-gray-700 dark:text-white">
          <div className="container mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold">Skills & Deep Work Practices</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 dark:bg-gray-600">
                <CodeIcon className="w-8 h-8" />
                <p className="text-sm font-medium">React & Next.js</p>
              </div>
              <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 dark:bg-gray-600">
                <BrainIcon className="w-8 h-8" />
                <p className="text-sm font-medium">Deep Work Sessions</p>
              </div>
              <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 dark:bg-gray-600">
                <BrainIcon className="w-8 h-8" />
                <p className="text-sm font-medium">Focused Problem Solving</p>
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
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-4 md:px-6 dark:bg-gray-700 dark:text-white">
        <div className="container mx-auto flex justify-center text-sm">
          &copy; 2024 Florin Dobinciuc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
