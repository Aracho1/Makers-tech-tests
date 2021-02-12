# Bank tech test

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### User stories

```
As a client,
So I can save money,
I want to make a deposit
```

```
As a client,
So that I can see if the deposit has been made correctly,
I want to see the new balance and the date
```

### Planning

**_Transaction_** as Json Objects

```
Example 1) {date: "12/2/2021", type: "credit", amount: 2000}
Example 2) {date: "12/2/2021", type: "debit", amount: 500}
```

**_Account_** class consisting of multiple transactions by each client

```
{{"14/01/2021": { "debit" : "500.00", "balance": "2500.00"}},
{"13/01/2021": { "credit" : "2000.00", "balance": "3000.00"}}}
```

print

```
date || credit || debit || balance
14/01/2021 || || 500.00 || 2500.00
13/01/2021 || 2000.00 || || 3000.00
```

**_Date_** class

- Captures today's date and returns in a formatted string
- If today is January 12, 2021 => `"12/01/2021"`

**_Credit_** class

- Adds to the balance
- E.g. client enters "deposit 2000" and the current balance is 1,000
- `{"credit":"2000.00", "balance":"3000.00"}`

**_Debit_** class

- Deducts from the balance
- E.g. client enters "withdraw 500" and the current balance is 1,000
- `{"debit":"500.00", "balance":"500.00"}`

**_Balance_** class

- is attached to the account class and updates according to credit/debit

### Feature

```
> Please select service:
--------------------------------------
> 1. Display current balance (Enter 1)
> 2. Deposit cash (Enter 2)
> 3. Withdraw cash (Enter 3)
> 4. Print bank statement (Enter 4)

> 1. Display current balance (Enter 1)
--------------------------------------
> Date        || Balance
> 24/01/2021  || 2000

> 2. Deposit cash (Enter 2)
--------------------------------------
> Enter amount to deposit
> "2000.00"
> date       || credit  || balance
> 13/01/2021 || 2000.00 || 3000.00

> 3. Withdraw cash (Enter 3)
--------------------------------------
> Enter amount to withdraw
> "500.00"
> date       ||  debit  || balance
> 14/01/2021 || 500.00  || 2500.00

> 4. Print bank statement (Enter 4)
-------------------------------------------
date       || credit  || debit   || balance
14/01/2021 ||         || 500.00  || 2500.00
13/01/2021 || 2000.00 ||         || 3000.00
```
