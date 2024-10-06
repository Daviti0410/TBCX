"use client";

export function ProductCard({ title, price, image, description }) {
  return (
    <div className="box">
      <img src={image} alt="Description1" className="image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-desc">{description}</p>
      <p className="product-price">{price}</p>
      <button type="button" className="product-button">
        Add to Cart
      </button>
    </div>
  );
}
