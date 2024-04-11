const repo=require('./repo.js');

let {name, email, address}=repo[0];

console.log("Name: ",name,"Email: ", email);

console.log("Address: ",address);