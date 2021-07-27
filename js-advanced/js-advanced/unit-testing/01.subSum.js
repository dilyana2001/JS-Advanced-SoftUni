// not for judge!!!
function sum(input, start, end) {
    let sum = 0;
    start = Math.max(start, 0)
    end = Math.min(end, input.length - 1)
    for (let i = start; i <= end; i++) sum += Number(input[i]);
    return sum.toFixed(2);
}
module.exports = sum;

//  with handle error 100/100 in judge!!!
//  function sum2(input, start, end) {
//      start = Math.max(start, 0)
//      end = Math.min(end + 1, input.length - 1)
//      try {
//          return (input.slice(start, end)
//              .reduce((a, x) => a + x, 0) * 10) / 10
//      } catch (e) {
//          return NaN;
//      }
//  }