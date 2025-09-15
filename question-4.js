function sortProductsByPrice(products) {
  // Your code here
  const sortedProducts = products.slice();
  for (let i = 0; i < sortedProducts.length-1; i++) {
    for (let j = 0; j < sortedProducts.length-1-i; j++) {
      if (sortedProducts[j].price > sortedProducts[j+1].price) {
        const currProduct = sortedProducts[j];
        sortedProducts[j] = sortedProducts[j+1];
        sortedProducts[j+1] = currProduct
      }
    }
  }
  return sortedProducts
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));
console.log("---------------TEST---------------")
console.log(products);

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
