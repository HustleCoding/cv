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
          Empathic and versatile Software Engineer with over 4 years of
          experience in web development. Proficient in Next.js, React,
          TypeScript, and Python, with a strong foundation in both frontend and
          backend technologies.
        </p>
        <p>
          Passionate about implementing deep work practices to enhance
          productivity and code quality. Committed to continuous learning and
          applying best practices in software development.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaCode className={styles.icon} /> Core Competencies
        </h2>
        <ul className={styles.list}>
          <li>Frontend Development (React, Next.js)</li>
          <li>Backend Development (Python, Django, Node.js, AWS)</li>
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
              AWS, Python, Django, Node.js, PostgreSQL, RESTful APIs, ORM
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
          <h3>Software Engineer | Cognizant, Iaşi, Romania</h3>
          <p className={styles.jobDate}>August 2024 - Present</p>
          <ul className={styles.jobList}>
            <li>
              Recently joined to contribute to cutting-edge software development
              projects
            </li>
            <li>
              Applying expertise in Javascript, React.js, and Next.js to deliver
              high-quality solutions
            </li>
          </ul>
        </div>

        <div className={styles.jobEntry}>
          <h3>Software Developer | Thinslices, Romania</h3>
          <p className={styles.jobDate}>September 2021 - August 2024</p>
          <ul className={styles.jobList}>
            <li>
              Led the rebuilding of BMJ journals websites, significantly
              improving performance using React, Next.js, and TypeScript
            </li>
            <li>
              Implemented deep work techniques, resulting in a 30% increase in
              code quality and 25% boost in productivity
            </li>
            <li>
              Collaborated with cross-functional teams to translate client needs
              into robust technical solutions
            </li>
            <li>
              Mentored junior developers, focusing on React best practices and
              deep work methodologies
            </li>
            <li>
              Optimized web applications for maximum speed and scalability,
              improving load times by 40%
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
