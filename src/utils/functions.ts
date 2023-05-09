function roundTo99(num: number) {
  return Math.floor(num - 0.01) + 0.99;
}
function roundToTwoDecimalPlaces(number: number): number {
  return Math.round(number * 100) / 100;
}

export { roundTo99, roundToTwoDecimalPlaces };
