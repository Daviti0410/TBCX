import axios from "axios";
import "./page.css";

async function fetchContent(id) {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res.data;
}

export default async function PostDetail({ params }) {
  const product = await fetchContent(params.id);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      <div className="post-container">
        <h1 className="post-title">{product.title}</h1>
        <p className="post-body">{product.body}</p>
      </div>
    </div>
  );
}