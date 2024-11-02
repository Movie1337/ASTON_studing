const helloWorld = () => {
  console.log("Hello World");
  return "Hello World";
};

helloWorld();

const sumNumbers = (num1, num2) => {
  return num1 + num2;
};

sumNumbers(1, 2);

// Написать по 2 примера создания примитивных значений
// String
const name = "Матвей";
const greeting = `Привет, ${name}! Как дела?`;

const str1 = "JavaScript";
const str2 = " это круто!";
const combined = str1.concat(str2);

// Number
const numValue = Number("13.37");

const calculatedValue = 50 * 2 + 10 / 2;

// Boolean
const isActive = Boolean(1);
const isInactive = Boolean(0);

const isValid = 5 > 3 && 10 < 20;
const isFalse = false || 0;

// null
const person = {
  name: "Матвей",
  age: null,
};

let item = "игровой ПК";
item = null;

// undefined
function greet(name) {
  console.log(`Привет, ${name}`);
}

const data = { a: 1 };
const value = data.b;

// symbol
const id = Symbol("id");
const user = {
  name: "Матвей",
  [id]: 12345,
};

const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2);

// BigInt
const bigNum1 = 123456789012345678901234567890n + 10n;
const bigNum2 = BigInt("987654321098765432109876543210");

const res = "B" + "a" + (1 - "hello");
console.log(res); // res = "BaNaN"

const res2 = (true && 3) + "d";
console.log(res2); // res2 = "3d"

const res3 = Boolean(true && 3) + "d";
console.log(res3); // res3 = "trued"
