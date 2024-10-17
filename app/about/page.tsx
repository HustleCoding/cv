import styles from "./about.module.css";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLanguage,
} from "react-icons/fa";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.summary}>
        <p>
          Empathetic and versatile Full Stack Software Engineer with over 4
          years of experience in web development. Proficient in Next.js, React,
          TypeScript, Python, and Node.js, with a growing expertise in cloud
          technologies.
        </p>
        <p>
          Passionate about implementing deep work practices to enhance
          productivity and code quality. Committed to continuous learning and
          applying best practices in full stack software development.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaCode className={styles.icon} /> Core Competencies
        </h2>
        <ul className={styles.list}>
          <li>Full Stack Development (React, Next.js, Node.js, Python)</li>
          <li>Cloud Technologies (AWS)</li>
          <li>Database Design and Management</li>
          <li>RESTful API Development</li>
          <li>Deep Work & Productivity Optimization</li>
          <li>Responsive Web Design</li>
          <li>Problem-Solving & Debugging</li>
          <li>Version Control (Git)</li>
          <li>Agile Methodologies</li>
          <li>Empathetic Approach to Development</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaCode className={styles.icon} /> Technical Skills
        </h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3 className={styles.subSectionTitle}>Frontend</h3>
            <p>
              React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3,
              TailwindCSS, Responsive Design
            </p>
          </div>
          <div className={styles.skillCategory}>
            <h3 className={styles.subSectionTitle}>Backend</h3>
            <p>
              Node.js, Python, Django, AWS, PostgreSQL, RESTful APIs, ORM
              (Django, Prisma)
            </p>
          </div>
          <div className={styles.skillCategory}>
            <h3 className={styles.subSectionTitle}>Tools</h3>
            <p>
              Git & GitHub, VS Code, Jira, Figma, Webpack, Jest, npm/yarn/pnpm,
              Vercel, Github Actions
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaBriefcase className={styles.icon} /> Work Experience
        </h2>
        <div className={styles.jobEntry}>
          <h3>Full Stack Engineer | Cognizant, Iaşi, Romania</h3>
          <p className={styles.jobDate}>August 2024 - Present</p>
          <ul className={styles.jobList}>
            <li>
              Engaging in intensive learning and onboarding, focusing on AWS
              services and cloud-native architectures
            </li>
            <li>
              Participating in company-led training programs to align with
              Cognizant's full stack development best practices
            </li>
            <li>
              Conducting hands-on experiments and test projects to apply newly
              acquired knowledge in AWS and cloud technologies
            </li>
            <li>
              Refining expertise in Javascript, React.js, Next.js, and backend
              technologies within the context of enterprise-level, cloud-native
              applications
            </li>
          </ul>
        </div>

        <div className={styles.jobEntry}>
          <h3>Full Stack Engineer | Thinslices, Romania</h3>
          <p className={styles.jobDate}>September 2021 - August 2024</p>
          <ul className={styles.jobList}>
            <li>
              Led the rebuilding of BMJ journals websites, significantly
              improving performance using React, Next.js, and TypeScript on the
              frontend, and optimizing backend services
            </li>
            <li>
              Implemented deep work techniques, resulting in a 30% increase in
              code quality and 25% boost in productivity across the full stack
            </li>
            <li>
              Collaborated with cross-functional teams to translate client needs
              into robust full stack technical solutions
            </li>
            <li>
              Mentored junior developers, focusing on full stack best practices
              and deep work methodologies
            </li>
            <li>
              Optimized web applications for maximum speed and scalability,
              improving load times by 40% through frontend and backend
              enhancements
            </li>
          </ul>
        </div>

        <div className={styles.jobEntry}>
          <h3>Full Stack Engineer (Freelance) | Remote Work</h3>
          <p className={styles.jobDate}>August 2021 - November 2021</p>
          <ul className={styles.jobList}>
            <li>
              Developed a high-performance, full stack e-commerce solution for a
              leading national brand specializing in suits and ceremonial wear
            </li>
            <li>
              Increased store revenue by 30% through the implementation of an
              optimized, user-friendly e-commerce platform with robust backend
              services
            </li>
            <li>
              Boosted lead generation by 60% by crafting engaging user
              interfaces and implementing effective backend data processing and
              API integrations
            </li>
            <li>
              Utilized Next.js, React, TypeScript, and Tailwind CSS for the
              frontend, coupled with Node.js and PostgreSQL for backend services
            </li>
          </ul>
        </div>

        <div className={styles.jobEntry}>
          <h3>Full Stack Engineer (Freelance) | Remote Work</h3>
          <p className={styles.jobDate}>December 2020 - July 2021</p>
          <ul className={styles.jobList}>
            <li>
              Collaborated with a team to develop a full stack crypto-based
              parking application
            </li>
            <li>
              Contributed to frontend development using React and backend
              integration with blockchain components
            </li>
            <li>
              Gained hands-on experience with blockchain technology, smart
              contracts, and full stack application architecture
            </li>
            <li>
              Implemented deep work techniques, increasing daily productive
              output by 50% across all layers of the application stack
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaGraduationCap className={styles.icon} /> Education
        </h2>
        <div className={styles.educationEntry}>
          <h3>Frontend Developer Certification | Wantsome, Romania</h3>
          <ul className={styles.educationList}>
            <li>
              Completed intensive study in modern web technologies: HTML5, CSS3,
              JavaScript (ES6+), React
            </li>
            <li>
              Achieved top marks in coursework focused on Functional
              Programming, OOP, and TypeScript
            </li>
          </ul>
        </div>

        <div className={styles.educationEntry}>
          <h3>
            Python Developer Certification | Informal School of IT, Romania
          </h3>
          <ul className={styles.educationList}>
            <li>
              Mastered Python fundamentals, OOP, and advanced concepts through
              project-based learning
            </li>
            <li>
              Specialized in Web Scraping techniques and Web development with
              Django
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaLanguage className={styles.icon} /> Languages
        </h2>
        <ul className={styles.languageList}>
          <li>English (Fluent)</li>
          <li>Romanian (Native)</li>
        </ul>
      </section>
    </div>
  );
}
