const SITE = "abhidrainlinecleaning.wordpress.com";
const BASE_URL = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE}`;

export async function getAllPosts() {
  const res = await fetch(`${BASE_URL}/posts`, {
    cache: "no-store", // SSR
  });

  if (!res.ok) return [];

  const data = await res.json();
  return data.posts; // ✅ WordPress.com structure
}

export async function getPostBySlug(slug) {
  const res = await fetch(`${BASE_URL}/posts?slug=${slug}`, {
    cache: "no-store", // SSR
  });

  if (!res.ok) return null;

  const data = await res.json();

  // ✅ WordPress.com returns array
  return data.posts.length ? data.posts[0] : null;
}
