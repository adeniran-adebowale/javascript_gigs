function allArrayMethods(arr,el){
    let internalArr=[100,345];
   let  fn=(a) => a+a;
console.log("Add-to-the-end Method: ",arr.push(el));
console.log("Remove-the-last-element Method: ",arr.pop());
console.log("Remove-the-first-element Method: ",arr.shift());
console.log("Put-element-at-the-beginning-of-the-array Method: ",arr.unshift(el));
console.log("Splice-the-Array Method: ",arr.splice(2));
console.log("Get-some-Part_of_array Method: ",arr.slice(1,3));
console.log("Join-two-or-More-Arrays Method: ",arr.concat(arr,internalArr));
console.log("Join-the-array-element Method: ",arr.join(","));
console.log("Return-the-index Method: ",arr.indexOf(1));
console.log("Last_Index  Method: ",arr.lastIndexOf(3));
console.log("Sort Method: ",arr.sort());
console.log("Reverse Method: ",arr.reverse());
console.log("Filter Method: ",arr.filter(fn));
console.log("Map Method: ",arr.map(fn));
console.log("Reduce Method: ",arr.reduce(fn));

 



}

let arrOfNumbers=[1,2,3,4,5,6,7,8,9];
let arrOfStrings=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];

allArrayMethods(arrOfNumbers,256);
allArrayMethods(arrOfStrings,"256");