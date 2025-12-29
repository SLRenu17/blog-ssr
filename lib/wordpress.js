const SITE = "abhidrainlinecleaning.wordpress.com";
const BASE_URL = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE}`;

export async function getAllPosts(limit) {
  const res = await fetch(
    limit ? `${BASE_URL}/posts?number=${limit}` : `${BASE_URL}/posts`,
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  const data = await res.json();
  
  // ✅ Debug: Log the first post to see structure
  if (data.posts && data.posts.length > 0) {
    console.log("First post structure:", JSON.stringify(data.posts[0], null, 2));
  }
  
  // ✅ Try multiple possible image fields
  const posts = (data.posts || []).map(post => {
    const featuredImage = 
      post.featured_image || 
      post.post_thumbnail?.URL || 
      post.attachments?.[Object.keys(post.attachments || {})[0]]?.URL ||
      null;
    
    console.log(`Post: ${post.title}, Image: ${featuredImage}`);
    
    return {
      ...post,
      featured_image: featuredImage
    };
  });
  
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
  return getAllPosts(limit);
}
