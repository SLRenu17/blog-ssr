import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getLatestPosts } from "@/lib/wordpress";
import styles from "./blogdetail.module.css";

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const latestPosts = await getLatestPosts();
  
  // ✅ Remove all <img> tags from content to avoid duplicates
  const cleanContent = post.content.replace(/<img[^>]*>/gi, '');
  
  return (
    <div className={styles.blogContainer}>
      {/* ✅ Main Article */}
      <article className={styles.blogPost}>
        <h1 
          dangerouslySetInnerHTML={{ __html: post.title }} 
          className={styles.blogTitle}
        />
        
        {/* ✅ Featured Image - Fixed Size */}
        {post.featured_image && (
          <img
            src={post.featured_image}
            alt={post.title || "Blog post"}
            className={styles.featuredImage}
          />
        )}
        
        {/* ✅ Content without images */}
        <div 
          dangerouslySetInnerHTML={{ __html: cleanContent }}
          className={styles.blogContent}
        />
      </article>
      
      {/* ✅ Sidebar - Moves to bottom on mobile */}
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Latest Posts</h3>
        {latestPosts
          .filter(p => p.slug !== slug)
          .map((p) => (
            <Link 
              key={p.ID} 
              href={`/blogs/${p.slug}`}
              className={styles.sidebarLink}
            >
              <p dangerouslySetInnerHTML={{ __html: p.title }} />
            </Link>
          ))}
      </aside>
    </div>
  );
}
