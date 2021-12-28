function evenLast(numbers) {
  let d =numbers.slice(-1)
  return numbers.reduce((a,b,i)=>i%2===0?a+b*d:a,0)
}
