// Problem - 1
// let age = prompt("Enter your age")

// if (age > 10 && age < 20) {
//     console.log("Your age lies between 10 and 20.")
// }

// else {
//     console.log("Your age does not lie between 10 and 20.")
// }

// Problem - 2
// age = Number.parseInt(age)
// console.log(typeof age)
// switch(age){
//     case 11:
//         console.log("Good")
//         break;
//     default:
//         console.log("bad")
//         break;
// }


// Problem - 3
/*
let num = Number.parseInt(prompt("Enter a number"))
if(num%2==0 && num%3==0){
    console.log("The given number is divisible by 2 and 3")
}
else{
    console.log("The given number is not divisible by 2 and 3")
}
*/
// Problem - 4
/*
let num = Number.parseInt(prompt("Enter a number"))
if(num%2==0){
    console.log("The given number is divisible by 2")
}
if(num%3==0){
    console.log("The given number is divisible by 3")
    
}
else if(num%2!=0 && num%3!=0){
    console.log("The given number is divisible by neither 2 nor 3")
}
*/
// Problem - 6
let age = prompt("Enter Your Age")
age = Number.parseInt(age)
let a = age>=18?"You can drive" : "You cannot drive"
console.log(a)