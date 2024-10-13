import "./Content.css";
import axios from "axios";
import { ProductCard } from "../../components/Cards/Cards";
import Link from "next/link";
import Button from "@/components/Button/page";
import Search from "@/components/Search/page";

async function fetchPost(query, sort) {
  let url = "https://dummyjson.com/products";
  if (query) {
    url = `https://dummyjson.com/products/search?q=${query}`;
  } else if (sort === "asc") {
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
  const { q: query, sort } = searchParams || {};
  const products = await fetchPost(query, sort);

  return (
    <>
      <main className="outer-container">
        <div className="component-container">
          <Button />
          <Search />
        </div>
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
