import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getLatestPosts } from "@/lib/wordpress";

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
    <>
      <style jsx>{`
        .blog-container {
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 30px;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          min-height: calc(100vh - 200px);
        }

        .blog-post {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          margin-top: 50px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .blog-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #111;
          line-height: 1.3;
        }

        .featured-image {
          width: 100%;
          max-width: 600px;
          height: 400px;
          object-fit: cover;
          border-radius: 8px;
          margin: 0 auto 2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          display: block;
        }

        .blog-content {
          line-height: 1.8;
          font-size: 1rem;
          color: #333;
        }

        .sidebar {
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          height: fit-content;
          position: sticky;
          top: 100px;
        }

        .sidebar-title {
          margin-bottom: 1rem;
          font-size: 1.3rem;
          color: #F97316;
        }

        .sidebar-link {
          display: block;
          margin-bottom: 15px;
          padding: 10px;
          border-left: 3px solid #F97316;
          padding-left: 15px;
          text-decoration: none;
          color: #333;
          transition: all 0.3s;
          border-radius: 4px;
        }

        .sidebar-link:hover {
          background-color: #fff5f0;
          transform: translateX(5px);
        }

        .sidebar-link p {
          margin: 0;
          font-size: 0.95rem;
        }

        /* ✅ Tablet View (768px - 1024px) */
        @media (max-width: 1024px) {
          .blog-container {
            grid-template-columns: 1fr;
            padding: 1.5rem;
            gap: 20px;
          }

          .blog-post {
            margin-top: 20px;
            padding: 1.5rem;
          }

          .blog-title {
            font-size: 1.75rem;
          }

          .featured-image {
            max-width: 100%;
            height: 350px;
          }

          .sidebar {
            position: static;
            margin-top: 30px;
            margin-bottom: 50px;
          }
        }

        /* ✅ Mobile View (max-width: 768px) */
        @media (max-width: 768px) {
          .blog-container {
            padding: 1rem;
            margin-bottom: 40px;
          }

          .blog-post {
            padding: 1.2rem;
            margin-top: 10px;
          }

          .blog-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .featured-image {
            height: 300px;
            margin-bottom: 1.5rem;
          }

          .blog-content {
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .sidebar {
            padding: 1.2rem;
            margin-top: 20px;
            margin-bottom: 40px;
          }

          .sidebar-title {
            font-size: 1.2rem;
          }

          .sidebar-link {
            padding: 8px;
            padding-left: 12px;
            margin-bottom: 12px;
          }

          .sidebar-link p {
            font-size: 0.9rem;
          }
        }

        /* ✅ Small Mobile (max-width: 480px) */
        @media (max-width: 480px) {
          .blog-container {
            padding: 0.8rem;
            margin-bottom: 50px;
          }

          .blog-post {
            padding: 1rem;
            border-radius: 6px;
          }

          .blog-title {
            font-size: 1.3rem;
            line-height: 1.4;
          }

          .featured-image {
            height: 250px;
            border-radius: 6px;
          }

          .blog-content {
            font-size: 0.9rem;
          }

          .sidebar {
            padding: 1rem;
            border-radius: 6px;
            margin-bottom: 50px;
          }

          .sidebar-title {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="blog-container">
        {/* ✅ Main Article */}
        <article className="blog-post">
          <h1 
            dangerouslySetInnerHTML={{ __html: post.title }} 
            className="blog-title"
          />
          
          {/* ✅ Featured Image - Fixed Size */}
          {post.featured_image && (
            <img
              src={post.featured_image}
              alt={post.title || "Blog post"}
              className="featured-image"
            />
          )}
          
          {/* ✅ Content without images */}
          <div 
            dangerouslySetInnerHTML={{ __html: cleanContent }}
            className="blog-content"
          />
        </article>
        
        {/* ✅ Sidebar - Moves to bottom on mobile */}
        <aside className="sidebar">
          <h3 className="sidebar-title">Latest Posts</h3>
          {latestPosts
            .filter(p => p.slug !== slug)
            .map((p) => (
              <Link 
                key={p.ID} 
                href={`/blogs/${p.slug}`}
                className="sidebar-link"
              >
                <p dangerouslySetInnerHTML={{ __html: p.title }} />
              </Link>
            ))}
        </aside>
      </div>
    </>
  );
}
