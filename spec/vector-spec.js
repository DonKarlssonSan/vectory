var Vector = require("../src/vector");

describe("Vector", function () {
  it("should add", function () {
    var v1 = new Vector(2, 3);
    var v2 = new Vector(4, 5);

    var sum = v1.add(v2);
    expect(sum.x).toBe(6);
    expect(sum.y).toBe(8);
  });

  it("should add to", function () {
    var v1 = new Vector(2, 3);
    var v2 = new Vector(4, 5);

    v1.addTo(v2);
    expect(v1.x).toBe(6);
    expect(v1.y).toBe(8);
  });

  it("should subtract", function () {
    var v1 = new Vector(2, 3);
    var v2 = new Vector(4, 5);

    var diff = v1.sub(v2);
    expect(diff.x).toBe(-2);
    expect(diff.y).toBe(-2);
  });

  it("should subtract from", function () {
    var v1 = new Vector(2, 3);
    var v2 = new Vector(4, 5);

    v1.subFrom(v2);
    expect(v1.x).toBe(-2);
    expect(v1.y).toBe(-2);
  });

  it("should set angle", function () {
    var v1 = new Vector(1, 0);
    v1.setAngle(Math.PI / 2);

    expect(v1.x).toBeCloseTo(0);
    expect(v1.y).toBeCloseTo(1);
  });

  it("should set length", function () {
    var v1 = new Vector(1, 0);
    v1.setLength(2);

    expect(v1.x).toBe(2);
    expect(v1.y).toBe(0);
  });
  
  it("should multiply", function () {
    var v1 = new Vector(2, 3);
    var result = v1.mult(3);

    expect(result.x).toBe(6);
    expect(result.y).toBe(9);    
  });
  
  it("should divide", function () {
    var v1 = new Vector(6, 9);
    var result = v1.div(3);

    expect(result.x).toBe(2);
    expect(result.y).toBe(3);    
  });

  it("should get length", function () {
    var v1 = new Vector(3, 4);
    var result = v1.getLength();

    expect(result).toBe(5);
  });

  it("should get length squared", function () {
    var v1 = new Vector(3, 4);
    var result = v1.getLengthSq();

    expect(result).toBe(25);
  });
});
