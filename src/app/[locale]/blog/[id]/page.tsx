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
    <div className="flex flex-col items-center content-center min-h-[75vh]">
      <div className="flex flex-col content-center items-center p-10 border-8 border-solid border-white max-w-[800px] my-0 m-auto">
        <h1 className="text-4xl font-bold text-white mb-5 text-center">
          {post.title}
        </h1>
        <p className="text-lg leading-6 text-justify text-white">
          {post.description}
        </p>
      </div>
    </div>
  );
}
