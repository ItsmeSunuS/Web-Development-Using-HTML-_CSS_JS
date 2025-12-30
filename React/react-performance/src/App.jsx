import { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Phone", price: 500 },
    { id: 2, name: "Laptop", price: 1200 },
    { id: 3, name: "Headphones", price: 200 },
  ];

  // ❌ recalculates every render
  const totalPrice = products.reduce((sum, product) => {
    console.log("Calculating total price...");
    return sum + product.price;
  }, 0);

  // ❌ new function every render
  const handleSelectProduct = (product) => {
    console.log("Selected:", product.name);
  };

  return (
    <div>
      <h2>Total Price: ${totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

export default App;
