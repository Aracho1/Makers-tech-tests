describe('standard items', () => {
  it('the quality of an item should decrement in normal conditions', ()=> {
    let unicorn = new Item('unicorn', 10, 10)
    let shop = new Shop([unicorn])
    shop.updateQuality()
    expect(unicorn.quality).toEqual(9)
  })

  it('once the sell by date has passed, quality should degrade twice as fast', ()=> {
    let unicorn = new Item('Unicorn horn', 0, 40)
    let shop = new Shop([unicorn])
    shop.updateQuality()
    expect(unicorn.quality).toEqual(38)
  })

  it('the quality of an item should never be negative', ()=> {
    let unicorn = new Item('unicorn', 0, 0)
    let shop = new Shop([unicorn])
    shop.updateQuality()
    expect(unicorn.quality).toEqual(0)
  })

  
})