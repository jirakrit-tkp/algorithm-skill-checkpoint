function findProductPrice(products, name) {
  // Your code here
  const targetProduct = name;
  for (let product of products) {
    if (product.name === targetProduct) {
      return product.price
    }
  }
  return -1
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
