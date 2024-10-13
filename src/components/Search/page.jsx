"use client";
import "./search.css";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const search = useCallback(
    debounce(async (searchTerm) => {
      if (searchTerm) {
        router.push(`?q=${encodeURIComponent(searchTerm)}`);
      } else {
        router.push(`?`);
      }
    }, 500),
    [router]
  );

  useEffect(() => {
    search(query);
  }, [query, search]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
    </div>
  );
}
