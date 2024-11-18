async function fetchPosts() {
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
  const postsData = await fetchPosts();

  return (
    <section className="">
      <div></div>
      <div>
        <h1>{postsData.title}</h1>
        <p>{postsData.description}</p>
      </div>
    </section>
  );
}
