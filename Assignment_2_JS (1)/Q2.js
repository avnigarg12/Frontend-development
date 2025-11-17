// Q2: String Manipulation Report
let productName = " wireless headphones PRO ";
let cleaned = productName.trim().toLowerCase();
let formatted = cleaned.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
formatted = formatted.replace("Pro", "Pro Edition");
console.log("Formatted Title:", formatted);
console.log("Length:", formatted.length);
