describe('Balance', () => {
  let balance;
  beforeEach(() => {
    balance = new Balance();
  })
  it('should be zero unless specified', () => {
    expect(balance.current).toEqual(0)
  })

  it('should initialize with the specific amount if specified', () => {
    let balance = new Balance(2)
    expect(balance.current).toEqual(2)
  })
})