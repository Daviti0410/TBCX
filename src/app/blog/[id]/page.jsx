import axios from "axios";
import "./PostDetail.css";

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
    <div className="main-container">
      <div className="post-container">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-body">{post.body}</p>
      </div>
    </div>
  );
}
