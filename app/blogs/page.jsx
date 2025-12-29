import Link from "next/link";
import { getAllPosts } from "@/lib/wordpress";
import "../globals.css";

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
      <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {posts.map((post) => {
          const excerpt = post.excerpt
            .replace(/<[^>]+>/g, "")
            .slice(0, 160) + "...";
          
          return (
            <article key={post.ID} className="card" style={{ 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px', 
              padding: '1.5rem',
              backgroundColor: 'white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
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
    onError={(e) => {
      e.currentTarget.src = 'https://via.placeholder.com/600x350?text=Blog+Image';
    }}
  />
) : (
  <img
    src="https://via.placeholder.com/600x350?text=Blog+Image"
    alt="Placeholder"
    style={{ 
      width: '100%', 
      height: '200px',
      objectFit: 'cover',
      borderRadius: '4px', 
      marginBottom: '1rem' 
    }}
  />
)}
              
              <h2 
                dangerouslySetInnerHTML={{ __html: post.title }} 
                style={{ fontSize: '1.5rem', marginBottom: '1rem' }}
              />
              <p style={{ color: '#666', marginBottom: '1rem' }}>{excerpt}</p>
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
