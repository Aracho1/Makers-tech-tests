class BackStagePass {
  constructor(sellIn, quality) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  _updateQuality() {
    switch (true) {
      case (this.sellIn === 0):
        this.quality = 0;
        break;
      case (this.sellIn <= 5):
        this.quality += 3;
        break;
      case (this.sellIn <= 10 && this.sellIn > 5):
        this.quality += 2;
        break;
      default:
        this.quality += 1;
        break;
    }
  }
}