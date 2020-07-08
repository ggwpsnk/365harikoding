console.log("testing");

var testing = 100;
console.log(testing);
console.log("nilai var testing awal adalah", testing);

testing = 300;
console.log("nilai var testing setelah diubah adalah", testing);

const testingConst = 1000;
console.log('nilai const testingConst adalah', testingConst);
try {
  testingConst = 4000;
} catch (error) {
  console.log('error saat mengubah nilai testingConst', error);
}

let testingLet = 50;
console.log("nilai let testingLet awal adalah", testingLet);

testingLet = 999;
console.log("nilai let testingLet setelah diubah adalah", testingLet);

const x = 5 + 10;
console.log('nilai x adalah ', x);

const a = 2;
const b = 3;
const c = a + b;
console.log('nilai c adalah ', c);