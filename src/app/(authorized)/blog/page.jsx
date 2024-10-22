import "./Blog.css";
import Loading from "@/components/Loading/Loading";
import axios from "axios";
import Link from "next/link";

export async function getPosts() {
  try {
    const results = await axios.get("https://dummyjson.com/posts");
    const data = results.data;
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <main className="blog-container">
      <div className="blog-inner-container">
        {posts.map((post) => (
          <div className="blog-list" key={post.id}>
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link className="Link" href={`/blog/${post.id}`}>
                Open Post
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
