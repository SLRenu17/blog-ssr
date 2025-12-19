import Link from "next/link";
import { getAllPosts } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <main className="container">
      <h1>Blogs</h1>

      {posts.map((post) => (
        <article key={post.ID}>
          <h2>{post.title}</h2>
          <Link href={`/blogs/${post.slug}`}>Read More</Link>
        </article>
      ))}
    </main>
  );
}
