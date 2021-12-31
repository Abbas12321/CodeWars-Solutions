function avgArray(arr) {
  let arr1=[];
  let tempArr=[];
  for (let i=0;i<arr[0].length;i++){
      for (let j=0;j<arr.length;j++){
        tempArr.push(arr[j][i])    
    }
        arr1.push(tempArr)
        tempArr=[]
    }
  return arr1.map(v=>v.reduce((a,b)=>a+b,0)/arr.length)
}
