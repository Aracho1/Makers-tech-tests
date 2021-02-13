describe('aged brie', () => {
  it('Aged brie actually increases in quality the older it gets', ()=> {
    let agedBrie = new Item('Aged Brie', 15, 20)
    let shop = new Shop([agedBrie])
    shop.updateQuality()
    expect(agedBrie.quality).toBeGreaterThan(20)
  })

  it('quality of brie should never be more than 50', ()=> {
    let agedBrie = new Item('Aged Brie', 15, 50)
    let shop = new Shop([agedBrie])
    shop.updateQuality()
    expect(agedBrie.quality).toBe(50)
  })

  it('quality of brie should decrement by 2 when after it expires', ()=> {
    let agedBrie = new Item('Aged Brie', 0, 20)
    let shop = new Shop([agedBrie])
    shop.updateQuality()
    expect(agedBrie.quality).toBe(18)
  })

  it('quality of brie should never be less than 0', ()=> {
    let agedBrie = new Item('Aged Brie', 0, 0)
    let shop = new Shop([agedBrie])
    shop.updateQuality()
    expect(agedBrie.quality).toBe(0)
  })

  
})