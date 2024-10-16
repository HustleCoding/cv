import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import styles from "./blog.module.css";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <p className={styles.intro}>
        Welcome to my blog where I share insights on web development, deep work
        practices, and software engineering.
      </p>
      <div className={styles.grid}>
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <article key={id} className={styles.card}>
            <Link href={`/blog/${id}`}>
              <h2 className={styles.postTitle}>{title}</h2>
              <p className={styles.excerpt}>{excerpt}</p>
              <div className={styles.meta}>
                <span className={styles.date}>
                  <FaCalendarAlt className={styles.icon} />
                  {date}
                </span>
                <span className={styles.readMore}>
                  Read More <FaArrowRight className={styles.icon} />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
