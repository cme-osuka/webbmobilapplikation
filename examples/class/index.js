
class Counter {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value += 1;
  }

  reset() {
    this.value = 0;
  }

  getCurrentValue() {
    return this.value;
  }
}

const firstCounter = new Counter();
firstCounter.increment();
firstCounter.increment();
const x = firstCounter.getCurrentValue();
console.log(x);

firstCounter.reset()
const y = firstCounter.getCurrentValue();
console.log(y);