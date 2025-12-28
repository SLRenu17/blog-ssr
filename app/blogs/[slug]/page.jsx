import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getLatestPosts } from "@/lib/wordpress";

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const latestPosts = await getLatestPosts();

  return (
    <main className="container">
      <article className="blog-post">
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

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <aside className="sidebar">
        <h3>Latest Posts</h3>
        {latestPosts.map((p) => (
          <Link key={p.ID} href={`/blogs/${p.slug}`}>
            <p dangerouslySetInnerHTML={{ __html: p.title }} />
          </Link>
        ))}
      </aside>
    </main>
  );
}
