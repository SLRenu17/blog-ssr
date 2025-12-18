import { getPostBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
