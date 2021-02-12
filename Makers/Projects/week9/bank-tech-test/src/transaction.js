class Transaction {
  constructor(type, amount, balance) {
    this.date = this._getDate()
    this.type = type;
    this.amount = amount
    this.balance = balance

  }

  _getDate() {
    let date = new DateClass()
    return date.format()
  }

}