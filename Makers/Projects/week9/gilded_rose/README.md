# Gilded Rose

* Description of the kata: http://iamnotmyself.com/2011/02/14/refactor-this-the-gilded-rose-kata/
* Legacy code (Javascript-Jasmine) from here: https://github.com/emilybache/GildedRose-Refactoring-Kata

## My approaches
1. Write tests on the existing features which pass
2. Refactor the existing lines of code without failing any tests
3. Add the new feature

### Pseudocode
* *“Sulfuras”*, never has to be sold or decreases in Quality
if (item.name === "Sulfuras") skip/continue

The Quality of an item is never negative
The Quality of an item is never more than 50
(item.quality - 1) while (0 <= quality && quality <= 50)

Once the sell by date has passed, Quality degrades twice as fast
(item.quality - 2) if (item.sellIn = 0)

Items which increase in value
* *“Aged Brie”* 
(item.quality + 1) while (item.sellIn >= 0)

* *“Backstage passes”*
(item.quality + 1) if (item.sellIn > 10)
(item.quality + 2) if (item.sellIn <= 10)
(item.quality + 3) if (item.sellIn <= 3)
(item.quality = 0) if (item.sellIn = 0)
