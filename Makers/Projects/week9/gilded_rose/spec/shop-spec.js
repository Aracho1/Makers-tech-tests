describe('Shop', () => {
  describe('update quality', () => {
    it('At the end of each day, the quality will get lower', () => {
      let apple = new Item('apple', 30, 40)
      let shop = new Shop([apple])
      shop.updateQuality()
      expect(apple.sellIn).toEqual(29)
      expect(apple.quality).toEqual(39)
    })

    it('sulfuras never has to be sold or decrease in quality', ()=> {
      let sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 50)
      let shop = new Shop([sulfuras])
      shop.updateQuality()
      expect(sulfuras.quality).toBe(50)
    })
    
  })
})