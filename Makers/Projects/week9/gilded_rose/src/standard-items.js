class StandardItem {
  constructor(sellIn, quality) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  _updateQuality() {
    if (this.sellIn > 0) {
      this.quality -= 1;
      this.sellIn -= 1
    } else {
      this.quality -= 2;
    }
  }
}