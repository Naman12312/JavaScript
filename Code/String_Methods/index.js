let name = "Harry"
// console.log(name.length)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2, 4))
// console.log(name.slice(2))
// console.log(name.replace("Har", "Per"))
// let friend = "Naman"
// console.log(name.concat(" is a friend of ", friend, " Ok"))
// let friend2 = "      Meena        "
// console.log(friend2)
// console.log(friend2.trim())
let fr = "Raman" + "Shivika" + "Harry"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4]= "o" // This is not possible 
console.log(fr)


// New Functions
console.log(fr.split())
console.log(fr.startsWith("R"))
let op = "Hello"
console.log(op.substr(0, 3))
console.log(op.substring(0, 5))
// QuickQuiz: Use a for loop to print a string
let str = "GoldarmGang"
let newstr = "";
console.log(newstr)
for (let i = 0; i < str.length; i++) {

    newstr = newstr + `${str[i]}`

}

console.log(newstr)

