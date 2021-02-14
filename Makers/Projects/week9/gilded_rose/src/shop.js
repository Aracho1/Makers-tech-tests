class Shop {
  constructor(items = []) {
    this.items = items;
    this.MAX_QUALITY = 50
    this.MIN_QUALITY = 0
  }
  updateQuality() {
    this.items.forEach(item => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') { return; }
      let processedItem = this._process(item)
      item.quality = processedItem.quality;
      item.sellIn = processedItem.sellIn
      return this.items 
  })
}

  _process(item) {
    let commodity = this._checkItemCategory(item)
    commodity._updateQuality();
    this._checkQualityThreshold(commodity)
    return commodity
  }

  _checkItemCategory(item) {
    let commodity;
    item.name === 'Aged Brie' ? commodity = new AgedBrie(item.sellIn, item.quality)
      : item.name === 'Backstage passes to a TAFKAL80ETC concert' ? commodity = new BackStagePass(item.sellIn, item.quality)
      : item.name === 'Conjured' ? commodity = new ConjuredItem(item.sellIn, item.quality)
      : commodity = new StandardItem(item.sellIn, item.quality);
    return commodity
  }

  _checkQualityThreshold(item) {
    this._isBelowMin(item)
    this._isAboveMax(item)
  }

  _isBelowMin(item) {
    if (item.quality < this.MIN_QUALITY) {
      item.quality = this.MIN_QUALITY
    }
  }

  _isAboveMax(item) {
    if (item.quality > this.MAX_QUALITY) {
      item.quality = this.MAX_QUALITY;
    }
  }
}


