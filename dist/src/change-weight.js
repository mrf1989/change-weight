"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeWeight;
function changeWeight(weight) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (unit.lb == true) return Number((weight * 2.20462).toFixed(2));
  if (unit.kg == true) return Number((weight * 0.45359).toFixed(2));
}