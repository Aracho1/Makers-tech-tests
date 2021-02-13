class Shop {
  constructor(items = []) {
    this.items = items;
    this.MAX_QUALITY = 50
    this.MIN_QUALITY = 0
  }
  updateQuality() {
    this.items.forEach(item => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') { return; }
      let commodity = this._checkItemCategory(item)
      commodity._updateQuality();
      this._checkQualityThreshold(commodity)
      item.quality = commodity.quality;
      item.sellIn = commodity.sellIn
      return this.items 
  })
}
  _checkItemCategory(item) {
    let commodity;
    if (item.name === 'Aged Brie') {
      commodity = new AgedBrie(item.sellIn, item.quality)
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      commodity = new BackStagePass(item.sellIn, item.quality);
    } else {
      commodity = new StandardItem(item.sellIn, item.quality);
    }
    return commodity
  }

  _checkQualityThreshold(item) {
    if (item.quality < this.MIN_QUALITY) {
      item.quality = this.MIN_QUALITY;
    }
    if (item.quality > this.MAX_QUALITY) {
      item.quality = this.MAX_QUALITY;
    }
  }
}


