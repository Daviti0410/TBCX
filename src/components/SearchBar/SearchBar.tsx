"use client";

import "./SearchBar.css";
import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] =
    useState<string>(searchQuery);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedSearchQuery) {
      router.push(`/products?search=${debouncedSearchQuery}`);
    }
  }, [debouncedSearchQuery, router]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return (
    <div className="search-controls">
      <label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Type to search..."
        />
      </label>
    </div>
  );
}
