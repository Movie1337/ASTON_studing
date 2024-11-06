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
