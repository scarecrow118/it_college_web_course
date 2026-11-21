//звд1
function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log("1. Сума від 1 до 5:", calculateSum(5)); // 15

//звд2
const multiply = function(a, b) {
  return a * b;
};
console.log("2. Множення 4 * 6:", multiply(4, 6)); // 24

//звд3
const power = (a, b) => a ** b;
console.log("3. 2 у степені 3:", power(2, 3)); // 8

//звд4
function harmonicSeries(n) {
  if (n <= 1) return 1;
  return (1 / n) + harmonicSeries(n - 1);
}
console.log("4. Гармонійний ряд (n=4):", harmonicSeries(4).toFixed(4)); // 2.0833

//звд5
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}
const triple = createMultiplier(3);
console.log("5. Потроєння 7:", triple(7)); // 21

//звд6
function applyFunction(value, func) {
  return func(value);
}
const double = x => x * 2;
const square = x => x * x;
console.log("6. Подвоєння 5:", applyFunction(5, double)); // 10
console.log("6. Квадрат 5:", applyFunction(5, square));   // 25

//звд7
function processSet(set, callback) {
  for (const item of set) {
    callback(item);
  }
}
const mySet = new Set([10, 20, 30]);
console.log("7. Обробка Set:");
processSet(mySet, value => console.log("   Елемент * 2 =", value * 2));