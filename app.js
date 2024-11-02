// Задание 1
// 1 способ
const counter = {
  count: 0,
  increment: function () {
    this.count++;
  },
  decrement: function () {
    this.count--;
  },
};

// 2 способ
function Counter() {
  this.count = 0;
  this.increment = function () {
    this.count++;
  };
  this.decrement = function () {
    this.count--;
  };
}

const counterSecond = new Counter();

// 3 способ
class Counter {
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}

const counterThird = new Counter();

// 4 способ
const counterPrototype = {
  increment: function () {
    this.count++;
  },
  decrement: function () {
    this.count--;
  },
};

const counterFourth = Object.create(counterPrototype);
counter.count = 0;

// 5 способ
const initialValues = { count: 0 };
const counter = Object.assign({}, initialValues, {
  increment: function () {
    this.count++;
  },
  decrement: function () {
    this.count--;
  },
});

// Задание 2
// 1 способ
const copiedCounter = Object.assign({}, counter);

// 2 способ
const copiedCounterSecond = { ...counter };

// Задание 3
// 1 способ
function makeCounter() {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count,
  };
}

// 2 способ
function makeCounter() {
  let count = 0;
  return {
    increment: function () {
      this.count++;
    },
    decrement: function () {
      this.count--;
    },
    getCount: function () {
      return this.count;
    },
  };
}

// 3 способ
function MakeCounter() {
  this.count = 0;
  this.increment = () => this.count++;
  this.decrement = () => this.count--;
  this.getCount = () => this.count;
}

// 4 способ
class MakeCounter {
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  getCount() {
    return this.count;
  }
}

// Бонус задание 2
function reverseStr(str) {
  return str.split("").reverse().join("");
}
