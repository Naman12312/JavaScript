const func = ()=>{let navbar = document.getElementsByClassName("headui")[0]

navbar.style.display = "none";

}


const func2 = ()=>{
    let navbar = document.getElementsByClassName("headui")[0]
    navbar.style.display = "block";
    
}




let span1 = document.getElementsByClassName("container1")[0]
let nodes = span1.childNodes
console.log(nodes)
for(let i=0; i<nodes.length; i++){
    if(nodes[i].nodeType==Node.COMMENT_NODE){
        console.log(nodes[i])
    }
}



let element = document.getElementsByClassName("headui")[0] 

console.log(element)


let ul = element.querySelectorAll(".navbarul")[0].outerHTML
console.log(ul)

let ul1 = document.querySelector("#btn").outerHTML
console.log(ul1)


let a = document.getElementById("yu").outerHTML
console.log(a)