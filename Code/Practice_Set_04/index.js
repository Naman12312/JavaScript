console.log("Har\"".length)


let str = "dog. The quick brown fox jumps over the lazy dog."
let searchstr = "dog."
console.log(`This string ${str.includes(searchstr)? `includes ${searchstr}` : `does not include ${searchstr}`}`)


console.log(`this string ${str.startsWith(searchstr)?"starts with" : "doesn't start with"} \"${searchstr}\"`)
console.log(`this string ${str.endsWith(searchstr)?"ends with" : "doesn't end with"} \"${searchstr}\"`)



let str2 = "Please Give RS 1000"
str2 = str2.toLowerCase()
console.log(str2)
console.log("Please Give RS ".length)
let amount = Number.parseInt(str2.slice(15)) // prints 1000 as the first character is included.
console.log(amount)
console.log(str2[15])


str2[3] = "h"

console.log(str2.slice(3,15)+"|") // IMPORTANT: The first character is included in slice function but the last character is excluded.