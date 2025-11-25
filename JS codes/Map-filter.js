function processProducts(products) {
  // 1. Use map() to extract the product name
  const productNames = products.map(product => product.name);

  // 2. Use forEach() to log messages based on price
  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });

  return productNames; // Optional: return the names if needed
}

// Example 
const items = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(items);
