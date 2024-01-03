let element = document.getElementsByTagName("nav")[0]
let mainul = element.firstElementChild
let otherul = mainul.nextElementSibling

let firstli = otherul.firstElementChild
let firstlia = firstli.firstElementChild
// console.log(ul)
console.log(otherul)
console.log(firstlia)
firstlia.style.color = "red"
// otherul.style.backgroundColor = "red"


let container = document.querySelectorAll(".container")[0]

let firsth1 = container.firstElementChild
let lasth1 = container.lastElementChild


firsth1.style.color = "green"
lasth1.style.color = "green"

let li = document.querySelectorAll("li")
Array.from(li)
li.forEach((element)=>{
    element.style.backgroundColor = "cyan"
})