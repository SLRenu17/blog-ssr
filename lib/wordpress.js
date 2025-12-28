const SITE = "abhidrainlinecleaning.wordpress.com";
const BASE_URL = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE}`;

export async function getAllPosts(limit) {
  const res = await fetch(
    limit ? `${BASE_URL}/posts?number=${limit}` : `${BASE_URL}/posts`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const data = await res.json();
  return data.posts;
}

export async function getPostBySlug(slug) {
  const res = await fetch(`${BASE_URL}/posts?slug=${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.posts.length ? data.posts[0] : null;
}
