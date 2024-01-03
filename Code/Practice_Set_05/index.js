
// let arr1 = [1,2,4,55,4,5,6]
// let a = prompt("Enter a Number")
// a = Number.parseInt(a)
// arr1.push(a)
// console.log(arr1)
// let a;
// let arr1 = [1,2,4,55,4,5,6]
// while(a!=0){
//     a = Number.parseInt(prompt("Enter a Number"))
//     arr1.push(a)

// }
// console.log(arr1)

// let arr2 = [1,20,4,50,40,5,6]
// const diviby10 = (value) =>{
//     return value%10==0
// }
// let newArr1 = arr2.filter(diviby10)
// console.log(newArr1)

// let arr2 = [1,20,4,50,40,5,6]

// let newArr2 = arr2.map((value)=>{
//     return value**2
// })

// console.log(newArr2)

let arr3 = []
let a = prompt("Enter a Number")
for(let i=1; i<=a; i++){
    arr3.push(i)
}
console.log(arr3)
const factorial = (value1, value2) =>{
    return value1 * value2
}

let newArr3 = arr3.reduce(factorial)
console.log(newArr3)
// 