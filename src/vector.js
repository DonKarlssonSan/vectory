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
  }
  
  setLength(length) {
    var angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }
  
  getAngle() {
    return Math.atan2(this.y, this.x);
  }
  
  getLength(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

module.exports = Vector;
