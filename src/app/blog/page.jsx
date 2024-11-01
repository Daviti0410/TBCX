import BlogPosts from "@/components/BlogPosts/page";
import "./Blog.css";


async function fetchPosts() {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Blog() {
  const postsData = await fetchPosts();

  return (
    <section className="Blog">
      <BlogPosts posts={postsData} />
    </section>
  );
}