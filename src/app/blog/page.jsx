"use client";

import "./Blog.css";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("https://dummyjson.com/posts").then((result) => {
      setPosts(result.data.posts);
    });
  };

  useEffect(getPosts, []);
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
