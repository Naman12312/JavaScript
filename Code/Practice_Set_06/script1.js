
// const redirect = (n)=>{
//     return n>4?true:false;
// }
// while(true){
//     let num = Number.parseInt(prompt("Enter Your Number"))
//     if(redirect(num)){
//         location.href = "https://google.com"
//         break;
//     }
//     else{
//         alert("The number is not greater than 4.")
//     }
// }
let color = prompt("Enter Your color:")
document.body.style.background = color;

const func = (a,b)=>{
    return a+b;
}
let sum = func(1,1);

console.log(sum)