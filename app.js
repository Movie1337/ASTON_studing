// Задание 1
// Массивы в JavaScript часто называют "неправильными" потому, что они представляют собой гибрид нескольких структур данных, а не являются чистыми массивами в традиционном понимании.
// Static Arrays, Dynamic Arrays, Linked Lists, Doubly Linked Lists, Hash Tables, Binary Trees, Graphs.

// Задание 2
// Bind
function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

const boundLogger = logger.bind(obj);
boundLogger();

// Call
function loggerSecond() {
  console.log(`I output only external context: ${this.item}`);
}

const objSecond = { item: "some value" };

logger.call(objSecond);

// Apply
function loggerThird() {
  console.log(`I output only external context: ${this.item}`);
}

const objThird = { item: "some value" };

logger.apply(objThird);

// Задание 3.1
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
return arrayOfNumbers.reduce((acc, item) => acc + item, 0);

const arrayOfStrings = ["Hello,", "my", "name", "is", "Matthew."];
return (joinedString = arrayOfStrings.join(" "));

const arrayOfNumbersSecond = [99, 22, 77, 44, 55, 66, 33, 88, 11];
const maxNumber = Math.max(...arrayOfNumbersSecond);
const minNumber = Math.min(...arrayOfNumbersSecond);

// Задание 3.2
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Стек пуст";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Стек пуст";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  printStack() {
    console.log(this.items);
  }
}

// Задание 3.3
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Очередь пуста";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Очередь пуста";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  printQueue() {
    console.log(this.items);
  }
}

const queue = new Queue();

queue.enqueue("Иван");
queue.enqueue("Мария");
queue.enqueue("Петр");
queue.enqueue("Ольга");
console.log("Очередь:", queue.printQueue());

console.log("Обслуживается:", queue.dequeue());
console.log("Очередь:", queue.printQueue());

queue.enqueue("Сергей");
console.log("Очередь:", queue.printQueue());

console.log("Обслуживается:", queue.dequeue());
console.log("Очередь:", queue.printQueue());

console.log("Следующий в очереди:", queue.front());
console.log("Размер очереди:", queue.size());

queue.clear();
console.log("Очередь после очистки:", queue.printQueue());

// Занятие 5 Задание 3
// 1 способ
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Person2(name, age, city) {
  Person.call(this, name, age);
  this.city = city;
}

Person2.prototype = Object.create(Person.prototype);
Person2.prototype.constructor = Person2;

Person2.prototype.logInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
};

const person1 = new Person("Matthew", 23);
const person2 = new Person2("Tanya", 20, "Saint-Petersburg");

person1.greet(); // Hello, my name is Matthew and I am 23 years old.
person2.greet(); // Hello, my name is Tanya and I am 20 years old.
person2.logInfo(); // Name: Tanya, Age: 20, City: Saint-Petersburg

// 2 способ
const personPrototype = {
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

const person3 = Object.create(personPrototype, {
  name: { value: "Matthew", writable: true },
  age: { value: 23, writable: true },
});

function Person4(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

Person4.prototype = Object.create(personPrototype);
Person4.prototype.constructor = Person4;
Person4.prototype.logInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
};

const person4 = new Person4("Tanya", 20, "Saint-Petersburg");

person1.greet(); // Hello, my name is Matthew and I am 23 years old.
person2.greet(); // Hello, my name is Tanya and I am 20 years old.
person2.logInfo(); // Name: Tanya, Age: 20, City: Saint-Petersburg

// Занятие 5 Задание 4
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class PersonThree extends Person {
  constructor(name, age, city) {
    super(name, age);
    this.city = city;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== "string" || newName.length === 0) {
      console.error("Имя должно быть непустой строкой");
      return;
    }
    this._name = newName;
  }

  get city() {
    return this._city;
  }
  set city(newCity) {
    this._city = newCity;
  }
}

const person5 = new PersonThree("Matthew", 23, "Saint-Petersburg");
person3.greet(); // Hello, my name is Matthew and I am 32 years old.
console.log(person3.name); // Matthew
person3.name = "Петр"; // Изменяем имя через сеттер
console.log(person3.name); // Петр

console.log(person3.city); // Saint-Petersburg
person3.city = "Moscow";
console.log(person3.city); // Moscow
