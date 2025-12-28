import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/wordpress";

export const metadata = {
  title: "Blogs | Pipeline Cleaning Services in UAE",
  description:
    "Expert blogs on pipeline cleaning services, drain line maintenance, and industrial cleaning solutions in UAE.",
};

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <main className="container">
      <h1 className="title">Latest Blogs</h1>

      <div className="grid">
        {posts.map((post) => {
          const excerpt = post.excerpt
            .replace(/<[^>]+>/g, "")
            .slice(0, 160) + "...";

          return (
            <article key={post.ID} className="card">
              {post.featured_image && (
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  width={600}
                  height={350}
                />
              )}

              <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
              <p>{excerpt}</p>

              <Link href={`/blogs/${post.slug}`} className="read-more">
                Read more →
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
