import Link from "next/link";
import { getAllPosts } from "@/lib/wordpress";
import "../globals.css";
import { useState } from "react";

const [isHover, setHover] = useState(false);

export const metadata = {
  title: "Blogs | Pipeline Cleaning Services in UAE",
  description:
    "Expert blogs on pipeline cleaning services, drain line maintenance, and industrial cleaning solutions in UAE.",
};

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <main className="container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 className="title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Latest Blogs</h1>
      <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '4rem' }}>
        {posts.map((post) => {
          const excerpt = post.excerpt
            .replace(/<[^>]+>/g, "")
            .slice(0, 160) + "...";
          
          return (

<article
  key={post.ID}
  className="card"
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  style={{
    border: '1px solid',
    borderColor: isHover ? '#F97316' : '#e5e7eb',
    borderRadius: '8px',
    padding: '1.5rem',
    backgroundColor: 'white',
    transform: isHover ? 'scale(1.06)' : 'scale(1)',
    boxShadow: isHover
      ? '0 15px 35px rgba(249, 115, 22, 0.25)'
      : '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease-in-out',
  }}
>

              {post.featured_image ? (
                <img
                  src={post.featured_image}
                  alt={post.title || "Blog post"}
                  style={{ 
                    width: '100%', 
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '4px', 
                    marginBottom: '1rem' 
                  }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  marginBottom: '1rem',
                  color: '#666'
                }}>
                  No Image
                </div>
              )}
              
              <h2 
                dangerouslySetInnerHTML={{ __html: post.title }} 
                style={{ fontSize: '1.5rem', marginBottom: '1rem' }}
              />
              <Link href={`/blogs/${post.slug}`} style={{
                color: '#2563eb',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Read more →
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
