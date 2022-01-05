const maxSpan = (array) => {
   let arr = [];
   for (let i=0;i<array.length;i++){
      for (let j=i+1;j<array.length;j++){
        if (array[i]===array[j]) arr.push(array.slice(i,j+1))
       }  
     }
     return Math.max(...arr.map(v=>v.length))
}
