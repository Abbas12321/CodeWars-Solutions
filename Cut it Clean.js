var cut = function(len, num) {
  let arr = [];
  let temp=0
  for (let i=1;i<=num;i++){
    arr.push(Math.floor(len/num))
    temp+=(len/num)%1
    if (temp>=1){
      temp--
      arr[i-1]++
    }
  }
  if (arr.reduce((a,b)=>a+b,0)!==len) arr[0]++
  return arr;
}
