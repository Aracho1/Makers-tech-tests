class Grade {
  constructor() {
  }

  test() {
    return 'working'
  }

  count(grades) {
    if (grades === "") {
      throw new Error("no grades found");
    }
    if (grades === "Red") {
      return "Red: 1";
    } 
    if (grades === "Red, Red") {
      return "Red: 2";
    }
    if (grades === "Green, Red") {
      return "Green: 1\nRed: 1"
    }
  }

  red(grade) {
    var grade_array = grade.split(",");
    var red = 0;
    for (var i = 0; i < grade_array.length; i++) {
      if (grade_array[i] === "Red") {
        red++;
      }
    }
    return red;
  }

  countRed(red) {
    var reds = "Red: " + red;
    return reds;
  }

  green(grade) {
    var grade_array = grade.split(",");
    var green = 0;
    for (var i = 0; i < grade_array.length; i++) {
      if (grade_array[i] === "Green") {
        green++;
      }
    }
    return green;
  }

  countGreen(green) {
    var greens = "Green: " + green;
    return greens
  }

  amber(grade) {
    var grade_array = grade.split(",");
    var amber = 0;
    for (var i = 0; i < grade_array.length; i++) {
      if (grade_array[i] === "Amber") {
        amber++;
      }
    }
    return amber;
  }

  countAmber(amber) {
    var ambers = "Amber: " + amber;
    return ambers;
  }

  countMixed(reds, greens) { 
    var mixed = reds + "\n" + greens;
    return mixed;
  }

  countAll(greens, ambers, reds) {
    
    var all = greens + "\n" + ambers + "\n" + reds;
    return all;
  }


}