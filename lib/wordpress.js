const API_BASE =
  "https://public-api.wordpress.com/rest/v1.1/sites/abhidrainlinecleaning.wordpress.com";

export async function getAllPosts() {
  const res = await fetch(`${API_BASE}/posts`, {
    next: { revalidate: 3600 }, // ISR
  });

  if (!res.ok) return [];

  const data = await res.json();
  return data.posts || [];
}

export async function getPostBySlug(slug) {
  const res = await fetch(`${API_BASE}/posts/slug:${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;

  return await res.json();
}
