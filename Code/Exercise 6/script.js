let x = 0;

let delbtns = document.getElementsByClassName("delbtns")[0]

const items = {
    ...localStorage
}
    

for (let i in items) {
    let maindiv = document.createElement("div")
    maindiv.classList.add("card")
    maindiv.id = "card"+(i.replace("todo", ""))
    maindiv.innerHTML = maindiv.innerHTML + `

<img src="main.png" alt="">
<h3>
${JSON.parse(localStorage.getItem(i))[0]}
</h3>
<p>
${JSON.parse(localStorage.getItem(i))[1]}
</p>
`
delbtns.innerHTML = delbtns.innerHTML+`
<button id="deletetodo${x+1}" class="btn btn-primary">
Delete TODO
</button>

`
let divcon = document.getElementById('con')

 


    
    let specideltodo = document.getElementById("deletetodo"+`${x+1}`)
    divcon.appendChild(maindiv)
    maindiv.appendChild(specideltodo)


}







try{
    let deltodo = document.getElementById("deletetodo")
}
catch{
    ;
}

let submit = document .getElementsByClassName("create")[0]
const createTODO = ()=>{
    
    let delbtns = document.getElementsByClassName("delbtns")[0]
    let title = document.getElementById("TODO_Title").value
    let desc = document.getElementById("TODO_desc").value
    let maindiv = document.createElement("div")
    maindiv.classList.add("card")
    maindiv.id = "card" + (x+1)
    maindiv.innerHTML = maindiv.innerHTML+`
    
    <img src="main.png" alt="">
    <h3>
    ${title}
    </h3>
    <p>
    ${desc}
    </p>
    
    
    
    `
    delbtns.innerHTML = delbtns.innerHTML+`
    <button id="deletetodo${x+1}" class="btn btn-primary">
    Delete TODO
    </button>
    
    `
    let divcon = document.getElementById('con')
    // divcon.innerHTML = ""
    let specideltodo = document.getElementById("deletetodo"+`${x+1}`)
    divcon.appendChild(maindiv)
    maindiv.appendChild(specideltodo)
    
    // maindiv.appendChild()
    localStorage.setItem("todo"+ ++x, JSON.stringify([title, desc]))
}

submit.addEventListener("click", createTODO)
delbtns = document.getElementById("con")

delbtns.addEventListener("click", (e)=>{
    let idu = e.target.id
    if(idu.indexOf("deletetodo")!==-1){
    deleteTodo(idu)
    }
}, false)
const deleteTodo = (idu)=>{
    
    localStorage.removeItem("todo"+ (idu.replace("deletetodo", "")))
    let divcon = document.getElementById("con")
    let container = document.getElementById("card" + (idu.replace("deletetodo", "")))
    divcon.removeChild(container)
}
