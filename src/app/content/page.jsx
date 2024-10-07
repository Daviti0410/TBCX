"use client";

import "./Content.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/Cards/Cards";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";

export default function Content() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get("https://dummyjson.com/products");
        setProducts(result.data.products);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className={`outer-container ${loading ? "loading" : ""}`}>
      <div className="container product-card">
        {loading ? (
          <Loading /> 
        ) : products.length > 0 ? (
          products.map((product) => (
            <Link href={`/content/${product.id}`} key={product.id}>
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.thumbnail}
                description={product.description}
              />
            </Link>
          ))
        ) : (
          <p>No products found.</p> 
        )}
      </div>
    </main>
  );
}
