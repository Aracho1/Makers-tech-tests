describe('backstage passes', () => {

  it('BACKSTAGE PASSES increase in quality by 2 when there are 10 days or less', ()=> {
    let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30)
    let shop = new Shop([pass])
    shop.updateQuality()
    expect(pass.quality).toBe(32)
  })

  it('BACKSTAGE PASSES increase in quality by 2 when there are 5 days or less', ()=> {
    let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30)
    let shop = new Shop([pass])
    shop.updateQuality()
    expect(pass.quality).toBe(33)
  })

  it('BACKSTAGE PASSES quality drops to 0 after the concert', ()=> {
    let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)
    let shop = new Shop([pass])
    shop.updateQuality()
    expect(pass.quality).toBe(0)
  })


  
})