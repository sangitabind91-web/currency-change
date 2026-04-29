// function greet(){
//     console.log("Hello")
// }
// greet();

// const greet=()=>{
//     console.log("hello")
// }
// greet();

//  function greet(name,callback){
//     console.log("hi"+name)  
//    callback();
// }


// function callme(){
//     console.log("i am callme function")
// } //passing function as an argument
// greet("peter",callme)

// const calculate=(a,b,operation)=>{
//     return operation(a,b)
// }
// const addition=calculate(4,9,function(n1,n2){
// return n1+n2
// })
// console.log(addition)

//promise
// const ticket=new Promise(function(resolve,reject){
//     const isBroarded=false;
//     if(isboarded){
//         resolve("you are in the flight");
//     }else{
//         reject("your flight has been cancled");
//     }
//     })
//     ticket.then((data)=>{
//         console.log("oh no",data);
//     })
//     .finally(()=>{
//         onsole.log("hijack it");
    
//     })

//asynd await

function getData(){
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve("time recieved");
        },200)
    })
}
async function showdata(){
    console.log("start");
    let data=await getData();
    console.log("data");
    console.log("end");
}
showdata()


