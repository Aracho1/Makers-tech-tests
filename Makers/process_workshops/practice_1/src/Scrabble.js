'use strict';

class Scrabble{

  constructor() {
    var table;
    this.table = {
      AEIOULNRST: 1,
      DG: 2,
      BCMP: 3,
      FHVWY: 4,
      K: 5,
      JX: 8,
      QZ: 10
    }
    this.total = 0;

  }

  score(word){    
    if (word === '') {
      return 0
    }
    word = word.split('')
    for (var i in word) {
      for (var key in this.table) {
        key = key.split('')
        for (var j in key) {
          if (word[i] === key[j]){
            this.total += this.table[key]
            console.log(this.table[key])
          }
        }
        
      }
    }
    return this.total;
  }
};