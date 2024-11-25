import axios from "axios";
import "./PostDetail.css";

interface Post {
  id: number;
  title: string;
  description: string;
}

interface PostDetailProps {
  params: {
    id: string;
  };
}

async function fetchPost(id: string): Promise<Post> {
  const res = await axios.get(`http://localhost:3000/api/getPosts/${id}`);
  return res.data;
}

export default async function PostDetail({ params }: PostDetailProps) {
  const post: Post | null = await fetchPost(params.id);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      <div className="post-container">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-body">{post.description}</p>
      </div>
    </div>
  );
}
