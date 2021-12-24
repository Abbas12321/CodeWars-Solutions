function sumCubes(n){
   return Array.from({length:n},(_,i)=>(i+1)*(i+1)*(i+1)).reduce((a,b)=>a+b,0)
}
