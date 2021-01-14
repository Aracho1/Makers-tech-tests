describe('Scrabble', function() {
  beforeEach(function(){
    scrabble = new Scrabble();
  })
  it("should return 0 for no input", function() {
    
    expect(scrabble.score('')).toEqual(0)
  })

  it("should return 1 for A", function() {
    expect(scrabble.score('A')).toEqual(1)
  })

  it("D should return 2", function() {
    expect(scrabble.score('D')).toEqual(2)
  })

  it("AD should return 3", function() {
    expect(scrabble.score('AD')).toEqual(3);
  })

  it("'street' should return 6", function(){
    expect(scrabble.score('STREET')).toEqual(6);
  })

  it("should return 22 for 'quirky'", function() {
    expect(scrabble.score('QUIRKY')).toEqual(22);
  })

  it ("should return 41 for 'OXYPHENBUTAZONE'", function() {
    expect(scrabble.score('OXYPHENBUTAZONE')).toEqual(41);
  })
})