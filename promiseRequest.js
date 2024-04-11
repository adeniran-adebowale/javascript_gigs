const repo=require("./repo");
const fn_callback=(resolve, reject)=> typeof x=='number'?resolve(x):reject();
const findUser=async (userId)=>{
    let indx= repo.findIndex(item=>item.id===userId);
    return indx==-1? 'Not Found': repo[indx] ;
};
const notFound=()=>'User Not Found!';
const displayUser=async (obj)=>obj;
const loadUser=(userId)=> new Promise(function(findUser, notFound){
return typeof userId==='number'? findUser(userId):notFound
});


// loadUser(11)
// .then(displayUser)
// .catch(function(error){console.log("Error: ", error)});

// console.log(findUser(7));

const userView=async (userid)=>{
    try {
        let user= await findUser(userid);
        // console.log(user);
        let display= await displayUser(user);
console.log(display);
        
    } catch (error) {
        console.log("Error: ", error);
        
    }
}

userView(11);
// console.log(findUser(10))


