describe('Shop', () => {
  describe('update quality', () => {
    it('At the end of each day, the quality will get lower', () => {
      let apple = new Item('apple', 30, 40)
      let shop = new Shop([apple])
      shop.updateQuality()
      expect(apple.sellIn).toEqual(29)
      expect(apple.quality).toEqual(39)
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

    it('the quality of an item should never be more than 50', ()=> {
      let agedBrie = new Item('Aged Brie', 15, 50)
      let shop = new Shop([agedBrie])
      shop.updateQuality()
      expect(agedBrie.quality).toBe(50)
    })

    it('Aged brie actually increases in quality the older it gets', ()=> {
      let agedBrie = new Item('Aged Brie', 15, 20)
      let shop = new Shop([agedBrie])
      shop.updateQuality()
      expect(agedBrie.quality).toBeGreaterThan(20)
    })

    it('sulfuras never has to be sold or decrease in quality', ()=> {
      let sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 50)
      let shop = new Shop([sulfuras])
      shop.updateQuality()
      expect(sulfuras.quality).toBe(50)
    })

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
})