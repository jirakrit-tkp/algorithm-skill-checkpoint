function findProductPrice(products, name) {
  // Your code here
  const sortedProducts = products.slice().sort((a, b) => a.name.localeCompare(b.name));
  const targetProduct = name;
  let left = 0;
  let right = sortedProducts.length-1;
  while (left <= right) {
    let mid = Math.floor((left+right)/2);
    if (sortedProducts[mid].name === targetProduct) {
      return sortedProducts[mid].price;
    } else if (sortedProducts[mid].name > targetProduct) {
      right = mid -1
  } else {
      left = mid + 1
  }
  };
  return -1
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Avocado", price: 10}
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
