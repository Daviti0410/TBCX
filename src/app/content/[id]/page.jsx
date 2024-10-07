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
      <h1>{product.brand}</h1>
      <div className="inner-container">
            <div className="for-image">
                <img src={product.images} alt="image" />
            </div>
            <div className="info-container">
                <h2>Rating: {product.rating}⭐</h2>
                <h1 className="title">{product.title}</h1>
                <p className="availability">{product.availabilityStatus}</p>
                <h3>Price: {product.price}$</h3>
                <p className="description">{product.description}</p>
                <button className="button">Add To The Card</button>
            </div>
      </div>
    </div>
  );
}