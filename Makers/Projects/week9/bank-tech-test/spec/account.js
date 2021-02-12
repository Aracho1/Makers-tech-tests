describe('Account', () => {
  let account;
  beforeEach(() => {
    account = new Account();
  })
  describe("deposit", () => {
    it('should raise an error if the amount is less than or equal to 0', () => {
      expect(function () {
        account.deposit(0)
      }).toThrowError('Invalid amount. Please enter again')
    })

    it('should raise an error if the amount is not a number', () => {
      expect(function () {
        account.deposit('NAN')
      }).toThrowError('Invalid amount. Please enter again')
    })

    it('should update the balance by the amount', () => {
      account.deposit(500)
      expect(account.balance).toEqual(500)
    })
  })

  describe('withdraw', () => {
    it('should raise an error if the amount is less than or equal to 0', () => {
      expect(function () {
        account.withdraw(0)
      }).toThrowError('Invalid amount. Please enter again')
    })

    it('should raise an error if the amount is not a number', () => {
      expect(function () {
        account.withdraw('NAN')
      }).toThrowError('Invalid amount. Please enter again')
    })

    it('should update the balance by the amount', () => {
      account.deposit(1000)
      account.withdraw(500)
      expect(account.balance).toEqual(500)
    })
  })

  describe('display current balance', () => {
    it('should display the current amount', () => {
      account.deposit(200)
      expect(account.displayCurrentBalance()).toEqual(200)

    })
  })
})