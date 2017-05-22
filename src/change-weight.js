export default function changeWeight(weight, unit = {}) {
  if (unit.lb == true) return Number((weight * 2.20462).toFixed(2))
  if (unit.kg == true) return Number((weight * 0.45359).toFixed(2))
}
