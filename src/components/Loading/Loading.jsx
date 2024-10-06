import "./Loading.css"; // ცალკე css ფაილი ვიზუალისთვის

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading posts...</p>
    </div>
  );
}
