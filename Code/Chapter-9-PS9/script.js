// const loadScript = async (src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement("script")
//         script.src = src;
//         document.body.append(script)
//         script.onload=()=>{
//             resolve("Script loaded!")
//         }
//         script.onerror=()=>{
//             reject("Loading script failed!")
//         }

//     })



// }
// // loadScript("https://cdn.tailwindcss.com").then((value)=>{
// //     console.log(value)
// // })




// // async await
// // const a2 = async ()=>{
// //     let a = await loadScript("https://cdn.tailwindcss.com")
// //     console.log(a)
// // }


// // a2()



// function m(){

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{

//                 reject(new Error("This is an error"))

//         }, 3000)
//     })

// }


// const newrunc=async()=>{
//     try{

//         let value = await m()
//         console.log(value)
//     }

//     catch(e){
//         console.log(e)
//     }
// }
// newrunc()


// async function a1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             resolve("Hello1")
//         }, 1000)
//     })

// }

// async function a2(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello2")
//         }, 2000)
//         })
// }

// async function a3(){

//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("Hello3")
//             }, 3000)
//         })
//     }
    
    
    
//     const mainfunc = async () => {
        
//         // let a1 = await Promise.all([p1, p2, p3])
//         // console.log(a1)
//         // 1
        
//         // mainfunc()
        
        
//     console.time("run")
//     let a = await a1()
//     let b = await a2()
//     let c = await a3()
//     console.log([a, b,c ])
//     console.timeEnd("run")
// }
// mainfunc()



const mainfunc = async ()=>{
    
    console.time("run")
    //time counting starts now
    let p1 = new Promise((resolve, reject) => {
     setTimeout(() => {
     // console.log("H")
     resolve("Hello1")
     }, 3000)
    })
    let p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
     resolve("Hello2")
     }, 3000)
    })
    let p3 = new Promise((resolve, reject) => {
     setTimeout(() => {
     resolve("Hello3")
     }, 3000)
    })
    
    
    // all promises start asynchronously


    
     // let a1 = await Promise.all([p1, p2, p3])
     // console.log(a1)
    // 1
    
    // mainfunc()
    
    
    
     let a = await p1 // waits 3 sec for p1 to resolve but all get resolved as they were running asynchronously, after 3 sec, moves on...
     let b = await p2 // all of them got resolved together so this takes almost no time as it just stores the resolved value.
     let c = await p3 // same for this
     console.log(a,b,c) // prints the output
     console.timeEnd("run") // in total takes 3 sec as they ran together.
    }
    mainfunc()