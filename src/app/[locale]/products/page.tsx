import ProductList from "../../../components/ProductList";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  rating: number;
  comments: string;
};

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`http://localhost:3000/api/getProducts`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: { products: Product[] } = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Content(): Promise<JSX.Element> {
  const products = await getProducts();
  return (
    <div className="">
      <ProductList products={products} />
    </div>
  );
}
