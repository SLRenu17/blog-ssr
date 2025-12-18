const API_BASE =
  "https://public-api.wordpress.com/rest/v1.1/sites/abhidrainlinecleaning.wordpress.com/posts";

export async function getAllPosts() {
  const res = await fetch(`${API_BASE}`, {  // no extra /posts
    cache: "no-store",
  });

  if (!res.ok) return [];

  const data = await res.json();
  return data.posts;
}

export async function getPostBySlug(slug) {
  const res = await fetch(`${API_BASE}/slug:${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}

