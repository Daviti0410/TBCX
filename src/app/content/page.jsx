import "./Content.css";
import axios from "axios";
import { ProductCard } from "../../components/Cards/Cards";
import Link from "next/link";
import Button from "@/components/Button/page";

async function fetchPost(sort) {
  let url = "https://dummyjson.com/products";
  if (sort === "asc") {
    url += "?sortBy=title&order=asc";
  }

  try {
    const result = await axios.get(url);
    return result.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Content({ searchParams }) {
  const { sort } = searchParams || {};
  const products = await fetchPost(sort);

  return (
    <>
      <main className="outer-container">
        <Button />
        <div className="container product-card">
          {products.length > 0 ? (
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
    </>
  );
}
