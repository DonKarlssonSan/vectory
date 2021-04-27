"use strict";

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vector(
      this.x + v.x,
      this.y + v.y);
  }

  addTo(v) {
    this.x += v.x;
    this.y += v.y;
  }

  sub(v) {
    return new Vector(
      this.x - v.x,
      this.y - v.y);
  }
  
  subFrom(v) {
    this.x -= v.x;
    this.y -= v.y;
  }
  
  mult(n) {
    return new Vector(this.x * n, this.y * n);
  }
  
  div(n) {
    return new Vector(this.x / n, this.y / n);
  }
  
  setAngle(angle) {
    var length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
    return this;
  }
  
  setLength(length) {
    var angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
    return this;
  }
  
  getAngle() {
    return Math.atan2(this.y, this.x);
  }
  
  getLength() {
    return Math.hypot(this.x, this.y);
  }

  getLengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  distanceTo(v) {
    return this.sub(v).getLength();
  }

  distanceToSq(v) {
    return this.sub(v).getLengthSq();
  }
  
  copy() {
    return new Vector(this.x, this.y);
  }

  rotate(angle) {
    return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
  }

  rotateAround(v, angle) {
    let x = (this.x - v.x) * Math.cos(angle) - (v.y - this.y) * Math.sin(angle) + v.x;
    let y = (v.y - this.y) * Math.cos(angle) + (this.x - v.x) * Math.sin(angle) + v.y;
    return new Vector(x, y);
  }
  
  lerp(v, t) {
    let delta = v.sub(this).mult(t);
    return this.add(delta);
  }

  lerpTo(v, t) {
    let delta = v.sub(this).mult(t);
    this.addTo(delta);
  }

  moveTowards(v, length) {
    let delta = v.sub(this).setLength(length);
    return this.add(delta);
  }
}
module.exports = Vector;
