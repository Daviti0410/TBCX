import React from "react";
import "./Content.css";
import { Box1, Box2, Box3 } from "./Cards";

export default function Content() {
  return (
    <main className="outer-container">
      <div className="container">
        <Box1 backgroundColor="green" />
        <Box2 backgroundColor="red" />
        <Box3 backgroundColor="blue" />
      </div>
    </main>
  );
}
