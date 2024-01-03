let id1 = document.getElementById("id1") //getElementById && querySelector give one element whereas getElementsByClassName && querySelectorAll give an HTML Collection.
let sp1 = document.getElementById("sp1")
let ul = document.getElementById("ulid")
let container = document.getElementById("container")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))
let co = document.getElementsByClassName("co")[0]
console.log(container.matches(".con"))
console.log(co.closest(".ui").outerHTML)
let op = document.querySelectorAll("#co")

console.log(container.contains(ul))
