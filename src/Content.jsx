import React from "react";
import "./Content.css";

export default function Content() {
  return (
    <main className="outer-container">
      <div className="container">
        <div className="box">
          <img src="/public/jeans.jpg" alt="Description1" className="image" />
          <p>Description of Line 1</p>
          <button type="button">Add to Cart</button>
        </div>
        <div className="box">
          <img
            src="./public/sneakers.jpg"
            alt="Description2"
            className="image"
          />
          <p>Description of Line 2</p>
          <button type="button">Add to Cart</button>
        </div>
        <div className="box">
          <img src="/public/T-shirt.jpg" alt="Description3" className="image" />
          <p>Description of Line 3</p>
          <button type="button">Add to Cart</button>
        </div>
      </div>
    </main>
  );
}
