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
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '3fr 1fr', 
      gap: '30px',
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* ✅ Main Article */}
      <article className="blog-post" style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        marginTop:'60px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h1 
          dangerouslySetInnerHTML={{ __html: post.title }} 
          style={{ 
            fontSize: '2rem', 
            marginBottom: '1.5rem',
            color: '#111'
          }}
        />
        
        {/* ✅ Featured Image - Reduced Size */}
        {post.featured_image && (
          <img
            src={post.featured_image}
            alt={post.title || "Blog post"}
            style={{
              width: '60%',
              maxWidth: '600px', // ✅ Limit maximum width
              height: '8%',
              borderRadius: '8px',
              marginBottom: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              display: 'block',
              margin: '0 auto 2rem' // ✅ Center the image
            }}
          />
        )}
        
        {/* ✅ Content without images */}
        <div 
          dangerouslySetInnerHTML={{ __html: cleanContent }}
          style={{
            lineHeight: '1.8',
            fontSize: '1rem',
            color: '#333'
          }}
        />
      </article>
      
      {/* ✅ Sidebar */}
      <aside className="sidebar" style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        height: 'fit-content',
        position: 'sticky',
        top: '100px'
      }}>
        <h3 style={{ 
          marginBottom: '1rem', 
          fontSize: '1.3rem',
          color: '#F97316'
        }}>
          Latest Posts
        </h3>
        {latestPosts
          .filter(p => p.slug !== slug) // ✅ Don't show current post
          .map((p) => (
            <Link 
              key={p.ID} 
              href={`/blogs/${p.slug}`}
              style={{
                display: 'block',
                marginBottom: '15px',
                padding: '10px',
                borderLeft: '3px solid #F97316',
                paddingLeft: '15px',
                textDecoration: 'none',
                color: '#333',
                transition: 'all 0.3s',
                borderRadius: '4px'
              }}
            >
              <p 
                dangerouslySetInnerHTML={{ __html: p.title }}
                style={{ margin: 0, fontSize: '0.95rem' }}
              />
            </Link>
          ))}
      </aside>
    </div>
  );
}
