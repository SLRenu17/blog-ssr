import Link from "next/link";
import { getAllPosts } from "@/lib/wordpress";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      {posts.map((post) => (
        <div key={post.ID} className="mb-6">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl font-semibold text-blue-600">
              {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </main>
  );
}
