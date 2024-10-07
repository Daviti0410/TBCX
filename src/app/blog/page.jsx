"use client";

import "./Blog.css";
import Loading from "@/components/Loading/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = () => {
    axios.get("https://dummyjson.com/posts").then((result) => {
      setPosts(result.data.posts);
      setLoading(false);
    });
  };

  useEffect(getPosts, []);

  return (
    <main className="blog-container">
      <div className="blog-inner-container">
        {loading ? (
          <Loading />
        ) : (
          posts.map((post) => (
            <div className="blog-list" key={post.id}>
              <div className="blog-content">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link className="Link" href={`/blog/${post.id}`}>
                  Open Post
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
