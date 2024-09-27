// 1
const marks = [85, 97, 44, 37, 76, 60];

// Add all marks
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
}

// Calculate the average
let averageMarks = totalMarks / marks.length;

console.log("Average marks:", averageMarks);

// 2
const prices = [250, 645, 300, 900, 50];

// Create a new array to store the final prices
let discountedPrices = [];

// Loop through the prices and apply a 10% discount
for (let i = 0; i < prices.length; i++) {
    let finalPrice = prices[i] - (prices[i] * 0.1); 
    discountedPrices.push(finalPrice); 
}

console.log("Prices after discount:", discountedPrices);

// 3
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Remove the first company
companies.shift(); 

// Remove "Uber" and add "Ola" in its place
for (let i = 0; i < companies.length; i++) {
    if (companies[i] === "Uber") {
        companies[i] = "Ola"; 
    }
}

// Add "Amazon" at the end
companies.push("Amazon"); 

console.log("Updated companies list:", companies);
