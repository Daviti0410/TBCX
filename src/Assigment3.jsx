import "./Assigment3.css";

export default function Assigment3() {
  const obj = {
    id: "10002",
    name: "Eco-Friendly Water Bottle",
    description: "Stay hydrated with our durable, eco-friendly water bottle.",
    price: 14.99,
    currency: "USD",
    imageURL: "https://example.com/images/product-10002.jpg",
  };

  const list = Object.entries(obj).reduce((acc, [key, value], index) => {
    acc.push(
      <tr key={index}>
        <td>{key}</td>
        <td>{value}</td>
        <td>{index}</td>
      </tr>
    );
    return acc;
  }, []);

  return (
    <div className="table">
      <h2>Assignment 3: Object Key-Value Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
}
