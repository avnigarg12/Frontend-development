// Q6 – E-Commerce Inventory System

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
  { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 15 },
  { id: 3, name: "Shirt", category: "Fashion", price: 1000, stock: 2 },
  { id: 4, name: "Shoes", category: "Fashion", price: 3000, stock: 8 }
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((group, p) => {
    group[p.category] = group[p.category] || [];
    group[p.category].push(p);
    return group;
  }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
