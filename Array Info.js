function arrayInfo(arr){
  if (!arr.length) return 'Nothing in the array!'
  const l =[arr.length]||null
  const int =[arr.filter(v=>v===parseInt(v)).length]||null
  const float = ([arr.filter(v=>v===parseFloat(v)).length-arr.filter(v=>v===parseInt(v)).length])||null
  const string = [arr.filter(v=>typeof v ==='string'&&v!==' ').length]||null
  const whitespace = [arr.filter(v=>v===' ').length]
  return [l,int,float,string,whitespace].map(v=>v[0]===0?[null]:[v[0]])
}
