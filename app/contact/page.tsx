import styles from "./contact.module.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.intro}>
        I'm always open to new opportunities and collaborations. Feel free to
        reach out through any of the following channels:
      </p>

      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <h2>Email</h2>
          <a href="mailto:florin.dobinciuc.dev@gmail.com">
            florin.dobinciuc.dev@gmail.com
          </a>
        </div>

        <div className={styles.contactItem}>
          <FaPhone className={styles.icon} />
          <h2>Phone</h2>
          <p>+40 749 641 796</p>
        </div>

        <div className={styles.contactItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <h2>Location</h2>
          <p>Iaşi, Romania</p>
        </div>

        <div className={styles.contactItem}>
          <FaLinkedin className={styles.icon} />
          <h2>LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/florin-dobinciuc-959897311/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className={styles.contactItem}>
          <FaGithub className={styles.icon} />
          <h2>GitHub</h2>
          <a
            href="https://github.com/FlorinDobinciuc"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Let's Connect!</h2>
        <p>
          Whether you have a project in mind, a question about my work, or just
          want to say hello, I'd love to hear from you. Choose your preferred
          method of contact above, and I'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}
