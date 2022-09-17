import Vector from "../src/vector.js";
import { expect } from "chai";

describe("Vector", function () {
  it("should add", function () {
    var v1 = new Vector(2, 3);
    var v2 = new Vector(4, 5);

    var sum = v1.add(v2);
    expect(sum.x).to.equal(6);
    expect(sum.y).to.equal(8);
  });

  it("should add to", function () {
    var v1 = new Vector(2, 3);
    var v2 = new Vector(4, 5);

    v1.addTo(v2);
    expect(v1.x).to.equal(6);
    expect(v1.y).to.equal(8);
  });

  it("should subtract", function () {
    var v1 = new Vector(2, 3);
    var v2 = new Vector(4, 5);

    var diff = v1.sub(v2);
    expect(diff.x).to.equal(-2);
    expect(diff.y).to.equal(-2);
  });

  it("should subtract from", function () {
    var v1 = new Vector(2, 3);
    var v2 = new Vector(4, 5);

    v1.subFrom(v2);
    expect(v1.x).to.equal(-2);
    expect(v1.y).to.equal(-2);
  });

  it("should set angle", function () {
    var v1 = new Vector(1, 0);
    v1.setAngle(Math.PI / 2);

    expect(v1.x).to.be.closeTo(0, 0.001);
    expect(v1.y).to.be.closeTo(1, 0.001);
  });

  it("should set length", function () {
    var v1 = new Vector(1, 0);
    v1.setLength(2);

    expect(v1.x).to.equal(2);
    expect(v1.y).to.equal(0);
  });
  
  it("should multiply", function () {
    var v1 = new Vector(2, 3);
    var result = v1.mult(3);

    expect(result.x).to.equal(6);
    expect(result.y).to.equal(9);    
  });
  
  it("should divide", function () {
    var v1 = new Vector(6, 9);
    var result = v1.div(3);

    expect(result.x).to.equal(2);
    expect(result.y).to.equal(3);    
  });

  it("should get length", function () {
    var v1 = new Vector(3, 4);
    var result = v1.getLength();

    expect(result).to.equal(5);
  });

  it("should get length squared", function () {
    var v1 = new Vector(3, 4);
    var result = v1.getLengthSq();

    expect(result).to.equal(25);
  });

  it("should return distance 5 between", function () {
    var v1 = new Vector(7, 2);
    var v2 = new Vector(4, 6);
    var result = v1.distanceTo(v2);

    expect(result).to.equal(5);
    expect(v1.x).to.equal(7);
    expect(v1.y).to.equal(2);
    expect(v2.x).to.equal(4);
    expect(v2.y).to.equal(6);
  });

  it("should return squared distance 25", function () {
    var v1 = new Vector(7, 2);
    var v2 = new Vector(4, 6);
    var result = v1.distanceToSq(v2);

    expect(result).to.equal(25);
    expect(v1.x).to.equal(7);
    expect(v1.y).to.equal(2);
    expect(v2.x).to.equal(4);
    expect(v2.y).to.equal(6);
  });

  it("should copy a vector", function () {
    var v1 = new Vector(3, 4);
    var v2 = v1.copy();
    v1.x = 1;
    v1.y = 2;

    expect(v2.x).to.equal(3);
    expect(v2.y).to.equal(4);
  });

  it("should rotate a quarter turn anticlockwise", function () {
    var v1 = new Vector(1, 0);
    var v2 = v1.rotate(Math.PI / 2);

    expect(v2.x).to.be.closeTo(0, 0.01);
    expect(v2.y).to.be.closeTo(1, 0.01);
  });

  it("should rotate a quarter turn anticlockwise around another point", function () {
    var v1 = new Vector(4, 0);
    var v2 = new Vector(2, 0);
    var result = v1.rotateAround(v2, Math.PI / 2);

    expect(result.x).to.be.closeTo(2, 0.001);
    expect(result.y).to.be.closeTo(2, 0.001);
  });

  it("should lerp to half distance", function () {
    let v1 = new Vector(6, 0);
    let v2 = new Vector(0, 0);
    let result = v1.lerp(v2, 0.5);

    expect(result.x).to.be.closeTo(3, 0.001);
    expect(result.y).to.be.closeTo(0, 0.001);
  });

  it("should lerp to half distance", function () {
    let v1 = new Vector(0, 0);
    let v2 = new Vector(0, 6);
    v1.lerpTo(v2, 0.5);

    expect(v1.x).to.be.closeTo(0, 0.001);
    expect(v1.y).to.be.closeTo(3, 0.001);
  });

  it("should move 5 units", function () {
    let v1 = new Vector(0, 0);
    let v2 = new Vector(0, 6);
    let result = v1.moveTowards(v2, 5);

    expect(result.x).to.be.closeTo(0, 0.001);
    expect(result.y).to.be.closeTo(5, 0.001);
  });

  it("should not be equal", function () {
    let v1 = new Vector(0, 0);
    let v2 = new Vector(0, 6);
    let result = v1.equals(v2);

    expect(result).to.be.false;
  });

  it("should be equal", function () {
    let v1 = new Vector(0, 6);
    let v2 = new Vector(0, 6);
    let result = v1.equals(v2);

    expect(result).to.be.true;
  });

  it("should reflect the angle along x-axis", function () {
    let v = new Vector(0, 1);

    v.reflectAlongX();

    expect(v.x).to.be.closeTo(0, 0.001);
    expect(v.y).to.be.closeTo(-1, 0.001);
  });

  it("should reflect the angle along y-axis", function () {
    let v = new Vector(1, 0);

    v.reflectAlongY();

    expect(v.x).to.be.closeTo(-1, 0.001);
    expect(v.y).to.be.closeTo(0, 0.001);
  });
});
