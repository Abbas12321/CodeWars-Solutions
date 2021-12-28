function timeConvert(num) { 
  if (num<0) return '00:00'
  let h=Math.floor(num/60);
  let m=num%60
  return (h.toString().length<2?'0'+h:''+h)+':'+('00'+m).slice(-2)
}
