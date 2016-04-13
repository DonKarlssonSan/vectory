var vector = require("../src/vector");

describe("Vector", function () {
  it("should add", function () {
    var v1 = new vector.Vector(2, 3);
    var v2 = new vector.Vector(4, 5);

    var sum = v1.add(v2);
    expect(sum.x).toBe(6);
    expect(sum.y).toBe(8);
  });

});
