class Balance {
  constructor(initial = 0) {
    this.current = initial
  }

  update(amount) {
    this.check(amount)
    this.current += amount;
  }

  check(amount) {
    if (this.current + amount < 0) {
      throw new Error('Insufficient balance')
    }
  }

}