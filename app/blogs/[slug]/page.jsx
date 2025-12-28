import { getPostBySlug, getAllPosts } from "@/lib/wordpress";
import Image from "next/image";
import Link from "next/link";

/* ✅ SEO Metadata */
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ FIX
  const post = await getPostBySlug(slug);

  if (!post) return {};

  const description = post.excerpt.replace(/<[^>]+>/g, "");

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      images: post.featured_image
        ? [{ url: post.featured_image }]
        : [],
    },
  };
}

/* ✅ Page */
export default async function BlogDetail({ params }) {
  const { slug } = await params; // ✅ FIX

  const post = await getPostBySlug(slug);
  const latestPosts = await getAllPosts(5);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main className="container">
      <article className="blog">
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

        {post.featured_image && (
          <Image
            src={post.featured_image}
            alt={post.title}
            width={800}
            height={400}
            priority
          />
        )}

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* ✅ Sidebar */}
      <aside style={{ marginTop: "60px" }}>
  <h3>Latest Blogs</h3>

  {latestPosts
    ?.filter(Boolean)
    .map((item) => (
      <Link
        key={item.slug || item.id} // ✅ FIXED KEY
        href={`/blogs/${item.slug}`}
        style={{ display: "block", marginBottom: "10px" }}
      >
        {item.title}
      </Link>
    ))}
</aside>

    </main>
  );
}
