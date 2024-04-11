// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolved');
//     }, 1000);
// });
//=======================================================
// function delay(ms) {
//     //Write your code below
//   const promise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       resolve('Times up!')
//       }, ms);
  
  
//   });
  
//   return promise;
//   }

//=========================================================
const successCallback= (result) => console.log(`Audio file ready at URL: ${result}`);

  
const failureCallback= (error)=>  console.error(`Error generating audio file: ${error}`);
  
// createAudioFileAsync(audioSettings).then(successCallback, failureCallback);  


const timeCounter=(ms)=>setTimeout(()=>console.log('I have been processed!'),ms);
// const promise= new Promise((resolve,reject)=>resolve('Done!'));
// console.log("About to call timeCounter")
// let t= timeCounter(1000);
const getInfo=async url=>{
    const resp=await fetch(url);
    const users=await resp.json();
   return JSON.parse(users);
}
// console.log(promise.then(t))
// timeCounter(6000);
// timeCounter(6000).then(successCallback,failureCallback);

let t= getInfo('https://jsonplaceholder.typicode.com/users').then(successCallback,failureCallback);

// console.log("This is Me: \n", fetch('https://jsonplaceholder.typicode.com/users'));
console.log('Some: ',t[0]);