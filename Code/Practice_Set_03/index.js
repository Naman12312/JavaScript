let marks = {
    harry: 98,
    rohan: 72,
    shivam: 56
}

// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("The marks of ", Object.keys(marks)[i],  "are", marks[Object.keys(marks)[i]])
// }

// for (let i in marks){
//     console.log(marks[i])
// }

let cornum = 67;
let a;
while(cornum!=a){
    console.log("Try again")
    a = prompt("Enter a number")
    
    
}

let b = 2;
// while(b!=3){    // If the condition becomes false while the loop is running , it doesn't break it as condition is only checked at while(b!=3);
//     b=3
//     console.log("no")
// }

// do{
//      b=3
//  console.log("no") //executes the code once and then the condition is checked, as the condition becomes false because of b=3, it doesn't repeat it.
// }while(b!=3)

// SO IN THIS CASE, DO WHILE AND WHILE GIVE THE SAME RESUlT.
console.log("You have entered the correct number")



const mean = (a,b,c,d,e) =>{
    let m = (a+b+c+d+e)/5
    return m;
}



console.log(mean(1,2,3,4,5))