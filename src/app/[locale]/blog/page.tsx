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
    <section className="grid grid-cols-2 grid-rows-2 items-center text-center justify-center gap-10 mt-64 mx-[300px]">
      {postsData.map((post, index) => (
        <div
          className="items-center border-solid border-white border-2 rounded-2xl p-9 my-10"
          key={index}
        >
          <h1 className="text-xl font-medium pb-9">{post.title}</h1>
          <p className="text-2xl ">{post.description}</p>
        </div>
      ))}
    </section>
  );
}
