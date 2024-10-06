"use client";

export function ProductCard({ title, price, image, description }) {
  return (
    <div className="box">
      <img src={image} alt="Description1" className="image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button type="button">Add to Cart</button>
    </div>
  );
}
