import { getAllPosts, getPostBySlug } from "@/lib/wordpress";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  const description = post.excerpt.replace(/<[^>]+>/g, "");

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
    },
  };
}

export default async function BlogDetail({ params }) {
  const post = await getPostBySlug(params.slug);
  const latestPosts = await getAllPosts(5);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main className="container">
      <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "40px" }}>
        
        {/* Blog Content */}
        <article className="blog">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

          {post.featured_image && (
            <img
              src={post.featured_image}
              alt={post.title}
              style={{ width: "100%", borderRadius: "12px" }}
            />
          )}

          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Sidebar */}
        <aside>
          <h3>Latest Posts</h3>

          {latestPosts.map((item) => (
            <a
              key={item.ID}
              href={`/blogs/${item.slug}`}
              style={{ display: "block", marginBottom: "10px" }}
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          ))}
        </aside>
      </div>
    </main>
  );
}
