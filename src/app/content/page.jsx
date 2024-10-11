import "./Content.css";
import axios from "axios";
import { ProductCard } from "../../components/Cards/Cards";
import Link from "next/link";

async function fetchPost() {
  try {
    const result = await axios.get("https://dummyjson.com/products");
    const data = result.data;
    return data.products;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
export default async function Content() {
  const products = await fetchPost();

  return (
    <main className={`outer-container`}>
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
  );
}
