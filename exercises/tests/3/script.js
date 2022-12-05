class Counter {
  count = 0;

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }

  getCount() {
    return this.count;
  }

  reset() {
    this.count = 0;
  }
}

module.exports = Counter;