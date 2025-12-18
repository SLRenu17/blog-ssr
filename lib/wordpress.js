const API_BASE =
  "https://public-api.wordpress.com/rest/v1.1/sites/abhidrainlinecleaning.wordpress.com/posts";

export async function getAllPosts() {
  const res = await fetch(`${API_BASE}/posts`, {
    cache: "no-store", // SSR
  });

  if (!res.ok) return [];

  const data = await res.json();
  return data.posts; // <-- IMPORTANT
}

export async function getPostBySlug(slug) {
  const res = await fetch(`${API_BASE}/posts/slug:${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}
