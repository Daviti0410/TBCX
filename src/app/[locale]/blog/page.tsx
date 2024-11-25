interface Post {
  title: string;
  description: string;
}

async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await fetch("http://localhost:3000/api/getPosts");
    const data = await res.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Blog() {
  const postsData: Post[] = await fetchPosts();
  return (
    <section className="">
      {postsData.map((post, index) => (
        <div key={index}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      ))}
    </section>
  );
}
