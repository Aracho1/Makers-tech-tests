class Account {
  constructor() {
    this.balance = 0;
    this.history = []
    console.log(this._options());
  }


  displayCurrentBalance() {
    console.log('Date       || Balance       ');
    console.log(`${this._getDate()}  || ${this.balance}`)
    return this.balance
  }

  deposit(money) {
    let deposit = this._validate(money)
    this._actionDeposit(deposit)
  }

  withdraw(money) {
    let withdrawal = this._validate(money)
    this._actionDebit(withdrawal)
  }

  printBankStatement() {
    console.log("   Date  ||  Credit   ||  Debit  ||  Balance  ||")
    let formatted_amount;
    this.history.forEach(transaction => {
      if (transaction.type === "credit") {
        formatted_amount = `  ${transaction.amount}   ||        `
      } else if (transaction.type === "debit") {
        formatted_amount = `           || ${transaction.amount}  `
      }
      console.log(transaction.date + "||" + formatted_amount + " ||  " + transaction.balance + "   ||")
    })
  }

  exit() {
    return 'Thank you for using our service. See you soon again!'
  }


  // private

  _options() {
    return 'Welcome! Please select service:\n1. Display current balance  =>\'account.displayCurrentBalance()\'\n2. Deposit cash             =>\'account.deposit(amount)\'\n3. Withdraw cash            =>\'account.withdraw(amount)\'\n4. Print bank statement     =>\'account.printBankStatement()\'\n5. Exit                     =>\'account.exit()\':'
  }

  _getDate() {
    let date = new DateClass()
    return date.format()
  }
  _validate(number) {
    let amount = parseFloat(number)
    if (amount <= 0 || isNaN(amount)) {
      throw new Error('Invalid amount. Please enter again')
    }
    return number
  }

  _checkBalance(withdrawal) {
    if (this.balance < withdrawal) {
      throw new Error(`Sorry, your current balance is £${this.balance}.`)
    }
  }

  _updateBalance(amount) {
    this.balance += amount
  }

  _updateTransaction(type, amount) {
    this._updateHistory(new Transaction(type, amount.toFixed(2), this.balance.toFixed(2)))
  }

  _confirmDeposit(deposit) {
    console.log(`£${deposit.toFixed(2)} has been deposited successfully.\nNew balance: £${this.balance.toFixed(2)}.`)
  }

  _confirmDebit(debit) {
    console.log(`£${debit.toFixed(2)} has been withdrawn successfully.\nNew balance: £${this.balance.toFixed(2)}.`)
  }

  _updateHistory(transaction) {
    this.history.unshift(transaction)
  }

  _actionDeposit(amount) {
    this._updateBalance(amount)
    this._updateTransaction('credit', amount)
    this._confirmDeposit(amount)
  }

  _actionDebit(amount) {
    this._checkBalance(amount)
    this._updateBalance(amount * (-1))
    this._updateTransaction('debit', amount)
    this._confirmDebit(amount)
  }
}

let account = new Account();