import Link from "next/link";
import styles from "./page.module.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Florin Dobinciuc</h1>
          <h2 className={styles.subtitle}>
            Full Stack Engineer | React.js | Next.js | Node.js | AWS
          </h2>
          <p className={styles.description}>
            Empathic and versatile Software Engineer with over 4 years of
            experience in web development. Proficient in Next.js, React,
            TypeScript, and Python, with a strong foundation in both frontend
            and backend technologies.
          </p>
          <div className={styles.cta}>
            <Link href="/contact" className={styles.ctaButton}>
              Get in Touch <FaArrowRight className={styles.ctaIcon} />
            </Link>
            <Link href="/about" className={styles.ctaButtonSecondary}>
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
