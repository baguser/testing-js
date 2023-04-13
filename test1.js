function reverseString(str) {
  if (typeof str !== "string") throw new Error("Please input a string");
  return str.split("").reverse().join("");
}

function capitalizeString(str) {
  if (typeof str !== "string") throw new Error("Please input a string");
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function findMax(arr) {
  if (!Array.isArray(arr)) throw new Error("Please input an array");
  if (arr.length === 0) throw new Error("Array must not be empty");
  return Math.max(...arr);
}

function calculateBMI(height, weight) {
  if (typeof height !== "number" || typeof weight !== "number") {
    throw new Error("Height and weight must be numbers");
  }
  const bmi = weight / Math.pow(height / 100, 2);
  return bmi.toFixed(2);
}

module.exports = { reverseString, capitalizeString, findMax, calculateBMI };
