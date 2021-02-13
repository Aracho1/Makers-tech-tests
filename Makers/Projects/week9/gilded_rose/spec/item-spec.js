describe("Item", function () {

  it("should take name, sellin and quality as parameters", () => {
    const item = new Item("banana", 3, 10)
    expect(item.name).toEqual("banana");
    expect(item.sellIn).toEqual(3);
    expect(item.quality).toEqual(10);
  });

  it("should raise an error if there is a missing parameter", () => {
    expect(function () {
      new Item("apple", 2)
    }).toThrowError;
  });
});