import { getAllPosts, getPostBySlug } from "@/lib/wordpress";

/* ✅ Required for dynamic SSR */
export const dynamic = "force-dynamic";

/* ✅ Generate paths */
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/* ✅ SEO Metadata */
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt.replace(/<[^>]+>/g, ""),
    openGraph: {
      title: post.title,
      description: post.excerpt.replace(/<[^>]+>/g, ""),
      images: post.featured_image
        ? [{ url: post.featured_image }]
        : [],
    },
  };
}

/* ✅ SSR Page */
export default async function BlogDetail({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main className="container">
      <article className="blog">
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
