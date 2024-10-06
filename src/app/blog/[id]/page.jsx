import axios from "axios";

async function fetchPost(id) {
  const res = await axios.get(`https://dummyjson.com/posts/${id}`);
  return res.data;
}

export default async function PostDetail({ params }) {
  const post = await fetchPost(params.id);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="blog-list">
        <div className="blog-content">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
}
