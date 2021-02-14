describe('conjured items', () => {
  it('the quality of an item should decrement x 2 in normal conditions', ()=> {
    let conjured = new Item('Conjured', 10, 10)
    let shop = new Shop([conjured])
    shop.updateQuality()
    expect(conjured.quality).toEqual(8)
  })

  it('once the sell by date has passed, quality should degrade twice as fast', ()=> {
    let conjured = new Item('Conjured', 0, 40)
    let shop = new Shop([conjured])
    shop.updateQuality()
    expect(conjured.quality).toEqual(36)
  })

  it('the quality of an item should never be negative', ()=> {
    let conjured = new Item('Conjured', 0, 0)
    let shop = new Shop([conjured])
    shop.updateQuality()
    expect(conjured.quality).toEqual(0)
  })

  
})