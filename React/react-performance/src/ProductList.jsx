function ProductList({ products, onSelectProduct }) {
  console.log("ProductList rendered");

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => onSelectProduct(product)}>
            Select
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
