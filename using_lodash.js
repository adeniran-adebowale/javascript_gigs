const _=require("./lodash.js");

let objA={fname:"Astar",sname:"Danti", mname:"Dave"}
let objB= {dob:"2000-05-11",isEmployee:true,gender:"M"}

let objC=_.merge(objA,objB);

console.log("New Object Created: ",objC)

function titleCase(str) {
    //Add your code here
let arr=str.split(" ");
console.log(arr);
let fn=(txt)=>txt[0].toUpperCase()+txt.substring(1);
    
  let newString=arr.map(fn);
   
  
    return newString;
  }

 console.log(  titleCase("Hello everybody where are you"));