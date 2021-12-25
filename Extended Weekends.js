const EXTENDED_MONTHS = [0, 2, 4, 6, 7, 9, 11];

function solve(a, b) {
  let range = [];
  for (; a <= b; a++) {
    range = range.concat(EXTENDED_MONTHS.map(m => new Date(a, m, 1)).filter(d => d.getDay() === 5));
  }

  return [
    range[0].toLocaleString('en-us', { month: 'short' }), 
    range[range.length - 1].toLocaleString('en-us', { month: 'short' }),
    range.length
  ];
}
