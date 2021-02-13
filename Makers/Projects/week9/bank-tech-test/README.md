# Bank tech test

### Requirements

- An interactive 'bank' where customers can make deposits and withdrawals

### How to Use

`let account = new Account()`

```
> Welcome! Please select service:
1. Display current balance  =>'account.displayCurrentBalance()'
2. Deposit cash             =>'account.deposit(amount)'
3. Withdraw cash            =>'account.withdraw(amount)'
4. Print bank statement     =>'account.printBankStatement()'
5. Exit                     =>'account.exit()':

1. account.displayCurrentBalance();
--------------------------------------
Date       || Balance
12/2/2021  || 100

2. account.deposit(100)
--------------------------------------
£100.00 has been deposited successfully.
New balance: £100.00.

3. account.withdraw(30)
--------------------------------------
£30.00 has been withdrawn successfully.
New balance: £70.00.

4. account.printBankStatement()
-------------------------------------------

    Date  ||  Credit   ||  Debit  ||  Balance  ||
12/2/2021 ||           ||  30.00  ||   70.00   ||
12/2/2021 ||  100.00   ||         ||  100.00   ||

```

### User stories

```
As a client,
So I can save money,
I want to make a deposit
```

```
As a client,
So that I can see if the deposit and/or withdrawal has been made correctly,
I want to see the new balance and the date
```

```
As a client,
So I can spend money,
I want to withdraw money
```

```
As a client,
So that I can keep up to date with my transactions,
I want to see the full bank statement on request
```

### Planning

**_Transaction_** as Json-type Object

```
{date: "12/2/2021", type: "credit", amount: "100.00", balance: "100.00"}
{date: "12/2/2021", type: "debit", amount: "50.00", balance: "50.00"}

```

**_Account_** class consists of multiple transactions

```
[{"14/01/2021": { "debit" : "500.00", "balance": "2500.00"},
{"13/01/2021": { "credit" : "2000.00", "balance": "3000.00"}]
```

_deposit(amount)_

- Adds to the balance
- E.g. client enters "deposit 2000" and the current balance is 1,000
- `{"credit":"2000.00", "balance":"3000.00"}`

_withdraw(amount)_

- Deducts from the balance
- E.g. client enters "withdraw 500" and the current balance is 1,000
- `{"debit":"500.00", "balance":"500.00"}`

_printBankStatement()_

```
date || credit || debit || balance
14/01/2021 || || 500.00 || 2500.00
13/01/2021 || 2000.00 || || 3000.00
```

**_Date_** class

- Captures today's date and returns in a formatted string
- If today is January 12, 2021 => `"12/01/2021"`
