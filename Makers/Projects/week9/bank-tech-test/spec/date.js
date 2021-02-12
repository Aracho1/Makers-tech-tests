describe('Date', () => {
  it('should return dates date', () => {
    let date = new DateClass();
    spyOn(date, "getMonth").and.returnValue("02")
    spyOn(date, "getDate").and.returnValue("11")
    spyOn(date, "getYear").and.returnValue("2021")
    expect(date.display()).toEqual("11/02/2021")
  })
})