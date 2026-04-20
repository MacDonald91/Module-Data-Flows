let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY     ITEM                TOTAL");

let grandTotal = 0;

// ✅ destructuring + formatting
for (const { itemName, quantity, unitPricePence } of order) {
  const totalPence = quantity * unitPricePence;
  const totalPounds = (totalPence / 100).toFixed(2);

  grandTotal += totalPence;

  console.log(
    `${String(quantity).padEnd(8)}${itemName.padEnd(20)}${totalPounds}`
  );
}

console.log("=".repeat(35));
console.log(`TOTAL: ${(grandTotal / 100).toFixed(2)}`);