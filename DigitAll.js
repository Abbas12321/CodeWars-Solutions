function digitAll(x){
   if (typeof x !=='string') return 'Invalid input !';
   let str=''
   x.split('').map(v=>/[0-9]/.test(v)?str+=v:v)
   return str
}
