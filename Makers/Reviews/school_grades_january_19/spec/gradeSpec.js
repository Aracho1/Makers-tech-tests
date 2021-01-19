describe('Grade', () => {
  it ('should return true for test', () => {
    var grade = new Grade();
    expect(grade.test()).toEqual('working')
  })

  it('should raise an error if the input is empty', () => {
    var grade = new Grade();
    expect(function() {grade.count("")}).toThrowError("no grades found")
  })

  it("should count 1 grade correctly", () => {
    var grade = new Grade();
    expect(grade.count("Red")).toEqual("Red: 1");
  })

  it("should count 2 grades of the same kind correctly", () => {
    var grade = new Grade();
    expect(grade.count("Red, Red")).toEqual("Red: 2")
  })

  it("should count 2 grades of different kinds correctly", () => {
    var grade = new Grade();
    expect(grade.count("Green, Red")).toEqual("Green: 1\nRed: 1");
  })

  it("should count the number of red", () => {
    var grade = new Grade();
    expect(grade.red("Red,Red")).toEqual(2);
  })

  it("should count the number of greens", () => {
    var grade = new Grade();
    expect(grade.green("Green,Green")).toEqual(2);
  })

  it("should put the numbers with a ':'", () => {
    var grade = new Grade();
    expect(grade.countRed(2)).toEqual("Red: 2");
  })

  it("should put the numbers with a ':'", () => {
    var grade = new Grade();
    var red = grade.red("Red,Red")
    expect(grade.countRed(red)).toEqual("Red: 2");
  })

  it("should put the numbers with a ':'", () => {
    var grade = new Grade();
    var green = grade.green("Green,Green,Green")
    expect(grade.countGreen(green)).toEqual("Green: 3");
  })

  it("should count multiple colors and return in a format", () => {
    var grade = new Grade();
    var red = grade.red("Red,Red")
    var reds = grade.countRed(red)
    var green = grade.green("Green,Green,Green")
    var greens = grade.countGreen(green)
    expect(grade.countMixed(reds, greens)).toEqual("Red: 2\nGreen: 3");
  })

  it("should return all colors", () => {
    var grade = new Grade();
    var red = grade.red("Red,Red")
    var reds = grade.countRed(red)
    var green = grade.green("Green,Green")
    var greens = grade.countGreen(green)
    var amber = grade.amber("Amber")
    var ambers = grade.countAmber(amber)
    expect(grade.countAll(greens, ambers, reds)).toEqual("Green: 2\nAmber: 1\nRed: 2");
  })

  it("should return all colors", () => {
    var grade = new Grade();
    var red = grade.red("Red,Red")
    var reds = grade.countRed(red)
    var green = grade.green("Green,Green")
    var greens = grade.countGreen(green)
    var ambers = 0;
    expect(grade.countAll(greens, ambers, reds)).toEqual("Green: 2\nRed: 2");
  })

  
})