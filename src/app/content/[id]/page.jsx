import axios from "axios";
import "./page.css";

async function fetchContent(id) {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res.data;
}

export default async function PostDetail({ params }) {
  const product = await fetchContent(params.id);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-card">
      <div className="">
        <h2>rating: {product.rating}</h2>
        <h1 className="">{product.title}</h1>
        <h1>Brand: {product.brand}</h1>
        <div>
            <img src={product.images} alt="image" />
        </div>
        <p className="">{product.description}</p>
        <h3>{product.price}</h3>
        <p>{product.discountPercentage}% of discount</p>
        
      </div>
    </div>
  );
}