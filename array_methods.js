function allArrayMethods(arr,el){
    let internalArr=[100,345];
   let  fn=(a) => a+a;
console.log(arr.push(el));
console.log(arr.pop());
console.log(arr.shift());
console.log(arr.unshift(el));
console.log(arr.splice(2));
console.log(arr.slice(1,3));
console.log(arr.concat(arr,internalArr));
console.log(arr.join(","));
console.log(arr.indexOf(1));
console.log(arr.lastIndexOf(3));
console.log(arr.sort());
console.log(arr.reverse());
console.log(arr.filter(fn));
console.log(arr.map(fn));
console.log(arr.reduce(fn));

 



}

let arrOfNumbers=[1,2,3,4,5,6,7,8,9];
let arrOfStrings=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];

allArrayMethods(arrOfNumbers,256);
allArrayMethods(arrOfStrings,"256");