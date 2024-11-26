"use client";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  rating: number;
  comments: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.name}
          <h1>{product.name}</h1>
          <Image
            src={product.img || "/placeholder.jpg"}
            alt={`${product.name} Image`}
            width={500}
            height={500}
            className="rounded-md object-cover"
          />
          <h3>{product.price}</h3>
          <h3>{product.rating}</h3>
          <p>{product.comments}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
