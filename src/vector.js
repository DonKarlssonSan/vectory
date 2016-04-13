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
}

exports.Vector = Vector;
