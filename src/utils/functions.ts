function roundTo99(num: number) {
  return Math.floor(num - 0.01) + 0.99;
}
function roundToTwoDecimalPlaces(number: number): number {
  return Math.round(number * 100) / 100;
}

function generateFormattedDates() {
  const options = { month: "short", day: "2-digit" };
  const dates = [];

  for (let i = 0; i <= 6; i += 2) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date.toLocaleString("en-US", options));
  }

  return [dates[0], dates[1], dates[2], dates[3]];
}

export { roundTo99, roundToTwoDecimalPlaces, generateFormattedDates };
