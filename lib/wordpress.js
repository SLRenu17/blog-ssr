const SITE = "abhidrainlinecleaning.wordpress.com";
const BASE_URL = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE}`;

export async function getAllPosts(limit) {
  const res = await fetch(
    limit ? `${BASE_URL}/posts?number=${limit}` : `${BASE_URL}/posts`,
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  const data = await res.json();
  
  // ✅ Map posts to extract featured image URL
  const posts = (data.posts || []).map(post => ({
    ...post,
    featured_image: post.featured_image || post.post_thumbnail?.URL || null
  }));
  
  return posts;
}

export async function getPostBySlug(slug) {
  if (!slug) return null;
  console.log('Fetching post by slug:', slug);
  
  const allPosts = await getAllPosts();
  const post = allPosts.find(p => p.slug === slug);
  
  console.log('Found post:', post ? post.slug : 'none');
  return post || null;
}

export async function getLatestPosts(limit = 5) {
  const res = await fetch(`${BASE_URL}/posts?number=${limit}`, { cache: "no-store" }); // ✅ Fixed missing parentheses
  if (!res.ok) return [];
  const data = await res.json();
  
  // ✅ Map posts to extract featured image URL
  const posts = (data.posts || []).map(post => ({
    ...post,
    featured_image: post.featured_image || post.post_thumbnail?.URL || null
  }));
  
  return posts;
}
