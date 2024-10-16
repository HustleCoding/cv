import { getPostData, getSortedPostsData } from "../../../lib/posts";
import styles from "./post.module.css";
import { FaCalendarAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function generateTableOfContents(
  content: string
): { id: string; title: string }[] {
  const headings = content.match(/<h2.*?>(.*?)<\/h2>/g) || [];
  return headings.map((heading, index) => {
    const title = heading.replace(/<[^>]+>/g, "");
    const id = `section-${index}`;
    return { id, title };
  });
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  const readingTime = estimateReadingTime(postData.contentHtml);
  const toc = generateTableOfContents(postData.contentHtml);

  // Add IDs to h2 tags for linking
  const contentWithIds = postData.contentHtml.replace(
    /<h2>(.*?)<\/h2>/g,
    (match, p1, offset) => `<h2 id="section-${offset}">${p1}</h2>`
  );

  return (
    <div className={styles.container}>
      <Link href="/blog" className={styles.backLink}>
        <FaArrowLeft className={styles.icon} /> Back to all posts
      </Link>
      <article className={styles.article}>
        <h1 className={styles.title}>{postData.title}</h1>
        <div className={styles.meta}>
          <span className={styles.date}>
            <FaCalendarAlt className={styles.icon} /> {postData.date}
          </span>
          <span className={styles.readingTime}>
            <FaClock className={styles.icon} /> {readingTime} min read
          </span>
        </div>
        {toc.length > 0 && (
          <nav className={styles.tableOfContents}>
            <h2>Table of Contents</h2>
            <ul>
              {toc.map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`}>{heading.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: contentWithIds }}
          className={styles.content}
        />
      </article>
    </div>
  );
}
